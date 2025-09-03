import profile from "../assets/profile.jpeg";

function Profile() {
  return (
    <>
      <main className="profileScreen">
        <div className="title">
            Account Settings
        </div>
        <div className="profile">
          <div className="profilePic">
            <img src={profile} alt="profile picture" />
            <div className="camera">
              <svg
                class="menu-icon"
                fill="#f5f5f5ff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m9.828 5-2 2H4v12h16V7h-3.828l-2-2H9.828ZM9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2Zm3 15a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11Zm0-2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"></path>
              </svg>
            </div>
          </div>
          <div>
            <h1>Marry Doe</h1>
            <p>Marry@gmail.com</p>
          </div>
        </div>
        <div className="intro">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, natus,
          assumenda accusantium nostrum officiis autem nobis fugiat reiciendis
          velit, in vel eligendi necessitatibus rerum suscipit asperiores dolor
          ipsam. Eaque, eos!</p>
        </div>
      </main>
    </>
  );
}

export default Profile;
