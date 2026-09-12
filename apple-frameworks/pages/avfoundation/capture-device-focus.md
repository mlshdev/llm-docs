> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/capture-device-focus](https://developer.apple.com/documentation/avfoundation/capture-device-focus)

# Focus (Swift)

**Framework:** AVFoundation  
**Kind:** API Collection

Configure the automatic focus behavior of a camera, or manually set its lens position.

## Topics

### Configuring automatic focus

- [isFocusModeSupported(\_:)](avcapturedevice/isfocusmodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified focus mode.
- [focusMode](avcapturedevice/focusmode-swift.property.md): The capture device’s focus mode.
- [AVCaptureDevice.FocusMode](avcapturedevice/focusmode-swift.enum.md): Constants to specify the focus mode of a capture device.
- [isSmoothAutoFocusSupported](avcapturedevice/issmoothautofocussupported.md): A Boolean value that indicates whether the device supports smooth autofocus.
- [isSmoothAutoFocusEnabled](avcapturedevice/issmoothautofocusenabled.md): A Boolean value that indicates whether smooth autofocus is in an enabled state on the device.
- [isFaceDrivenAutoFocusEnabled](avcapturedevice/isfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device has face-driven autofocus enabled.
- [automaticallyAdjustsFaceDrivenAutoFocusEnabled](avcapturedevice/automaticallyadjustsfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device automatically adjusts face-driven autofocus.
- [isAutoFocusRangeRestrictionSupported](avcapturedevice/isautofocusrangerestrictionsupported.md): A Boolean value that indicates whether the device supports focus range restrictions.
- [autoFocusRangeRestriction](avcapturedevice/autofocusrangerestriction-swift.property.md): A value that controls the allowable range for automatic focusing.
- [AVCaptureDevice.AutoFocusRangeRestriction](avcapturedevice/autofocusrangerestriction-swift.enum.md): Constants to specify the autofocus range of a capture device.

### Setting a focus point of interest

- [isFocusPointOfInterestSupported](avcapturedevice/isfocuspointofinterestsupported.md): A Boolean value that indicates whether the device supports a point of interest for focus.
- [focusPointOfInterest](avcapturedevice/focuspointofinterest.md): The point of interest for focusing.

### Setting a focus rectangle of interest

- [isFocusRectOfInterestSupported](avcapturedevice/isfocusrectofinterestsupported.md): Whether the receiver supports focus rectangles of interest.
- [focusRectOfInterest](avcapturedevice/focusrectofinterest.md): The device’s current focus rectangle of interest, if it has one.
- [minFocusRectOfInterestSize](avcapturedevice/minfocusrectofinterestsize.md): The minimum size you may use when specifying a rectangle of interest.
- [defaultRectForFocusPoint(ofInterest:)](avcapturedevice/defaultrectforfocuspoint%28ofinterest_%29.md): The default rectangle of interest used for a given focus point of interest.

### Monitoring focus changes

- [isAdjustingFocus](avcapturedevice/isadjustingfocus.md): A Boolean value that indicates whether the device is currently adjusting its focus setting.

### Setting focus manually

- [isLockingFocusWithCustomLensPositionSupported](avcapturedevice/islockingfocuswithcustomlenspositionsupported.md): A Boolean value that indicates whether the device supports locking focus to a specific lens position.
- [lensPosition](avcapturedevice/lensposition.md): The current focus position of the lens.
- [currentLensPosition](avcapturedevice/currentlensposition.md): A constant that represents the current lens position.
- [setFocusModeLocked(lensPosition:completionHandler:)](avcapturedevice/setfocusmodelocked%28lensposition_completionhandler_%29.md): Locks the lens position at the specified value, and sets the focus mode to a locked state.

### Inspecting the focus distance

- [minimumFocusDistance](avcapturedevice/minimumfocusdistance.md): The capture device’s minimum focus distance in millimeters.

## See Also

### Configuring camera hardware

- [lockForConfiguration()](avcapturedevice/lockforconfiguration%28%29.md): Requests exclusive access to configure device hardware properties.
- [unlockForConfiguration()](avcapturedevice/unlockforconfiguration%28%29.md): Releases exclusive control over device hardware properties.
- [isSubjectAreaChangeMonitoringEnabled](avcapturedevice/issubjectareachangemonitoringenabled.md): A Boolean value that indicates whether the device monitors the subject area for changes.
- [subjectAreaDidChangeNotification](avcapturedevice/subjectareadidchangenotification.md): A notification the system posts when a capture device detects a substantial change to the video subject area.
- [Formats](capture-device-formats.md): Configure capture formats and camera frame rates.
- [Exposure](capture-device-exposure.md): Configure the automatic exposure behavior of a camera, or manually control its exposure settings.
- [White balance](capture-device-white-balance.md): Configure the automatic white balance behavior of a camera, or manually control white balance settings.
- [Lighting](capture-device-lighting.md): Configure the device flash, torch, and low light settings.
- [Color](capture-device-color.md): Manage HDR and color space settings for a device.
- [Zoom](capture-device-zoom.md): Configure device zooming behavior and inspect hardware capabilities.

# Focus (Objective-C)

**Framework:** AVFoundation  
**Kind:** API Collection

Configure the automatic focus behavior of a camera, or manually set its lens position.

## Topics

### Configuring automatic focus

- [isFocusModeSupported:](avcapturedevice/isfocusmodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified focus mode.
- [focusMode](avcapturedevice/focusmode-swift.property.md): The capture device’s focus mode.
- [AVCaptureFocusMode](avcapturedevice/focusmode-swift.enum.md): Constants to specify the focus mode of a capture device.
- [smoothAutoFocusSupported](avcapturedevice/issmoothautofocussupported.md): A Boolean value that indicates whether the device supports smooth autofocus.
- [smoothAutoFocusEnabled](avcapturedevice/issmoothautofocusenabled.md): A Boolean value that indicates whether smooth autofocus is in an enabled state on the device.
- [faceDrivenAutoFocusEnabled](avcapturedevice/isfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device has face-driven autofocus enabled.
- [automaticallyAdjustsFaceDrivenAutoFocusEnabled](avcapturedevice/automaticallyadjustsfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device automatically adjusts face-driven autofocus.
- [autoFocusRangeRestrictionSupported](avcapturedevice/isautofocusrangerestrictionsupported.md): A Boolean value that indicates whether the device supports focus range restrictions.
- [autoFocusRangeRestriction](avcapturedevice/autofocusrangerestriction-swift.property.md): A value that controls the allowable range for automatic focusing.
- [AVCaptureAutoFocusRangeRestriction](avcapturedevice/autofocusrangerestriction-swift.enum.md): Constants to specify the autofocus range of a capture device.

### Setting a focus point of interest

- [focusPointOfInterestSupported](avcapturedevice/isfocuspointofinterestsupported.md): A Boolean value that indicates whether the device supports a point of interest for focus.
- [focusPointOfInterest](avcapturedevice/focuspointofinterest.md): The point of interest for focusing.

### Setting a focus rectangle of interest

- [focusRectOfInterestSupported](avcapturedevice/isfocusrectofinterestsupported.md): Whether the receiver supports focus rectangles of interest.
- [focusRectOfInterest](avcapturedevice/focusrectofinterest.md): The device’s current focus rectangle of interest, if it has one.
- [minFocusRectOfInterestSize](avcapturedevice/minfocusrectofinterestsize.md): The minimum size you may use when specifying a rectangle of interest.
- [defaultRectForFocusPointOfInterest:](avcapturedevice/defaultrectforfocuspoint%28ofinterest_%29.md): The default rectangle of interest used for a given focus point of interest.

### Monitoring focus changes

- [adjustingFocus](avcapturedevice/isadjustingfocus.md): A Boolean value that indicates whether the device is currently adjusting its focus setting.

### Setting focus manually

- [lockingFocusWithCustomLensPositionSupported](avcapturedevice/islockingfocuswithcustomlenspositionsupported.md): A Boolean value that indicates whether the device supports locking focus to a specific lens position.
- [lensPosition](avcapturedevice/lensposition.md): The current focus position of the lens.
- [AVCaptureLensPositionCurrent](avcapturedevice/currentlensposition.md): A constant that represents the current lens position.
- [setFocusModeLockedWithLensPosition:completionHandler:](avcapturedevice/setfocusmodelocked%28lensposition_completionhandler_%29.md): Locks the lens position at the specified value, and sets the focus mode to a locked state.

### Inspecting the focus distance

- [minimumFocusDistance](avcapturedevice/minimumfocusdistance.md): The capture device’s minimum focus distance in millimeters.

## See Also

### Configuring camera hardware

- [lockForConfiguration:](avcapturedevice/lockforconfiguration%28%29.md): Requests exclusive access to configure device hardware properties.
- [unlockForConfiguration](avcapturedevice/unlockforconfiguration%28%29.md): Releases exclusive control over device hardware properties.
- [subjectAreaChangeMonitoringEnabled](avcapturedevice/issubjectareachangemonitoringenabled.md): A Boolean value that indicates whether the device monitors the subject area for changes.
- [AVCaptureDeviceSubjectAreaDidChangeNotification](avcapturedevice/subjectareadidchangenotification.md): A notification the system posts when a capture device detects a substantial change to the video subject area.
- [Formats](capture-device-formats.md): Configure capture formats and camera frame rates.
- [Exposure](capture-device-exposure.md): Configure the automatic exposure behavior of a camera, or manually control its exposure settings.
- [White balance](capture-device-white-balance.md): Configure the automatic white balance behavior of a camera, or manually control white balance settings.
- [Lighting](capture-device-lighting.md): Configure the device flash, torch, and low light settings.
- [Color](capture-device-color.md): Manage HDR and color space settings for a device.
- [Zoom](capture-device-zoom.md): Configure device zooming behavior and inspect hardware capabilities.
