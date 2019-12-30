import { Injectable } from '@nestjs/common'
import * as robot from 'robotjs'

@Injectable()
export class RobotService {
  getHello(): string {
    return 'robot!'
  }
  increaseVolume() {
    robot.keyTap('audio_vol_up')
  }
  decreaseVolume() {
    robot.keyTap('audio_vol_down')
  }
  toggleVolume() {
    robot.keyTap('audio_mute')
  }
  moveMouse(offsetX: number, offsetY: number) {
    const { x, y } = robot.getMousePos()
    robot.moveMouseSmooth(Math.max(x + offsetX, 0), Math.max(y + offsetY, 0))
  }
  clickMouse() {
    robot.mouseClick()
  }
  pressKey(key: string) {
    robot.keyTap(key)
  }
}
