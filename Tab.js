import React from "react";

const Tab = ({ name, isActive, onClick }) => {
    const tabStyle = {
        padding: '12px 24px',
        cursor: 'pointer',
        borderBottom: isActive ? '3px solid #007BFF' : '3px solid transparent',
        color: isActive ? '#007BFF' : '#333',
        fontWeight: isActive ? 'bold' : 'normal',
        transition: 'all 0.3s ease',
        backgroundColor: isActive ? '#EAF3FF' : '#F9F9F9',
        borderRadius: '5px 5px 0 0',
        marginRight: '8px',
    };

    const hoverStyle = {
        ...tabStyle,
        backgroundColor: '#EAF3FF',
        color: '#007BFF',
    };

    return (
        <div 
            style={tabStyle}
            onClick={onClick}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EAF3FF'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = isActive ? '#EAF3FF' : '#F9F9F9'}
        >
            {name}
        </div>
    );
};

export default Tab;
