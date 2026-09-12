> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcamerastreamstate](https://developer.apple.com/documentation/homekit/hmcamerastreamstate)

# HMCameraStreamState (Swift)

**Framework:** HomeKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The states associated with a camera stream.

## Declaration

```swift
enum HMCameraStreamState
```

## Topics

### Observing the streaming state

- [HMCameraStreamState.notStreaming](hmcamerastreamstate/notstreaming.md): The state when the camera stream is not active.
- [HMCameraStreamState.starting](hmcamerastreamstate/starting.md): The state when the camera stream start request is processing.
- [HMCameraStreamState.stopping](hmcamerastreamstate/stopping.md): The state when the camera stream is stopping.
- [HMCameraStreamState.streaming](hmcamerastreamstate/streaming.md): The state when the camera stream is currently in progress.

### Initializers

- [init(rawValue:)](hmcamerastreamstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controlling the stream

- [startStream()](hmcamerastreamcontrol/startstream%28%29.md): Starts the camera stream.
- [stopStream()](hmcamerastreamcontrol/stopstream%28%29.md): Stops the camera stream.
- [cameraStream](hmcamerastreamcontrol/camerastream.md): The current camera stream.
- [HMCameraStream](hmcamerastream.md): An object that represents a camera’s audiovisual stream.
- [streamState](hmcamerastreamcontrol/streamstate.md): The current state of the camera stream.

# HMCameraStreamState (Objective-C)

**Framework:** HomeKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The states associated with a camera stream.

## Declaration

```objectivec
enum HMCameraStreamState : NSUInteger;
```

## Topics

### Observing the streaming state

- [HMCameraStreamStateNotStreaming](hmcamerastreamstate/notstreaming.md): The state when the camera stream is not active.
- [HMCameraStreamStateStarting](hmcamerastreamstate/starting.md): The state when the camera stream start request is processing.
- [HMCameraStreamStateStopping](hmcamerastreamstate/stopping.md): The state when the camera stream is stopping.
- [HMCameraStreamStateStreaming](hmcamerastreamstate/streaming.md): The state when the camera stream is currently in progress.

## See Also

### Controlling the stream

- [startStream](hmcamerastreamcontrol/startstream%28%29.md): Starts the camera stream.
- [stopStream](hmcamerastreamcontrol/stopstream%28%29.md): Stops the camera stream.
- [cameraStream](hmcamerastreamcontrol/camerastream.md): The current camera stream.
- [HMCameraStream](hmcamerastream.md): An object that represents a camera’s audiovisual stream.
- [streamState](hmcamerastreamcontrol/streamstate.md): The current state of the camera stream.
