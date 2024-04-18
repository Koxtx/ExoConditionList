export default function OneTeam({ team }) {
  return (
    <div
      className="m-20"
      style={{
        width: "250px",
        height: "250px",
        color: "black",
        backgroundColor: "white",
        borderRadius: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        fontSize: "20px",
      }}
    >
      <h5 style={{ paddingTop: "10px", margin: "0", paddingLeft: "10px" }}>
        CITY : <span style={{ color: "orange" }}>{team.name}</span>
      </h5>
      <h5 style={{ paddingTop: "10px", margin: "0", paddingLeft: "10px" }}>
        Name : <span style={{ color: "orange" }}>{team.club}</span>
      </h5>
      <div
        className={"flex-fill"}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "250px",
          height: "100px",
          paddingTop: "10px",
        }}
      >
        <img src={team.logo} alt="" style={{ width: "100px" }} />
      </div>
    </div>
  );
}
