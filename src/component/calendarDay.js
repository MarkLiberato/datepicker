import { useEffect } from "react";
import { daysLabel } from "../utils/constants/calendarLabels";

const CalendarDay = ({
    styles,
    goToPreviousMonth,
    goToNextMonth,
    getFullMonthDays,
    currentMonth,
    currentYear,
    toggleView,
    currentDate,
    today,
    selectedDate,
    handleDateSelect,
}) => {
    const days = getFullMonthDays(currentMonth, currentYear);

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <button onClick={goToPreviousMonth} style={styles.headerCta}>
                    {"<"}
                </button>
                <button onClick={toggleView} style={styles.headerCta}>
                    {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
                </button>
                <button onClick={goToNextMonth} style={styles.headerCta}>
                    {">"}
                </button>
            </div>

            <div style={styles.grid}>
                {daysLabel.map((day, index) => (
                    <div key={index} style={{ fontWeight: "bold" }}>
                        {day}
                    </div>
                ))}

                {days.map((dayInfo, index) => (
                    <button
                        key={index}
                        style={{
                            ...styles.day,
                            ...(dayInfo.isInCurrentMonth ? {} : styles.outOfMonthDay),
                            ...(dayInfo.date?.toDateString() === today?.toDateString() ? styles.today : {}),
                            ...(selectedDate && dayInfo.date?.toDateString() === selectedDate.toDateString()
                                ? styles.selectedDay
                                : {}),
                        }}
                        onClick={() => handleDateSelect(dayInfo)}
                    >
                        {dayInfo.date.getDate()}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CalendarDay;
