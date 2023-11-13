import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css'


export default function Input({ label, type, className, value, setValue, icon, inputAttributes }) {
  return (
    <div className={`input-container ${className}`}>
  <label>
    {icon && (
      <FontAwesomeIcon icon={icon} className="input-icon" />
    )}
    {label}:
    <input
      type={type}
      value={value}
     
      {...inputAttributes}
    />
  </label>
</div>
  )
}



