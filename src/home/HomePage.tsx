import { Logo } from '@/components/Logo';
import styled from '@emotion/styled';
import React from 'react';

import { ConnectButton } from '@rainbow-me/rainbowkit';

const HomePage = () => {
  return (
    <Container>
      <NavigationBar>
        <ConnectButton />
      </NavigationBar>
      <Logo width="342px" height="92px" />
      <h1 style={{ display: 'none' }}>Gomblaster: Mobile Game Profit Share</h1>
      <Title>
        Congratulations!! <br />
        You are eligible.
      </Title>
      <Box>
        <Token>
          200 <span className="tick">{`$GBLST`}</span>
        </Token>
        <Address>0x0000</Address>
        <CTA>Claim</CTA>
      </Box>
    </Container>
  );
};

export default HomePage;

const NavigationBar = styled.nav`
  position: fixed;
  top: 0;
  padding: 32px 32px;
  right: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 137px 20px 161px;
  min-height: 100vh;
  height: 100%;
`;
const Title = styled.h2`
  margin: 56px 0 56px;
  font-weight: 800;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #a8a8a8;
`;
const Box = styled.div`
  max-width: 342px;
  padding: 32px;
  width: 100%;
  flex-shrink: 0;

  border-radius: 9px;
  background: #eaeaea;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Token = styled.span`
  color: #5979ec;
  text-align: center;
  font-size: 26px;
  font-weight: 900;
  line-height: 28px; /* 107.692% */

  span.tick {
    color: #313131;
    font-size: 26px;
    font-weight: 900;
    line-height: 28px;
  }
`;
const Address = styled.span`
  padding: 14px 0 24px;
  color: #313131;
  text-align: center;
  font-size: 22px;
  font-weight: 400;
  line-height: 28px; /* 127.273% */
`;
const CTA = styled.button`
  width: 210px;
  height: 66px;
  flex-shrink: 0;

  border-radius: 8px;
  background: #5979ec;

  color: #f1f1f1;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 116.667% */
  outline: 0;
  border: 0;
`;
