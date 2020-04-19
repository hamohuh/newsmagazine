import React, { useState, useEffect } from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import data from './../../js/data.json';


function EditorsPick(props) {
    const [editorsPickPosts, setEditorsPickPosts] = useState([]);

    useEffect(() => {
        const editorsPickPosts = data.posts;
        setEditorsPickPosts(editorsPickPosts);
    }, [])

    const editorsPickPostsItems = editorsPickPosts.map((item, index) => {
        if (index > 7) return null;
        else
            return (
                <Col md={6} lg={3} key={item.id} data-aos="zoom-in-up">
                    <article>
                        <div className="wrap">
                            <div className="category">
                                <a href="/us">{item.category}</a>
                            </div>
                            <Image src={require('./../../images' + item.image)} fluid />
                        </div>
                        <h4><a href="someUrl">{item.title}</a></h4>
                        <div className="summary">{item.brief}</div>
                    </article>
                </Col>
            )
    })

    return (
        <section className="editirs-pick-body">
            <div className="editirs-pick-heading">
                <span className="ic"></span>
                <span className="ic1">EDITOR'S PICK</span>
            </div>
            <Row className="first-row">
                {editorsPickPostsItems}
            </Row>
        </section>
    )
}

export default EditorsPick;