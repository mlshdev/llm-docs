> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/subjectareadidchangenotification](https://developer.apple.com/documentation/avfoundation/avcapturedevice/subjectareadidchangenotification)

# subjectAreaDidChangeNotification (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A notification the system posts when a capture device detects a substantial change to the video subject area.

## Declaration

```swift
class let subjectAreaDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The system posts this notification only if the device’s [isSubjectAreaChangeMonitoringEnabled](issubjectareachangemonitoringenabled.md) property value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring camera hardware

- [lockForConfiguration()](lockforconfiguration%28%29.md): Requests exclusive access to configure device hardware properties.
- [unlockForConfiguration()](unlockforconfiguration%28%29.md): Releases exclusive control over device hardware properties.
- [isSubjectAreaChangeMonitoringEnabled](issubjectareachangemonitoringenabled.md): A Boolean value that indicates whether the device monitors the subject area for changes.
- [Formats](../capture-device-formats.md): Configure capture formats and camera frame rates.
- [Focus](../capture-device-focus.md): Configure the automatic focus behavior of a camera, or manually set its lens position.
- [Exposure](../capture-device-exposure.md): Configure the automatic exposure behavior of a camera, or manually control its exposure settings.
- [White balance](../capture-device-white-balance.md): Configure the automatic white balance behavior of a camera, or manually control white balance settings.
- [Lighting](../capture-device-lighting.md): Configure the device flash, torch, and low light settings.
- [Color](../capture-device-color.md): Manage HDR and color space settings for a device.
- [Zoom](../capture-device-zoom.md): Configure device zooming behavior and inspect hardware capabilities.

# AVCaptureDeviceSubjectAreaDidChangeNotification (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A notification the system posts when a capture device detects a substantial change to the video subject area.

## Declaration

```objectivec
extern NSNotificationName const AVCaptureDeviceSubjectAreaDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The system posts this notification only if the device’s [subjectAreaChangeMonitoringEnabled](issubjectareachangemonitoringenabled.md) property value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring camera hardware

- [lockForConfiguration:](lockforconfiguration%28%29.md): Requests exclusive access to configure device hardware properties.
- [unlockForConfiguration](unlockforconfiguration%28%29.md): Releases exclusive control over device hardware properties.
- [subjectAreaChangeMonitoringEnabled](issubjectareachangemonitoringenabled.md): A Boolean value that indicates whether the device monitors the subject area for changes.
- [Formats](../capture-device-formats.md): Configure capture formats and camera frame rates.
- [Focus](../capture-device-focus.md): Configure the automatic focus behavior of a camera, or manually set its lens position.
- [Exposure](../capture-device-exposure.md): Configure the automatic exposure behavior of a camera, or manually control its exposure settings.
- [White balance](../capture-device-white-balance.md): Configure the automatic white balance behavior of a camera, or manually control white balance settings.
- [Lighting](../capture-device-lighting.md): Configure the device flash, torch, and low light settings.
- [Color](../capture-device-color.md): Manage HDR and color space settings for a device.
- [Zoom](../capture-device-zoom.md): Configure device zooming behavior and inspect hardware capabilities.
