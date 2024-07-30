import React, { useState } from 'react';

const PayrollForm = ({ addPayroll }) => {
    const [employeeId, setEmployeeId] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [hoursWorked, setHoursWorked] = useState('');
    const [hourlyRate, setHourlyRate] = useState('');
    const [deductions, setDeductions] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const payroll = {
            employeeId,
            employeeName,
            hoursWorked: parseFloat(hoursWorked),
            hourlyRate: parseFloat(hourlyRate),
            deductions: parseFloat(deductions),
        };
        addPayroll(payroll);
        setEmployeeId('');
        setEmployeeName('');
        setHoursWorked('');
        setHourlyRate('');
        setDeductions('');
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
            <div className="form-group">
                <label htmlFor="employeeId">Employee ID:</label>
                <input type="text" id="employeeId" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="employeeName">Employee Name:</label>
                <input type="text" id="employeeName" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="hoursWorked">Hours Worked:</label>
                <input type="number" id="hoursWorked" value={hoursWorked} onChange={(e) => setHoursWorked(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="hourlyRate">Hourly Rate ($):</label>
                <input type="number" id="hourlyRate" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="deductions">Deductions ($):</label>
                <input type="number" id="deductions" value={deductions} onChange={(e) => setDeductions(e.target.value)} required />
            </div>
            <div className="form-group">
                <button className='btn margintop' type="submit">Add Payroll</button>
            </div>
        </form>
    );
};

export default PayrollForm;
