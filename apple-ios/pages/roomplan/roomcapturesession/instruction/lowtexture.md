> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcapturesession/instruction/lowtexture](https://developer.apple.com/documentation/roomplan/roomcapturesession/instruction/lowtexture)

# RoomCaptureSession.Instruction.lowTexture

**Framework:** RoomPlan  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An instruction that indicates the framework doesn’t detect distinguishable room features.

## Declaration

```swift
case lowTexture
```

<a id="discussion"></a>

## Discussion

The framework provides this instruction when:

- The user points the device at a wall with a solid color.
- The camera view finder doesn’t contain any wall edges or other defining shapes for the room.

## See Also

### Determining a coaching recommendation

- [RoomCaptureSession.Instruction.normal](normal.md): An instruction that indicates scanning proceeds normally and the user needs no coaching.
- [RoomCaptureSession.Instruction.moveCloseToWall](moveclosetowall.md): An instruction that requests the user move closer to the wall.
- [RoomCaptureSession.Instruction.moveAwayFromWall](moveawayfromwall.md): An instruction that requests the user move further from the wall.
- [RoomCaptureSession.Instruction.turnOnLight](turnonlight.md): An instruction that requests the user increase the amount of light in the room.
- [RoomCaptureSession.Instruction.slowDown](slowdown.md): An instruction that requests that the user move slower.
