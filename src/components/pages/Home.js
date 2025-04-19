import React from "react";
import { getAllPost } from "../../redux/postsRedux";
import { useSelector } from "react-redux";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
    const posts = useSelector(state => getAllPost(state));

    return (
        <>
            <Stack direction="horizontal" className="mb-4">
                <h1 className="me-auto">All posts</h1>
                <Link to="/post/add" className="btn btn-outline-primary">Add post</Link>
            </Stack>
            <Container>
                <Row>
                    {posts.map(post =>(
                    <Col md="4" key={post.id} className="mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <p className="mb-2">
                                    <strong>Author: </strong>{post.author}
                                    <br/>
                                    <strong>Published: </strong>{post.publishedDate}
                                </p>
                                <Card.Text>{post.shortDescription}</Card.Text>
                                <Link to={`/post/${post.id}`} className="btn btn-primary">Read more</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Home;