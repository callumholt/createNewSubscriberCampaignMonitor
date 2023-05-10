import React, { useState } from "react";

function SubmissionTextArea({ updateName }) {

    let [textArea, setTextArea] = useState({
        textAreaContent: "",

    });

    let [resultData, setResultData] = useState("")

    let updateResultData = (value) => {
        setResultData(value)
    }

    let formSubmission;

    let handleChangeTextArea = (event) => {
        setTextArea({ ...textArea, [event.target.name]: event.target.value });
    }
    
    let handleSubmitTextArea = async(e) => {
        e.preventDefault();
        let data = textArea.textAreaContent

       //name of human
       const nameMatch = data.match(/Executing Human (\w+)/);
       const contactName = nameMatch ? nameMatch[1] : null;

       if (contactName) {
        updateName(contactName)
       }
        

        //email
        const contactEmailMatch = data.match(/Contact Email\s+([\w\.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/);
        const contactEmail = contactEmailMatch ? contactEmailMatch[1] : null;

        //phone
        const contactPhoneMatch = data.match(/Contact Phone\s+([\d\+\-\(\)\s]+)/);
        const contactPhone = contactPhoneMatch ? contactPhoneMatch[1] : null;

        //name of commiting business
        const nameOfBizMatch = data.match(/(?<=Committing Business\s)(.*)(?=\sSupplier)/);
        const nameOfBiz = nameOfBizMatch ? nameOfBizMatch[1] : null;

        //name of supplier
        const supplierMatch = data.match(/(?<=Supplier\s)(.*)(?=\sPrincipal)/);
        const supplierName = supplierMatch ? supplierMatch[1] : null;

        //principle
        const principalMatch = data.match(/(?<=Principal AUD\s)(\S+)(?=\sRecurring Payment)/);
        const principal = principalMatch ? principalMatch[0] : null;

        //term
        const termMatch = data.match(/Term \(months\)\s(\S+)\sInvoice/);
        const term = termMatch ? termMatch[1] : null;

        //reoccuring payment
        const recurringPaymentMatch = data.match(/Recurring Payment\s+([\d\.]+)/);
        const recurringPayment = recurringPaymentMatch ? recurringPaymentMatch[1] : null;

        //invoice ID
        const invoiceIdMatch = data.match(/Invoice ID\s+(\S+)/);
        const invoiceID = invoiceIdMatch ? invoiceIdMatch[1] : null;


        console.log(contactName)
        console.log(contactEmail)
        console.log(contactPhone)
        console.log(nameOfBiz)
        console.log(supplierName)
        console.log(principal)
        console.log(term)
        console.log(recurringPayment)
        console.log(invoiceID)

        let formSubmission = {contactName,contactEmail,contactPhone,nameOfBiz,supplierName,principal,recurringPayment,invoiceID}
        
        let outputString = `${contactName} ${contactEmail}\n ${contactPhone}\n ${nameOfBiz}\n ${supplierName}\n ${principal}\n ${recurringPayment}\n ${term}\n ${invoiceID}`;

        updateResultData(outputString);


    }
    
/*
let formSubmission = {
        
        contactName:contactName,
        contactEmail:contactEmail,
        contactPhone:contactPhone,
        nameOfBiz:nameOfBiz,
        supplierName:supplierName,
        principal:principal,
        term:term,
        recurringPayment:recurringPayment,
        invoiceID:invoiceID
    }        
*/




    return (
    <div id="textAreaForm">
        <form onSubmit={handleSubmitTextArea}>
            <div className="textArea">
            
                <label>
                    Please copy and paste text below:
                    <input id="texAreaID" name="textAreaContent" onChange={handleChangeTextArea}/>
                </label>

            </div>

            <div className="submitTextAreaSubmit">

                <label id="submitButtonTextArea">
                    <button type="submit">submit</button>
                </label>
                <p>

                </p>

            </div>
            <div>
                <label>
                    Result:
                    <input id="textAreaResultID" name="textAreaResultContent" />
                    {/* value= {resultData} */}
                </label>
            </div>

            <div>
                <p></p>
            </div>

        </form>
    </div>
  );

}

export default SubmissionTextArea;









/*

        Executing Human Joh smith Contact Email smith@gmail.com 
        Contact Phone +61450916955 Committing Business Joh smith 
        Supplier Morgan Imports Pty Limited Principal AUD $1,215.23 
        Recurring Payment 111.88 Term (months) 12 Invoice ID #MOR1468123

        Executing Human Joh smith 
        Contact Email smith@gmail.com 
        Contact Phone +61450916955 
        Committing Business Joh smith 
        Supplier Morgan Imports Pty Limited 
        Principal AUD $1,215.23 
        Recurring Payment 111.88 
        Term (months) 12 
        Invoice ID #MOR1468123

        */