const tasks = [
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
    }
]
const Tasks = () => {
    return (
        <>
        {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
        ))}
        </>
    )
}

export default Tasks
