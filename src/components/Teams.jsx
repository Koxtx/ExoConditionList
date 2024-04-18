import OneTeam from "./OneTeam";

export default function Teams({ teams, person }) {
  return person.ages <= 17 ? (
    <div
      style={{
        color: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2> Vous devez être majeur </h2>
    </div>
  ) : (
    <div
      style={{
        color: "white",
        backgroundColor: "#0b0b3d",
      }}
    >
      <h4
        style={{
          color: "black",
          backgroundColor: "white",
          padding: "15px",
        }}
      >
        Welcome {person.prenom} !
      </h4>
      <div style={{ padding: "7px", paddingTop: "15px" }}>
        <h4>Conférence Est</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            fontStyle: "italic",
          }}
        >
          {teams
            .filter((team) => team.conference === "Est")
            .map((team, index) => (
              <OneTeam team={team} key={team.id} />
            ))}
        </div>

        <h4>Conférence Ouest</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            fontStyle: "italic",
            fontSize: "20px",
          }}
        >
          {teams
            .filter((team) => team.conference === "Ouest")
            .map((team, index) => (
              <OneTeam team={team} key={team.id} />
            ))}
        </div>
      </div>
    </div>
  );
}
