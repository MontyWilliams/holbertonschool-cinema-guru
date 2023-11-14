import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon from Font Awesome


export default function Button({label, className, onClick, icon}) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
  {icon && (
    <FontAwesomeIcon icon={icon} className="button-icon" />
  )}
  {label}
</button>
  )
}
