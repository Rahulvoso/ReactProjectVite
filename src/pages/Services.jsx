import React, { useEffect, useState } from "react";
import ToastMessage from "../components/ToastMessage";

export default function Services() {

    const [formData, setFormData] = useState({
        name: "",
        sub_service_name: "",
        description: "",
        price: "",
        discount: "",
        gst: "",
        commission_type: "",
        service_charge_type: "",
        commission: "",
        service_charge: "",
        settlement_schedule: "",
    });

    const [serviceList, setServiceList] = useState([]);
    const [subServiceList, setSubServiceList] = useState([]);
    const [filterSubServiceName, setFilterSubServiceName] = useState([]);

    const [commissionRanges, setCommissionRanges] = useState([
        { from: "", to: "", charge: "", type: "" },
    ]);

    const [serviceRanges, setServiceRanges] = useState([
        { from: "", to: "", charge: "", type: "" },
    ]);

    useEffect(() => {
        const apiData = [
            { serviceList: "Quintus", name: "Wallet" },
            { serviceList: "Quintus", name: "Payout Wallet" },
            { serviceList: "YPAY", name: "NEFT" },
        ];

        setSubServiceList(apiData);
        setServiceList([...new Set(apiData.map(i => i.serviceList))]);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === "name") {
            setFilterSubServiceName(
                subServiceList.filter(i => i.serviceList === value)
            );
        }
    };

    const handleRangeChange = (type, index, field, value) => {
        const setter = type === "commission"
            ? setCommissionRanges
            : setServiceRanges;

        const data = type === "commission"
            ? [...commissionRanges]
            : [...serviceRanges];

        data[index][field] = value;
        setter(data);
    };

    const addRange = (type) => {
        const setter = type === "commission"
            ? setCommissionRanges
            : setServiceRanges;

        setter(prev => [...prev, { from: "", to: "", charge: "", type: "" }]);
    };

    const removeRange = (type, index) => {
        if (index === 0) return;

        const setter = type === "commission"
            ? setCommissionRanges
            : setServiceRanges;

        const data = type === "commission"
            ? [...commissionRanges]
            : [...serviceRanges];

        data.splice(index, 1);
        setter(data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            ...formData,
            commissionRanges,
            serviceRanges,
        });

        ToastMessage.success("Service Created Successfully");
    };

    // ========================= UI BLOCK =========================

    const RangeUI = ({ title, type, data }) => (
        <div className="card border-0 shadow-sm mb-3">
            <div className="card-header bg-light">
                <strong>{title}</strong>
            </div>

            <div className="card-body">
                {data.map((item, index) => (
                    <div className="row g-2 align-items-center mb-2" key={index}>

                        <div className="col-md-2">
                            <input
                                className="form-control"
                                placeholder="From"
                                value={item.from}
                                onChange={(e) =>
                                    handleRangeChange(type, index, "from", e.target.value)
                                }
                            />
                        </div>

                        <div className="col-md-2">
                            <input
                                className="form-control"
                                placeholder="To"
                                value={item.to}
                                onChange={(e) =>
                                    handleRangeChange(type, index, "to", e.target.value)
                                }
                            />
                        </div>

                        <div className="col-md-2">
                            <input
                                className="form-control"
                                placeholder="Charge"
                                value={item.charge}
                                onChange={(e) =>
                                    handleRangeChange(type, index, "charge", e.target.value)
                                }
                            />
                        </div>

                        <div className="col-md-2">
                            <select
                                className="form-select"
                                value={item.type}
                                onChange={(e) =>
                                    handleRangeChange(type, index, "type", e.target.value)
                                }
                            >
                                <option value="">Type</option>
                                <option value="rupees">₹</option>
                                <option value="percentage">%</option>
                            </select>
                        </div>

                        <div className="col-md-4 d-flex gap-2">

                            <button
                                type="button"
                                className="btn btn-success btn-sm"
                                onClick={() => addRange(type)}
                            >
                                +
                            </button>

                            <button
                                type="button"
                                className="btn btn-danger btn-sm"
                                onClick={() => removeRange(type, index)}
                            >
                                -
                            </button>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="container py-4">

            <form onSubmit={handleSubmit}>

                {/* HEADER */}
                <div className="mb-3">
                    <h3 className="fw-bold">Create Service</h3>
                    <p className="text-muted">Configure service pricing, commission & charges</p>
                </div>

                {/* BASIC INFO */}
                <div className="card shadow-sm mb-3">
                    <div className="card-header">Basic Details</div>
                    <div className="card-body row g-3">

                        <div className="col-md-6">
                            <label>Service</label>
                            <select
                                className="form-select"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                {serviceList.map(i => (
                                    <option key={i}>{i}</option>
                                ))}
                            </select>
                        </div>

                        <div className="col-md-6">
                            <label>Sub Service</label>
                            <select
                                className="form-select"
                                name="sub_service_name"
                                value={formData.sub_service_name}
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                {filterSubServiceName.map(i => (
                                    <option key={i.name}>{i.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="col-md-12">
                            <label>Description</label>
                            <input
                                className="form-control"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </div>

                    </div>
                </div>

                {/* PRICING */}
                <div className="card shadow-sm mb-3">
                    <div className="card-header">Pricing</div>
                    <div className="card-body row g-3">

                        <div className="col-md-4">
                            <label>Price</label>
                            <input className="form-control" name="price" value={formData.price} onChange={handleChange} />
                        </div>

                        <div className="col-md-4">
                            <label>Discount</label>
                            <input className="form-control" name="discount" value={formData.discount} onChange={handleChange} />
                        </div>

                        <div className="col-md-4">
                            <label>GST</label>
                            <input className="form-control" name="gst" value={formData.gst} onChange={handleChange} />
                        </div>

                    </div>
                </div>

                {/* COMMISSION */}
                <div className="card shadow-sm mb-3">
                    <div className="card-header">Commission</div>
                    <div className="card-body row g-3">

                        <div className="col-md-6">
                            <label>Commission Type</label>
                            <select
                                className="form-select"
                                name="commission_type"
                                value={formData.commission_type}
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                <option value="rupees">Rupees</option>
                                <option value="percentage">Percentage</option>
                                <option value="range">Range</option>
                            </select>
                        </div>

                        <div className="col-md-12">
                            {formData.commission_type === "range" ? (
                                <RangeUI
                                    title="Commission Range"
                                    type="commission"
                                    data={commissionRanges}
                                />
                            ) : (
                                <input
                                    className="form-control"
                                    name="commission"
                                    value={formData.commission}
                                    onChange={handleChange}
                                    placeholder="Commission"
                                />
                            )}
                        </div>

                    </div>
                </div>

                {/* SERVICE CHARGE */}
                <div className="card shadow-sm mb-3">
                    <div className="card-header">Service Charge</div>
                    <div className="card-body row g-3">

                        <div className="col-md-6">
                            <label>Service Charge Type</label>
                            <select
                                className="form-select"
                                name="service_charge_type"
                                value={formData.service_charge_type}
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                <option value="rupees">Rupees</option>
                                <option value="percentage">Percentage</option>
                                <option value="range">Range</option>
                            </select>
                        </div>

                        <div className="col-md-12">
                            {formData.service_charge_type === "range" ? (
                                <RangeUI
                                    title="Service Charge Range"
                                    type="service"
                                    data={serviceRanges}
                                />
                            ) : (
                                <input
                                    className="form-control"
                                    name="service_charge"
                                    value={formData.service_charge}
                                    onChange={handleChange}
                                    placeholder="Service Charge"
                                />
                            )}
                        </div>

                    </div>
                </div>

                {/* SUBMIT */}
                <div className="text-center">
                    <button className="btn btn-primary px-5">
                        Submit Service
                    </button>
                </div>

            </form>

        </div>
    );
}