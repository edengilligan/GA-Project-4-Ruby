import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const TimesheetEdit = () => {
  const [timesheet, setTimesheet] = useState({
    date: "",
    staff_attendance: "",
    client: "",
    travel_information: "",
    arrival_time: "",
    departure_time: "",
    products_used: "",
    receipts: "",
    notes: "",
    action_next_visit: "",
    written_by: "",
  });
  const params = useParams();
  console.log('params: ', params);
  useEffect(() => {
    fetch(`/api/timesheets/${params.id}`)
      .then((response) => response.json())
      .then(data => setTimesheet(data));
      // eslint-disable-next-line
       }, []);

  return (
    <div className= "editform">
      <h3>Edit/Delete</h3>
      <form>
      <div> 
        <label>
          Date
          <div> <input value={timesheet.date} type="text"/></div> 
        </label>
        </div>


        <div>
        <label>
          Staff Attendance
         <div> <input value={timesheet.staff_attendance} type="text"/> </div>
        </label>
        </div>
        <div>
        <label>
          Client
        <div>  <input value={timesheet.client} type="text"/> </div>
        </label>
        </div>

        <div>
        <label>
          Travel Information
         <div>  <input value={timesheet.travel_information} type="text"/> </div>
        </label>
        </div>
        <div>
        <label>
          Arrival Time
         <div>  <input value={timesheet.arrival_time} type="text"/> </div>
        </label>
        </div>
        <div>
        <label>
          Departure Time
        <div>  <input value={timesheet.departure_time} type="text"/> </div>
        </label>
        </div>

        <div> 
        <label>
          Products Used
        <div>   <input value={timesheet.products_used} type="text"/> </div>
        </label>
        </div>
        <div>
        <label>
          Receipts 
        <div>  <input value={timesheet.receipts} type="text" /> </div> 
        </label>
        </div>
        <div>
        <label>
          Notes
         <div>  <input value={timesheet.notes} type="text" /> </div>
        </label>
        </div>
        <div>
        <label>
          Action Next Visit
        <div>   <input value={timesheet.action_next_visit} type="text" /> </div>
        </label>
        </div>
        <label>
          Timesheet Written By
       <div>   <input value={timesheet.written_by} type="text" /> </div>
        </label>

<div>
        <button>
            Edit
        </button>
        
        <button>
            Delete
        </button>
        </div>
      </form>
    </div>
  );
};

export default TimesheetEdit;
