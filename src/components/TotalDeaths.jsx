import React from 'react';

const TotalDeaths = () => {
    const totalDeaths = 789; // 예시 데이터

    return (
        <div className="total-deaths">
            <h3>총 폐사두수</h3>
            <p>{totalDeaths}</p>
        </div>
    );
};

export default TotalDeaths;
