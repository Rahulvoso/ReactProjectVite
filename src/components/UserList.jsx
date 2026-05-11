import React, { useEffect, useRef, useState } from 'react'

// Import JSON File
import usersData from '../data/users.json'

import ToastMessage from './ToastMessage'

import { exportFile } from '../utils/exportToExcel'

export default function UserList() {

    const hasRun = useRef(false)

    const [users, setUsers] = useState([])

    // Fetch Data Using useEffect
    useEffect(() => {

        if (hasRun.current) return

        hasRun.current = true

        setUsers(usersData)

        ToastMessage.success(
            "User data loaded successfully!"
        )

    }, [])

    // Currency Format Function
    const formatCurrency = (amount) => {

        return `₹ ${amount.toLocaleString('en-IN')}`

    }

    return (

        <div className="card shadow border-0 rounded-4 mt-5">

            {/* Header */}
            <div className="card-header bg-white border-0 p-4">

                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">

                    <div>

                        <h2 className="mb-1 fw-bold">
                            User List 👨‍💻
                        </h2>

                        <p className="text-muted mb-0">
                            Manage and export user records easily.
                        </p>

                    </div>

                    {/* Export Buttons */}
                    <div className="d-flex gap-2">

                        <button
                            className="btn btn-success shadow-sm"
                            onClick={() =>
                                exportFile(
                                    users,
                                    'users-report',
                                    'xlsx'
                                )
                            }
                        >
                            Export XLSX 📗
                        </button>

                        <button
                            className="btn btn-primary shadow-sm"
                            onClick={() =>
                                exportFile(
                                    users,
                                    'users-report',
                                    'csv'
                                )
                            }
                        >
                            Export CSV 📄
                        </button>

                    </div>

                </div>

            </div>

            {/* Table */}
            <div className="card-body p-4">

                <div className="table-responsive">

                    <table className="table table-hover align-middle">

                        <thead className="table-dark">

                            <tr>

                                <th>#</th>

                                <th>Name</th>

                                <th>Email</th>

                                <th>Role</th>

                                <th>City</th>

                                <th>Salary</th>

                                <th>Experience</th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                users.length > 0 ? (

                                    users.map((user, index) => (

                                        <tr key={user.id}>

                                            <td>
                                                {index + 1}
                                            </td>

                                            <td className="fw-semibold">
                                                {user.name}
                                            </td>

                                            <td>
                                                {user.email}
                                            </td>

                                            <td>
                                                <span className="badge bg-info text-white">
                                                    {user.role}
                                                </span>
                                            </td>

                                            <td>
                                                {user.city}
                                            </td>

                                            <td className="fw-bold text-success">
                                                {formatCurrency(user.salary)}
                                            </td>

                                            <td>
                                                {user.experience}
                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td
                                            colSpan="7"
                                            className="text-center py-4 text-muted"
                                        >
                                            No users found 😔
                                        </td>

                                    </tr>

                                )
                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    )
}