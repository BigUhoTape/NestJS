import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example: 'user@mail.ru', description: 'email'})
    readonly email: string;

    @ApiProperty({example: 'some password', description: 'user password'})
    readonly password: string;
}