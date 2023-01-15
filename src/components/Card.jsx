import { Link } from "react-router-dom";

const Card = ({ id, title, author, category }) => {
  return (
    <div className="card">
      <Link to={`/${id}`}>
        <h2>{title}</h2>
      </Link>
      <h3>{author}</h3>
      <h3>{category}</h3>
    </div>
  );
};

export default Card;
