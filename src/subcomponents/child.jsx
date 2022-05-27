import { useContext } from "react";
import { TestContext } from "../App";

const Child = () => {
    const {toggle, setToggle} = useContext(TestContext)
    return (
        <div style={{border: '2px solid blue'}}>
            <h1>Child Element</h1>
            <p>Toggle: {toggle.toString()}</p>
            <button onClick={()=>setToggle(!toggle)}>Toggz</button>
        </div>
    )
}

export default Child;