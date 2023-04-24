import { Button, Tab, Tabs } from "react-bootstrap";
import Fooldal from "./fooldal";
import Idopont from "./idopont";
import Tapasztalat from "./tapasztalat";
import Nav from 'react-bootstrap/Nav';

export default function Navbar() {
    return(
      <div>
        
      <Nav
      activeKey="/fooldal"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >a
    </Nav>
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
      
    >
      <Tab eventKey="home" title={<Nav.Link href="/fooldal">Főoldal</Nav.Link>}>
        <Fooldal />
      </Tab>
      
      <Tab eventKey="profile" title={<Nav.Link href="/tapasztalat">Szakmai tapasztalat</Nav.Link>}>
        <Tapasztalat />
      </Tab>
      <Tab eventKey="contact" title={<Nav.Link href="/idopont">Időpont foglalás</Nav.Link>}>
        <Idopont />
      </Tab>
    </Tabs>
    </div>
    )
}
