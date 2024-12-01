import client from "./../api/client";

const fetchData = async () => {
  try {
    const { data } = await client.get("/api/v1/admin/send-users");
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export default fetchData;
