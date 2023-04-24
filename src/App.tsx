import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <div style={{display: "flex", flexDirection: "column", gap: 10, margin: 15}}>
                    <Link to={'/users'}>Пользователи</Link>
                    <Link to={'/todos'}>ToDo</Link>
                </div>
                <Routes>
                    <Route path="/users" element={<UsersPage/>}/>
                    <Route path="/todos" element={<TodosPage/>}/>
                    <Route path="/users/:id" element={<UserItemPage/>}/>
                    <Route path="/todos/:id" element={<TodoItemPage/>}/>
                </Routes>
                {/*<List items={users} renderItem={(user:IUser) => <UserItem user={user} key={user.id}/>} />*/}
            </div>
        </BrowserRouter>

    );
};

export default App;