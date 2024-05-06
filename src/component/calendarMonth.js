const CalendarMonth = ({
    styles,
    goToPreviousYear,
    toggleView,
    currentYear,
    goToNextYear,
    months,
    selectedMonth,
    selectMonth,
}) => {
    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <button onClick={goToPreviousYear} style={styles.headerCta}>
                    {"<"}
                </button>
                <button onClick={toggleView} style={styles.headerCta}>
                    {currentYear} {/* Clickable, to go to year view */}
                </button>
                <button onClick={goToNextYear} style={styles.headerCta}>
                    {">"}
                </button>
            </div>

            <div style={styles.gridMonth}>
                {months.map((month, index) => (
                    <button
                        key={index}
                        style={{
                            ...styles.month,
                            ...(index === selectedMonth ? styles.monthSelected : {}),
                        }}
                        onClick={() => selectMonth(index)}
                    >
                        {month}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CalendarMonth;
