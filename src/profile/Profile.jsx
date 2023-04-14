import React from "react";
import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      border: "1px solid gray",
      padding: "1rem",
      borderRadius: "0.5rem",
    },
    image: {
      width: "200px",
      height: "200px",
      objectFit: "cover",
      borderRadius: "50%",
      marginTop: "1rem",
    },
    button: {
      padding: "0.5rem",
      marginTop: "1rem",
      backgroundColor: "red",
      color: "white",
      border: "none",
      borderRadius: "0.5rem",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1>{"Leo Messi"}</h1>
      <p>
        {
          "Lionel Messi is an Argentine professional footballer who was born on June 24, 1987, in Rosario, Argentina. He is widely regarded as one of the greatest football players of all time and has won numerous awards and accolades throughout his career."
        }
      </p>
      <h2>{"Footballer"}</h2>
      <img src="./leo.jpg" alt="Profile" style={styles.image} />
      <button onClick={() => handleName(fullName)} style={styles.button}>
        Show Name
      </button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "John Doe",
  bio: "No bio available",
  profession: "Unknown",
  handleName: () => alert("Lionel Andrés Messi"),
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func,
};

export default Profile;
