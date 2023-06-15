/* eslint-disable no-unused-vars */
import React from 'react';

const DropDownMenu = () => {
    return(
        <div className="App">
        <Dropdown onSelect={this.change}>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            Dropdown Menu
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item value="1">Option 1</Dropdown.Item>
            <Dropdown.Item value="2">Option 2</Dropdown.Item>
            <Dropdown.Item value="3">Option 3</Dropdown.Item>
            <Dropdown.Item value="4">Option 4</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

    )}

    
export default DropDownMenu;
