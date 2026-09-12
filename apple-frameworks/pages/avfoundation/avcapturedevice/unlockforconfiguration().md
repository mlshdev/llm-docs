> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/unlockforconfiguration()](https://developer.apple.com/documentation/avfoundation/avcapturedevice/unlockforconfiguration())

# unlockForConfiguration() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Releases exclusive control over device hardware properties.

## Declaration

```swift
func unlockForConfiguration()
```

<a id="Discussion"></a>

## Discussion

If you’ve previously locked a device by calling [lockForConfiguration()](lockforconfiguration%28%29.md), call this method when your app no longer requires preventing device properties from changing automatically.

## See Also

### Configuring camera hardware

- [lockForConfiguration()](lockforconfiguration%28%29.md): Requests exclusive access to configure device hardware properties.
- [isSubjectAreaChangeMonitoringEnabled](issubjectareachangemonitoringenabled.md): A Boolean value that indicates whether the device monitors the subject area for changes.
- [subjectAreaDidChangeNotification](subjectareadidchangenotification.md): A notification the system posts when a capture device detects a substantial change to the video subject area.
- [Formats](../capture-device-formats.md): Configure capture formats and camera frame rates.
- [Focus](../capture-device-focus.md): Configure the automatic focus behavior of a camera, or manually set its lens position.
- [Exposure](../capture-device-exposure.md): Configure the automatic exposure behavior of a camera, or manually control its exposure settings.
- [White balance](../capture-device-white-balance.md): Configure the automatic white balance behavior of a camera, or manually control white balance settings.
- [Lighting](../capture-device-lighting.md): Configure the device flash, torch, and low light settings.
- [Color](../capture-device-color.md): Manage HDR and color space settings for a device.
- [Zoom](../capture-device-zoom.md): Configure device zooming behavior and inspect hardware capabilities.

# unlockForConfiguration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Releases exclusive control over device hardware properties.

## Declaration

```objectivec
- (void) unlockForConfiguration;
```

<a id="Discussion"></a>

## Discussion

If you’ve previously locked a device by calling [lockForConfiguration:](lockforconfiguration%28%29.md), call this method when your app no longer requires preventing device properties from changing automatically.

## See Also

### Configuring camera hardware

- [lockForConfiguration:](lockforconfiguration%28%29.md): Requests exclusive access to configure device hardware properties.
- [subjectAreaChangeMonitoringEnabled](issubjectareachangemonitoringenabled.md): A Boolean value that indicates whether the device monitors the subject area for changes.
- [AVCaptureDeviceSubjectAreaDidChangeNotification](subjectareadidchangenotification.md): A notification the system posts when a capture device detects a substantial change to the video subject area.
- [Formats](../capture-device-formats.md): Configure capture formats and camera frame rates.
- [Focus](../capture-device-focus.md): Configure the automatic focus behavior of a camera, or manually set its lens position.
- [Exposure](../capture-device-exposure.md): Configure the automatic exposure behavior of a camera, or manually control its exposure settings.
- [White balance](../capture-device-white-balance.md): Configure the automatic white balance behavior of a camera, or manually control white balance settings.
- [Lighting](../capture-device-lighting.md): Configure the device flash, torch, and low light settings.
- [Color](../capture-device-color.md): Manage HDR and color space settings for a device.
- [Zoom](../capture-device-zoom.md): Configure device zooming behavior and inspect hardware capabilities.
