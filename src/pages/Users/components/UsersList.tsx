import UserCard from "./UserCard";
import Scroll from "components/Scroll";
import { User } from "types/UserTypes";

const UsersList = ({ users }: { users: Array<User> }) => {
  return (
    <Scroll>
      {users.map((user) => (
        <UserCard key={user.email} user={user} />
      ))}
    </Scroll>
  );
};

export default UsersList;
