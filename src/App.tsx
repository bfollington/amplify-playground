import React, { useState, useEffect } from "react";

import API, { graphqlOperation } from "@aws-amplify/api";
import PubSub from "@aws-amplify/pubsub";

import { createProject } from "./graphql/mutations";
import { listProjects } from "./graphql/queries";

import awsconfig from "./aws-exports";
import "./App.css";
import { onCreateProject } from "./graphql/subscriptions";

type Project = {
  id?: string;
  name: string;
};

// Configure Amplify
API.configure(awsconfig);
PubSub.configure(awsconfig);

async function createNewProject(name: string) {
  const project: Project = { name };
  await API.graphql(graphqlOperation(createProject, { input: project }));
}

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProjectName, setNewProjectName] = useState("My Project");

  useEffect(() => {
    API.graphql(graphqlOperation(listProjects)).then((res: any) => {
      console.log(res);
      setProjects(res.data.listProjects.items);
    });
  }, []);

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateProject)
    ).subscribe({
      next: (eventData: any) => {
        const project = eventData.value.data.onCreateProject;
        setProjects([...projects, project]);
      }
    });

    return () => subscription.unsubscribe();
  }, [projects]);

  return (
    <div className="App">
      <input
        type="text"
        value={newProjectName}
        onChange={e => setNewProjectName(e.target.value)}
      />
      <button onClick={() => createNewProject(newProjectName)}>
        Add Project
      </button>
      <ul>
        {projects.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
