> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcamerastreamcontroldelegate/camerastreamcontroldidstartstream(_:)](https://developer.apple.com/documentation/homekit/hmcamerastreamcontroldelegate/camerastreamcontroldidstartstream(_:))

# cameraStreamControlDidStartStream(\_:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Tells the delegate that the camera stream has started.

## Declaration

```swift
optional func cameraStreamControlDidStartStream(_ cameraStreamControl: HMCameraStreamControl)
```

## Parameters

- `cameraStreamControl`: The stream control responsible for the camera stream.

## See Also

### Observing stream activity

- [cameraStreamControl(\_:didStopStreamWithError:)](camerastreamcontrol%28__didstopstreamwitherror_%29.md): Tells the delegate that the camera stream has stopped.

# cameraStreamControlDidStartStream: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Tells the delegate that the camera stream has started.

## Declaration

```objectivec
- (void) cameraStreamControlDidStartStream:(HMCameraStreamControl *) cameraStreamControl;
```

## Parameters

- `cameraStreamControl`: The stream control responsible for the camera stream.

## See Also

### Observing stream activity

- [cameraStreamControl:didStopStreamWithError:](camerastreamcontrol%28__didstopstreamwitherror_%29.md): Tells the delegate that the camera stream has stopped.
