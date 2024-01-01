import "./App.css";
import ToDoForm from "./components/ToDoForm";
import { ToDoContextProvider } from "./contexts/ToDoContext";

function App() {
  
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    setTodos((prev) => (
      [{id:Date.now,...todo},...prev]
    ))
  };

  const git_testing = "bas git kaam kar rha hai ki nhi whi check kar rhe h ";


  const updateToDo = (id, todo) => {
    setTodos((prev) => (
      prev.map((currTodo) => (currTodo.id === id ? todo : currTodo))
    ))
  };

  const deleteToDo = (id) => {
    setTodos((prev) => (
      prev.filter((currTodo) => (currTodo.id !== id))
    ))
  };

  const toggleCompleted = () => {
    setTodos((prev) => (
      prev.map((currTodo) => (currTodo.id === id ? {...currTodo, completed: !currTodo.completed} : currTodo))
    ))
  } 

//TOGGLE 
  //false => true
  //true => false

//VERY IMPORTANT
  //currTodo = {id:2, todoMsg:"Hello World", completed:false}
  //...currTodo = id:2, todoMsg:"Hello World", completed:false
  //{...currTodo} = {id:2, todoMsg:"Hello World", completed:false}
  //{...currTodo, completed: true} => override => {id:2, todoMsg:"Hello World", completed:true}

//TOGGLE COMPLETED FUNCTIONALITY
  //todos = [{},{id:2, todoMsg: "Hello World", completed: false},{}]
  //ab hum id:2 waale todo ka completed ko toggle krwayenge i.e completed: true 
  //desired output: [{},{id:2, todoMsg: "Hello World", completed: true},{}]

//UPDATE FUNCTIONALITY
  //prev = [{},{id:2, todoMsg: "Hello World",completed: false},{}]
  // desired output = [{},{id:2, todoMsg: "Hello Manikant",completed: false},{}]
  // todo = {id:2, todoMsg: "Hello Manikant",completed: false}
  //desired Output = [{},todo,{}]


// ADD FUNCTIONALITY
  // todo = {todoMsg:"Hello", completed: false}
  //{id.Date.now(), ...todo}
  // todos = [{},{},{},todo]
  // prev = [{},{},{}]
  // ...prev = {},{},{}
  //desired output = [...prev,{id: Date.now(),...todo }]


  return (
    <ToDoContextProvider value={{todos, addToDo, updateToDo, deleteToDo, toggleCompleted}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4"><ToDoForm /></div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </ToDoContextProvider>
  );
}

export default App;
