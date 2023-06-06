import './style.scss';
import Card from './Card';

const List = ({ currentList }) => {
  return (
    <div className="list-container">
      <div className="list-title">{currentList.title}</div>
      <div className="list-items">
        {currentList.tasks.map((task, index) => (
          <Card taskName={task.title} key={index}></Card>
        ))}
      </div>
      <div className="add-card">Add a card...</div>
    </div>
  );
};

export default List;
