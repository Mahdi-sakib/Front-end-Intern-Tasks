import React from "react";
import styled from "styled-components";

export const SignupFormRootRoot1 = ({}) => {
  return (
    <SignupFormRootRootRoot>
      <FlexColumn>
        <Istockphotox
          src={`https://file.rendit.io/n/k4qfjQn2mC8Le81A5tdI.png`}
        />
        <UltimateHrmLogo
          src={`https://file.rendit.io/n/4xFWgAdUrzGD7gtS9Vrj.png`}
        />
      </FlexColumn>
      <WhiteFlexColumn>
        <Text1>SignUp Form</Text1>
        <FlexColumn1>
          <FlexColumn2>
            <Text2>Write First Name</Text2>
            <Image1 src={`https://file.rendit.io/n/mXMmjHGlhfWlQFnsdo7F.svg`} />
          </FlexColumn2>
          <Image2 src={`https://file.rendit.io/n/Q4BaRmhzyaOE6Bd0UIGx.svg`} />
        </FlexColumn1>
        <FlexColumn3>
          <FlexColumn2>
            <Text2>Write Last Name</Text2>
            <Image1 src={`https://file.rendit.io/n/mXMmjHGlhfWlQFnsdo7F.svg`} />
          </FlexColumn2>
          <Image2 src={`https://file.rendit.io/n/Q4BaRmhzyaOE6Bd0UIGx.svg`} />
        </FlexColumn3>
        <NavyBlueFlexRow>
          <Text4>Next Step</Text4>
          <Arrow src={`https://file.rendit.io/n/KZjhN5j5b97PnGIfmRxb.svg`} />
        </NavyBlueFlexRow>
        <FlexRow>
          <AlreadyHaveAnAccount>Already have an account? </AlreadyHaveAnAccount>
          <Text5>LOGIN HERE!</Text5>
        </FlexRow>
      </WhiteFlexColumn>
    </SignupFormRootRootRoot>
  );
};

const FlexColumn2 = styled.div`
  width: 1px;
  height: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  padding: 1.5px 353px 1.5px 14.5px;
`;
const Text2 = styled.div`
  left: 15px;
  top: 0px;
  position: absolute;
  color: #b3b3b3;
  font-size: 16px;
  font-family: Inter;
  white-space: nowrap;
`;
const Image1 = styled.img`
  width: 1px;
  height: 14px;
  position: relative;
`;
const Image2 = styled.img`
  width: 370px;
  height: 1px;
  margin: 0px -0.5px;
`;
const SignupFormRootRootRoot = styled.div`
  width: 1349px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 19px 35px 11px 56px;
  background-color: #ffffff;
  overflow: hidden;
`;
const FlexColumn = styled.div`
  width: 164px;
  height: 544px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 43px 520px 43px 0px;
`;
const Istockphotox = styled.img`
  width: 612px;
  height: 437px;
  left: 72px;
  top: 91px;
  position: absolute;
`;
const UltimateHrmLogo = styled.img`
  width: 164px;
  height: 60px;
  position: relative;
`;
const WhiteFlexColumn = styled.div`
  width: 370px;
  height: 508px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 61px 72.5px 61px 74px;
  background-color: #ffffff;
  box-shadow: -1px 10px 25px 0px rgba(147, 147, 147, 0.25),
    1px -10px 25px 0px rgba(201, 201, 201, 0.25);
`;
const Text1 = styled.div`
  margin: 0px 0px 100px 122px;
  font-size: 20px;
  font-weight: 600;
  font-family: Inter;
  white-space: nowrap;
`;
const FlexColumn1 = styled.div`
  width: 369px;
  height: 20px;
  gap: 0.5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 64px 0px;
`;
const FlexColumn3 = styled.div`
  width: 369px;
  height: 20px;
  gap: 0.5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
  align-items: center;
  margin: 0px 0px 68px 0px;
`;
const NavyBlueFlexRow = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 98px 113px;
  padding: 15px 20px;
  border-radius: 15px;
  background-color: #1678cb;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const Text4 = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  white-space: nowrap;
`;
const Arrow = styled.img`
  width: 17px;
  height: 14.7px;
`;
const FlexRow = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: flex-end;
  align-items: center;
  margin: 0px 0.5px 0px 0px;
`;
const AlreadyHaveAnAccount = styled.div`
  align-self: flex-end;
  color: #7e7e7e;
  font-size: 12px;
  font-family: Inter;
  white-space: pre-wrap;
`;
const Text5 = styled.div`
  color: #1678cb;
  font-size: 14px;
  font-weight: 600;
  font-family: Inter;
  text-decoration: underline;
  white-space: nowrap;
`;
