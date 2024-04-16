import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from "react-router-dom";

function SideNavv() {
  const navigate = useNavigate();
  return (
    <SideNav
      onSelect={(selected) => {
        console.log(selected);
        navigate(`/${selected}`);
      }}
      className="sidenav"
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="targets">
          <NavIcon>
            <i
              className="fa fa-fw fa-bullseye"
              style={{ fontSize: "1.75em" }}
            />
          </NavIcon>
          <NavText>Targets</NavText>
        </NavItem>
        <NavItem eventKey="statistics">
          <NavIcon>
            <i
              className="fa fa-fw fa-chart-line"
              style={{ fontSize: "1.75em" }}
            />
          </NavIcon>
          <NavText>Statistics</NavText>
        </NavItem>
        <NavItem eventKey="profile">
          <NavIcon>
            <i className="fa fa-fw fa-user" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Profile</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

export default SideNavv;
