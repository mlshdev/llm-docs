> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcapturesession/instruction/moveawayfromwall](https://developer.apple.com/documentation/roomplan/roomcapturesession/instruction/moveawayfromwall)

# RoomCaptureSession.Instruction.moveAwayFromWall

**Framework:** RoomPlan  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An instruction that requests the user move further from the wall.

## Declaration

```swift
case moveAwayFromWall
```

## See Also

### Determining a coaching recommendation

- [RoomCaptureSession.Instruction.normal](normal.md): An instruction that indicates scanning proceeds normally and the user needs no coaching.
- [RoomCaptureSession.Instruction.moveCloseToWall](moveclosetowall.md): An instruction that requests the user move closer to the wall.
- [RoomCaptureSession.Instruction.turnOnLight](turnonlight.md): An instruction that requests the user increase the amount of light in the room.
- [RoomCaptureSession.Instruction.slowDown](slowdown.md): An instruction that requests that the user move slower.
- [RoomCaptureSession.Instruction.lowTexture](lowtexture.md): An instruction that indicates the framework doesn’t detect distinguishable room features.
