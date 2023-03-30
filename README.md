# Endpoints

```JavaScript
POST :8000/auth/signup // 회원가입 Endpoint
POST :8000/auth/signin // 로그인 Endpoint
```

# npm install

Repository를 클론 받은 후에는 server 구동에 필요한 package들이 존재하지 않는 상태이기 때문에 이에 대한 작업이 필요합니다.

```shell
$ npm i
```

위 명령어를 통해 package.json에 명시되어 있는 package들과 그에 맞는 버전들을 손쉽게 설치 할 수 있습니다.

# dotenv

본인 환경에 맞는 `.env` 파일을 생성해야 합니다. 현재 Repository에서 DataSource 객체를 만들 때 사용되는 값과 맞춰 `.env`에 작성해야 합니다.

```
DATABASE_URL="mysql://root:password@127.0.0.1:3306/db_name"

DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=db_password
DB_NAME=db_name

PORT=3000
JWT_SECRET=jwt-secret
```

# 참고

- `.env.sample`을 참고하여 직접 `.env`를 생성해야 올바르게 코드가 동작합니다!
- 해당 Repository에는 여러분들이 아직 직접 구현해보지 못한 기능(Bcrypt를 활용한 Password 암호화, JWT 등)이 있을 수 있습니다.
- 따라서 실습을 진행하면서 발생하는 에러를 최대한 팀원들과 함께 디버깅해 주시고, 이후에 질문해 주세요!
