import React from "react";
import { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import { Link } from "react-router-dom";

function UserReg() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    // event.preventDefault();
    alert(`Form Submitted ✅ `);
  }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('form submitted ✅');
  // }
  
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <><IndexNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div className="page-header-image"
          style={{backgroundImage: "url(" + require("assets/img/UserRegi.jpg") + ")"
          }}></div>
          <div className="content">
          
            <Col className="ml-auto mr-auto" md="6">
              <Card className="card-login card-plain">
                <Form action="\BackEnd\routers\alien" className="form" method="post" onSubmit={handleSubmit}>
                  <h3><b>Register your new Account</b></h3>
                   <InputGroup className={"no-border input-lg" +(firstFocus ? " input-group-focus" : "")}
                    ><InputGroupAddon addonType="prepend">
                     <InputGroupText> <i className="RegName"></i></InputGroupText>
                    </InputGroupAddon>
                      <Input
                        placeholder="Name"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        name="RegName"
                        id="RegName"
                        
                      ></Input> 
                      
                    </InputGroup>
                    <InputGroup className={"no-border input-lg" +(firstFocus ? " input-group-focus" : "")}
                    ><InputGroupAddon addonType="prepend">
                     <InputGroupText> <i className="RegAddress1"></i></InputGroupText>
                    </InputGroupAddon>
                      <Input
                        placeholder="Address line 1"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        name="add1"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup className={"no-border input-lg" +(firstFocus ? " input-group-focus" : "")}
                    ><InputGroupAddon addonType="prepend">
                     <InputGroupText> <i className="RegAddress2"></i></InputGroupText>
                    </InputGroupAddon>
                      <Input
                        placeholder="Address line 2"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        name="add2"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                      
                    </InputGroup>
                    <InputGroup className={"no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="District" ></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="select"
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      >
                      
                      <option selected value="Dis" style={{color: "black"}}>District</option>
                      <option value="tvm" style={{color: "black"}}>Thiruvananthapuram</option>
                      <option value="klm" style={{color: "black"}}>Kollam</option>
                      <option value="Pathanamthitta" style={{color: "black"}}>Pathanamthitta</option>
                      <option value="Alappuzha" style={{color: "black"}}>Alappuzha</option>
                      <option value="Kottayam" style={{color: "black"}}>Kottayam</option>
                      <option value="Idukki" style={{color: "black"}}>Idukki</option>
                      <option value="Ernakulam" style={{color: "black"}}>Ernakulam</option>
                      <option value="Thrissur" style={{color: "black"}}>Thrissur</option>
                      <option value="Palakkad" style={{color: "black"}}>Palakkad</option>
                      <option value="Malapuram" style={{color: "black"}}>Malapuram</option>
                      <option value="Kozhikode" style={{color: "black"}}>Kozhikode</option>
                      <option value="Wayanad"style={{color: "black"}}>Wayanad</option>
                      <option value="Kannur"style={{color: "black"}}>Kannur</option>
                      <option value="Kasargod"style={{color: "black"}}>Kasargod</option>
                    </Input>
                    </InputGroup>
                  
                    <InputGroup className={"no-border input-lg" +(firstFocus ? " input-group-focus" : "")}
                    ><InputGroupAddon addonType="prepend">
                     <InputGroupText> <i className="RegPhno"></i></InputGroupText>
                    </InputGroupAddon>
                      <Input
                        placeholder="Phone Number"
                        id="phNumber"
                        type="Text"
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup className={"no-border input-lg" +(firstFocus ? " input-group-focus" : "")}
                    ><InputGroupAddon addonType="prepend">
                     <InputGroupText> <i className="RegEmail"></i></InputGroupText>
                    </InputGroupAddon>
                      <Input
                        placeholder="Email ID"
                        type="Text"
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="Password"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="RegConfimpassword"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Confirm Password"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setLastFocus(true)}

                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>
                  <CardFooter className="text-center"> 
                  {/* <NavLink
              className="changeowner"
              activeClassName="is-active"
              to="/ThankYou" tag={Link}
              exact
              > */}
	            
                <Button
                  type="submit"
                    block
                    className="btn-round"
                    color="info"
                    
                    size="lg"
                  >Get Started
                  </Button> 
                  {/* </NavLink> */}
                   </CardFooter> 
                  {/* </form> */}
                </Form>
              </Card>
            </Col>
          
        </div>
      </div>
    </>
  );
}

export default UserReg;
