import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Comment } from '../comment';

const Kommentek = () => {

    const [comments, setComments] = useState([] as Comment[]);

    async function load() {
        try {
            const response = await fetch('http://localhost:3000/api/comments');
            if (!response.ok) {
                console.log('hiba a letöltéskor')
                return;
            }
            const data = await response.json() as Comment[];
            setComments(data);
        } catch (error) {
            console.log('Hiba2')
        }

    };

    useEffect(() => {
        load();
    }, []);

    return (
        <div>
            {comments.map(comment =>
                <div className='row'>
                    <div className='col-3 mt-1'><img src={comment.avatar} /></div>
                    <div className='col-9 '><p><a href="mailto:{comment.email}">{comment.email}</a></p>
                        <p>{comment.content}</p>
                    </div>


                </div>
            )}
        </div>
    );
};

export default Kommentek;

