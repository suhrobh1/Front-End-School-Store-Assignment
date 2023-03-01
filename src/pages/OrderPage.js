import React from 'react';

function OrderPage(){
    return (
        <>
            <h2> Welcome to the OrderPage</h2>
            <p>You can order stuff here</p>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
                <tr>
                    <td>Anom</td>
                    <td>19</td>
                    <td>Male</td>
                </tr>
                <tr>
                    <td>Megha</td>
                    <td>19</td>
                    <td>Female</td>
                </tr>
                    <tr>
                    <td>Subham</td>
                    <td>25</td>
                    <td>Male</td>
                </tr>
            </table>
        </>
    )
}

export default OrderPage;