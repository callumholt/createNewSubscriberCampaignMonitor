import React, { useState } from "react";

function RequestClientId() {
    // let [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     mobileNumber: ""
    // });

    // let handleChange = event => {
    //     setFormData({...formData, [event.target.name]: event.target.value})
    // } 

    let fetchUrl = "";
    let listid = "01b878301bcb335ed0a793acecbefc8c";
    // let json = "formData";


    let handleSubmit2 = async event => {
        event.preventDefault();
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.createsend.com/api/v3.3/clients.json?pretty=true', {
            headers: {
              'Authorization': 'Basic ' + btoa('taH4GgL4dU3euCrrqELgetnfouX4umiH2f/yrGkmyj09WC+cVKaMqm1URYxdlT+ogcdtzj+tuG981L5DXA/TVrbzLm88aaNgplrpLesqARtnyV3t20USCabzWQIaPCoy/rUrBdID8lsr542/EhOChw==:x')
            }})
          .then((res) => res.json())
          .then((res) => console.log(res))
        
          
        
        if(!response.ok) {
            console.error("an error occured");
        }
    };

    return (
        <div id="form2">
            <form onSubmit={handleSubmit2}>
                <div className="formGroup">
                    <label id="submitButton">
                        <button type="submit" >submit2</button>
                    </label>
                </div>         
            </form>
        </div>
    )
}

export default RequestClientId;