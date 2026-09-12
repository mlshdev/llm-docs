> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcapturesession/instruction](https://developer.apple.com/documentation/roomplan/roomcapturesession/instruction)

# RoomCaptureSession.Instruction

**Framework:** RoomPlan  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Instructions that the framework recommends the app display to the user.

## Declaration

```swift
enum Instruction
```

## Mentioned In

- [Scanning the rooms of a single structure](../scanning-the-rooms-of-a-single-structure.md)

<a id="overview"></a>

## Overview

Your app receives instructions through the [captureSession(\_:didProvide:)](../roomcapturesessiondelegate/capturesession%28__didprovide_%29.md) callback that the framework suggests you display to the user, such as by presenting the recommendation in a textual label.

## Topics

### Determining a coaching recommendation

- [RoomCaptureSession.Instruction.normal](instruction/normal.md): An instruction that indicates scanning proceeds normally and the user needs no coaching.
- [RoomCaptureSession.Instruction.moveCloseToWall](instruction/moveclosetowall.md): An instruction that requests the user move closer to the wall.
- [RoomCaptureSession.Instruction.moveAwayFromWall](instruction/moveawayfromwall.md): An instruction that requests the user move further from the wall.
- [RoomCaptureSession.Instruction.turnOnLight](instruction/turnonlight.md): An instruction that requests the user increase the amount of light in the room.
- [RoomCaptureSession.Instruction.slowDown](instruction/slowdown.md): An instruction that requests that the user move slower.
- [RoomCaptureSession.Instruction.lowTexture](instruction/lowtexture.md): An instruction that indicates the framework doesn’t detect distinguishable room features.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
