import React, { useEffect } from "react";
import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux/actions";

const TodoList = () => {
  const dispatch = useDispatch();
  const { loading, todos } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div>
      <Home />
      <h2 className="text-center mt-4 bg-secondary text-white p-2">Todos</h2>
      {loading ? (
        <div className="text-center">...Loading</div>
      ) : (
        <div className="container mt-4">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">User ID</th>
                <th scope="col">Title</th>
                <th scope="col">Completed</th>
              </tr>
            </thead>
            <tbody>
              {todos?.map((todo) => (
                <tr>
                  <th scope="row">{todo.id}</th>
                  <td>{todo.userId}</td>
                  <td>{todo.title}</td>
                  <td>{todo.completed ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TodoList;
