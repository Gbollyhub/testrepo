import React, { useState}  from 'react'
import AddUser from './addUser'
import EmptyData from '../../components/ui/emptyData/emptyData'
export default function Users({admin, updateUserList, searchArray}) {
  const [ addUser, setaddUser] = useState(false)

  
    const toggleaddUser = () => {
      addUser ? setaddUser(false) :  setaddUser(true)
    }
  
    
      return (
      <>
       { addUser ? <AddUser updateUserList = {updateUserList} closeModal = {toggleaddUser} /> : null  }

          <div className="content-header">Users</div>
      <div className="content-sub">Here are the list of users</div>
      <div className="app-table-actions">
        <div className="app-table-search">
        <input onChange={searchArray} type="text" className="app-input-search w-input"  placeholder="Search..." id="name" />
          </div>
          <div className="app-table-buttons">
             <div style={{cursor:'pointer'}} onClick={toggleaddUser}  className="table-button filter">Add New User<span className="table-button-icon"></span></div>
          </div>
      </div>
      <div>
      {
                        admin.length <= 0 ? <EmptyData/> :
      <table className="app-table2">
                                  <thead>
                                      <tr className="app-table2-row">
                                     <th className="app-table2-header"><input type = "checkbox" /></th>
                                     <th className="app-table2-header">Username</th>
                                    <th className="app-table2-header">Email Address</th>
                                    <th className="app-table2-header">Phone Number</th>
                                    <th className="app-table2-header">Roles</th>
                                    <th className="app-table2-header">Last seen</th>
                                    <th className="app-table2-header">Status</th>
                                  </tr>
                                  </thead>
                                  <tbody>

                                    {
                                      admin.map( result => {
                                        return(
                                     <tr key={result.id} className="app-table2-row">
                                          <td className="app-table2-data"><input type = "checkbox" /></td>
                                          <td style={{textTransform: 'capitalize'}} className="app-table2-data">{result.username}</td>
                                        <td className="app-table2-data">{result.emailAddress}</td>
                                        <td className="app-table2-data">{result.phoneNumber}</td>
                                        <td className="app-table2-data">{result.roleName}</td>
                                        <td className="app-table2-data">{result.lastLoginDate}</td>
                                        { result.active == 1 ? 
                                          <td className="app-table2-data table-active">Active</td> 
                                        : 
                                        <td className="app-table2-data table-inactive">Inactive</td>
                                        }
                                  </tr>
                                        )
                                      })
                                    }
                                    
                                  </tbody>
                                  
                                  
                                  </table>
}
      </div>
    </>
    )
}