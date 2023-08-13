// This is the website's sign-up page for doctors with Google Login.

// Import necessary components and libraries
import React from 'react';   // React is a library for building user interfaces
import axios from 'axios';   // Axios is a library for making HTTP requests
import GoogleLogin from 'react-google-login';   // GoogleLogin is a component for Google Login

// Define a React component called DoctorRegistration
const DoctorRegistration = () => {
  // Define a function to handle successful Google login
  const handleGoogleLoginSuccess = async (response) => {
    // Extract the "tokenId" from the response
    const { tokenId } = response;

    try {
      // Send the "tokenId" to the server to register the doctor
      const result = await axios.post('/api/doctors/register', { tokenId });

      // Print the registered doctor's data to the console
      console.log(result.data);
    } catch (error) {
      // Handle errors if registration fails
      console.error(error);
    }
  };

  // Return the UI for the DoctorRegistration component
  return (
    <div>
      <h2>Doctor Registration</h2>
      {/* The button for Google Login */}
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        onSuccess={handleGoogleLoginSuccess}   // Call the function when Google login succeeds
        onFailure={console.error}   // Call the function when Google login fails
      />
    </div>
  );
};

// Export the DoctorRegistration component to use it in other parts of the app
export default DoctorRegistration;
