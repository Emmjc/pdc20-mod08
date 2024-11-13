import React from "react";

const TabContent = ({ activeTab, formData, onChange, errors, inputStyle, labelStyle }) => {
  return (
    <div style={{ padding: '20px' }}>
      {activeTab === 'personal' && (
        <div>
          <h3>Personal Information</h3>
          <label style={labelStyle}>First Name:</label>
          <input type="text" value={formData.firstName} onChange={(e) => onChange('firstName', e.target.value)} style={inputStyle} />
          {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
          
          <label style={labelStyle}>Last Name:</label>
          <input type="text" value={formData.lastName} onChange={(e) => onChange('lastName', e.target.value)} style={inputStyle} />

          <label style={labelStyle}>Date of Birth:</label>
          <input type="date" value={formData.dob} onChange={(e) => onChange('dob', e.target.value)} style={inputStyle} />

          <label style={labelStyle}>Gender:</label>
          <input type="text" value={formData.gender} onChange={(e) => onChange('gender', e.target.value)} style={inputStyle} />
        </div>
      )}

      {activeTab === 'contact' && (
        <div>
          <h3>Contact Information</h3>
          <label style={labelStyle}>Email:</label>
          <input type="email" value={formData.email} onChange={(e) => onChange('email', e.target.value)} style={inputStyle} />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

          <label style={labelStyle}>Phone:</label>
          <input type="tel" value={formData.phone} onChange={(e) => onChange('phone', e.target.value)} style={inputStyle} />

          <label style={labelStyle}>Address:</label>
          <input type="text" value={formData.address} onChange={(e) => onChange('address', e.target.value)} style={inputStyle} />

          <label style={labelStyle}>City:</label>
          <input type="text" value={formData.city} onChange={(e) => onChange('city', e.target.value)} style={inputStyle} />
        </div>
      )}

      {activeTab === 'academic' && (
        <div>
          <h3>Academic Information</h3>
          <label style={labelStyle}>Student ID:</label>
          <input type="text" value={formData.studentId} onChange={(e) => onChange('studentId', e.target.value)} style={inputStyle} />
          {errors.studentId && <p style={{ color: 'red' }}>{errors.studentId}</p>}

          <label style={labelStyle}>Program:</label>
          <input type="text" value={formData.program} onChange={(e) => onChange('program', e.target.value)} style={inputStyle} />

          <label style={labelStyle}>Year Level:</label>
          <input type="text" value={formData.yearLevel} onChange={(e) => onChange('yearLevel', e.target.value)} style={inputStyle} />

          <label style={labelStyle}>GPA:</label>
          <input type="number" step="0.01" value={formData.gpa} onChange={(e) => onChange('gpa', e.target.value)} style={inputStyle} />
        </div>
      )}

      {activeTab === 'additional' && (
        <div>
          <h3>Additional Details</h3>
          <label style={labelStyle}>Hobbies:</label>
          <input type="text" value={formData.hobbies} onChange={(e) => onChange('hobbies', e.target.value)} style={inputStyle} />

          <label style={labelStyle}>Skills:</label>
          <input type="text" value={formData.skills} onChange={(e) => onChange('skills', e.target.value)} style={inputStyle} />

          <label style={labelStyle}>Other Notes:</label>
          <textarea value={formData.otherNotes} onChange={(e) => onChange('otherNotes', e.target.value)} style={{ ...inputStyle, height: '80px' }} />
        </div>
      )}
    </div>
  );
}

export default TabContent;
