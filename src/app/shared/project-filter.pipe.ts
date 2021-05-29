import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'projectFilter'
})

export class CustomProjectFilterPipe implements PipeTransform {
    transform(projects: any, term: any) {
        //check if search term is undefined
        if (term === undefined) return projects;
        //return updated project array
        return projects.filter(function (project) {
            return project.company.toLowerCase().includes(term.toLowerCase());
        })
    }
}