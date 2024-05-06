import React, { useEffect, useState } from "react";
import CalendarDay from "./component/calendarDay";
import CalendarMonth from "./component/calendarMonth";
import CalendarYear from "./component/calendarYear";
import { getFullMonthDays } from "./utils/helpers";
import { months } from "./utils/constants/calendarLabels";

// Styles for the calendar
const styles = {
    container: {
        padding: "20px",
        maxWidth: "300px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        gap: "2em",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerCta: {
        fontWeight: "bold",
        cursor: "pointer",
        border: "none",
        background: "none",
        fontSize: "14px",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        textAlign: "center",
    },
    gridMonth: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        textAlign: "center",
        justifyItems: "center",
    },
    gridYear: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        textAlign: "center",
        justifyItems: "center",
    },
    day: {
        padding: "10px",
        cursor: "pointer",
        backgroundColor: "transparent",
        border: "none",
        height: "40px",
        width: "40px",
    },
    outOfMonthDay: {
        color: "#999",
    },
    selectedDay: {
        borderRadius: "50%",
        backgroundColor: "#db3d44",
        color: "white",
    },
    today: {
        // border: "1px solid #db3d44",
        // borderRadius: "50%",
        color: "#db3d44"
    },
    month: {
        padding: "10px",
        cursor: "pointer",
        height: "50px",
        width: "50px",
        backgroundColor: "transparent",
        border: "none",
    },
    monthSelected: {
        borderRadius: "50%",
        backgroundColor: "#db3d44",
        color: "white",
    },
    monthHover: {
        backgroundColor: "#f0f0f0",
    },
    year: {
        padding: "10px",
        cursor: "pointer",
        borderRadius: "5px",
        height: "50px",
        width: "50px",
        backgroundColor: "transparent",
        border: "none",
    },
    yearSelected: {
        borderRadius: "50%",
        backgroundColor: "#db3d44",
        color: "white",
    },
    outOfRangeYear: {
        color: "#999",
    },
};

const Calendar = ({ onSelect, selectedDate }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [view, setView] = useState("day");
    const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
    const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());

    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const today = new Date();

    const goToPreviousMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth - 1));
    };

    const goToNextMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth + 1));
    };

    const goToPreviousYear = () => {
        setCurrentDate(new Date(currentYear - 1, currentMonth));
    };

    const goToNextYear = () => {
        setCurrentDate(new Date(currentYear + 1, currentMonth));
    };

    const goToPreviousDecade = () => {
        const startYear = Math.floor(currentYear / 10) * 10;
        setCurrentDate(new Date(startYear - 10, currentMonth));
    };

    const goToNextDecade = () => {
        const startYear = Math.floor(currentYear / 10) * 10;
        setCurrentDate(new Date(startYear + 10, currentMonth));
    };

    const toggleView = () => {
        setView(view === "day" ? "month" : "year");
    };

    const handleDateSelect = (day) => {
        if (day) {
            if (onSelect) {
                onSelect(day.date);
            }
        }
    };

    const selectMonth = (month) => {
        setSelectedMonth(month);
        setCurrentDate(new Date(currentYear, month));
        setView("day");
    };

    const selectYear = (year) => {
        setSelectedYear(year);
        setCurrentDate(new Date(year, currentMonth));
        setView("month");
    };

    if (view === "day") {
        return (
            <CalendarDay
                styles={styles}
                goToPreviousMonth={goToPreviousMonth}
                goToNextMonth={goToNextMonth}
                getFullMonthDays={getFullMonthDays}
                currentMonth={currentMonth}
                currentYear={currentYear}
                toggleView={toggleView}
                currentDate={currentDate}
                today={today}
                selectedDate={selectedDate}
                handleDateSelect={handleDateSelect}
            />
        );
    }

    if (view === "month") {
        return (
            <CalendarMonth
                styles={styles}
                goToPreviousYear={goToPreviousYear}
                toggleView={toggleView}
                currentYear={currentYear}
                goToNextYear={goToNextYear}
                months={months}
                selectedMonth={selectedMonth}
                selectMonth={selectMonth}
            />
        );
    }

    if (view === "year") {
        return (
            <CalendarYear
                styles={styles}
                currentYear={currentYear}
                goToPreviousDecade={goToPreviousDecade}
                goToNextDecade={goToNextDecade}
                selectedYear={selectedYear}
                selectYear={selectYear}
            />
        );
    }

    return null;
};

export default Calendar;
