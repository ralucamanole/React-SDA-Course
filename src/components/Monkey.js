import { useNavigate, useParams } from "react-router-dom";

export const Monkey = () => {
  const param = useParams();
  const navigate = useNavigate();
  console.log(param);
  return (
    <>
      <p>Monkey {param.id}</p>
      <button onClick={()=>navigate("/monkeys")}>Go back</button>
    </>
  );
};
