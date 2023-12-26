import './Header.css';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <p class="logo">ShiftFlex </p>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <p class="nav-link">Shifts</p>
            </li>
            <li>
              <p class="nav-link">Employees</p>
            </li>
            <li>
              <p class="nav-link">Patients</p>
            </li>
            <li>
              <p class="nav-link">Medication</p>
            </li>
            <li>
              <p class="nav-link">Supplies</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
