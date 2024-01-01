import { createContext } from "react";

const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todoMsg: "Learn DSA",
            isCompleted:false,
        }
    ],
    addToDo: (todo) => {},
    updateToDo: (id, todo) => {},
    deleteToDo: (id) => {},
    toggleCompleted: (id) => {},
});

const ToDoContextProvider = ToDoContext.Provider;

const git_testing = "bas git kaam kar rha hai ki nhi whi check kar rhe h ";

export { ToDoContext, ToDoContextProvider};

//pichla contextAPI revise kro aur isme aur uss tarike me antar dekh ke dono me comfortable ho jaao

//sara functionality revise kro

//jaha tak bataye hai wha tak khud project create kr ke complete kro aur github pe push kr do


