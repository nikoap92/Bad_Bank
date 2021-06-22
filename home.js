function Home(){
  return (
    <Card
      bgcolor="info"
      txtcolor="black"
      header="Bank of Niko Home Page"
      title="Welcome to the bank of Niko"
      text="Use Navigation Bar to withdraw and deposit money"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
