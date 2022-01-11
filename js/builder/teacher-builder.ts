import UserBuilderModel from "../models/user-builder";
import Teacher from "../users/teacher";

export default class TeacherBuilder extends UserBuilderModel{
        protected user: Teacher = new Teacher();

        constructor() {
            super();
            this.user.role = 'Teacher';
            this.user.id = Math.floor(Math.random() * 101);
        }

        public addGrade(grade: string) {
            this.user.grade = grade;
        }

        public addSpecialization(specialization: string) {
            this.user.specialization = specialization;
        }

        public addDepartment(department: string) {
            this.user.department = department;
        }

        public build(): Teacher {
            return this.user;
        }
    }