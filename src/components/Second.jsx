import React, { useState } from "react";
import styled from "styled-components";
import { FaFileArchive } from "react-icons/fa";
import { laptop, tablet } from "../responsive";
const Container = styled.div`
  width: 100vw;
  height: 400px;
  background-image: url("https://ld-wp73.template-help.com/wordpress/prod_11363/v2/wp-content/uploads/2019/08/home-7.jpg");
  background-position: top left;
  background-size: cover;
  position: relative;
  ${laptop({ backgroundPosition: " center" })}
  display: flex;
  justify-content: right;
  margin-top: 50px;
  ${tablet({ justifyContent: "center" })}
  transition: all 0.2s ease;
`;
const Wrapper = styled.div`
  position: absolute;
  width: 50%;
  margin-right: 10%;
  margin-top: 60px;
  ${tablet({ width: "90vw", marginRight: "0px" })}
  font-family: "Montserrat", sans-serif;
`;
const UpperText = styled.div`
  color: #ffffff;
  font-family: "Montserrat", Sans-serif;
  font-size: 32px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1.344em;
  ${laptop({ fontSize: "25px" })}
`;
const LowerText = styled.div`
  color: #ffffff;
  font-family: "Montserrat", Sans-serif;
  font-size: 18px;
  ${laptop({ fontSize: "13px" })}
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1.344em;
  margin-top: 20px;
`;
const Btn = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fe8a01;
  width: 230px;
  height: 50px;
  font-family: "Montserrat", Sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 24px;
  letter-spacing: 0.48px;
  fill: #ffffff;
  color: #ffffff;
  border-radius: 2px 2px 2px 2px;
  padding: 13px 21px 13px 21px;
  margin-top: 30px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
`;
const Second = () => {
  const [archiveObject, setArchiveObject] = useState({
    style: {
      fontSize: "10px",
      color: "white",
    },
  });
  return (
    <Container>
      <Wrapper>
        <UpperText>
          ARE YOU TIRED OF SPENDING HOURS MOWING YOUR LAWN EVERY WEEKEND?
        </UpperText>
        <LowerText>
          TAKE BACK YOUR FREE TIME BY HAVING US TAKE CARE OF YOUR GARDEN
        </LowerText>
        <Btn
          onMouseEnter={() =>
            setArchiveObject({
              style: {
                fontSize: "10px",
                color: "black",
              },
            })
          }
          onMouseLeave={() =>
            setArchiveObject({
              style: {
                fontSize: "10px",
                color: "white",
              },
            })
          }
        >
          <FaFileArchive style={archiveObject.style} />
          MAKE AN APPOINTMENT
        </Btn>
      </Wrapper>
    </Container>
  );
};

export default Second;
