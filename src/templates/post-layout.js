import React from 'react';
import { graphql } from 'gatsby';
import { Container, Text, Image  } from '@chakra-ui/core';

const PostLayout = ({data}) => {
    const {title, content, images} = data.collectionPosts;
    const {permalink} = images[0];
        return (
        <Container maxW="100ch" centerContent>
            <Text as="h1" fontSize="2xl" my={5}>{title}</Text>
            <Image my={6} src={permalink} alt={title}/>
            <Text as="p" dangerouslySetInnerHTML={{ __html: content }} />
        </Container>
    )
}

export default PostLayout;

export const query = graphql`
    query PostBySlug($slug: String!) {
        collectionPosts(slug: {eq: $slug}) {
            content
            title
            slug
            images {
                permalink
            }
        }
    }
`;