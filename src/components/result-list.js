import React, { useContext } from 'react';
import UsersContext from './../constants/users.js';
import {BiUserCircle} from 'react-icons/bi';

export function ResultList(props) {
    const { users } = useContext(UsersContext);

    const maxValue = Math.max(...Object.values(users).map(user => user.yearsOfExperience)).toString();

    return (
        <div className="flex flex-col">
            <h3 className="text-3xl font-bold text-gray-800 mb-5 text-center">Users List</h3>

            {users && Object.keys(users).length > 1 && (
                <p className='text-center mb-4'>Below is a list of our users. The user with the most experience is marked in red.</p>
            )}

            {users && Object.keys(users).length > 0 ? (
                <ol className="list-decimal text-left">
                    {Object.keys(users).map((key, index) => (
                        <li key={index} 
                            className={Object.keys(users).length > 1 && users[key].yearsOfExperience === maxValue ? 'text-red-600' : ''}>
                            <BiUserCircle className="inline-block mb-1 mr-1" />
                            {users[key].firstName} {users[key].lastName} <strong>{users[key].yearsOfExperience}</strong>
                        </li>
                    ))}
                </ol>
            ) : (
                <p className='text-center'>No users found.</p>
            )}
        </div>
    )
}

export default ResultList;