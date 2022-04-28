import React, { useState, useEffect } from 'react';
import { Form, Row , Col, Button } from 'react-bootstrap';


const AddSong = (props) => {


    return ( 
        <div>
           <Form>
                <Row>
                    <Col>
                    <Form.Control placeholder="Song Title" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Artist" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Album" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Release Date" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Genre" />
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </div>
     );
}
 
export default AddSong;