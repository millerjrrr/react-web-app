import { useEffect, useState } from "react";
import HeaderContainer from "./components/HeaderContainer";
import UsersList from "./components/UsersList";
import fetchData from "../../utils/fetchData";
import { DataState } from "../../types/UserTypes";

const Users = () => {
  const [data, setData] = useState<DataState>({
    results: 0,
    users: [{ username: "Loading", email: "Loading", lastPlayed: "Loading" }],
  });
  const { results, users } = data;

  const saveData = async () => {
    try {
      const fetchedData = await fetchData();
      setData(fetchedData);
      console.log(fetchedData.results);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    saveData();
  }, []);

  return (
    <div className="tc">
      <HeaderContainer results={results} />
      <UsersList users={users} />
    </div>
  );
};

export default Users;
