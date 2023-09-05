import { IsNotEmpty, MinLength } from "class-validator";

export class CreateCatDto{
    id: number;


    @IsNotEmpty()
    @MinLength(2)
    nome: string;
    raca: string;
    corOlhos: string;
}