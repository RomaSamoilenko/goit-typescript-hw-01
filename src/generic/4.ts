// Використовуючи утиліту Partial та generics, виправте тип параметра функції так, щоб уникнути помилок типізації.

type Users = {
    name: string;
    surname: string;
    email: string;
    password: string;
  };
  
  function createOrUpdateUser(initialValues: Partial<Users>) {
    // Оновлення користувача
  }
  
  createOrUpdateUser({ email: "user@mail.com", password: "password123" });