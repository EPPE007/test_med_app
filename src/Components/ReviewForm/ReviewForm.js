import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import GiveReviews from './GiveReview';

const data = [
    {
        serialNumber: 1,
        doctorName: 'Dr. Max Mustermann',
        doctorSpeciality: 'Psychologist',

    },
    {
        serialNumber: 2,
        doctorName: 'Dr. Max Musterfrau',
        doctorSpeciality: 'Radiologist',

    },
];

const ReviewForm = () => {
    const [reviewData, setReviewData] = useState({});

    const handleGiveReview = (serialNumber) => {
        setReviewData((prevReviewData) => ({
            ...prevReviewData,
            [serialNumber]: ''
        }));
    };

    const handleReviewSubmit = (serialNumber, review) => {
        setReviewData((prevReviewData) => ({
            ...prevReviewData,
            [serialNumber]: review
        }));
    };

    const popup = (report) =>
        <Popup
            trigger={
                <button
                    className="give-review-button"
                    onClick={() => handleGiveReview(report.serialNumber)}
                >
                    Click here
                </button>
            }
            modal
            nested
        >
            {(close) => (
                <div className="modal">
                    <GiveReviews
                        serialNumber={report.serialNumber}
                        onReviewSubmit={handleReviewSubmit}
                        review={reviewData[report.serialNumber]} // Pass the review data
                    />
                    <button className="close-modal-button" onClick={close}>
                        Close
                    </button>
                </div>
            )}
        </Popup>


    return (
        <div style={{ marginTop: '10%' }} className="reviews-container">
            <h1>Reviews</h1>
            <table className="report-table">
                <thead>
                    <tr>
                        <th>Serial No.</th>
                        <th>Doctor Name</th>
                        <th>Doctor Specialty</th>
                        <th>Provide Review</th>
                        <th>Review Given</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((report) => (
                        <tr key={report.serialNumber}>
                            <td>{report.serialNumber}</td>
                            <td>{report.doctorName}</td>
                            <td>{report.doctorSpeciality}</td>
                            <td>
                                {!reviewData[report.serialNumber] ? (
                                    popup(report)
                                ) : (
                                    <button className="give-review-button" disabled>
                                        Review given
                                    </button>
                                )}
                            </td>
                            <td>
                                {reviewData[report.serialNumber] && (
                                    <div className="review-given">
                                        <p>{reviewData[report.serialNumber]}</p>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default ReviewForm;