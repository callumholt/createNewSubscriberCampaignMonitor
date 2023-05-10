let handleSubmit = async (event) => {
  event.preventDefault();
  console.log("formData:", formData);

  let postData = {
    EmailAddress: formData.EmailAddress,
    Name: formData.name,
    CustomFields: [
      {
        Key: "supplier",
        Value: formData.supplier,
      },
      {
        Key: "invoiceNumber",
        Value: formData.InvoiceNumber,
      },
      {
        Key: "principle",
        Value: formData.principle,
      },
      {
        Key: "reoccuringPayment",
        Value: formData.reoccuringPayment,
      },
      {
        Key: "remainingTerm",
        Value: formData.remainingTerm,
      },
    ],
    ConsentToTrack: "Yes",
  };
  console.log("before fetch:", postData);

  const response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://api.createsend.com/api/v3.3/subscribers/aa774c3006b8f3a728b0b07fe92173e8.json`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization:
          "Basic dGFINEdnTDRkVTNldUNycnFFTGdldG5mb3VYNHVtaUgyZi95ckdrbXlqMDlXQytjVkthTXFtMVVSWXhkbFQrb2djZHR6ait0dUc5ODFMNURYQS9UVnJiekxtODhhYU5ncGxycExlc3FBUnRueVYzdDIwVVNDYWJ6V1FJYVBDb3kvclVyQmRJRDhsc3I1NDIvRWhPQ2h3PT06",
      },
      body: JSON.stringify(postData),
    }
  )
    .then((res) => res.json())
    .then((res) => console.log("response from POST request:", res));

  if (!response.ok) {
    console.error("an error occured after fetch");
  }
};
