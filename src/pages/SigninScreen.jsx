function SigninScreen () {
    return (
        <>
            <main className="signupScreen">
                <h1>Signin to your <br />PopX account</h1>
                <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <form className="loginForm">
                    <fieldset>
                        <legend>Email Address</legend>
                        <input type="text" />
                    </fieldset>
                    <fieldset>
                        <legend>Password</legend>
                        <input type="password" />
                    </fieldset>
                    <button><a href="/profile">Login</a></button>
                </form>
            </main>
        </>
    )
}

export default SigninScreen;