import React from "react";
import styled from "styled-components";

export const AttendenceTableRootRoot1 = ({}) => {
  return (
    <AttendenceTableRootRootRoot>
      <FlexRow>
        <UltimateHrmLogo
          src={`https://file.rendit.io/n/zc4oHVrpVMsj9v0QBhlW.png`}
        />
        <FlexColumn>
          <NavyBlueFlexColumn>
            <Text1>Attendance information</Text1>
          </NavyBlueFlexColumn>
        </FlexColumn>
      </FlexRow>
      <FlexRow1>
        <FlexColumn1>
          <Text2>Date</Text2>
          <Text3>11/7/16</Text3>
          <Text4>2/11/12</Text4>
          <Text5>4/21/12</Text5>
          <Text5>8/15/17</Text5>
          <Text7>6/19/14</Text7>
          <Text5>6/21/19</Text5>
          <Text9>5/19/12</Text9>
          <Text10>5/7/16</Text10>
        </FlexColumn1>
        <FlexColumn2>
          <FlexColumn3>
            <Text11>Employee Name</Text11>
            <Text12>Arlene McCoy</Text12>
            <Text13>Eleanor Pena</Text13>
            <Text14>Wade Warren</Text14>
            <Text14>Jacob Jones</Text14>
            <Text16>Darlene Robertson</Text16>
            <Text14>Floyd Miles</Text14>
            <Text14>Ralph Edwards</Text14>
            <Text19>Leslie Alexander</Text19>
          </FlexColumn3>
        </FlexColumn2>
        <FlexColumn4>
          <Text20>Status</Text20>
          <Text21>Present</Text21>
          <Text22>Absent</Text22>
          <Text23>Present</Text23>
          <Text24>Absent</Text24>
          <Text25>Present</Text25>
          <Text26>Absent</Text26>
          <Text23>Present</Text23>
          <Text28>Present</Text28>
        </FlexColumn4>
      </FlexRow1>
    </AttendenceTableRootRootRoot>
  );
};

const Text5 = styled.div`
  width: 64.8px;
  margin: 0px 0px 65px 0px;
  font-size: 15px;
  font-family: Roboto;
`;
const Text14 = styled.div`
  margin: 0px 0px 65px 0px;
  color: #22262f;
  font-size: 15px;
  font-family: Roboto;
  white-space: nowrap;
`;
const Text23 = styled.div`
  margin: 0px 0px 60px 0px;
  font-size: 15px;
  font-family: Roboto;
  white-space: nowrap;
`;
const AttendenceTableRootRootRoot = styled.div`
  width: 1202px;
  height: 1048px;
  gap: 79px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 49px 182px 49px 56px;
  background-color: #ffffff;
  overflow: hidden;
`;
const FlexRow = styled.div`
  width: 904px;
  height: 145px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
  align-items: flex-start;
  padding: 0px 298px 0px 0px;
`;
const UltimateHrmLogo = styled.img`
  width: 164px;
  height: 60px;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
`;
const NavyBlueFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 17px 42px 18px 55px;
  border-radius: 5px;
  background-color: #1678cb;
`;
const Text1 = styled.div`
  width: 383px;
  height: 37px;
  color: #ffffff;
  font-size: 36px;
  font-weight: 600;
  font-family: Roboto;
`;
const FlexRow1 = styled.div`
  width: 1075px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;
const FlexColumn1 = styled.div`
  height: 651px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 417px 0px 0px;
`;
const Text2 = styled.div`
  width: 38.9px;
  align-self: flex-start;
  margin: 0px 0px 46px 0px;
  font-size: 16px;
  font-weight: 500;
  font-family: Roboto;
`;
const Text3 = styled.div`
  width: 64.8px;
  margin: 0px 0px 64px 0px;
  font-size: 15px;
  font-family: Roboto;
`;
const Text4 = styled.div`
  width: 64.8px;
  margin: 0px 0px 53px 0px;
  font-size: 15px;
  font-family: Roboto;
`;
const Text7 = styled.div`
  width: 63.7px;
  align-self: flex-start;
  margin: 0px 0px 65px 0px;
  font-size: 15px;
  font-family: Rubik;
`;
const Text9 = styled.div`
  width: 62.5px;
  align-self: flex-start;
  margin: 0px 0px 65px 0px;
  font-size: 15px;
  font-family: Rubik;
`;
const Text10 = styled.div`
  width: 54.2px;
  align-self: flex-start;
  font-size: 15px;
  font-family: Rubik;
`;
const FlexColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  margin: 0px 417px 0px 0px;
`;
const FlexColumn3 = styled.div`
  width: 124px;
  height: 657px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Text11 = styled.div`
  margin: 0px 0px 46px 0px;
  font-size: 16px;
  font-weight: 500;
  font-family: Roboto;
  white-space: nowrap;
`;
const Text12 = styled.div`
  margin: 0px 0px 64px 0px;
  color: #22262f;
  font-size: 15px;
  font-family: Roboto;
  white-space: nowrap;
`;
const Text13 = styled.div`
  margin: 0px 0px 59px 0px;
  color: #22262f;
  font-size: 15px;
  font-family: Roboto;
  white-space: nowrap;
`;
const Text16 = styled.div`
  align-self: stretch;
  margin: 0px 0px 65px 0px;
  color: #22262f;
  font-size: 15px;
  font-family: Roboto;
  white-space: nowrap;
`;
const Text19 = styled.div`
  color: #22262f;
  font-size: 15px;
  font-family: Roboto;
  white-space: nowrap;
`;
const FlexColumn4 = styled.div`
  height: 641px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Text20 = styled.div`
  align-self: flex-end;
  margin: 0px 2px 45px 0px;
  font-size: 16px;
  font-weight: 500;
  font-family: Roboto;
  white-space: nowrap;
`;
const Text21 = styled.div`
  margin: 0px 0px 64px 0px;
  font-size: 15px;
  font-family: Roboto;
  white-space: nowrap;
`;
const Text22 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 60px 0px;
  font-size: 15px;
  font-family: Roboto;
  white-space: nowrap;
`;
const Text24 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 54px 0px;
  font-size: 15px;
  font-family: Roboto;
  white-space: nowrap;
`;
const Text25 = styled.div`
  margin: 0px 0px 65px 0px;
  font-size: 15px;
  font-family: Roboto;
  white-space: nowrap;
`;
const Text26 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 70px 0px;
  font-size: 15px;
  font-family: Roboto;
  white-space: nowrap;
`;
const Text28 = styled.div`
  font-size: 15px;
  font-family: Roboto;
  white-space: nowrap;
`;
