> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/capture-device-lighting](https://developer.apple.com/documentation/avfoundation/capture-device-lighting)

# Lighting (Swift)

**Framework:** AVFoundation  
**Kind:** API Collection

Configure the device flash, torch, and low light settings.

## Topics

### Configuring flash settings

- [hasFlash](avcapturedevice/hasflash.md): A Boolean value that indicates whether the capture device has a flash.
- [isFlashAvailable](avcapturedevice/isflashavailable.md): A Boolean value that indicates whether the flash is currently available for use.
- [isFlashActive](avcapturedevice/isflashactive.md): Deprecated. A Boolean value that indicates whether the flash is currently active.
- [flashMode](avcapturedevice/flashmode-swift.property.md): Deprecated. The device’s current flash mode.
- [isFlashModeSupported(\_:)](avcapturedevice/isflashmodesupported%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the device supports the given flash mode.
- [AVCaptureDevice.FlashMode](avcapturedevice/flashmode-swift.enum.md): Constants that specify the flash modes of a capture device.

### Configuring torch settings

- [hasTorch](avcapturedevice/hastorch.md): A Boolean value that specifies whether the capture device has a torch.
- [isTorchAvailable](avcapturedevice/istorchavailable.md): A Boolean value that indicates whether the torch is currently available for use.
- [isTorchActive](avcapturedevice/istorchactive.md): A Boolean value that indicates whether the device’s torch is currently active.
- [torchLevel](avcapturedevice/torchlevel.md): The current torch brightness level.
- [torchMode](avcapturedevice/torchmode-swift.property.md): The current torch mode.
- [AVCaptureDevice.TorchMode](avcapturedevice/torchmode-swift.enum.md): Constants to specify the capture device’s torch mode.
- [isTorchModeSupported(\_:)](avcapturedevice/istorchmodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified torch mode.
- [setTorchModeOn(level:)](avcapturedevice/settorchmodeon%28level_%29.md): Sets the illumination level when in torch mode.
- [maxAvailableTorchLevel](avcapturedevice/maxavailabletorchlevel.md): A constant that indicates to set the torch to its maximum level.

### Configuring low light settings

- [isLowLightBoostSupported](avcapturedevice/islowlightboostsupported.md): A Boolean value that indicates whether the capture device supports boosting images in low-light conditions.
- [isLowLightBoostEnabled](avcapturedevice/islowlightboostenabled.md): A Boolean value that indicates whether the capture device’s low light boost feature is in an enabled state.
- [automaticallyEnablesLowLightBoostWhenAvailable](avcapturedevice/automaticallyenableslowlightboostwhenavailable.md): A Boolean value that indicates whether the capture device automatically switches to low-light boost mode when necessary.

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
- [Color](capture-device-color.md): Manage HDR and color space settings for a device.
- [Zoom](capture-device-zoom.md): Configure device zooming behavior and inspect hardware capabilities.

# Lighting (Objective-C)

**Framework:** AVFoundation  
**Kind:** API Collection

Configure the device flash, torch, and low light settings.

## Topics

### Configuring flash settings

- [hasFlash](avcapturedevice/hasflash.md): A Boolean value that indicates whether the capture device has a flash.
- [flashAvailable](avcapturedevice/isflashavailable.md): A Boolean value that indicates whether the flash is currently available for use.
- [flashActive](avcapturedevice/isflashactive.md): Deprecated. A Boolean value that indicates whether the flash is currently active.
- [flashMode](avcapturedevice/flashmode-swift.property.md): Deprecated. The device’s current flash mode.
- [isFlashModeSupported:](avcapturedevice/isflashmodesupported%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the device supports the given flash mode.
- [AVCaptureFlashMode](avcapturedevice/flashmode-swift.enum.md): Constants that specify the flash modes of a capture device.

### Configuring torch settings

- [hasTorch](avcapturedevice/hastorch.md): A Boolean value that specifies whether the capture device has a torch.
- [torchAvailable](avcapturedevice/istorchavailable.md): A Boolean value that indicates whether the torch is currently available for use.
- [torchActive](avcapturedevice/istorchactive.md): A Boolean value that indicates whether the device’s torch is currently active.
- [torchLevel](avcapturedevice/torchlevel.md): The current torch brightness level.
- [torchMode](avcapturedevice/torchmode-swift.property.md): The current torch mode.
- [AVCaptureTorchMode](avcapturedevice/torchmode-swift.enum.md): Constants to specify the capture device’s torch mode.
- [isTorchModeSupported:](avcapturedevice/istorchmodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified torch mode.
- [setTorchModeOnWithLevel:error:](avcapturedevice/settorchmodeon%28level_%29.md): Sets the illumination level when in torch mode.
- [AVCaptureMaxAvailableTorchLevel](avcapturedevice/maxavailabletorchlevel.md): A constant that indicates to set the torch to its maximum level.

### Configuring low light settings

- [lowLightBoostSupported](avcapturedevice/islowlightboostsupported.md): A Boolean value that indicates whether the capture device supports boosting images in low-light conditions.
- [lowLightBoostEnabled](avcapturedevice/islowlightboostenabled.md): A Boolean value that indicates whether the capture device’s low light boost feature is in an enabled state.
- [automaticallyEnablesLowLightBoostWhenAvailable](avcapturedevice/automaticallyenableslowlightboostwhenavailable.md): A Boolean value that indicates whether the capture device automatically switches to low-light boost mode when necessary.

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
- [Color](capture-device-color.md): Manage HDR and color space settings for a device.
- [Zoom](capture-device-zoom.md): Configure device zooming behavior and inspect hardware capabilities.
