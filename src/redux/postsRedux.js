import shortid from "shortid";

//selectors
export const getAllPost = ({posts}) => posts;
export const selectPostById = ({posts}, postId) => posts.find(post => post.id === postId);

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const DELETE_POST = createActionName('DELETE_POST');
const EDIT_POST = createActionName("EDIT_POST");
const ADD_POST = createActionName("ADD_POST")

// action creators
export const deletePost = payload => ({ type: DELETE_POST, payload });
export const editPost = (updatedPost) => ({ type: EDIT_POST, payload: updatedPost });
export const addPost = (post) => ({ type: ADD_POST, payload: { ...post, content: post.content }});

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case DELETE_POST:
      return statePart.filter(post => post.id !== action.payload);
    case EDIT_POST:
      return statePart.map((post) =>
        post.id === action.payload.id ? { ...post, ...action.payload } : post);
    case ADD_POST:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  };
};

export default postsReducer;