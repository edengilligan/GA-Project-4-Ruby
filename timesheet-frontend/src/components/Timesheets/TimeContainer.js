import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Timesheets from "./Timesheets";
import TImesheetEdit from "./TImesheetEdit";


const TimeContainer = () => {
  const [timesheets, setTimesheets] = useState([]);
  const [timesheetEdit, setTimesheetEdit] = useState({
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
  const [timesheetDelete, setTimesheetDelete] = useState({
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

  const handleTimeFormSubmit = (name, time, notes, completed) => {
    const newTime = {
        date: date,
        staff_attendance: staff_attendance,
        client: client,
        travel_information: travel_information,
        arrival_time: arrival_time,
        departure_time: departure_time,
        products_used: products_used,
        receipts: receipts,
        notes: notes,
        action_next_visit: action_next_visit,
        written_by: written_by,
    };
    console.log(newTime);
    const newTimesheets = [...timesheets];
    newTimesheets.push(newTime);

    setTimesheets(newTimesheets);

    fetch("http://localhost:3000/api/timesheets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTime),
    }).then((response) => {
      console.log("use clases: response:", response);
    });
  };
  useEffect(() => {
    fetch("http://localhost:3000/api/timesheets", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((timesheets) => {
        console.log("timesheets:", timesheets);
        setTimesheets(timesheets);
      });
  }, []);
  const handleTimesheetClick = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/api/timesheets/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((timesheetData) => {
        console.log("timesheetData:", timesheetData);
        setTimesheetEdit(timesheetData);
        setTimesheetDelete(timesheetData);
      });
  };

  const handleDelete = (id) => {
    const newTimesheets = timesheets.filter((el) => {
      if (el._id !== id) {
        return true;
      } else {
        return false;
      }
    });
    setTimesheets(newTimesheets);
    console.log(newTimesheets);
  };

  const handleEditTimesheet = (updatedTimesheet) => {
    console.log("handleEditTimesheet:", updatedTimesheet);
    const foundTimesheet = timesheets.findIndex((timeEl) => {
      console.log("timeEl:", timeEl);
      return timeEl._id === timesheets._id;
    });
    console.log("foundTimesheet:", foundTimesheet);
    const newTimesheets = [...timesheets];
    newTimesheets[foundTimesheet] = timesheets;
    setTimesheets(newTimesheets);
    const url = `http://localhost:3000/api/timesheets/${updatedTimesheet._id}`;
    console.log(url);
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTimesheet),
    }).then((response) => {
      console.log("PATCH response:", response); // to refresh page add a .then here and then a fetch to fetch like avove and then set the state of timesheets
    });
  };

  const handleDeleteTimesheet = (deletedTimesheet) => {
    console.log("handleDeleteTimesheet:", deletedTimesheet);
    const foundTimesheet = timesheets.findIndex((timeEl) => {
      console.log("timeEl:", timeEl);
      return timeEl._id === timesheets._id;
    });
    console.log("foundTimesheet:", foundTimesheet);
    const newTimesheets = [...timesheets];
    newTimesheets[foundTimesheet] = timesheets;
    setTimesheets(newTimesheets);
    const url = `http://localhost:3000/api/timesheets/:${deletedTimesheet._id}`;
    console.log(url);

    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deletedTimesheet),
    }).then((response) => {
      console.log("DELETE response:", response);
    });
  };

  return (
    
    <div> <h1>Timesheets</h1> 
    <ul>
    {timesheets.map((el, index) => (
    <button key={index} onClick={() => { handleTimesheetClick(el._id);}}>{el.client}</button>))}
    </ul>
              
      <Timesheets submit={handleTimeFormSubmit} timesheet={timesheets} />
              
      <TimesheetEdit
        submit={handleEditTimesheet}
        onDelete={handleDelete}
        timesheet={timesheetEdit}
      />
      {/* <TimeFormDelete
        submit={handleDeleteTimesheet}
        timesheet={timesheetDelete}
      />
            */}
    </div>
  );
};
export default TimeContainer;