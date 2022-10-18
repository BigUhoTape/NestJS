import { Injectable } from '@nestjs/common';
import {User} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";
import {RolesService} from "../roles/roles.service";

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User) private userModel: typeof User,
        private roleService: RolesService
    ) {}

    async createUser (dto: CreateUserDto) {
        const user = await this.userModel.create(dto);
        const role = await this.roleService.getRoleByValue('ADMIN');
        await user.$set('roles', [role.id]);
        user.roles = [role];
        return user;
    }

    async getAllUsers () {
        const users = await this.userModel.findAll({include: {all: true}});
        return users;
    }

    async getUserByEmail (email: string) {
        const user = await this.userModel.findOne({
            where: {email},
            include: {all: true}
        });

        return user;
    }

}
