import React from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { Container, Text, Image, Link, Flex } from "@chakra-ui/core";

const PostLayout = ({ data, pageContext }) => {
  const { title, content, images } = data.collectionPosts;
  const { permalink } = images[0];
  const { previous, next } = pageContext;

  return (
    <Container maxW="100ch" centerContent>
      <Text as="h1" fontSize="2xl" my={5}>
        {title}
      </Text>
      <Image my={6} src={permalink} alt={title} />
      <Text as="p" dangerouslySetInnerHTML={{ __html: content }} />
      <Flex mt={6} w="100%" borderTop="solid 1px" p={3}>
        <Flex w="100ch" justify="space-evenly">
          {previous && (
            <Link as={GatsbyLink} to={`/${previous.slug}`}>
              Previous: {previous.title}
            </Link>
          )}

          {next && (
            <Link as={GatsbyLink} to={`/${next.slug}`}>
              Next: {next.title}
            </Link>
          )}
        </Flex>
      </Flex>
    </Container>
  );
};

export default PostLayout;

export const query = graphql`
  query PostBySlug($slug: String!) {
    collectionPosts(slug: { eq: $slug }) {
      content
      title
      slug
      images {
        permalink
      }
    }
  }
`;
