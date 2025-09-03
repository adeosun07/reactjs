function LandingScreen() {
  return (
    <>
      <main className="landingPage">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button className="mainButton"> <a href="/signup">Create Account</a></button>
        <button>
          <span><a href="/signin">Already Registered? Login</a></span>
        </button>
      </main>
    </>
  );
}

export default LandingScreen;
