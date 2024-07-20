import React from 'react';

const NewsList = () => {
    const news = [
        "News Item 1",
        "News Item 2",
        "News Item 3"
    ]; // 예시 데이터

    return (
        <div className="news-list">
            <h3>럼피스킨 뉴스 목록</h3>
            <ul>
                {news.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default NewsList;
