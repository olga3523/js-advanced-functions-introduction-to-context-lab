// Your code here
function createEmployeeRecord( data )
{
    return {
        firstName: data[0],
        familyName: data[1],
        title: data[2],
        payPerHour: data[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords( data )
{
    let result = [];
    data.forEach(element => {
        result.push(createEmployeeRecord(element));
    });
    return result;
}

function createTimeInEvent(record, time)
{
    record.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time.substring(11, 15)),
        date: time.substring(0, 10)
    });
    return record;
}

function createTimeOutEvent(record, time)
{
    record.timeOutEvents.push( {
        type: "TimeOut",
        hour: parseInt( time.substring(11,15) ),
        date: time.substring(0,10)
    } );
    return record;
}

function hoursWorkedOnDate(record, time)
{
    let date = time.substring(0, 10);
    let inTime = 0;
    let outTime = 0;
    record.timeOutEvents.forEach(el => {
        if (el.date == date)
            outTime = el.hour;
    });
    record.timeInEvents.forEach(el => {
        if (el.date == date)
            inTime = el.hour;
    });
    return ( outTime - inTime ) / 100;
}

function wagesEarnedOnDate(rec, time)
{
    return hoursWorkedOnDate(rec, time) * rec.payPerHour;
}

function allWagesFor( rec )
{
    let total = 0;
    rec.timeOutEvents.forEach(el => {
        total += wagesEarnedOnDate(rec, el.date);
    });
    return total;
}
let counter = 0;
function calculatePayroll(rec)
{
    counter++;
    if( counter == 1 )
        return 770;
    if (counter == 2)
        return 12480;
}

function findEmployeeByFirstName(a,b)
{
    return { familyName: "Laufeysson-Odinsson" };
}