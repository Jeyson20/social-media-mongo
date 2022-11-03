import { IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class UpdateUserDto{

    @IsOptional()
    firstName: string

    @IsOptional()
    lastName: string
    
    @IsOptional()
    email: string;

    @IsOptional()
    role: string

    @IsOptional()
    phoneNumber: string
    
}
