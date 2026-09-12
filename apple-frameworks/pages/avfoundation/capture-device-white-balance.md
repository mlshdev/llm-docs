> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/capture-device-white-balance](https://developer.apple.com/documentation/avfoundation/capture-device-white-balance)

# White balance (Swift)

**Framework:** AVFoundation  
**Kind:** API Collection

Configure the automatic white balance behavior of a camera, or manually control white balance settings.

## Topics

### Configuring automatic white balance

- [isWhiteBalanceModeSupported(\_:)](avcapturedevice/iswhitebalancemodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified white balance mode.
- [whiteBalanceMode](avcapturedevice/whitebalancemode-swift.property.md): The current white balance mode.
- [AVCaptureDevice.WhiteBalanceMode](avcapturedevice/whitebalancemode-swift.enum.md): Constants to specify the white balance mode of a capture device.

### Monitoring white balance changes

- [isAdjustingWhiteBalance](avcapturedevice/isadjustingwhitebalance.md): A Boolean value that indicates whether the device is currently adjusting the white balance.

### Inspecting gain levels

- [deviceWhiteBalanceGains](avcapturedevice/devicewhitebalancegains.md): The current device-specific RGB white balance gain values in use.
- [grayWorldDeviceWhiteBalanceGains](avcapturedevice/grayworlddevicewhitebalancegains.md): The current device-specific white balance values required for a neutral gray white point.
- [maxWhiteBalanceGain](avcapturedevice/maxwhitebalancegain.md): The maximum supported value to which you can set a color channel.

### Performing conversions

- [chromaticityValues(for:)](avcapturedevice/chromaticityvalues%28for_%29.md): Converts device-specific white balance RGB gain values to device-independent chromaticity values.
- [temperatureAndTintValues(for:)](avcapturedevice/temperatureandtintvalues%28for_%29.md): Converts device-specific white balance RGB gain values to device-independent temperature and tint values.
- [deviceWhiteBalanceGains(for:)](avcapturedevice/devicewhitebalancegains%28for_%29-9gdtw.md): Converts device-independent chromaticity values to device-specific white balance RGB gain values.
- [deviceWhiteBalanceGains(for:)](avcapturedevice/devicewhitebalancegains%28for_%29-3wtsa.md): Converts device-independent temperature and tint values to device-specific white balance RGB gain values.
- [AVCaptureDevice.WhiteBalanceGains](avcapturedevice/whitebalancegains.md): A structure that defines RGB white balance gain values.
- [AVCaptureDevice.WhiteBalanceChromaticityValues](avcapturedevice/whitebalancechromaticityvalues.md): A structure that defines CIE 1931 xy chromaticity values.
- [AVCaptureDevice.WhiteBalanceTemperatureAndTintValues](avcapturedevice/whitebalancetemperatureandtintvalues.md): A structure that defines temperature and tint values correlated to a white-balance color.

### Setting white balance manually

- [isLockingWhiteBalanceWithCustomDeviceGainsSupported](avcapturedevice/islockingwhitebalancewithcustomdevicegainssupported.md): A Boolean value that indicates whether the device supports locking white balance to specific gain values.
- [setWhiteBalanceModeLocked(with:completionHandler:)](avcapturedevice/setwhitebalancemodelocked%28with_completionhandler_%29.md): Sets the white balance to locked mode with the specified white balance gains.
- [setWhiteBalanceModeLocked(whiteBalanceTemperatureAndTintValues:handler:)](avcapturedevice/setwhitebalancemodelocked%28whitebalancetemperatureandtintvalues_handler_%29.md): Sets white balance to locked mode with explicit temperature and tint values.

## See Also

### Configuring camera hardware

- [lockForConfiguration()](avcapturedevice/lockforconfiguration%28%29.md): Requests exclusive access to configure device hardware properties.
- [unlockForConfiguration()](avcapturedevice/unlockforconfiguration%28%29.md): Releases exclusive control over device hardware properties.
- [isSubjectAreaChangeMonitoringEnabled](avcapturedevice/issubjectareachangemonitoringenabled.md): A Boolean value that indicates whether the device monitors the subject area for changes.
- [subjectAreaDidChangeNotification](avcapturedevice/subjectareadidchangenotification.md): A notification the system posts when a capture device detects a substantial change to the video subject area.
- [Formats](capture-device-formats.md): Configure capture formats and camera frame rates.
- [Focus](capture-device-focus.md): Configure the automatic focus behavior of a camera, or manually set its lens position.
- [Exposure](capture-device-exposure.md): Configure the automatic exposure behavior of a camera, or manually control its exposure settings.
- [Lighting](capture-device-lighting.md): Configure the device flash, torch, and low light settings.
- [Color](capture-device-color.md): Manage HDR and color space settings for a device.
- [Zoom](capture-device-zoom.md): Configure device zooming behavior and inspect hardware capabilities.

# White balance (Objective-C)

**Framework:** AVFoundation  
**Kind:** API Collection

Configure the automatic white balance behavior of a camera, or manually control white balance settings.

## Topics

### Configuring automatic white balance

- [isWhiteBalanceModeSupported:](avcapturedevice/iswhitebalancemodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified white balance mode.
- [whiteBalanceMode](avcapturedevice/whitebalancemode-swift.property.md): The current white balance mode.
- [AVCaptureWhiteBalanceMode](avcapturedevice/whitebalancemode-swift.enum.md): Constants to specify the white balance mode of a capture device.

### Monitoring white balance changes

- [adjustingWhiteBalance](avcapturedevice/isadjustingwhitebalance.md): A Boolean value that indicates whether the device is currently adjusting the white balance.

### Inspecting gain levels

- [deviceWhiteBalanceGains](avcapturedevice/devicewhitebalancegains.md): The current device-specific RGB white balance gain values in use.
- [grayWorldDeviceWhiteBalanceGains](avcapturedevice/grayworlddevicewhitebalancegains.md): The current device-specific white balance values required for a neutral gray white point.
- [maxWhiteBalanceGain](avcapturedevice/maxwhitebalancegain.md): The maximum supported value to which you can set a color channel.

### Performing conversions

- [chromaticityValuesForDeviceWhiteBalanceGains:](avcapturedevice/chromaticityvalues%28for_%29.md): Converts device-specific white balance RGB gain values to device-independent chromaticity values.
- [temperatureAndTintValuesForDeviceWhiteBalanceGains:](avcapturedevice/temperatureandtintvalues%28for_%29.md): Converts device-specific white balance RGB gain values to device-independent temperature and tint values.
- [deviceWhiteBalanceGainsForChromaticityValues:](avcapturedevice/devicewhitebalancegains%28for_%29-9gdtw.md): Converts device-independent chromaticity values to device-specific white balance RGB gain values.
- [deviceWhiteBalanceGainsForTemperatureAndTintValues:](avcapturedevice/devicewhitebalancegains%28for_%29-3wtsa.md): Converts device-independent temperature and tint values to device-specific white balance RGB gain values.
- [AVCaptureWhiteBalanceGains](avcapturedevice/whitebalancegains.md): A structure that defines RGB white balance gain values.
- [AVCaptureWhiteBalanceChromaticityValues](avcapturedevice/whitebalancechromaticityvalues.md): A structure that defines CIE 1931 xy chromaticity values.
- [AVCaptureWhiteBalanceTemperatureAndTintValues](avcapturedevice/whitebalancetemperatureandtintvalues.md): A structure that defines temperature and tint values correlated to a white-balance color.

### Setting white balance manually

- [lockingWhiteBalanceWithCustomDeviceGainsSupported](avcapturedevice/islockingwhitebalancewithcustomdevicegainssupported.md): A Boolean value that indicates whether the device supports locking white balance to specific gain values.
- [setWhiteBalanceModeLockedWithDeviceWhiteBalanceGains:completionHandler:](avcapturedevice/setwhitebalancemodelocked%28with_completionhandler_%29.md): Sets the white balance to locked mode with the specified white balance gains.
- [setWhiteBalanceModeLockedWithDeviceWhiteBalanceTemperatureAndTintValues:completionHandler:](avcapturedevice/setwhitebalancemodelocked%28whitebalancetemperatureandtintvalues_handler_%29.md): Sets white balance to locked mode with explicit temperature and tint values.

## See Also

### Configuring camera hardware

- [lockForConfiguration:](avcapturedevice/lockforconfiguration%28%29.md): Requests exclusive access to configure device hardware properties.
- [unlockForConfiguration](avcapturedevice/unlockforconfiguration%28%29.md): Releases exclusive control over device hardware properties.
- [subjectAreaChangeMonitoringEnabled](avcapturedevice/issubjectareachangemonitoringenabled.md): A Boolean value that indicates whether the device monitors the subject area for changes.
- [AVCaptureDeviceSubjectAreaDidChangeNotification](avcapturedevice/subjectareadidchangenotification.md): A notification the system posts when a capture device detects a substantial change to the video subject area.
- [Formats](capture-device-formats.md): Configure capture formats and camera frame rates.
- [Focus](capture-device-focus.md): Configure the automatic focus behavior of a camera, or manually set its lens position.
- [Exposure](capture-device-exposure.md): Configure the automatic exposure behavior of a camera, or manually control its exposure settings.
- [Lighting](capture-device-lighting.md): Configure the device flash, torch, and low light settings.
- [Color](capture-device-color.md): Manage HDR and color space settings for a device.
- [Zoom](capture-device-zoom.md): Configure device zooming behavior and inspect hardware capabilities.
