import React, { useState } from 'react';
import PayrollForm from './PayrollForm';
import PayrollTable from './PayrollTable';

const App = () => {
  const [payrolls, setPayrolls] = useState([]);

  const addPayroll = (payroll) => {
      setPayrolls([...payrolls, payroll]);
  };

  return (
      <div className="container">
          <h1>Payroll System</h1>
          <PayrollForm addPayroll={addPayroll} />
          <PayrollTable payrolls={payrolls} />
      </div>
  );
};


export default App;
