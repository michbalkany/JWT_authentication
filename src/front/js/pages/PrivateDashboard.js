import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateDashboard = () => {
  const Navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      Navigate("/Login");
    } else {
      fetch(
        "https://3001-4geeksacade-reactflaskh-2lflnqimkee.ws-us85.gitpod.io/api/token",
        {
          method: "GET",
          Headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => {
          console.log(error);
          Navigate("/Login");
        });
    }
  }, []);
  return (
    <div>
      <div className="fs-2">Welcome To Private-Dashboard :D </div>
      <ul className="fs-5">
        <h4>Personal Information:</h4>
        <li>Home Address</li>
        <div>
          <input></input>
        </div>
        <li>Linkedin Profile</li>
        <input></input>
        <li>Phone Number</li>
        <input></input>
      </ul>
    </div>
  );
};

export default PrivateDashboard;
