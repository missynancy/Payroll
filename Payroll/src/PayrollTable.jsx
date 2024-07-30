import React, { useState } from 'react';
import Payslip from './Payslip';


const PayrollTable = ({ payrolls }) => {
    const [selectedPayroll, setSelectedPayroll] = useState(null);
    const [generatedPayslips, setGeneratedPayslips] = useState({});

    const calculateNetPay = (payroll) => {
        const totalPay = payroll.hoursWorked * payroll.hourlyRate;
        return totalPay - payroll.deductions;
    };

    const handleGeneratePayslip = (payroll) => {
        setSelectedPayroll(payroll);
    };

    const handlePayslipGenerated = (employeeId) => {
        setGeneratedPayslips(prevState => ({
            ...prevState,
            [employeeId]: true
        }));
    };

    const handleCloseModal = () => {
        setSelectedPayroll(null);
    };

    return (
        <div className="table-container">
            <h2>Payroll Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Hours Worked</th>
                        <th>Hourly Rate ($)</th>
                        <th>Total Pay ($)</th>
                        <th>Deductions ($)</th>
                        <th>Net Pay ($)</th>
                        <th>Payslip</th>
                    </tr>
                </thead>
                <tbody>
                    {payrolls.map((payroll, index) => (
                        <tr key={index}>
                            <td>{payroll.employeeId}</td>
                            <td>{payroll.employeeName}</td>
                            <td>{payroll.hoursWorked}</td>
                            <td>{payroll.hourlyRate}</td>
                            <td>{payroll.hoursWorked * payroll.hourlyRate}</td>
                            <td>{payroll.deductions}</td>
                            <td>{calculateNetPay(payroll)}</td>
                            <td>
                                <button
                                    className={generatedPayslips[payroll.employeeId] ? 'generated btn' : ''}
                                    onClick={() => handleGeneratePayslip(payroll)}
                                >
                                    {generatedPayslips[payroll.employeeId] ? 'Generated Payslip' : 'Generate Payslip'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedPayroll && (
                <Payslip
                    show={true}
                    onClose={handleCloseModal}
                    payroll={selectedPayroll}
                    onGenerated={() => handlePayslipGenerated(selectedPayroll.employeeId)}
                />
            )}
        </div>
    );
};

export default PayrollTable;
