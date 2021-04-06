import React, { useEffect, useState } from "react";

const TimeFormEdit = (props) => {
  console.log(props);

  const [formState, setFormState] = useState({
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

  useEffect(() => {
    setFormState(props.timesheet);
    console.log("useEffect edit");
  }, [props.timesheet]);

  const handleChange = (e) => {
    const newState = { ...formState };
    newState[e.target.name] = e.target.value;
    setFormState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    props.submit(formState);
  };

  const handleDelete = () => {
    // e.preventDefault();
    props.onDelete(formState._id);
    fetch(`/api/timesheets/${formState._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((timesheetData) => {
        console.log("timesheetData:", timesheetData);
     
      });
  };

  return (
    <div className="editform">
      <h3>Edit/Delete</h3>
      <form onSubmit={handleSubmit}>
      
      <div>
        <label>
        <div className="datetxt">Date</div> 
          <input
            name="date"
            value={formState.date}
            onChange={handleChange}
          ></input>
        </label>
        </div>

        <div>
        <label>
        <div className="stafftxt">Staff Attendance</div> 
          <input
            name="staff"
            value={formState.staff_attendance}
            onChange={handleChange}
          ></input>
        </label>
        </div>


        <div>
        <label>
        <div className="traveltxt">Travel Information</div> 
          <input
            name="travel"
            value={formState.travel_information}
            onChange={handleChange}
          ></input>
        </label>
        </div>

        <div>
        <label>
        <div className="arrivaltxt">Arrival Time</div> 
          <input
            name="arrival"
            value={formState.arrival_time}
            onChange={handleChange}
          ></input>
        </label>
        </div>

        <div>
        <label>
        <div className="departuretxt">Departure Time</div> 
          <input
            name="departure"
            value={formState.departure_time}
            onChange={handleChange}
          ></input>
        </label>
        </div>

        <div>
        <label>
        <div className="productstxt">Products Used</div> 
          <input
            name="arrival"
            value={formState.products_used}
            onChange={handleChange}
          ></input>
        </label>
        </div>

        <div>
        <label>
        <div className="receiptstxt">Receipts</div> 
          <input
            name="receipts"
            value={formState.receipts}
            onChange={handleChange}
          ></input>
        </label>
        </div>

        <div>
        <label>
        <div className="notestxt">Notes</div> 
          <input
            name="notes"
            value={formState.notes}
            onChange={handleChange}
          ></input>
        </label>
        </div>

        <div>
        <label>
        <div className="actiontxt">Action Next Visit</div> 
          <input
            name="action"
            value={formState.action_next_visit}
            onChange={handleChange}
          ></input>
        </label>
        </div>

       <div>
        <label>
        <div className="writtentxt">Written By</div> 
          <input
            name="written"
            value={formState.written_by}
            onChange={handleChange}
          ></input>
        </label>
        </div>

        <div>
          <button type="submit">Edit</button>

          <button onClick={handleDelete} >Delete</button>
        </div>
      </form>
    </div>
  );
};

export default TimeFormEdit; 
