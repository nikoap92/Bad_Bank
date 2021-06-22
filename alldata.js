function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h5>All Data in Store</h5>
    <Card
        bgcolor="secondary"
        status={status}
        body={(  
                <>
                  {JSON.stringify(ctx)}<br/>
                </>
              )}
      />
    </>
  );
}
