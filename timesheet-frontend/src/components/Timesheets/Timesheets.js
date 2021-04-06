import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Timesheets = () => {
  const [timesheets, setTimesheets] = useState([]);
  useEffect(() => {
    fetch("/api/timesheets")
      .then((response) => response.json())
      .then((data) => setTimesheets(data));
  }, []);
  return (
    <div>
      <h2>Timesheets</h2>
      <ul>
        {timesheets.map((element) => (
          <button key={element.id}>
            <Link to={`/timesheets/edit/${element.id}`}>{element.client}</Link>
          </button>
        ))}
      </ul>

      <div className="editform">
        <h3>Add Timesheet</h3>
        <form>
          <div>
            <label>
              Date
              <div>
                {" "}
                <input type="text" />
              </div>
            </label>
          </div>

          <div>
            <label>
              Staff Attendance
              <div>
                {" "}
                <input type="text" />
              </div>
            </label>
          </div>
          <div>
            <label>
              Client
              <div>
                {" "}
                <input type="text" />
              </div>
            </label>
          </div>

          <div>
            <label>
              Travel Information
              <div>
                {" "}
                <input type="text" />
              </div>
            </label>
          </div>
          <div>
            <label>
              Arrival Time
              <div>
                <input type="text" />
              </div>
            </label>
          </div>
          <div>
            <label>
              Departure Time
              <div>
                <input type="text" />
              </div>
            </label>
          </div>

          <div>
            <label>
              Products Used
              <div>
                <input type="text" />
              </div>
            </label>
          </div>
          <div>
            <label>
              Receipts
              <div>
                <input type="text" />
              </div>
            </label>
          </div>
          <div>
            <label>
              Notes
              <div>
                {" "}
                <input type="text" />
              </div>
            </label>
          </div>
          <div>
            <label>
              Action Next Visit
              <div>
                <input type="text" />
              </div>
            </label>
          </div>
          <label>
            Timesheet Written By
            <div>
              <input type="text" />
            </div>
          </label>

          <div>
            <button>Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Timesheets;
