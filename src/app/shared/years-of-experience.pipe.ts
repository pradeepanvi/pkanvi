import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'experience'
})

export class TotalYearsOfExperiencePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        const correntYear = new Date().getFullYear();
        return correntYear - value;
    }
}