-- migrate:up
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(300) NOT NULL,
  CONSTRAINT users_email_ukey UNIQUE (email)
)


-- migrate:down
DROP TALBE IF EXISTS users

