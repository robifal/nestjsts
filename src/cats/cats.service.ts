import { Injectable } from '@nestjs/common';
import { Cat } from './interface/cat.interface';

@Injectable()
export class CatsService {

    private readonly cats: Cat[] = [];

    findAll(): Cat[] {
        return this.cats; 
    }

    create(cat: Cat): void {
        this.cats.push(cat);
    }

    findById(id: number): Cat {
        return this.cats.find(cat => cat.id === id);
    }

    findIndexById(id: number): number {
        return this.cats.findIndex(cat => cat.id === id);
    }

    deleteByIndex(index: number): void {
        this.cats.splice(index, 1);
    }

    updateById(index: number, updatedCat: Cat): void {
        this.cats[index] = updatedCat;
    }
}
