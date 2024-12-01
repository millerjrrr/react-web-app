const HeaderContainer = ({ results }: { results: number }) => {
  return (
    <div className="flex justify-between">
      <h1>User Monitoring</h1>
      <h1>{results}</h1>
    </div>
  );
};

export default HeaderContainer;
