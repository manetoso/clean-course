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

  interface UserProps {
    email: string;
    rol: string;
  }

  class User {
    public email: string;
    private lastAccess: Date;
    public rol: string;

    constructor({ email, rol }: UserProps) {
      this.email = email;
      this.lastAccess = new Date();
      this.rol = rol;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    rol: string;
    workingDirectory: string;
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      birthdate,
      email,
      gender,
      lastOpenFolder,
      name,
      rol,
      workingDirectory,
    }: UserSettingsProps) {
      this.person = new Person({ birthdate, gender, name });
      this.user = new User({ email, rol });
      this.settings = new Settings({ workingDirectory, lastOpenFolder });
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
