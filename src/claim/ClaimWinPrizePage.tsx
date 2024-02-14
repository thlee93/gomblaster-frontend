import styled from '@emotion/styled';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { NextPage } from 'next';
import React, { useCallback, useEffect, useState } from 'react';
import { useAccount, useWriteContract } from 'wagmi';

import { Logo } from '@/components/Logo';
import { ABI } from '@/utils/abi';
import { CONTRACT_ADDRESS } from '@/utils/config';

const shortenAddress = (address: string | null | undefined) => {
  if (!address) return '';
  return address.slice(0, 6) + '...' + address.slice(-4);
};

const ClaimWinPrizePage: NextPage = () => {
  const { address } = useAccount();
  const { writeContractAsync } = useWriteContract();

  const [tokenAmount, setTokenAmount] = useState<string>('400');

  // TODO: 컨트랙트에서 _userInfoMap[user].winAmount 반환하는 claimableWinPrize 구현해야 함. 완료 후, @utils/abi.ts 업데이트 한 다음 아래 코드 주석 해제하면 됨.
  // const result = useReadContract({
  //   abi: ABI,
  //   address: CONTRACT_ADDRESS,
  //   functionName: 'claimableWinPrize',
  //   args: [address],
  // });
  const result = { data: null };

  useEffect(() => {
    if (!!result.data) {
      // TODO: DECIMALS 맞나 확인:
      setTokenAmount((result.data / 10n ** 18n).toLocaleString());
    }
  }, [result.data]);

  const onClickCTA = useCallback(async () => {
    try {
      const tx = await writeContractAsync({
        abi: ABI,
        address: CONTRACT_ADDRESS,
        functionName: 'claim',
        args: [address],
      });
      window.alert(tx);
    } catch (e) {
      window.alert(e.message);
    }
  }, [address, writeContractAsync]);

  return (
    <Container>
      <NavigationBar>
        <ConnectButton />
      </NavigationBar>
      <Logo width="342px" height="92px" />
      <h1 style={{ display: 'none' }}>Gomblaster: Mobile Game Profit Share</h1>
      <Title>
        Congratulations!! <br />
        You are the Winner!!
      </Title>
      <Box>
        <Token>
          {tokenAmount} <span className="tick">{`$USDT`}</span>
        </Token>
        <Address>
          {!address ? 'Connect Account' : shortenAddress(address)}
        </Address>
        <CTA onClick={onClickCTA}>Claim</CTA>
      </Box>
    </Container>
  );
};

export default ClaimWinPrizePage;

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
