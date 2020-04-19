import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

function HeaderNewsSmall(props) {
    const { posts, category } = props;

    const filteredPosts = posts.filter(item => item.category === category);

    const storiesItems = filteredPosts.map((item, index) => {
        if (index > 3) {
            return null;
        } else
            return (
                <Col sm={12} md={3} key={item.id} data-aos="zoom-in" data-aos-duration="1000">
                    <article className='header-news-small'>
                        <div className="wrap">
                            <Image src={require('./../../images' + item.image)} fluid />
                            <div className="category">
                                <a href={`/${item.category}`}>{item.category}</a>
                            </div>
                        </div>
                        <h4><a href="someUrl">{item.title}</a></h4>
                        <div className="summary">{item.brief}</div>
                    </article>
                </Col>
            )
    })

    return (
        <Row className='header-news'>
            {storiesItems}
        </Row>
    )
}

export default HeaderNewsSmall;