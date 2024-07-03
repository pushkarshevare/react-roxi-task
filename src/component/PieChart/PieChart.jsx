import React from "react";
import {Chart as ChartJS} from "chart.js/auto";
import {Pie } from "react-chartjs-2";
import './style.css'


const PieChart = ({data}) => {
    const categories = [
        { label: "men's clothing" },
        { label: "women's clothing"},
        { label: "electronics"},
        { label: "jewelery"}
    ];
    
    const soldData = categories.map(category => {
        const count = data.filter(item => item.category === category.label).length;
        return count;
    });
    const labels = categories.map(category => category.label);
    
    return (
        <div className="piechart">
            <Pie
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: "Overall Categories Sold",
                            data: soldData,
                            backgroundColor: [
                                "rgba(231,198,255.8)",
                                "rgba(250,192,19,0.8)",
                                "rgba(187,208,255,0.8)",
                                "rgba(13,192,135,0.8)",
                                ],
                            borderRadius: 5
                        },
                    ],
                }}
            />
        </div>    
    )
    
}

export default PieChart
