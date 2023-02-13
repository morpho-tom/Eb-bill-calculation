import React, { useState } from "react";
import "./App.css";
import logo from "../src/images/logo6.png";
import logo1 from "../src/images/logo1.png";
import logo2 from "../src/images/minagam.png";
import logo3 from "../src/images/3.png";


const EBBillCalculator = ({ onBillSubmit }) => {
  const [customerName, setCustomerName] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [units, setUnits] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onBillSubmit({ customerName, customerId, units });
  };

  return (
    <>

      <header>
        <div className="logo">
          <img src={logo} alt="TANGEDCO" width={514} height={100} />
        </div>
        <div className="logo1">
          <img src={logo3} alt="TANGEDCO" width={350} height={135} />
        </div><br />
        <div className="logo2">
          <img src={logo1} alt="TANGEDCO" width={136} height={56} />
        </div>
        <div className="logo3">
          <img src={logo2} alt="TANGEDCO" width={145} height={60} />
        </div>
      </header>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <br />
          <input
            type="text"
            placeholder="Customer Name"
            value={customerName}
            onChange={e => setCustomerName(e.target.value)}
          /><br />
          <input
            type="text"
            placeholder="Customer ID"
            value={customerId}
            onChange={e => setCustomerId(e.target.value)}
          /><br />
          <input
            type="number"
            placeholder="Units"
            value={units}
            onChange={e => setUnits(e.target.value)}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>

    </>
  );
};

const Bill = ({ billDetails }) => {
  const { customerName, customerId, units } = billDetails;
  let cost = 0;

  if (units <= 100) {
    cost = 0;
  } else if (units > 100 && units <= 400) {
    cost = (units - 100) * 3;
  } else if (units > 400 && units <= 500) {
    cost = (400 - 100) * 3 + (units - 400) * 6.5;
  } else {
    cost = (400 - 100) * 3 + (500 - 400) * 6.5 + (units - 500) * 8;
  }

  return (
    <div className="billpage">
      <div className="card1">
        <h1>Electricity Bill</h1>
        <p>
          Customer Name: {customerName}
          <br />
          Customer ID: {customerId}
          <br />
          Units: {units}
          <br />
          Cost: Rs. {cost}
        </p>
      </div>
    </div>
  );
};

const App = () => {
  const [billDetails, setBillDetails] = useState({});

  const onBillSubmit = billDetails => {
    setBillDetails(billDetails);
  };

  return (
    <div>
      {Object.keys(billDetails).length === 0 ? (
        <EBBillCalculator onBillSubmit={onBillSubmit} />
      ) : (
        <Bill billDetails={billDetails} />
      )}
    </div>
  );
};

export default App;

