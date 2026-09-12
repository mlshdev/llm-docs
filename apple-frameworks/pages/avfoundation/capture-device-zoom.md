> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/capture-device-zoom](https://developer.apple.com/documentation/avfoundation/capture-device-zoom)

# Zoom (Swift)

**Framework:** AVFoundation  
**Kind:** API Collection

Configure device zooming behavior and inspect hardware capabilities.

## Topics

### Adjusting zoom

- [videoZoomFactor](avcapturedevice/videozoomfactor.md): A value that controls the cropping and enlargement of images captured by the device.
- [ramp(toVideoZoomFactor:withRate:)](avcapturedevice/ramp%28tovideozoomfactor_withrate_%29.md): Begins a smooth transition from the current zoom factor to another.
- [cancelVideoZoomRamp()](avcapturedevice/cancelvideozoomramp%28%29.md): Smoothly ends a zoom transition in progress.

### Observing zoom

- [isRampingVideoZoom](avcapturedevice/isrampingvideozoom.md): A Boolean value that indicates whether a zoom transition is in progress.

### Inspecting zoom factors

- [minAvailableVideoZoomFactor](avcapturedevice/minavailablevideozoomfactor.md): The minimum zoom factor allowed in the current capture configuration.
- [maxAvailableVideoZoomFactor](avcapturedevice/maxavailablevideozoomfactor.md): The maximum zoom factor allowed in the current capture configuration.
- [virtualDeviceSwitchOverVideoZoomFactors](avcapturedevice/virtualdeviceswitchovervideozoomfactors.md): An array of video zoom factors at or above which a virtual device, such as the dual camera, may switch to its next constituent device.
- [dualCameraSwitchOverVideoZoomFactor](avcapturedevice/dualcameraswitchovervideozoomfactor.md): Deprecated. The video zoom factor at which a dual camera device can automatically switch between cameras.
- [displayVideoZoomFactorMultiplier](avcapturedevice/displayvideozoomfactormultiplier.md): A video zoom factor multiplier to use when displaying zoom information in a user interface.

### Enabling geometric distortion correction

- [isGeometricDistortionCorrectionSupported](avcapturedevice/isgeometricdistortioncorrectionsupported.md): A Boolean value that indicates whether this device supports geometric distortion correction.
- [isGeometricDistortionCorrectionEnabled](avcapturedevice/isgeometricdistortioncorrectionenabled.md): A Boolean value that indicates whether geometric distortion correction is enabled for this device.

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
- [Color](capture-device-color.md): Manage HDR and color space settings for a device.

# Zoom (Objective-C)

**Framework:** AVFoundation  
**Kind:** API Collection

Configure device zooming behavior and inspect hardware capabilities.

## Topics

### Adjusting zoom

- [videoZoomFactor](avcapturedevice/videozoomfactor.md): A value that controls the cropping and enlargement of images captured by the device.
- [rampToVideoZoomFactor:withRate:](avcapturedevice/ramp%28tovideozoomfactor_withrate_%29.md): Begins a smooth transition from the current zoom factor to another.
- [cancelVideoZoomRamp](avcapturedevice/cancelvideozoomramp%28%29.md): Smoothly ends a zoom transition in progress.

### Observing zoom

- [rampingVideoZoom](avcapturedevice/isrampingvideozoom.md): A Boolean value that indicates whether a zoom transition is in progress.

### Inspecting zoom factors

- [minAvailableVideoZoomFactor](avcapturedevice/minavailablevideozoomfactor.md): The minimum zoom factor allowed in the current capture configuration.
- [maxAvailableVideoZoomFactor](avcapturedevice/maxavailablevideozoomfactor.md): The maximum zoom factor allowed in the current capture configuration.
- [virtualDeviceSwitchOverVideoZoomFactors](avcapturedevice/virtualdeviceswitchovervideozoomfactors.md): An array of video zoom factors at or above which a virtual device, such as the dual camera, may switch to its next constituent device.
- [dualCameraSwitchOverVideoZoomFactor](avcapturedevice/dualcameraswitchovervideozoomfactor.md): Deprecated. The video zoom factor at which a dual camera device can automatically switch between cameras.
- [displayVideoZoomFactorMultiplier](avcapturedevice/displayvideozoomfactormultiplier.md): A video zoom factor multiplier to use when displaying zoom information in a user interface.

### Enabling geometric distortion correction

- [geometricDistortionCorrectionSupported](avcapturedevice/isgeometricdistortioncorrectionsupported.md): A Boolean value that indicates whether this device supports geometric distortion correction.
- [geometricDistortionCorrectionEnabled](avcapturedevice/isgeometricdistortioncorrectionenabled.md): A Boolean value that indicates whether geometric distortion correction is enabled for this device.

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
- [Color](capture-device-color.md): Manage HDR and color space settings for a device.
