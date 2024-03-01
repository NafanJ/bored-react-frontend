import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BoredHeader() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAIVBMVEVro/9ro/9qo//////u9P51qf+ewf7a5v7A1v6syv6JtP7aklagAAAAAnRSTlPJMqR88L8AAACrSURBVCiRjdNbDoQgDAVQpLcPuv8FjyggCJjphyE5KcUWwhHiJsIRHvNkask7bcailOP05Fy0ooBawHxA7iznS49KNOuN/LZTueDCSL2gYEZIwTQbkfyT6Qv8OhC8/cpcNCfWJkxVre+QG27PX8B4aPw5MQXyTKzN7UE2XOfvx91WV1nlDV4VNxiNttuKmvuQN96EFOMG9b1nQxYRS7xGByaJ9eKy2dK+nsMPDVQJHbZBLnUAAAAASUVORK5CYII="
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Bored API
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BoredHeader;