# KMLA Friends fixed version

수정 내용:
1. Google 로그인 코드 제거
2. Firebase Anonymous Auth로 통일
3. participant.html과 room.html 로그인 상태 공유
4. admin.html에서 질문 저장 가능하도록 자동 익명 로그인 처리
5. firebase.js에 collection, getDocs, serverTimestamp, randomPairCode 추가
6. 오늘의 질문 저장 위치 통일: settings/todayQuestion
7. 참가자 저장 위치 통일: users/{uid}
8. 매칭 저장 위치 통일: pairs/{pairCode}

배포 전 반드시 할 것:
1. firebase.js의 apiKey를 네 Firebase Console 값으로 바꾸기
2. Firebase Console → Authentication → Sign-in method → Anonymous 활성화
3. Firebase Console → Firestore Database → Rules에 firestore.rules.txt 내용 적용
4. Netlify에 이 폴더 전체를 다시 업로드
