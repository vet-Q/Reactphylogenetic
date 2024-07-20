import React from 'react';

const TotalIncidents = () => {
    const totalIncidents = 1234; // 예시 데이터

    return (
        <div className="total-incidents">
            <h3>총 발생건수</h3>
            <p>{totalIncidents}</p>
        </div>
    );
};

export default TotalIncidents;
