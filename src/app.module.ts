import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',  // or your PostgreSQL host
    port: 5432,
    username: 'cms',  // your PostgreSQL username
    password: 'mypassword',  // your PostgreSQL password
    database: 'cms',     // your PostgreSQL database name
    autoLoadEntities: true,    // automatically load entities (set to false if you manually manage entities)
    synchronize: true,         // set to true only in development, as it auto-syncs the schema
  }), UsersModule
]
})
export class AppModule {}
