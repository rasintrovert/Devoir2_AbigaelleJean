import React from "react";
import "./ProgressCard.css";

function ProgressCard({ title, value, description, progressType }) {
    const percent = parseFloat(value);

    const match = description.match(/(\d+)/);
    let formattedDescription;

    if (match) {
        const number = match[0];
        const parts = description.split(number);
        formattedDescription = (
            <>
                {parts[0]}
                <span className="number">{number}</span>
                {parts[1]}
            </>
        );
    } else {
        formattedDescription = description;
    }

    return (
        <div className="progress-card">
            <div className="progress-info">
                <h3>{title}</h3>
                <p className="value">{value}</p>
                <p className="description">{formattedDescription}</p>
            </div>

            <div className="progress-circle">
                {progressType === "ring" ? (
                    <svg viewBox="0 0 36 36">
                        <path
                            className="bg"
                            d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                            className="progress"
                            strokeDasharray={`${percent}, 100`}
                            d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <circle
                            className="progress-dot"
                            cx="18"
                            cy="2.0845"
                            r="1.5"
                        />
                    </svg>
                ) : (
                    <svg viewBox="0 0 36 36">
                        <circle
                            className="dot-bg"
                            cx="18"
                            cy="18"
                            r="15.9155"
                        />
                        <circle
                            className="dot-progress"
                            cx="18"
                            cy="18"
                            r="3"
                        />
                    </svg>
                )}
            </div>
        </div>
    );
}

export default ProgressCard;

