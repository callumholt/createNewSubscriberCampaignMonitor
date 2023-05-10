let handleSubmit = async (event) => {
  event.preventDefault();

  // Format the currency fields
  const formatCurrency = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formattedFormData = {
    ...formData,
    principle: formatCurrency(formData.principle),
    reoccuringPayment: formatCurrency(formData.reoccuringPayment),
  };

  console.log("formData:", formattedFormData);

  let postData = {
    EmailAddress: formattedFormData.EmailAddress,
    Name: formattedFormData.name,
    CustomFields: [
      {
        Key: "supplier",
        Value: formattedFormData.supplier,
      },
      {
        Key: "invoiceNumber",
        Value: formattedFormData.InvoiceNumber,
      },
      {
        Key: "principle",
        Value: formattedFormData.principle,
      },
      {
        Key: "reoccuringPayment",
        Value: formattedFormData.reoccuringPayment,
      },
      {
        Key: "remainingTerm",
        Value: formattedFormData.remainingTerm,
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
    console.error("an error occurred after fetch");
  }
};
