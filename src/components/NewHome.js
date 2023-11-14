import { useEffect } from "react";
import { useState } from "react"

export const NewHome = () => {
    const[resorceType, setResorceType] = useState("butonel1");
    console.log("No resorce ------")
    const [show, setShow] = useState(true);

useEffect(()=>{
    console.log(resorceType);
}, [resorceType]);

return (
    <>
    <div>
    <button onClick={() => setResorceType("butonel1")}>Butonel1</button>
    <button onClick={() => setResorceType("butonel2")}>Butonel2</button>
    <button onClick={() => setResorceType("butonel3")}>Butonel3</button>
    </div>
    <h1>{resorceType}</h1>
    <button onClick={() => setShow((prev) => !prev)}>change</button>
    {show ? <h1>Exist</h1> : <h1>Does not exist</h1>}
    {show && <h1>Exist</h1>}
    </>
);

}