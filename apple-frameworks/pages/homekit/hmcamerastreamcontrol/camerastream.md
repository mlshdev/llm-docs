> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcamerastreamcontrol/camerastream](https://developer.apple.com/documentation/homekit/hmcamerastreamcontrol/camerastream)

# cameraStream (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The current camera stream.

## Declaration

```swift
var cameraStream: HMCameraStream? { get }
```

## See Also

### Controlling the stream

- [startStream()](startstream%28%29.md): Starts the camera stream.
- [stopStream()](stopstream%28%29.md): Stops the camera stream.
- [HMCameraStream](../hmcamerastream.md): An object that represents a camera’s audiovisual stream.
- [streamState](streamstate.md): The current state of the camera stream.
- [HMCameraStreamState](../hmcamerastreamstate.md): The states associated with a camera stream.

# cameraStream (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The current camera stream.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) HMCameraStream * cameraStream;
```

## See Also

### Controlling the stream

- [startStream](startstream%28%29.md): Starts the camera stream.
- [stopStream](stopstream%28%29.md): Stops the camera stream.
- [HMCameraStream](../hmcamerastream.md): An object that represents a camera’s audiovisual stream.
- [streamState](streamstate.md): The current state of the camera stream.
- [HMCameraStreamState](../hmcamerastreamstate.md): The states associated with a camera stream.
