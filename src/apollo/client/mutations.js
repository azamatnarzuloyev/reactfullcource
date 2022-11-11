import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation SignInMutation($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      user {
        id
        name
        email
      }
    }
  }
`;

export const SIGN_UP = gql`
  mutation SignUpMutation($name: String!, $email: String!, $password: String!) {
    signUp(input: { name: $name, email: $email, password: $password }) {
      user {
        id
        name
        email
      }
    }
  }
`;



export const CREATE_PRODUCT = gql`
  mutation createProduct(
    $name: String!,
    $description: String!,
    $img_url: String!,
    $price: String!,
    $rating: String!,
    $category_id: Int!
    ) {
    createProduct(input: {
    name: $name,
    description: $description,
    img_url: $img_url,
    price: $price,
    rating: $rating,
    category_id: $category_id,
    }) {
      Product {
        id
        name
        description
        img_url
        price
        rating
        createdAt
        updatedAt
        user_id
      }
    }
  }
`;
