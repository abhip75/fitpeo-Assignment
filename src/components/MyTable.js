import React from "react";
import "../Main.css";

const MyTable = () => {
    const data = [
        {
            name: 'Wade Warren',
            order_no: '15478256',
            amount: '140.00',
            status: "Delivered"
        },
        {
            name: 'Jane Cooper',
            order_no: '48965786',
            amount: '365.00',
            status: "Delivered"
        },
        {
            name: 'Guy Hawkins',
            order_no: '78958215',
            amount: '45.88',
            status: "Cancelled"
        },
        {
            name: 'Kristin Watson',
            order_no: '20965732',
            amount: '65.00',
            status: "Pending"
        },
        {
            name: 'Cody Fisher',
            order_no: '95715620',
            amount: '545.00',
            status: "Delivered"
        },
        {
            name: 'Savannah Nguyen',
            order_no: '78524568',
            amount: '128.20',
            status: "Delivered"
        },
    ];

    return (
        <div className="container">
          <div className="table-responsive">
            <table className="table table-dark custom-table">
                <thead className="custom-thead">
                    <tr>
                        <th scope="col">Customer</th>
                        <th scope="col">Order No.</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>
                                <div className="d-flex align-items-center">
                                    <img src="/images/avatar.png" alt="avatar" style={{ width: "30px", height: "30px" }} />
                                    <div className="ml-2">{row.name}</div>
                                </div>
                            </td>
                            <td>{row.order_no}</td>
                            <td>{row.amount}</td>
                            <td>
                                {row.status === 'Delivered' ? (
                                    <span className="badge rounded-pill delivered">Delivered</span>
                                ) : row.status === 'Pending' ? (
                                    <span className="badge rounded-pill pending">Pending</span>
                                ) : (
                                    <span className="badge rounded-pill pending">Cancelled</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
        </div>
    );
}

export default MyTable;
