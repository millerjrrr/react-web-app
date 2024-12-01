export interface User {
  username: string;
  email: string;
  lastPlayed: string;
}

export interface DataState {
  results: number;
  users: User[];
}
