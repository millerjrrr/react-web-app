import styled from "styled-components";
import { User } from "types/UserTypes";

const CardContainer = styled.div.attrs({
  className: "bg-black br3 flex flex-row ma3",
})`
  box-shadow: 0 0 8px rgba(255, 255, 255, 1);
`;

const Item = (props: { width?: number; item: string }) => {
  return (
    <div className="tl" style={{ width: props.width }}>
      <p className="ph3">{props.item}</p>
    </div>
  );
};

const UserCard = ({
  user: { username, email, lastPlayed },
}: {
  user: User;
}) => {
  const date = lastPlayed.split("T")[0];

  return (
    <CardContainer>
      <Item width={300} item={username} />
      <Item width={300} item={email} />
      <Item item={date} />
    </CardContainer>
  );
};

export default UserCard;
