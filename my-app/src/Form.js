import React, { useState } from "react";

function Form() {
    let [formData, setFormData] = useState({
        name: "",
        EmailAddress: "",
        mobileNumber: "",
        ConsentToTrack:"Yes"
    });

    let handleChange = event => {
        setFormData({...formData, [event.target.name]: event.target.value})
    } 

    let fetchUrl = "";
    let listid = "01b878301bcb335ed0a793acecbefc8c";
    // let json = "formData";


    let handleSubmit = async event => {
        event.preventDefault();
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.createsend.com/api/v3.3/subscribers/01b878301bcb335ed0a793acecbefc8c.json?pretty=true`, {
            method: "POST",
            headers: {"content-type":"application/json", 'Authorization': 'Basic ' + btoa('taH4GgL4dU3euCrrqELgetnfouX4umiH2f/yrGkmyj09WC+cVKaMqm1URYxdlT+ogcdtzj+tuG981L5DXA/TVrbzLm88aaNgplrpLesqARtnyV3t20USCabzWQIaPCoy/rUrBdID8lsr542/EhOChw==:x')},
            body: JSON.stringify(formData), 
        })
        .then(res => res.json())
        .then(res => console.log(res))
        
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
                    EmailAddress:
                        <input name="EmailAddress" onChange={handleChange}/>
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