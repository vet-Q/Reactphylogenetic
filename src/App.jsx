import React from 'react';
import './index.css';
import TotalIncidents from './components/TotalIncidents';
import TodayIncidents from './components/TodayIncidents';
import TotalDeaths from './components/TotalDeaths';
import NewsList from './components/NewsList';
import PhyloTree from './components/phyloTree';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';

const App = () => {
    return (
        <div className="app-container">
            <div className="header">
                <TotalIncidents />
                <TodayIncidents />
                <TotalDeaths />
                <NewsList />
            </div>
            <div className="charts">
                <PhyloTree />
                <BarChart />
                <LineChart />
            </div>
        </div>
    );
};

export default App;
