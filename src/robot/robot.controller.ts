import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common'
import { RobotService } from './robot.service'

@Controller('robot')
export class RobotController {
  constructor(private readonly robotService: RobotService) {}

  @Get()
  getHello(): string {
    return this.robotService.getHello()
  }

  @Post('volume/up')
  volumeUp() {
    this.robotService.increaseVolume()
    return { success: true }
  }

  @Post('volume/down')
  volumeDown() {
    this.robotService.decreaseVolume()
    return { success: true }
  }
  @Post('mouse/move')
  mouseMove(@Body() query: { offsetX: number; offsetY: number }) {
    this.robotService.moveMouse(+query.offsetX, +query.offsetY)
    return { success: true }
  }
  @Post('mouse/click')
  mouseClick() {
    this.robotService.clickMouse()
    return { success: true }
  }
}
