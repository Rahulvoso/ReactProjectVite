import React from "react";

export default function About() {
    return (
        <div className="container py-5">

            {/* HEADER */}
            <div className="text-center mb-5">
                <h1 className="fw-bold">About Us</h1>
                <p className="text-muted">
                    Building smart, secure & scalable digital solutions for modern businesses
                </p>
            </div>

            {/* INTRO SECTION */}
            <div className="row align-items-center mb-5">

                <div className="col-md-6">
                    <h3>Who We Are</h3>
                    <p className="text-muted">
                        We are a technology-driven platform focused on building
                        simple, secure, and scalable digital payment and service
                        solutions for businesses. Our mission is to empower merchants,
                        distributors, and enterprises with reliable tools for managing
                        transactions and operations efficiently.
                    </p>

                    <p className="text-muted">
                        We believe financial technology should be fast, transparent,
                        and easy to integrate without unnecessary complexity.
                    </p>
                </div>

                <div className="col-md-6 text-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="About"
                        style={{ width: "40%" }}
                    />
                </div>

            </div>

            {/* FEATURES */}
            <div className="row text-center mb-5">

                <div className="col-md-4 mb-3">
                    <div className="card shadow-sm p-3 h-100">
                        <h5>⚡ Fast Processing</h5>
                        <p className="text-muted">
                            Real-time transactions and quick response systems for businesses.
                        </p>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card shadow-sm p-3 h-100">
                        <h5>🔒 Secure Platform</h5>
                        <p className="text-muted">
                            End-to-end security with encrypted data handling and safe APIs.
                        </p>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card shadow-sm p-3 h-100">
                        <h5>⚙️ Flexible System</h5>
                        <p className="text-muted">
                            Configure commissions, charges, and services as per business needs.
                        </p>
                    </div>
                </div>

            </div>

            {/* MISSION */}
            <div className="card shadow-sm p-4 mb-5">

                <h3>Our Mission</h3>
                <p className="text-muted">
                    Our mission is to simplify digital financial operations by providing
                    reliable infrastructure, flexible commission models, and real-time
                    reporting systems that help businesses scale effortlessly.
                </p>

            </div>

            {/* VISION */}
            <div className="card shadow-sm p-4 mb-5">

                <h3>Our Vision</h3>
                <p className="text-muted">
                    To become a leading digital infrastructure provider powering the next
                    generation of payment systems, service platforms, and financial automation
                    tools across industries.
                </p>

            </div>

            {/* FOOTER CTA */}
            <div className="text-center bg-light p-4 rounded">

                <h4>Let’s Build Something Great Together</h4>
                <p className="text-muted">
                    We help businesses grow with scalable and secure technology solutions.
                </p>

                <button className="btn btn-primary">
                    Contact Us
                </button>

            </div>

        </div>
    );
}