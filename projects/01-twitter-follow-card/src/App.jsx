import React from 'react'
import'./App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName:"reactjs",
        name:"React",
        isFollowing: true
     },
     {
        userName:'vuejs',
        name:'Vue',
        isFollowing: false
     },
     {
        userName:"angular",
        name:"Angular",
        isFollowing: true
     },
]

export function App(){
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing}) => {
                    
                    return(
                        <TwitterFollowCard 
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}

                            >
                                {name}
                        </TwitterFollowCard>
                    )
                })
            }
            
        </section>
    )
}