function SignupScreen() {
  return (
    <>
      <main className="signupScreen">
        <h1>Create your <br /> PopX account</h1>
        <form className="signupForm">
          <fieldset>
            <legend>Full name<span>*</span></legend>
            <input type="text" placeholder="Marry Doe" />
          </fieldset>
          <fieldset>
            <legend>Phone number<span>*</span></legend>
            <input type="tel" placeholder="+123456789" />
          </fieldset>
          <fieldset>
            <legend>Email address<span>*</span></legend>
            <input type="Email" placeholder="marrydoe@gmail.com" />
          </fieldset>
          <fieldset>
            <legend>Password<span>*</span></legend>
            <input type="password" />
          </fieldset>
          <fieldset>
            <legend>Company name<span>*</span></legend>
            <input type="text" placeholder="Marry Doe" />
          </fieldset>
          <p>Are you an Agency?<span>*</span></p> 
          <input type="radio" name="agency" /> <label> Yes </label>
          <input type="radio" name="agency"/>
          <label> No </label>
          <button className="createAccount"> <a href="/profile">Create Account</a></button>
        </form>
      </main>
    </>
  );
}

export default SignupScreen;
