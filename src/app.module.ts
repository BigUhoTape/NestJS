import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    controllers: [],
    providers: [],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'nest',
            password: 'nest',
            database: 'nest_course',
            models: [],
            autoLoadModels: true
        }),
    ]
})
export class AppModule {}