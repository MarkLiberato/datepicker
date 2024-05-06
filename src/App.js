import React, { useEffect, useState } from "react";
import Calendar from "./calendar";
import "./app.css";

const App = () => {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false); // Tracks if the calendar is open
    const [inputValue, setInputValue] = useState(""); // The current value of the input field
    const [selectedDate, setSelectedDate] = useState(null); // The currently selected date

    const toggleCalendar = () => {
        setIsCalendarOpen(!isCalendarOpen); // Toggle the calendar open/closed
    };

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based, add 1
        const day = String(date.getDate()).padStart(2, "0"); // Pad with zero for single-digit days

        // Combine into ISO format
        const isoDate = `${year}-${month}-${day}`;
        
        return isoDate;
    };

    const handleInputChange = (e) => {
        const newInputValue = e.target.value;
        setInputValue(newInputValue); // Update the input field value

        const parsedDate = new Date(newInputValue); // Parse the user input
        if (!isNaN(parsedDate) && newInputValue === formatDate(parsedDate)) {
            // Check valid format
            setSelectedDate(parsedDate); // Update the selected date
        } else {
            setSelectedDate(null); // If invalid, reset selected date
        }
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date); // Update the selected date
        setInputValue(formatDate(date)); // Update the input field with the selected date
        setIsCalendarOpen(false); // Close the calendar after date selection
    };

    return (
        <div style={{ position: "relative" }}>
            <input
                type="text"
                value={inputValue} // Display the current input value
                onChange={handleInputChange} // Allow manual input
                onClick={toggleCalendar} // Open calendar on click
                style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            />

            {isCalendarOpen && (
                <div
                    style={{
                        position: "absolute",
                        top: "40px", // Position below the input field
                        left: "0",
                        background: "white",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        zIndex: 10, // Ensure the calendar appears above other content
                    }}
                >
                    {/* Pass the selected date to the calendar */}
                    <Calendar selectedDate={selectedDate} onSelect={handleDateSelect} />
                </div>
            )}
        </div>
    );
};

export default App;
