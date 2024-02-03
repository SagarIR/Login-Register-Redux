import { combineReducers } from "redux";

export const registerReducer = (state = [], action) => {
  switch (action.type) {
    case "user_register_request":
      return {
        loading: true,
        error: null,
      };
    case "user_register_success":
      return {
        loading: false,
        registerInfo: action.payload,
        error: null,
      };
    case "user_register_fail":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const loginReducer = (state = [], action) => {
  switch (action.type) {
    case "user_login_request":
      return {
        loading: true,
        error: null,
      };
    case "user_login_success":
      return {
        loading: false,
        loginInfo: action.payload,
        error: null,
      };
    case "user_login_fail":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "todos_request":
      return { loading: true };
    case "todos_success":
      return {
        loading: false,
        todos: action.payload,
      };
    case "todos_fail":
      return {
        loading: false,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  registerInfo: registerReducer,
  loginInfo: loginReducer,
  todos: todosReducer,
});
