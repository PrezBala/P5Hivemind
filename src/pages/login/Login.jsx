import "./login.scss";

const Login = () => {
    return (
        <div className="login">
          <div className="card">
            <div className="left">
              <h1>Hivemind</h1>
              <p>
              Welcome to Hivemind - the social media app that brings people together! Our user-friendly platform is designed for those who crave social interaction and connectivity. 
              Join existing groups or create your own, join discussions and meet new people from all overd
              </p>
              <p>
              With Hivemind, you can share your thoughts and experiences with like-minded individuals in a diverse and inclusive community. 
              Join us today and become a part of our growing community!
              </p>
              <span>Don't you have an account?</span>
                <button>Register</button>
            </div>
            <div className="right">
              <h1>Login</h1>
              <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
              </form>
            </div>
          </div>
        </div>
      );
    };

export default Login