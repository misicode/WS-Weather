export default function FormatDate(props) {
    const DAYS = {
        "0": "Sunday",
        "1": "Monday",
        "2": "Tuesday",
        "3": "Wednesday",
        "4": "Thursday",
        "5": "Friday",
        "6": "Saturday",
    };
    const ORDER_DAYS = {
        "1": "1st",
        "2": "2nd",
        "3": "3rd",
        "4": "4th",
        "5": "5th",
        "6": "6th",
        "7": "7th",
        "8": "8th",
        "9": "9th",
        "10": "10th",
        "11": "11th",
        "12": "12th",
        "13": "13th",
        "14": "14th",
        "15": "15th",
        "16": "16th",
        "17": "17th",
        "18": "18th",
        "19": "19th",
        "20": "20th",
        "21": "21st",
        "22": "22nd",
        "23": "23rd",
        "24": "24th",
        "25": "25th",
        "26": "26th",
        "27": "27th",
        "28": "28th",
        "29": "29th",
        "30": "30th",
        "31": "31st",
    };
    const MONTHS = {
        "0": "January",
        "1": "February",
        "2": "March",
        "3": "April",
        "4": "May",
        "5": "June",
        "6": "July",
        "7": "August",
        "8": "September",
        "9": "October",
        "10": "November",
        "11": "December",
    };

    return (
        <>
            <h6>Today</h6>
            <h4 id="date">{ DAYS[props.date.getDay()] }, { ORDER_DAYS[props.date.getDate()] } { MONTHS[props.date.getMonth()] } { props.date.getFullYear() }</h4>
        </>
    );
}  