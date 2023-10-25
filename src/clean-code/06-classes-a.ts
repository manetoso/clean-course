(() => {
  type Gender = 'M' | 'F';
  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    private lastAccess: Date;
    constructor(
      public email: string,
      public rol: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      rol: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, rol, name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    '/home/user',
    '/home/user/projects',
    'admin@gmail.com',
    'admin',
    'John Doe',
    'M',
    new Date()
  );

  // const person = new Person('John Doe', 'M', new Date());
  console.log(userSettings);
})();
