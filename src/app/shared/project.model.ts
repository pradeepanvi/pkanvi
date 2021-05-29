import { Role } from "./role.model";
import { Technology } from "./technology.model";

export class Project {
    public name: any;
    public imgURL: any;
    public company: any;
    public link: any;
    public description: any;
    public layout: any;
    public roles: Role[];
    public technologies: Technology[];

    constructor(n: any, i: any, c: any, l: any, d: any, la: any, r: Role[], t: Technology[]) {
        this.name = n;
        this.imgURL = i;
        this.company = c;
        this.link = l;
        this.description = d;
        this.layout = la;
        this.roles = r;
        this.technologies = t;
    }
}