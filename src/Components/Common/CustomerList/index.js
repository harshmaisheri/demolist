import React from "react";
import "./customerlist.css";

const data = [
  {
    id: 1,
    name: "XYZ",
    email: "xyz@gmail.com",
    number: "812345678",
  },
  {
    id: 2,
    name: "PQR",
    email: "pqr@gmail.com",
    number: "987654321",
  },
];

function CustomerList() {
  return (
    <div className="customerlist">
      <h3>Customer List</h3>
      <div className="listrow">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr className={`${idx % 2 === 0 ? "odd" : "eve"}`}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerList;
