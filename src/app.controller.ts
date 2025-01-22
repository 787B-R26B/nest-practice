import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('goodbye')
  getGoodBye(): string{
    return this.appService.getGoodBye();
  }
  @Get('Fuck')
  getFUCKYOU(): string{
    return this.appService.getFUCKYOU();
    }
}
