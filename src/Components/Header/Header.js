import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { AuthContext, FirebaseContext } from "../../store/FirebaseContext";

function Header() {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleLoginClick = () => {
    if (user) {
      // If the user is logged in, log them out and then redirect to the login page
      firebase
        .auth()
        .signOut()
        .then(() => {
          history.push("/login");
        })
        .catch((error) => {
          // Handle any potential errors with signOut()
          console.error("Error signing out:", error);
        });
    } else {
      // If the user is not logged in, simply redirect to the login page
      history.push("/login");
    }
  };
  const handleSellClick = () => {
    history.push("/create"); // Navigate to the "/create" route
  };

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car, mobile phone and more..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span>ENGLISH</span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span onClick={handleLoginClick}>
            {user ? `Welcome ${user.displayName}` : "Login"}
          </span>
          <hr />
        </div>
        {user && (
          <span
            onClick={() => {
              firebase.auth().signOut();
              history.push("/login");
            }}
          >
            Logout
          </span>
        )}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={handleSellClick}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
