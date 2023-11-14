import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
          <Link to="/">Home</Link>
          <Link to="/aboutstate">About</Link>
          <Link to="/increment">Increment Option</Link>
          <Link to="/oposite">Oposite Button</Link>
          <Link to="/newhome">New Home</Link>
          <Link to="/monkeys">Monkeys</Link>
          <Link to="/console">Console</Link>
       
        </div>
    )
}

