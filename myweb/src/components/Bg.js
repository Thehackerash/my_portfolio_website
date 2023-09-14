import React from 'react';

const Bg = () => {
  // Define the background image URL
  const backgroundImageUrl = 'url("https://wallpaperaccess.com/4k-dark-mountain.jpg")';

  // Define the styles for the component
  const styles = {
    container: {
      // Set the background image
      backgroundImage: "https://wallpaperaccess.com/4k-dark-mountain.jpg",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '300px',
    },
    content: {
      // Add styles for the content inside the component
      // ...
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1>Hello, React Image Background!</h1>
        <p>This is a component with a still image background.</p>
      </div>
    </div>
  );
};

export default Bg;
