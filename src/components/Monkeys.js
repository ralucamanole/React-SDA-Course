import { Link } from "react-router-dom";

export const Monkeys = () => {
    const ids = [1, 2, 3]
  return (
    <div>
      <p>Monkeys</p>
      {ids.map((id) => {
        return <Link to={`/monkeys/${id}`}>Monkey {id}</Link>
    }
    )}
      
    </div>
  );
};
