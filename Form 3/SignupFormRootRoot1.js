import React from "react";
import styled from "styled-components";

export const SignupFormRootRoot1 = ({}) => {
  return (
    <SignupFormRootRootRoot>
      <FlexColumn>
        <Istockphotox
          src={`https://file.rendit.io/n/mO1s8S7QQ5cVScgel7a6.png`}
        />
        <UltimateHrmLogo
          src={`https://file.rendit.io/n/kqv9DztDNfW6W08FhFUz.png`}
        />
      </FlexColumn>
      <WhiteFlexColumn>
        <Text1>SignUp Form</Text1>
        <FlexColumn1>
          <FlexColumn2>
            <FlexColumn3>
              <Text2>Write Password</Text2>
              <Image1
                src={`https://file.rendit.io/n/HNx0VMfslCZqZrw7Sx3h.svg`}
              />
            </FlexColumn3>
            <Image2 src={`https://file.rendit.io/n/TgAcCmG6pWZofjE1QU8A.svg`} />
          </FlexColumn2>
          <Text3>Your password must be 8 character</Text3>
        </FlexColumn1>
        <FlexRow>
          <Text4>Back</Text4>
          <NextStep>Sign Up</NextStep>
        </FlexRow>
      </WhiteFlexColumn>
    </SignupFormRootRootRoot>
  );
};

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
  height: 412px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 109px 73.5px 109px 74px;
  background-color: #ffffff;
  box-shadow: -1px 10px 25px 0px rgba(147, 147, 147, 0.25),
    1px -10px 25px 0px rgba(201, 201, 201, 0.25);
`;
const Text1 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 94px 122px;
  font-size: 20px;
  font-weight: 600;
  font-family: Inter;
  white-space: nowrap;
`;
const FlexColumn1 = styled.div`
  width: 369px;
  gap: 4.5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 0px 104px 0px;
`;
const FlexColumn2 = styled.div`
  width: 369px;
  gap: 0.5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  align-items: center;
`;
const FlexColumn3 = styled.div`
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
const Text3 = styled.div`
  margin: 0px 0px 0px 14px;
  color: #7e7e7e;
  font-size: 12px;
  font-family: Inter;
  white-space: nowrap;
`;
const FlexRow = styled.div`
  width: 301px;
  gap: 69px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 34px;
`;
const Text4 = styled.div`
  color: #757575;
  font-size: 12px;
  font-weight: 700;
  font-family: Inter;
  white-space: nowrap;
`;
const NextStep = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 20px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  white-space: nowrap;
  border-radius: 15px;
  background-color: #1678cb;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
