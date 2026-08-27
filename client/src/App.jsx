import React from "react";
import Login from "./pages/Login";
import ChatBox from "./pages/ChatBox";
import Connections from "./pages/Connections";
import Discover from "./pages/Discover";
import Feed from "./pages/Feed";
import { Route, Routes } from "react-router-dom";
import Message from "./pages/Message";
import Profiles from "./pages/Profiles";
import CreatePost from "./pages/CreatePost";
import {toast,Toaster} from 'react-hot-toast'
import {useUser} from "@clerk/react"
import Layout from "./pages/Layout";
const App =()=>{
  const {user}=useUser()
  return (
    <>
    <Toaster />
      <Routes>
        <Route path='/' element={!user ? <Login />: <Layout/> }>
        <Route index element={<Feed/>}/>
        <Route path='messages' element={<Message/>}/>
        <Route path='messages/:userId' element={<ChatBox/>}/>
        <Route path='connections' element={<Connections/>}/>
        <Route path='discover' element={<Discover/>}/>
        <Route path='profile' element={<Profiles/>}/>
        <Route path='profile/:userId' element={<Profiles/>}/>
        <Route path='create-post' element={<CreatePost/>}/>
      </Route>
      </Routes>
    </>

  )
}
export default App;