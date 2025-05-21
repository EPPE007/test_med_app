import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ReportsLayout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const authtoken = sessionStorage.getItem("auth-token");
        if (!authtoken) navigate("/login");
    }, [navigate]);

    const reportData = [
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

    return (
        <div className="reports-container">
            <h1>Reports</h1>
            <table className="report-table">
                <thead>
                    <tr>
                        <th>Serial No.</th>
                        <th>Doctor Name</th>
                        <th>Doctor Specialty</th>
                        <th>View Report</th>
                        <th>Download Report</th>
                    </tr>
                </thead>
                <tbody>
                    {reportData.map((report, index) => (
                        <tr key={index}>
                            <td>{report.serialNumber}</td>
                            <td>{report.doctorName}</td>
                            <td>{report.doctorSpeciality}</td>
                            <td>
                                <a target='_blank' href='Patient_Information.pdf' className="report-link" rel="noreferrer">
                                    View Report
                                </a>
                            </td>
                            <td>
                                <a target='_blank' href='Patient_Information.pdf' download className="report-link" rel="noreferrer">
                                    Download Report
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReportsLayout;