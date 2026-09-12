> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/userpreferredcamera](https://developer.apple.com/documentation/avfoundation/avcapturedevice/userpreferredcamera)

# userPreferredCamera (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+

A camera the user prefers to use for video and photo capture.

## Declaration

```swift
class var userPreferredCamera: AVCaptureDevice? { get set }
```

<a id="Discussion"></a>

## Discussion

In addition to being a [systemPreferredCamera](systempreferredcamera.md), you can designate a device as a user-preferred camera. Setting a value for this property allows an app to persist its preference across app launches and system reboots. The system internally maintains a short history of devices, so if a user’s most recently preferred camera isn’t currently connected, it still reports the next best choice.

This property always returns a device that’s present. If no camera is available, this value is `nil`.

> **Note**

>  Setting the value to `nil` has no effect.

## See Also

### Supporting Continuity Camera

- [systemPreferredCamera](systempreferredcamera.md): A camera the system prefers to use for video and photo capture.
- [isContinuityCamera](iscontinuitycamera.md): A Boolean value that indicates whether the device is a Continuity Camera.
- [companionDeskViewCamera](companiondeskviewcamera.md): A Desk View camera associated with a device.

# userPreferredCamera (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+

A camera the user prefers to use for video and photo capture.

## Declaration

```objectivec
@property (class, readwrite, nullable) AVCaptureDevice * userPreferredCamera;
```

<a id="Discussion"></a>

## Discussion

In addition to being a [systemPreferredCamera](systempreferredcamera.md), you can designate a device as a user-preferred camera. Setting a value for this property allows an app to persist its preference across app launches and system reboots. The system internally maintains a short history of devices, so if a user’s most recently preferred camera isn’t currently connected, it still reports the next best choice.

This property always returns a device that’s present. If no camera is available, this value is `nil`.

> **Note**

>  Setting the value to `nil` has no effect.

## See Also

### Supporting Continuity Camera

- [systemPreferredCamera](systempreferredcamera.md): A camera the system prefers to use for video and photo capture.
- [continuityCamera](iscontinuitycamera.md): A Boolean value that indicates whether the device is a Continuity Camera.
- [companionDeskViewCamera](companiondeskviewcamera.md): A Desk View camera associated with a device.
