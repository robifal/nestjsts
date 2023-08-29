import { Injectable } from '@nestjs/common';
import { Cat } from './interface/cat.interface';

@Injectable()
export class CatsService {

    private readonly cats: Cat[] = [];

    findall(): Cat[]{
        return this.cats; 
    }
}

