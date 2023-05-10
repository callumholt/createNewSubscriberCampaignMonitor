import React, { useState } from "react";

function Form() {
    let [formData, setFormData] = useState({
        name: "",
        email: "",
        mobileNumber: ""
    });

    let handleChange = event => {
        setFormData({...formData, [event.target.name]: event.target.value})
    } 

    let fetchUrl = "https://api.createsend.com/api/v3.3/subscribers/{listid}.{json}";
    let listid = "01b878301bcb335ed0a793acecbefc8c";
    // let json = "formData";


    let handleSubmit = async event => {
        event.preventDefault();
        const response = await fetch(fetchUrl, {
            method: "POST",
            headers: {"content-type":"application/json"},
            body: JSON.stringify(formData)
        });
        alert("thanks for the submission");
        
        if(!response.ok) {
            console.error("an error occured");
        }
    };



    return (
        <div id="form">
            <form onSubmit={handleSubmit}>
                <div className="formGroup">
                <label>
                        Name: 
                        <input name="name" onChange={handleChange}/>
                    </label>

                </div>
                <div className="formGroup">
                <label>
                        Email:
                        <input name="email" onChange={handleChange}/>
                    </label>

                </div>
                <div className="formGroup">
                <label>
                        MobileNumber:
                        <input name="mobileNumber" onChange={handleChange}/>
                    </label>

                </div>
                <div className="formGroup">
                    <label id="submitButton">
                        <button type="submit" >submit</button>
                    </label>
                </div>         
            </form>
        </div>
    )
}

export default Form;