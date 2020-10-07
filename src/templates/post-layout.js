import React from 'react';
import { graphql } from 'gatsby';
import { Container, Text } from '@chakra-ui/core';

const PostLayout = ({data}) => {
    const {title, content} = data.collectionPosts;
    return (
        <Container maxW="100ch" centerContent>
            <Text as="h1" fontSize="2xl" my={5}>{title}</Text>
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
        }
    }
`;