import { Controller, Get, Post, Put, Delete, ParseIntPipe, Res, HttpStatus, Param, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interface/cat.interface';
import { Response } from 'express';

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService) {}

    @Get()
    findAll(): Cat[] {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        const gatoEncontrado = this.catsService.findById(id); 
        if (gatoEncontrado) {
            res.status(HttpStatus.OK).json(gatoEncontrado);
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        const indexGatoEncontrado = this.catsService.findIndexById(id);
        if (indexGatoEncontrado >= 0) {
            this.catsService.deleteByIndex(indexGatoEncontrado);
            res.status(HttpStatus.NO_CONTENT).send();
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Post()
    create(@Body() cat: Cat, @Res() res: Response) {
        this.catsService.create(cat);
        res.status(HttpStatus.CREATED).json(cat);
    }
    
    @Put(':id')
    update(@Param('id') id: number, @Body() cat: Cat, @Res() res: Response) {
        const indexGatoEncontrado = this.catsService.findIndexById(id);  // Pass 'id' instead of the comparison function
        if (indexGatoEncontrado >= 0) {
            this.catsService.updateById(indexGatoEncontrado, cat);
            res.status(HttpStatus.NO_CONTENT).send();
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }
}
