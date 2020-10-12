import React from "react";
import {
  Flex,
  Container,
  Link,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/core";
import { graphql, Link as GatsbyLink } from "gatsby";

const Index = ({ data }) => {
  const posts = data.allCollectionPosts.nodes;

  return (
    <Container h="100vh" centerContent>
      <Flex
        direction="column"
        h="100%"
        w="100%"
        align="center"
        justify="center"
      >
        <Text as="h1" fontSize="6xl" mb={6}>
          Statamic Blog
        </Text>
        <UnorderedList>
          {posts.map((post) => (
            <ListItem>
              <Link as={GatsbyLink} to={post.slug}>
                {" "}
                To {post.slug}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
      </Flex>
    </Container>
  );
};

export default Index;

export const query = graphql`
  query IndexQuery {
    allCollectionPosts(sort: { fields: [title], order: ASC }) {
      nodes {
        slug
        title
        content
        images {
          permalink
        }
      }
    }
  }
`;
