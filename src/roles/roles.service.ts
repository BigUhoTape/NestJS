import { Injectable } from '@nestjs/common';
import {CreateRoleDto} from './dto/create-role.dto';
import {Role} from "./roles.model";
import {InjectModel} from "@nestjs/sequelize";

@Injectable()
export class RolesService {

    constructor(@InjectModel(Role) private roleModel: typeof Role) {}

    async createRole (dto: CreateRoleDto) {
        const role = await this.roleModel.create(dto);
        return role;
    }

    async getRoleByValue (value: string) {
        const role = await this.roleModel.findOne({where: {value}});
        return role;
    }

}
