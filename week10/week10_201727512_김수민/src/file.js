// 필요한 모듈 가져오기

// write 함수, name과 id를 인자로 받아서 data 폴더 내 현재 timestamp 값을 이름으로 하는 파일을 생성 후 name과 id를 json형태로 기록 후 timestamp 값을 return한다.
async function write(name, id) {
    // 현재 시간 받아오기
    // 현재 시간을 이름으로 하는 경로 생성하기

        // json 파일에 쓰기 위한 포맷(객체) 구성

        // name, id를 key로 하여 데이터 구성

        // json 파일에 써준다.

        // 그리고 ID의 역할을 할 timestamp를 반환한다.

        // error 발생 시 error 반환
}

// read 함수, timestamp를 인자로 받아, timestamp에 해당하는 파일을 찾아 읽는다. 해당 파일이 없다면 오류를 반환한다.
async function read(timestamp) {
    // 인자로 받은 timestamp를 이용 해 파일 경로를 설정한다.

    // 이 때 파일이 있다면 읽는다.

        // 파일 읽기

        // 반환한다.

        // 파일을 제대로 읽어오지 못했다면

        // error를 반환한다.

}

// deleteFile함수, 원래 delete라는 이름으로 하려 했으나, 중복된다는 이유로 deleteFile로 하였다.
async function deleteFile(timestamp) {
    // deleteFile 역시 지울 파일의 이름을 인자로 받고 파일 경로를 설정한다.

        // 파일의 존재 여부를 체크한다.

        // 존재 한다면 지운다.

        // 파일을 제대로 삭제할 수 없었다면

        // error를 반환한다.

}

// 앞 서 만든 함수를 export 한다.

