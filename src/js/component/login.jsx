import React, { useState } from "react";


const Login = () => {

    const [foo, setFoo] = useState("")
    const [password, setPassword] = useState("")

    const validateInput = (e) => {
        e.preventDefault()
        if (foo === "") alert("The input cannot be empty");
        else alert("All perfect!");
    };

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={foo} onChange={(e) => {
                    console.log(e)
                    console.log(e.target)
                    console.log(e.target.value)
                    return setFoo(e.target.value)
                }} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div>
                Los valores a enviar son:
                <ul><li>{foo}</li></ul>
            </div>
            <button type="submit" className="btn btn-primary" onClick={validateInput}>Submit</button>
        </form>)
}

export default Login;