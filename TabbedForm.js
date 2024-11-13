import React, { useState } from "react";
import Tab from "./Tab";
import TabContent from "./TabContent";

const TabbedForm = () => {
    const [activeTab, setActiveTab] = useState('personal');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        studentId: '',
        program: '',
        yearLevel: '',
        gpa: '',
        hobbies: '',
        skills: '',
        otherNotes: '',
    });

    const [errors, setErrors] = useState({});

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));

        // Remove error for the specific field when user starts typing
        if (errors[field]) {
            setErrors((prevErrors) => {
                const newErrors = { ...prevErrors };
                delete newErrors[field];  // Remove specific error
                return newErrors;
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = "First Name is required.";
        if (!formData.email) newErrors.email = "Email is required.";
        if (!formData.studentId) newErrors.studentId = "Student ID is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            alert(`Submitted Data: ${JSON.stringify(formData, null, 2)}`);
        }
    };

  
    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '8px 0',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '5px',
        fontSize: '14px',
        fontWeight: 'bold',
        textAlign: 'left',
    };

    const formStyle = {
        maxWidth: '650px',
        margin: '20px auto',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
    };

    const buttonStyle = {
        padding: '10px 20px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#4169E1',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
        marginTop: '15px',
    };

    const tabContainerStyle = {
        display: 'flex',
        borderBottom: '1px solid #ccc',
        marginBottom: '20px',
    };

    return (
        <div style={formStyle}>
            <h2 style={{ textAlign: 'center' }}>Registration Form with Tabs</h2>
            <div style={tabContainerStyle}>
                <Tab name="Personal Information" isActive={activeTab === 'personal'} onClick={() => handleTabChange('personal')} />
                <Tab name="Contact Information" isActive={activeTab === 'contact'} onClick={() => handleTabChange('contact')} />
                <Tab name="Academic Information" isActive={activeTab === 'academic'} onClick={() => handleTabChange('academic')} />
                <Tab name="Additional Details" isActive={activeTab === 'additional'} onClick={() => handleTabChange('additional')} />
            </div>

            <form onSubmit={handleSubmit}>
                <TabContent
                    activeTab={activeTab}
                    formData={formData}
                    onChange={handleChange}
                    errors={errors}
                    inputStyle={inputStyle}
                    labelStyle={labelStyle}
                />
                <button type="submit" style={buttonStyle} disabled={Object.keys(errors).length > 0}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default TabbedForm;
