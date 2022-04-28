import React, { useState } from 'react';
import { Form, Row , Col, Button, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const AddSong = ({postSong}) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newSong = {
            title : title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre
        }
        postSong(newSong)
    }
        ;

    return ( 
        <div className='fixed-bottom'>
            <Card body>
                <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                            <Form.Control placeholder="Song Title" onChange={(event) => setTitle(event.target.value)} value={title}/>
                            </Col>
                            <Col>
                            <Form.Control placeholder="Artist" onChange={(event) => setArtist(event.target.value)} value={artist}/>
                            </Col>
                            <Col>
                            <Form.Control placeholder="Album" onChange={(event) => setAlbum(event.target.value)} value={album}/>
                            </Col>
                            <Col>
                            <Form.Control placeholder="2022-04-20" onChange={(event) => setReleaseDate(event.target.value)} value={release_date}/>
                            </Col>
                            <Col>
                            <Form.Control placeholder="Genre" onChange={(event) => setGenre(event.target.value)} value={genre}/>
                            </Col>
                            <Col xs="auto" className="my-1">
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
            </Card>
        </div>
     );
}
 
export default AddSong;