import React, {useState} from 'react'

export const Checkbox = () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    const item = ({ label, value, onChange }) => {
        return (
          <label>
            <input type="checkbox" 
            checked={value} 
            onChange={onChange} 
            />
            {label}
          </label>
        );
      };
}
