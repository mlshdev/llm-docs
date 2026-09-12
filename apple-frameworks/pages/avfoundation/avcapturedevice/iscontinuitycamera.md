> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/iscontinuitycamera](https://developer.apple.com/documentation/avfoundation/avcapturedevice/iscontinuitycamera)

# isContinuityCamera (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+

A Boolean value that indicates whether the device is a Continuity Camera.

## Declaration

```swift
var isContinuityCamera: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Continuity Camera enables you to use the rear camera system of iPhone as an external webcam in macOS.

## See Also

### Supporting Continuity Camera

- [systemPreferredCamera](systempreferredcamera.md): A camera the system prefers to use for video and photo capture.
- [userPreferredCamera](userpreferredcamera.md): A camera the user prefers to use for video and photo capture.
- [companionDeskViewCamera](companiondeskviewcamera.md): A Desk View camera associated with a device.

# continuityCamera (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+

A Boolean value that indicates whether the device is a Continuity Camera.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isContinuityCamera) BOOL continuityCamera;
```

<a id="Discussion"></a>

## Discussion

Continuity Camera enables you to use the rear camera system of iPhone as an external webcam in macOS.

## See Also

### Supporting Continuity Camera

- [systemPreferredCamera](systempreferredcamera.md): A camera the system prefers to use for video and photo capture.
- [userPreferredCamera](userpreferredcamera.md): A camera the user prefers to use for video and photo capture.
- [companionDeskViewCamera](companiondeskviewcamera.md): A Desk View camera associated with a device.
