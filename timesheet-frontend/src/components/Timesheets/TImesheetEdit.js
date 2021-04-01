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
    fetch(`/timesheets/${params.id}`)
      .then((response) => response.json())
      .then(data => setTimesheet(data));
  }, []);

  return (
    <div>
      <h3>Edit/Delete</h3>
      <form>
        <label>
          Date
          <input value={timesheet.date} />
        </label>

        <label>
          Staff Attendance
          <input value={timesheet.staff_attendance} />
        </label>

        <label>
          Client
          <input value={timesheet.client} />
        </label>

        <label>
          Travel Information
          <input value={timesheet.travel_information} />
        </label>

        <label>
          Arrival Time
          <input value={timesheet.arrival_time} />
        </label>

        <label>
          Departure Time
          <input value={timesheet.departure_time} />
        </label>

        <label>
          Products Used
          <input value={timesheet.products_used} />
        </label>

        <label>
          Receipts 
          <input value={timesheet.receipts} />
        </label>

        <label>
          Notes
          <input value={timesheet.notes} />
        </label>

        <label>
          Action Next Visit
          <input value={timesheet.action_next_visit} />
        </label>

        <label>
          Timesheet Written By
          <input value={timesheet.written_by} />
        </label>

        <button>
            Edit
        </button>

        <button>
            Delete
        </button>

      </form>
    </div>
  );
};

export default TimesheetEdit;
