> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcamerasnapshotcontrol](https://developer.apple.com/documentation/homekit/hmcamerasnapshotcontrol)

# HMCameraSnapshotControl (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An object that can take an image snapshot from a camera.

## Declaration

```swift
class HMCameraSnapshotControl
```

## Topics

### Taking snapshots

- [takeSnapshot()](hmcamerasnapshotcontrol/takesnapshot%28%29.md): Takes an image snapshot.
- [mostRecentSnapshot](hmcamerasnapshotcontrol/mostrecentsnapshot.md): The camera’s most recent snapshot.
- [HMCameraSnapshot](hmcamerasnapshot.md): An object that represents a snapshot taken from a camera.

### Observing snapshot activity

- [delegate](hmcamerasnapshotcontrol/delegate.md): Delegate that receives updates as the camera takes snapshots.
- [HMCameraSnapshotControlDelegate](hmcamerasnapshotcontroldelegate.md): A set of methods used to observe the camera’s snapshot activity.

### Initializers

- [init()](hmcamerasnapshotcontrol/init%28%29.md): Deprecated.

## Relationships

### Inherits From

- [HMCameraControl](hmcameracontrol.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Capturing snapshots

- [snapshotControl](hmcameraprofile/snapshotcontrol.md): Controls the camera’s snapshot function.

# HMCameraSnapshotControl (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An object that can take an image snapshot from a camera.

## Declaration

```objectivec
@interface HMCameraSnapshotControl : HMCameraControl
```

## Topics

### Taking snapshots

- [takeSnapshot](hmcamerasnapshotcontrol/takesnapshot%28%29.md): Takes an image snapshot.
- [mostRecentSnapshot](hmcamerasnapshotcontrol/mostrecentsnapshot.md): The camera’s most recent snapshot.
- [HMCameraSnapshot](hmcamerasnapshot.md): An object that represents a snapshot taken from a camera.

### Observing snapshot activity

- [delegate](hmcamerasnapshotcontrol/delegate.md): Delegate that receives updates as the camera takes snapshots.
- [HMCameraSnapshotControlDelegate](hmcamerasnapshotcontroldelegate.md): A set of methods used to observe the camera’s snapshot activity.

### Instance Methods

- [init](hmcamerasnapshotcontrol/init%28%29.md): Deprecated.

## Relationships

### Inherits From

- [HMCameraControl](hmcameracontrol.md)

## See Also

### Capturing snapshots

- [snapshotControl](hmcameraprofile/snapshotcontrol.md): Controls the camera’s snapshot function.
