import axios from "axios";
import {
  //Todo
  todos_request,
  todos_success,
  todos_fail,
  //Login
  user_login_request,
  user_login_success,
  user_login_fail,
  //Register
  user_register_request,
  user_register_success,
  user_register_fail,
} from "./constant/constant";

export const doRegister = (registerData) => async (dispatch) => {
  dispatch({
    type: user_register_request,
  });
  await axios
    .post(
      "https://realapi.groupfund.me/api/v1.1/users/signup?lng=en",
      registerData
    )
    .then((response) => {
      dispatch({
        type: user_register_success,
        payload: response?.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: user_register_fail,
        payload: error.response.data.errors[0].msg,
      });
    });
};

export const doLogin = (loginData) => async (dispatch) => {
  dispatch({
    type: user_login_request,
  });
  await axios
    .post("https://realapi.groupfund.me/api/v1.1/users/login?lng=en", loginData)
    .then((response) => {
      dispatch({
        type: user_login_success,
        payload: response?.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: user_login_fail,
        payload: error.response.data?.message?.message,
      });
    });
};

export const getTodos = () => async (dispatch) => {
  dispatch({
    type: todos_request,
  });
  await axios
    .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then((response) => {
      dispatch({
        type: todos_success,
        payload: response.data,
      });
    })
    .catch((error) => {
      const errorMessage = error.response
        ? error.response.data
        : "Network Error";
      dispatch({
        type: todos_fail,
        payload: errorMessage,
      });
    });
};
