import { Logo } from '@/components/Logo';
import styled from '@emotion/styled';
import Link from 'next/link';

const HomePage = () => {
  return (
    <Container>
      <Logo width="342px" height="92px" />
      <h1 style={{ display: 'none' }}>Gomblaster: Mobile Game Profit Share</h1>

      <ul
        style={{
          marginTop: 48,
          display: 'flex',
          flexDirection: 'column',
          listStyleType: 'disc',
          fontSize: 28,
          gap: 16,
        }}
      >
        <li>
          <Link href="/claim/interest">Claim Interest</Link>
        </li>
        <li>
          <Link href="/claim/win-prize">Claim Win Prize</Link>
        </li>
      </ul>
    </Container>
  );
};
export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 137px 20px 161px;
  min-height: 100vh;
  height: 100%;
`;
