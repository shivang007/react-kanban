import './app.scss';
import List from './list';
import TasksList from './list/TasksList';

function App() {
  return (
    <div className="app">
      <div className="app-title">Add your tasks</div>

      <div className="all-lists-holder">
        {TasksList.map((task, index) => (
          <List currentList={task} key={index}></List>
        ))}
      </div>
    </div>
  );
}

export default App;
