import React, { useState } from 'react';;
import UserTable from '../userTable/UserTable';
import UserInput from '../userInput/UserInput';

const UserForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [users, setUsers] = useState([]);

    const onSubmit = (data) => {
        setUsers([...users, data]);
        reset();
    };

    const handleDelete = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
    };

    const handleClear = () => {
        setUsers([]);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <UserInput label="Name" register={register} required={true} errors={errors.name} />
                <UserInput label="Username" register={register} required={true} errors={errors.username} />
                <UserInput label="Email" register={register} required={true} errors={errors.email} />
                <UserInput label="Phone" register={register} required={true} errors={errors.phone} />
                <UserInput label="Website" register={register} required={false} />

                <button type="submit">Создать</button>
                <button type="button" onClick={handleClear}>Очистить таблицу</button>
            </form>

            <UserTable users={users} onDelete={handleDelete} />
        </div>
    );
};

export default UserForm;
