import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

import "/Users/rohan/Downloads/paper-dashboard-pro-react-v1.3.2/src/assets/css/ro.css";

function AdminNavbar() {
  const [selectedOption, setSelectedOption] = useState("IoT Weather Station");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <Navbar color="light" light expand="md">
      <UncontrolledDropdown>
        <DropdownToggle caret color="success" id="dropdownMenuButton" type="button">
          {selectedOption}
        </DropdownToggle>

        <DropdownMenu aria-labelledby="dropdownMenuButton">

          <DropdownItem onClick={() => handleOptionSelect("MCA Weather Station")}>
            MCA Weather Station
          </DropdownItem>

          <DropdownItem onClick={() => handleOptionSelect("Computer Science Weather Station")}>
            Computer Science Weather Station
          </DropdownItem>

          <DropdownItem onClick={() => handleOptionSelect("Mechanical Weather Station")}>
            Mechanical Weather Station
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Navbar>
  );
}

export default AdminNavbar;
