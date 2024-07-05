
const Royhat = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbx_GkmVEdAnrglVR0Y65ajJOeo8_qj-LNfR1uLdV3YszKGx8GivQisRZwqaCnSwMkE/exec';
    const form = event.target;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => alert("You have successfully submitted."))
      .catch(error => console.error('Error!', error.message));
  }

  return (
    <div>
        <form method="post" autoComplete="off" name="google-sheet" onSubmit={handleSubmit}>
      <center><br /><br />
        <h1>Registration Form</h1><br />
        <table border="5">
          <tbody>
            <tr>
              <td><b>Name : </b></td>
              <td><input type="text" name="Name" required /></td>
            </tr>
            <tr>
              <td><b>Email : </b></td>
              <td><input type="text" name="Email" required /></td>
            </tr>
            <tr>
              <td><b>Phone no. : </b></td>
              <td><input type="number" name="Phone" required /></td>
            </tr>
            <tr>
              <td><b>Gender : </b></td>
              <td>
                <input type="radio" name="Gender" value="Kimyo" />Kimyo
                <input type="radio" name="Gender" value="Biologiya" />Biologiya
              </td>
            </tr>
          </tbody>
        </table>
        <br /><br />
        <input type="submit" name="submit" value="Submit" />
      </center>
    </form>
    </div>
  );
}
export default Royhat
