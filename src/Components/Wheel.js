import React from 'react'
import Data from '../Data/Data';
export default function Wheel() {
    return (
    <div>
        {
            Data.map((data, index) => (
                <li key={index}>{data.Name}</li>
            ))
        }
    </div>
  )
}
