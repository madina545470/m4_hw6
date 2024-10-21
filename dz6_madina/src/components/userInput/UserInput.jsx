import React from 'react';

const UserInput = ({ label, register, required, errors }) => {
    return (
        <div>
            <label>{label}:</label>
            <input {...register(label.toLowerCase(), { required })} />
            {errors && <span>This field is required</span>}
        </div>
    );
};

export default UserInput;
