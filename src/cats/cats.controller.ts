import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService) {}

    @Get()
    findAll(): Cat[] {
        return this.catsService.findall();
    }

}