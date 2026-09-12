> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/lockforconfiguration()](https://developer.apple.com/documentation/avfoundation/avcapturedevice/lockforconfiguration())

# lockForConfiguration() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Requests exclusive access to configure device hardware properties.

## Declaration

```swift
func lockForConfiguration() throws
```

<a id="Discussion"></a>

## Discussion

To set hardware properties on a capture device, such as the [focusMode](focusmode-swift.property.md) and [exposureMode](exposuremode-swift.property.md), your app must first acquire a lock on the device. Only hold the device lock if your app requires settable device properties to remain unchanged. Holding the device lock unnecessarily may degrade capture quality in other apps sharing the device.

## See Also

### Configuring camera hardware

- [unlockForConfiguration()](unlockforconfiguration%28%29.md): Releases exclusive control over device hardware properties.
- [isSubjectAreaChangeMonitoringEnabled](issubjectareachangemonitoringenabled.md): A Boolean value that indicates whether the device monitors the subject area for changes.
- [subjectAreaDidChangeNotification](subjectareadidchangenotification.md): A notification the system posts when a capture device detects a substantial change to the video subject area.
- [Formats](../capture-device-formats.md): Configure capture formats and camera frame rates.
- [Focus](../capture-device-focus.md): Configure the automatic focus behavior of a camera, or manually set its lens position.
- [Exposure](../capture-device-exposure.md): Configure the automatic exposure behavior of a camera, or manually control its exposure settings.
- [White balance](../capture-device-white-balance.md): Configure the automatic white balance behavior of a camera, or manually control white balance settings.
- [Lighting](../capture-device-lighting.md): Configure the device flash, torch, and low light settings.
- [Color](../capture-device-color.md): Manage HDR and color space settings for a device.
- [Zoom](../capture-device-zoom.md): Configure device zooming behavior and inspect hardware capabilities.

# lockForConfiguration: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Requests exclusive access to configure device hardware properties.

## Declaration

```objectivec
- (BOOL) lockForConfiguration:(NSError **) outError;
```

## Parameters

- `outError`: An error pointer. On return, if the system couldn’t lock the device, points to an [NSError](../../foundation/nserror.md) describing why the failure occurred.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the the system locked the device; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

To set hardware properties on a capture device, such as the [focusMode](focusmode-swift.property.md) and [exposureMode](exposuremode-swift.property.md), your app must first acquire a lock on the device. Only hold the device lock if your app requires settable device properties to remain unchanged. Holding the device lock unnecessarily may degrade capture quality in other apps sharing the device.

## See Also

### Configuring camera hardware

- [unlockForConfiguration](unlockforconfiguration%28%29.md): Releases exclusive control over device hardware properties.
- [subjectAreaChangeMonitoringEnabled](issubjectareachangemonitoringenabled.md): A Boolean value that indicates whether the device monitors the subject area for changes.
- [AVCaptureDeviceSubjectAreaDidChangeNotification](subjectareadidchangenotification.md): A notification the system posts when a capture device detects a substantial change to the video subject area.
- [Formats](../capture-device-formats.md): Configure capture formats and camera frame rates.
- [Focus](../capture-device-focus.md): Configure the automatic focus behavior of a camera, or manually set its lens position.
- [Exposure](../capture-device-exposure.md): Configure the automatic exposure behavior of a camera, or manually control its exposure settings.
- [White balance](../capture-device-white-balance.md): Configure the automatic white balance behavior of a camera, or manually control white balance settings.
- [Lighting](../capture-device-lighting.md): Configure the device flash, torch, and low light settings.
- [Color](../capture-device-color.md): Manage HDR and color space settings for a device.
- [Zoom](../capture-device-zoom.md): Configure device zooming behavior and inspect hardware capabilities.
