import React, { useEffect } from 'react';


const Payslip = ({ show, onClose, payroll, onGenerated }) => {
    if (!show) {
        return null;
    }

    const totalPay = payroll.hoursWorked * payroll.hourlyRate;
    const netPay = totalPay - payroll.deductions;

    useEffect(() => {
        onGenerated();
    }, [onGenerated]);

    const handlePrint = () => {
        window.print();
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                const shareData = {
                    title: 'Payslip',
                    text: `
                        Payslip for ${payroll.employeeName}\n
                        Employee ID: ${payroll.employeeId}\n
                        Hours Worked: ${payroll.hoursWorked.toFixed(2)}\n
                        Hourly Rate: $${payroll.hourlyRate.toFixed(2)}\n
                        Total Pay: $${totalPay.toFixed(2)}\n
                        Deductions: $${payroll.deductions.toFixed(2)}\n
                        Net Pay: $${netPay.toFixed(2)}
                    `,
                    url: window.location.href,
                };
                await navigator.share(shareData);
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            alert('Web Share API not supported in this browser.');
        }
    };

    return (
        <div className="payslip-overlay">
            <div className="payslip">
                <h1>Company Name</h1>
                <h3>Payslip</h3>
                <table>
                    <tbody>
                        <tr><th>Employee ID</th><td>{payroll.employeeId}</td></tr>
                        <tr><th>Employee Name</th><td>{payroll.employeeName}</td></tr>
                        <tr><th>Hours Worked</th><td>{payroll.hoursWorked.toFixed(2)}</td></tr>
                        <tr><th>Hourly Rate ($)</th><td>${payroll.hourlyRate.toFixed(2)}</td></tr>
                        <tr><th>Total Pay ($)</th><td>${totalPay.toFixed(2)}</td></tr>
                        <tr><th>Deductions ($)</th><td>${payroll.deductions.toFixed(2)}</td></tr>
                        <tr><th>Net Pay ($)</th><td>${netPay.toFixed(2)}</td></tr>
                    </tbody>
                </table>
                <div className="button-group">
                    <button onClick={handlePrint}>Print</button>
                    <button onClick={handleShare}>Share</button>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default Payslip;
