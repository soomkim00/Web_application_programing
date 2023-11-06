const { Console } = require("console");
const fs = require("fs").promises;
const fs2 = require("fs");
const readline = require("readline");

const userDataFile = "users.json"; // 사용자 정보를 저장할 파일 경로
// 입력받기 위한 모듈
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// delay 함수 완성
// setTimeout 및 Promise 활용
const delay = (ms) => {
  /* To do */
};

// 비동기 함수로 사용자 정보 읽기
// 프로미스 체이닝 및 캐치 활용
function readUserData() {
  return fs.readFile(userDataFile, "utf8").then(); /* Todo */
}

// 비동기 함수로 사용자 정보 저장 (완성되어 있음)
function saveUserData(users) {
  return new Promise((resolve, reject) => {
    fs2.writeFile(
      userDataFile,
      JSON.stringify(users, null, 2),
      "utf8",
      (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      }
    );
  });
}

// 비동기 함수로 사용자 추가
/* Todo */ function addUser(user) {
  // 사용자 정보 읽기
  // 중복 검사
  // 새 사용자 추가
  // 사용자 정보 저장
  /* Todo */
}

// 비동기 함수로 사용자 목록 출력
/* Todo */ function listUsers() {
  // 사용자 정보 읽기 및 출력
  /* Todo */
}

// 비동기 함수로 사용자 관리
async function main() {
  while (true) {
    console.log("1. 사용자 정보 읽기");
    console.log("2. 사용자 추가");

    const choice = await new Promise((resolve, reject) => {
      rl.question(
        '선택하려는 번호를 입력하세요 (또는 "q"를 입력하여 종료): ',
        resolve
      );
      if (choice == "1") {
      } else if (choice == "2") {
        // 읽기
      }
    });

    /* Todo */
  }
  rl.close();
}

main();
