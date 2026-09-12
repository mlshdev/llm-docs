> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcamerasnapshot](https://developer.apple.com/documentation/homekit/hmcamerasnapshot)

# HMCameraSnapshot (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An object that represents a snapshot taken from a camera.

## Declaration

```swift
class HMCameraSnapshot
```

## Topics

### Accessing snapshot properties

- [captureDate](hmcamerasnapshot/capturedate.md): Date and time at which the snapshot was requested.

### Initializers

- [init()](hmcamerasnapshot/init%28%29.md): Deprecated.

## Relationships

### Inherits From

- [HMCameraSource](hmcamerasource.md)

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

### Taking snapshots

- [takeSnapshot()](hmcamerasnapshotcontrol/takesnapshot%28%29.md): Takes an image snapshot.
- [mostRecentSnapshot](hmcamerasnapshotcontrol/mostrecentsnapshot.md): The camera’s most recent snapshot.

# HMCameraSnapshot (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An object that represents a snapshot taken from a camera.

## Declaration

```objectivec
@interface HMCameraSnapshot : HMCameraSource
```

## Topics

### Accessing snapshot properties

- [captureDate](hmcamerasnapshot/capturedate.md): Date and time at which the snapshot was requested.

### Instance Methods

- [init](hmcamerasnapshot/init%28%29.md): Deprecated.

## Relationships

### Inherits From

- [HMCameraSource](hmcamerasource.md)

## See Also

### Taking snapshots

- [takeSnapshot](hmcamerasnapshotcontrol/takesnapshot%28%29.md): Takes an image snapshot.
- [mostRecentSnapshot](hmcamerasnapshotcontrol/mostrecentsnapshot.md): The camera’s most recent snapshot.
