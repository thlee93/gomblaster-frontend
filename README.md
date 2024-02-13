# gomblaster-frontend

```bash
yarn # 의존성 설치
yarn dev # 개발 서버 시작하기
```

## TODOs

1. 컨트랙트를 `blastSepolia` 네트워크에 배포한 뒤, 컨트랙트 주소를 `@/utils/config.ts` 에 넣기
2. 컨트랙트에서 `_userInfoMap[user].winAmount` 반환하는 `claimableWinPrize` query 구현
3. `claimableWinPrize` 구현 완료 후, `@/utils/abi.ts` 를 업데이트 한 다음, `@/claim/ClaimWinPrizePage.tsx` 의 주석 해제. 이와 동시에 `const result = { data: null };` 문 제거
