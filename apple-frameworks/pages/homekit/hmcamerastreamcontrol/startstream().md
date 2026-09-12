> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcamerastreamcontrol/startstream()](https://developer.apple.com/documentation/homekit/hmcamerastreamcontrol/startstream())

# startStream() (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Starts the camera stream.

## Declaration

```swift
func startStream()
```

<a id="Discussion"></a>

## Discussion

When streaming has successfully started, the [cameraStream](camerastream.md) property is updated with the new stream.

## See Also

### Controlling the stream

- [stopStream()](stopstream%28%29.md): Stops the camera stream.
- [cameraStream](camerastream.md): The current camera stream.
- [HMCameraStream](../hmcamerastream.md): An object that represents a camera’s audiovisual stream.
- [streamState](streamstate.md): The current state of the camera stream.
- [HMCameraStreamState](../hmcamerastreamstate.md): The states associated with a camera stream.

# startStream (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Starts the camera stream.

## Declaration

```objectivec
- (void) startStream;
```

<a id="Discussion"></a>

## Discussion

When streaming has successfully started, the [cameraStream](camerastream.md) property is updated with the new stream.

## See Also

### Controlling the stream

- [stopStream](stopstream%28%29.md): Stops the camera stream.
- [cameraStream](camerastream.md): The current camera stream.
- [HMCameraStream](../hmcamerastream.md): An object that represents a camera’s audiovisual stream.
- [streamState](streamstate.md): The current state of the camera stream.
- [HMCameraStreamState](../hmcamerastreamstate.md): The states associated with a camera stream.
