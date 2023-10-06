import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatsService {
  create(body: object) {
    console.log(body)
    return 'This action adds a new chat';
  }

  findAll() {
    return `This action returns all chats`;
  }

  findOne(id: number) {
    if (id === 0) {
      return `This action returns a #${id} chat`;
    }
    else {
      return null;
    }
  }

  update(id: number, body: object) {
    console.log(body)
    return `This action updates a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
