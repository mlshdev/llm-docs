> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcamerastreamcontroldelegate/camerastreamcontrol(_:didstopstreamwitherror:)](https://developer.apple.com/documentation/homekit/hmcamerastreamcontroldelegate/camerastreamcontrol(_:didstopstreamwitherror:))

# cameraStreamControl(\_:didStopStreamWithError:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Tells the delegate that the camera stream has stopped.

## Declaration

```swift
optional func cameraStreamControl(_ cameraStreamControl: HMCameraStreamControl, didStopStreamWithError error: (any Error)?)
```

## Parameters

- `cameraStreamControl`: The stream control responsible for the camera stream.
- `error`: If the stream stops because of an error, this is an error object with details; `nil` otherwise.

## See Also

### Observing stream activity

- [cameraStreamControlDidStartStream(\_:)](camerastreamcontroldidstartstream%28__%29.md): Tells the delegate that the camera stream has started.

# cameraStreamControl:didStopStreamWithError: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Tells the delegate that the camera stream has stopped.

## Declaration

```objectivec
- (void) cameraStreamControl:(HMCameraStreamControl *) cameraStreamControl didStopStreamWithError:(NSError *) error;
```

## Parameters

- `cameraStreamControl`: The stream control responsible for the camera stream.
- `error`: If the stream stops because of an error, this is an error object with details; `nil` otherwise.

## See Also

### Observing stream activity

- [cameraStreamControlDidStartStream:](camerastreamcontroldidstartstream%28__%29.md): Tells the delegate that the camera stream has started.
