function Withdraw(){
  const [status, setStatus]     = React.useState('');
  const [withdraw, setAmountToWithdraw]         = React.useState('');
  const ctx = React.useContext(UserContext);
  
  function validateBalance(label){
    if (parseInt(withdraw) > parseInt(ctx.users[0].balance)) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),5000);
      return false;
    }
    return true;
  }

  function validateNumber(label){
    if (isNaN(parseInt(withdraw))) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }


  function validate(field, label){
      if (!field) {
        setStatus('Error: No Amount Entered');
        setTimeout(() => setStatus(''),5000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(withdraw);
    if (!validate(withdraw,     'withdraw'))     return;
    if (!validateBalance('Insufficient Funds!')) return;
    if (!validateNumber('Please enter a number!')) return; 
    // Wiring all money directly to Dr.Sanchez
    ctx.users[0].balance = parseInt(ctx.users[0].balance) - parseInt(withdraw);
    clearForm();
  }

  function clearForm(){
    setAmountToWithdraw('');
  }

  return (
    <>
      <h1>Withdraw</h1>
      <Card
        bgcolor="warning"
        header={ctx.users[0].balance}
        status={status}
        body={(  
                <>
                Amount to withdraw<br/>
                <input type="input" className="form-control" id="withdraw" placeholder="Enter amount to withdraw" value={withdraw} onChange={e => setAmountToWithdraw(e.currentTarget.value)} /><br/>
                <button type="submit" className="btn btn-light" onClick={handleCreate}>Withdraw</button>
                </>
              )}
      />
    </>
  )
}
