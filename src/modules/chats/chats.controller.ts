import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, NotFoundException } from '@nestjs/common';
import { Request, Response } from 'express';
import { ChatsService } from './chats.service';
import { UpdateChatDto } from './dto/update-chat.dto';

const successStatus: number = 200;

@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Post('create-chat')
  create(@Req() req: Request, @Res() res: Response) {
    const { body } = req;
    const newUser = this.chatsService.create(body);
    if (newUser) {
      return res.status(successStatus).json({statusCode: 200 ,newUser});
    } else {
      
    }
  }

  @Get('')
  findAll() {
    return this.chatsService.findAll();
  }

  @Get(':id')
  findOne( @Res() res: Response, @Param('id') id: string) {
    const chat = this.chatsService.findOne(+id)
    if (!chat) {
      throw new NotFoundException();
    }
    return res.status(successStatus).json(chat);
  }

  @Patch('update-chat/:id')
  update(@Param('id') id: string, @Body() updateChatDto: UpdateChatDto) {
    return this.chatsService.update(+id, updateChatDto);
  }

  @Delete('delete-chat/:id')
  remove(@Param('id') id: string) {
    return this.chatsService.remove(+id);
  }
}
