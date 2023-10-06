import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ChatsModule } from './modules/chats/chats.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    RouterModule.register([]),
    ContactsModule,
    UsersModule,
    ChatsModule,
  ],
})
export class AppModule {}
