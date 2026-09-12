> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/capture-device-color](https://developer.apple.com/documentation/avfoundation/capture-device-color)

# Color (Swift)

**Framework:** AVFoundation  
**Kind:** API Collection

Manage HDR and color space settings for a device.

## Topics

### Configuring HDR settings

- [automaticallyAdjustsVideoHDREnabled](avcapturedevice/automaticallyadjustsvideohdrenabled.md): A Boolean value that indicates whether the device automatically manages the state of high dynamic range (HDR) video streaming.
- [isVideoHDREnabled](avcapturedevice/isvideohdrenabled.md): A Boolean value that indicates whether the device streams high dynamic range video buffers, also known as extended dynamic range (EDR).

### Enabling global tone mapping

- [isGlobalToneMappingEnabled](avcapturedevice/isglobaltonemappingenabled.md): A Boolean value that indicates whether the device should use global tone mapping.

### Configuring color space settings

- [activeColorSpace](avcapturedevice/activecolorspace.md): The currently active color space for capture.
- [AVCaptureColorSpace](avcapturecolorspace.md): An enumeration of color spaces a device can support.

## See Also

### Configuring camera hardware

- [lockForConfiguration()](avcapturedevice/lockforconfiguration%28%29.md): Requests exclusive access to configure device hardware properties.
- [unlockForConfiguration()](avcapturedevice/unlockforconfiguration%28%29.md): Releases exclusive control over device hardware properties.
- [isSubjectAreaChangeMonitoringEnabled](avcapturedevice/issubjectareachangemonitoringenabled.md): A Boolean value that indicates whether the device monitors the subject area for changes.
- [subjectAreaDidChangeNotification](avcapturedevice/subjectareadidchangenotification.md): A notification the system posts when a capture device detects a substantial change to the video subject area.
- [Formats](capture-device-formats.md): Configure capture formats and camera frame rates.
- [Focus](capture-device-focus.md): Configure the automatic focus behavior of a camera, or manually set its lens position.
- [Exposure](capture-device-exposure.md): Configure the automatic exposure behavior of a camera, or manually control its exposure settings.
- [White balance](capture-device-white-balance.md): Configure the automatic white balance behavior of a camera, or manually control white balance settings.
- [Lighting](capture-device-lighting.md): Configure the device flash, torch, and low light settings.
- [Zoom](capture-device-zoom.md): Configure device zooming behavior and inspect hardware capabilities.

# Color (Objective-C)

**Framework:** AVFoundation  
**Kind:** API Collection

Manage HDR and color space settings for a device.

## Topics

### Configuring HDR settings

- [automaticallyAdjustsVideoHDREnabled](avcapturedevice/automaticallyadjustsvideohdrenabled.md): A Boolean value that indicates whether the device automatically manages the state of high dynamic range (HDR) video streaming.
- [videoHDREnabled](avcapturedevice/isvideohdrenabled.md): A Boolean value that indicates whether the device streams high dynamic range video buffers, also known as extended dynamic range (EDR).

### Enabling global tone mapping

- [globalToneMappingEnabled](avcapturedevice/isglobaltonemappingenabled.md): A Boolean value that indicates whether the device should use global tone mapping.

### Configuring color space settings

- [activeColorSpace](avcapturedevice/activecolorspace.md): The currently active color space for capture.
- [AVCaptureColorSpace](avcapturecolorspace.md): An enumeration of color spaces a device can support.

## See Also

### Configuring camera hardware

- [lockForConfiguration:](avcapturedevice/lockforconfiguration%28%29.md): Requests exclusive access to configure device hardware properties.
- [unlockForConfiguration](avcapturedevice/unlockforconfiguration%28%29.md): Releases exclusive control over device hardware properties.
- [subjectAreaChangeMonitoringEnabled](avcapturedevice/issubjectareachangemonitoringenabled.md): A Boolean value that indicates whether the device monitors the subject area for changes.
- [AVCaptureDeviceSubjectAreaDidChangeNotification](avcapturedevice/subjectareadidchangenotification.md): A notification the system posts when a capture device detects a substantial change to the video subject area.
- [Formats](capture-device-formats.md): Configure capture formats and camera frame rates.
- [Focus](capture-device-focus.md): Configure the automatic focus behavior of a camera, or manually set its lens position.
- [Exposure](capture-device-exposure.md): Configure the automatic exposure behavior of a camera, or manually control its exposure settings.
- [White balance](capture-device-white-balance.md): Configure the automatic white balance behavior of a camera, or manually control white balance settings.
- [Lighting](capture-device-lighting.md): Configure the device flash, torch, and low light settings.
- [Zoom](capture-device-zoom.md): Configure device zooming behavior and inspect hardware capabilities.
