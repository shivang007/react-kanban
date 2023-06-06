import './Card.scss';

const Card = ({ taskName }) => {
  return <div className="task-card">{taskName}</div>;
};

export default Card;
