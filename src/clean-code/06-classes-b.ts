(() => {
  type Gender = 'M' | 'F';
  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ birthdate, gender, name }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps extends PersonProps {
    email: string;
    rol: string;
  }

  class User extends Person {
    public email: string;
    public rol: string;
    private lastAccess: Date;
    constructor({ email, rol, ...personProps }: UserProps) {
      super(personProps);
      this.email = email;
      this.rol = rol;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps extends UserProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({
      workingDirectory,
      lastOpenFolder,
      ...userProps
    }: UserSettingsProps) {
      super(userProps);
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: '/home/user',
    lastOpenFolder: '/home/user/projects',
    email: 'admin@gmail.com',
    rol: 'admin',
    name: 'John Doe',
    gender: 'M',
    birthdate: new Date(),
  });

  // const person = new Person('John Doe', 'M', new Date());
  console.log(userSettings);
})();
