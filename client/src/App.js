import React from 'react'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'


import { ChannelListContainer, ChannelContainer, Auth } from './components'

import './App.css'

const cookies = new Cookies()

const apiKey = 'p4jsyfegebat'
const authToken = cookies.get('token')

const client = StreamChat.getInstance(apiKey)

if (authToken) {
    client.connectUser({
        id: cookies.get('userId'),
        fullName: cookies.get('fullName'),
        name: cookies.get('username'),
        image: cookies.get('avatarURL'),
        hashedPassword: cookies.get('hashedPassword'),
        phoneNumber: cookies.get('phoneNumber'),
    }, authToken)
}

function App() {

    if (!authToken) return <Auth />

    return (
        <div className='app__wrapper'>
            <Chat client={client} theme="team light">
                <ChannelListContainer
                />
                <ChannelContainer
                />
            </Chat>
        </div>
    )
}

export default App