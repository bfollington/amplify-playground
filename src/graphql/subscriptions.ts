// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateProject = `subscription OnCreateProject {
  onCreateProject {
    id
    name
    posts {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const onUpdateProject = `subscription OnUpdateProject {
  onUpdateProject {
    id
    name
    posts {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const onDeleteProject = `subscription OnDeleteProject {
  onDeleteProject {
    id
    name
    posts {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
    id
    title
    project {
      id
      name
      posts {
        nextToken
      }
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
    id
    title
    project {
      id
      name
      posts {
        nextToken
      }
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
    id
    title
    project {
      id
      name
      posts {
        nextToken
      }
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
    id
    content
    post {
      id
      title
      project {
        id
        name
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
    id
    content
    post {
      id
      title
      project {
        id
        name
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
    id
    content
    post {
      id
      title
      project {
        id
        name
      }
      comments {
        nextToken
      }
    }
  }
}
`;
