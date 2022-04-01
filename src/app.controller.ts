import { Controller, Get, Res } from '@nestjs/common';
import { ApiExcludeEndpoint, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiOkResponse } from '@nestjs/swagger/dist/decorators/api-response.decorator';
import { Response } from 'express';

import { ApiTag } from './constants/api-tag';

@Controller()
@ApiTags(ApiTag.DEFAULT)
export class AppController {
  @Get()
  @ApiExcludeEndpoint()
  @ApiOperation({
    summary: '어드민 리다이렉트 API',
    description: '어드민으로 리다이렉트하는 API 입니다.',
  })
  @ApiOkResponse()
  root(@Res() res: Response) {
    return res.redirect('/admin');
  }
}
