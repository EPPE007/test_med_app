// Import necessary modules from React library
import React, { useEffect } from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_up/Sign_Up';
import Login from './Components/Login/Login';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import ProfileForm from './Components/ProfileCard/ProfileCard';
import DoctorBook from './Components/DoctorCard/DoctorBook';

// Function component for the main App
function App() {

    // Render the main App component
    return (
        <div className="App">
            {/* Set up BrowserRouter for routing */}
            <BrowserRouter>
                <Notification>
                    <Navbar />
                    {/* Set up the Routes for different pages */}
                    <Routes>
                        <Route path="/" element={<Landing_Page />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/Sign_Up" element={<Sign_Up />} />
                        <Route path="/instant-consultation" element={<InstantConsultation />} />
                        <Route path="/findDoctorSearch" element={<FindDoctorSearch />} />
                        <Route path="/search/doctors" element={<DoctorBook />} />
                        <Route path="/Reviews" element={<ReviewForm />} />
                        <Route path="/Profile" element={<ProfileForm />} />

                    </Routes>
                </Notification>
            </BrowserRouter>
        </div>
    );
}

// Export the App component as the default export
export default App;