> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/companiondeskviewcamera](https://developer.apple.com/documentation/avfoundation/avcapturedevice/companiondeskviewcamera)

# companionDeskViewCamera (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+

A Desk View camera associated with a device.

## Declaration

```swift
var companionDeskViewCamera: AVCaptureDevice? { get }
```

<a id="Discussion"></a>

## Discussion

The value provides an Desk View camera for a device, if one exists, that derives its framing from the device’s ultra wide camera. When multiple Continuity Camera devices are available on the system, use this property to a relate a particular instance with its associated Desk View device.

## See Also

### Supporting Continuity Camera

- [systemPreferredCamera](systempreferredcamera.md): A camera the system prefers to use for video and photo capture.
- [userPreferredCamera](userpreferredcamera.md): A camera the user prefers to use for video and photo capture.
- [isContinuityCamera](iscontinuitycamera.md): A Boolean value that indicates whether the device is a Continuity Camera.

# companionDeskViewCamera (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+

A Desk View camera associated with a device.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVCaptureDevice * companionDeskViewCamera;
```

<a id="Discussion"></a>

## Discussion

The value provides an Desk View camera for a device, if one exists, that derives its framing from the device’s ultra wide camera. When multiple Continuity Camera devices are available on the system, use this property to a relate a particular instance with its associated Desk View device.

## See Also

### Supporting Continuity Camera

- [systemPreferredCamera](systempreferredcamera.md): A camera the system prefers to use for video and photo capture.
- [userPreferredCamera](userpreferredcamera.md): A camera the user prefers to use for video and photo capture.
- [continuityCamera](iscontinuitycamera.md): A Boolean value that indicates whether the device is a Continuity Camera.
