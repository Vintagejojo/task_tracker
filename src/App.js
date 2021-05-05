import Header from './components/Header';
import Tasks from './components/Tasks';
import  { useState } from 'react'



const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Look this is going to be super lame',
        day: 'April 22nd at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Look this is going to be super lame plus 2',
        day: 'April 23nd at 2:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Look this is going to be super lame plus 3',
        day: 'April 24nd at 2:45pm',
        reminder: false,
    },
])
  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}


export default App;

//Howdy partners my name is jo