import React from 'react'
import ProfilePhoto from './ProfilePhoto';
import FullName from './FullName'
import Adress from './Address';
import './Profile.css'
const Profile = () => {
  return (
    <div className='Profile'>
        <ProfilePhoto/>
        <div className='Text'>
            <FullName/>
            <Adress/>
        </div>
    </div>
  )
}

export default Profile