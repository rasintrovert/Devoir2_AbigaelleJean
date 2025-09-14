import React from "react";
import "./InfoCard.css";

function InfoCard({ title, value, valueSuffix, badge, description }) {
    return (
        <div className="info-card">
            <h3 className="card-title">{title}</h3>
            <div className="value-container">
                <div className="value-text">
                    <span className="value-number">{value}</span>
                    {valueSuffix && <span className="value-suffix">{valueSuffix}</span>}
                </div>
                <span className={`badge ${badge === "⏱" ? "badge-grey" : "badge-green"}`}>
                    {badge}
                </span>
            </div>
            {description && <p className="description">{description}</p>}
        </div>
    );
}

export default InfoCard;

