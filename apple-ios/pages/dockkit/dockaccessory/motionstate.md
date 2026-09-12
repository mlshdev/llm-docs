> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/motionstate](https://developer.apple.com/documentation/dockkit/dockaccessory/motionstate)

# DockAccessory.MotionState

**Framework:** DockKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

An event that indicates the state of a dock accessory’s current position and speed.

## Declaration

```swift
struct MotionState
```

<a id="overview"></a>

## Overview

This event indicates the dock accessory’s current velocity and position along each supported axis of rotation. For more information, see [motionStates](motionstates-swift.property.md).

## Topics

### Getting properties

- [angularPositions](motionstate/angularpositions.md): The angles of the axes, in radians.
- [angularVelocities](motionstate/angularvelocities.md): The angular velocity of each axis of rotation in radians.
- [timestamp](motionstate/timestamp.md): The current time, in UNIX epoch.
- [error](motionstate/error.md): The error, if any.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting position and limits

- [motionStates](motionstates-swift.property.md): Motion information from the dock accessory that includes current orientation and velocity of all axes.
- [limits](limits-swift.property.md): Current limits for the axes of rotation and maximum angular velocity.
- [DockAccessory.MotionStates](motionstates-swift.struct.md): An asynchronous sequence of orientation and velocity updates from the device.
- [DockAccessory.Limits](limits-swift.struct.md): Soft limits on multiple axes of rotation.
