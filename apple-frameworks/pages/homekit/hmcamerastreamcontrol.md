> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcamerastreamcontrol](https://developer.apple.com/documentation/homekit/hmcamerastreamcontrol)

# HMCameraStreamControl (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An object that can start and stop the camera stream and contains the view into which the stream is rendered.

## Declaration

```swift
class HMCameraStreamControl
```

## Topics

### Controlling the stream

- [startStream()](hmcamerastreamcontrol/startstream%28%29.md): Starts the camera stream.
- [stopStream()](hmcamerastreamcontrol/stopstream%28%29.md): Stops the camera stream.
- [cameraStream](hmcamerastreamcontrol/camerastream.md): The current camera stream.
- [HMCameraStream](hmcamerastream.md): An object that represents a camera’s audiovisual stream.
- [streamState](hmcamerastreamcontrol/streamstate.md): The current state of the camera stream.
- [HMCameraStreamState](hmcamerastreamstate.md): The states associated with a camera stream.

### Observing stream activity

- [delegate](hmcamerastreamcontrol/delegate.md): Delegate that receives updates as the camera stream changes.
- [HMCameraStreamControlDelegate](hmcamerastreamcontroldelegate.md): A protocol that gives the delegate updates on the camera stream.

### Initializers

- [init()](hmcamerastreamcontrol/init%28%29.md): Deprecated.

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

### Streaming

- [streamControl](hmcameraprofile/streamcontrol.md): Controls the camera stream.

# HMCameraStreamControl (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An object that can start and stop the camera stream and contains the view into which the stream is rendered.

## Declaration

```objectivec
@interface HMCameraStreamControl : HMCameraControl
```

## Topics

### Controlling the stream

- [startStream](hmcamerastreamcontrol/startstream%28%29.md): Starts the camera stream.
- [stopStream](hmcamerastreamcontrol/stopstream%28%29.md): Stops the camera stream.
- [cameraStream](hmcamerastreamcontrol/camerastream.md): The current camera stream.
- [HMCameraStream](hmcamerastream.md): An object that represents a camera’s audiovisual stream.
- [streamState](hmcamerastreamcontrol/streamstate.md): The current state of the camera stream.
- [HMCameraStreamState](hmcamerastreamstate.md): The states associated with a camera stream.

### Observing stream activity

- [delegate](hmcamerastreamcontrol/delegate.md): Delegate that receives updates as the camera stream changes.
- [HMCameraStreamControlDelegate](hmcamerastreamcontroldelegate.md): A protocol that gives the delegate updates on the camera stream.

### Instance Methods

- [init](hmcamerastreamcontrol/init%28%29.md): Deprecated.

## Relationships

### Inherits From

- [HMCameraControl](hmcameracontrol.md)

## See Also

### Streaming

- [streamControl](hmcameraprofile/streamcontrol.md): Controls the camera stream.
