export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  picture: {
    large: string,
    medium: string,
    thumbnail: string
  }
}
