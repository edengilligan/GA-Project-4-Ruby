import { useEffect, useState} from "react"
import { Link } from "react-router-dom"; 

const Timesheets = () => {
    const [timesheets, setTimesheets] = useState([])
    useEffect(() => {
fetch('/api/timesheets').then(response => response.json()).then(data => setTimesheets(data))
    },[])
    return <div>
        <h2>Timesheets</h2>
       <ul>
        {
            timesheets.map(element => <li key={element.id}><Link to={`/timesheets/edit/${element.id}`}>{element.client}</Link></li>)
        }
        </ul>
    </div>
}

export default Timesheets