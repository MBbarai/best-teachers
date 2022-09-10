import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Teacher from '../Teacher/Teacher';
import './Teachers.css'

const Teachers = () => {
          const [teachers , setTeachers]= useState([]);
          useEffect(()=>{
                    fetch('./teachers.JSON')
                    .then(res => res.json())
                    .then(data => setTeachers(data))
          }, [])
          return (
                    <div className='teachers-component'>
                        <div className='single-teacher'>
                            
                              {
                              teachers.map(teacher=> <Teacher teacher={teacher}></Teacher>)
                               }
                        </div>
                        <div>
                              <h3>Teachers Added:</h3>
                        </div>   
                    </div>
          );
};

export default Teachers;