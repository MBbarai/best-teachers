import React from 'react';
import './Teacher.css'

const Teacher = (props) => {
          console.log(props.teacher)
          const {Name,country,img,salary,born}=props.teacher
          return (
                    <div>
                          <div className='teacher-component'>
                              <img className='image' src={img} alt="" />
                              <div className='different-color'>
                              <h2>Name:{Name}</h2>
                              <h3>Born:{born}</h3>
                              <h3>Country:{country}</h3>
                              <p>Salary:{salary}</p>
                              </div>
                              <button>Add to cart</button>
                          </div>    
                    </div>
          );
};

export default Teacher;