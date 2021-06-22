function Deposit(){
  const [status, setStatus]     = React.useState('');
  const [deposit, setAmountToDeposit]         = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),6000);
        return false;
      }
      return true;
  }

  function validateNumber(label){
    if (isNaN(parseInt(deposit))) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),6000);
      return false;
    }
    return true;
  }

  function validateNegative(label){
    if (parseInt(deposit) < 0) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),6000);
      return false;
    }
    return true;
  }


  function handleCreate(){
    console.log(deposit);
    if (!validate(deposit,     'deposit'))     return;
    if (!validateNumber('Please enter a number!')) return;
    if (!validateNegative('This is deposit, please withdraw on the next tab!')) return;


    //Giving all money to Niko
    ctx.users[0].balance = parseInt(ctx.users[0].balance) + parseInt(deposit);
    clearForm();
  }

  function clearForm(){
    setAmountToDeposit('');
  }

  return (
    <>
      <h1>Deposit</h1>
      <Card
        bgcolor="success"
        header={ctx.users[0].balance}
        status={status}
        body={(  
                <>
                Amount to deposit<br/>
                <input type="input" className="form-control" id="deposit" placeholder="Enter amount to deposit" value={deposit} onChange={e => setAmountToDeposit(e.currentTarget.value)} /><br/>
                <button type="submit" className="btn btn-light" onClick={handleCreate}>Deposit</button>
                </>
              )}
      />
    </>
  )
}