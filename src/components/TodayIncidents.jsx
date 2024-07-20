import React from 'react';

const TodayIncidents = () => {
    const todayIncidents = 56; // 예시 데이터

    return (
        <div className="today-incidents">
            <h3>금일 발생건수</h3>
            <p>{todayIncidents}</p>
        </div>
    );
};

export default TodayIncidents;
