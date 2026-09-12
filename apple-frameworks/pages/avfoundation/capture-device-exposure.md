> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/capture-device-exposure](https://developer.apple.com/documentation/avfoundation/capture-device-exposure)

# Exposure (Swift)

**Framework:** AVFoundation  
**Kind:** API Collection

Configure the automatic exposure behavior of a camera, or manually control its exposure settings.

## Topics

### Managing the exposure mode

- [isExposureModeSupported(\_:)](avcapturedevice/isexposuremodesupported%28__%29.md): Returns a Boolean value that indicates whether a device supports the specified exposure mode.
- [exposureMode](avcapturedevice/exposuremode-swift.property.md): The exposure mode for the device.
- [AVCaptureDevice.ExposureMode](avcapturedevice/exposuremode-swift.enum.md): Constants that specify the exposure mode of a capture device.

### Setting an exposure point of interest

- [isExposurePointOfInterestSupported](avcapturedevice/isexposurepointofinterestsupported.md): A Boolean value that indicates whether the device supports a point of interest for exposure.
- [exposurePointOfInterest](avcapturedevice/exposurepointofinterest.md): The point of interest for exposure.

### Setting an exposure rectangle of interest

- [isExposureRectOfInterestSupported](avcapturedevice/isexposurerectofinterestsupported.md): Whether the device supports exposure rectangles of interest.
- [exposureRectOfInterest](avcapturedevice/exposurerectofinterest.md): The device’s current exposure rectangle of interest, if it has one.
- [minExposureRectOfInterestSize](avcapturedevice/minexposurerectofinterestsize.md): The minimum size you may use when specifying a rectangle of interest.
- [defaultRectForExposurePoint(ofInterest:)](avcapturedevice/defaultrectforexposurepoint%28ofinterest_%29.md): The default rectangle of interest used for a given exposure point of interest.

### Configuring face-driven automatic exposure

- [isFaceDrivenAutoExposureEnabled](avcapturedevice/isfacedrivenautoexposureenabled.md): A Boolean value that indicates whether the device has face-driven autoexposure enabled.
- [automaticallyAdjustsFaceDrivenAutoExposureEnabled](avcapturedevice/automaticallyadjustsfacedrivenautoexposureenabled.md): A Boolean value that indicates whether the device automatically adjusts face-driven autoexposure.

### Monitoring exposure changes

- [isAdjustingExposure](avcapturedevice/isadjustingexposure.md): A Boolean value that indicates whether the device is currently adjusting its exposure setting.

### Adjusting exposure compensation

- [exposureTargetOffset](avcapturedevice/exposuretargetoffset.md): The metered exposure level’s offset from the target exposure value, in exposure value (EV) units.
- [exposureTargetBias](avcapturedevice/exposuretargetbias.md): The bias to apply to the target exposure value, in exposure value (EV) units.
- [minExposureTargetBias](avcapturedevice/minexposuretargetbias.md): The minimum supported exposure bias, in exposure value (EV) units.
- [maxExposureTargetBias](avcapturedevice/maxexposuretargetbias.md): The maximum supported exposure bias, in exposure value (EV) units.
- [currentExposureTargetBias](avcapturedevice/currentexposuretargetbias.md): A special constant that represents the current exposure bias value.
- [setExposureTargetBias(\_:completionHandler:)](avcapturedevice/setexposuretargetbias%28__completionhandler_%29.md): Sets the bias to apply to the target exposure value.

### Configuring exposure manually

- [setExposureModeCustom(duration:iso:completionHandler:)](avcapturedevice/setexposuremodecustom%28duration_iso_completionhandler_%29.md): Sets the exposure mode to a custom state, and locks exposure duration and ISO at explicit values.
- [setExposureModeCustom(lensAperture:duration:iso:completionHandler:)](avcapturedevice/setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md): Sets a custom exposure mode with the specified lens aperture, exposure duration, and ISO values.
- [autoExposureDuration](avcapturedevice/autoexposureduration.md): A special value that may be passed as the duration parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the exposure duration.
- [autoISO](avcapturedevice/autoiso.md): A special value that may be passed as the ISO parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the gain value.
- [autoLensAperture](avcapturedevice/autolensaperture.md): A special value that may be passed as the lensAperture parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the aperture.
- [currentLensAperture](avcapturedevice/currentlensaperture.md): A special value that may be passed as the lensAperture parameter of a device’s `setExposureModeCustom...` methods to lock at the current position.
- [exposureDuration](avcapturedevice/exposureduration.md): The length of time over which exposure takes place.
- [iso](avcapturedevice/iso.md): The current exposure ISO value.
- [lensAperture](avcapturedevice/lensaperture.md): The size of the lens diaphragm.
- [activeMaxExposureDuration](avcapturedevice/activemaxexposureduration.md): The maximum exposure duration, in seconds, defined in the autoexposure algorithm.
- [automaticallyAdjustsExposureDuration](avcapturedevice/automaticallyadjustsexposureduration.md): This property reports true whenever exposureDuration is unlocked, either by setting exposureMode to one of the automatic modes, or by passing `AVCaptureExposureDurationAuto` to the duration parameter of [setExposureModeCustom(duration:iso:completionHandler:)](avcapturedevice/setexposuremodecustom%28duration_iso_completionhandler_%29.md) or [setExposureModeCustom(lensAperture:duration:iso:completionHandler:)](avcapturedevice/setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md).
- [automaticallyAdjustsISO](avcapturedevice/automaticallyadjustsiso.md): This property reports true whenever ISO is unlocked, either by setting exposureMode to one of the automatic modes, or by passing `AVCaptureISOAuto` to the ISO parameter of [setExposureModeCustom(duration:iso:completionHandler:)](avcapturedevice/setexposuremodecustom%28duration_iso_completionhandler_%29.md) or [setExposureModeCustom(lensAperture:duration:iso:completionHandler:)](avcapturedevice/setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md).
- [automaticallyAdjustsLensAperture](avcapturedevice/automaticallyadjustslensaperture.md): This property reports true whenever lensAperture is unlocked, either by setting exposureMode to one of the automatic modes, or by passing `AVCaptureLensApertureAuto` to the aperture parameter of [setExposureModeCustom(lensAperture:duration:iso:completionHandler:)](avcapturedevice/setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md).
- [autoExposureLensApertureRateLimit](avcapturedevice/autoexposurelensapertureratelimit.md): Specifies a rate limit for aperture motion, whenever auto-exposure is active.

### Configuring exposure signals

- [activeExposureSignals](avcapturedevice/activeexposuresignals.md): Reports which characteristics the auto exposure system associates with the current scene. Auto exposure may adjust properties such as lens aperture size based on these factors. This property is key-value observable.
- [enabledExposureSignals](avcapturedevice/enabledexposuresignals.md): Can be assigned to control which characteristics AE should use in its decision making, must be a subset of supportedExposureSignals.
- [supportedExposureSignals](avcapturedevice/supportedexposuresignals.md): Indicates what values can be included in `enabledExposureSignals`. This property is key-value observable.
- [automaticallyEnablesExposureSignals](avcapturedevice/automaticallyenablesexposuresignals.md): When true (the default), capture sessions may automatically modify `enabledExposureSignals` based on changes to other device or session properties.
- [AVCaptureDeviceExposureSignal](avcapturedeviceexposuresignal.md): Values that can be used to configure the auto exposure system via [enabledExposureSignals](avcapturedevice/enabledexposuresignals.md) and associated methods.

## See Also

### Configuring camera hardware

- [lockForConfiguration()](avcapturedevice/lockforconfiguration%28%29.md): Requests exclusive access to configure device hardware properties.
- [unlockForConfiguration()](avcapturedevice/unlockforconfiguration%28%29.md): Releases exclusive control over device hardware properties.
- [isSubjectAreaChangeMonitoringEnabled](avcapturedevice/issubjectareachangemonitoringenabled.md): A Boolean value that indicates whether the device monitors the subject area for changes.
- [subjectAreaDidChangeNotification](avcapturedevice/subjectareadidchangenotification.md): A notification the system posts when a capture device detects a substantial change to the video subject area.
- [Formats](capture-device-formats.md): Configure capture formats and camera frame rates.
- [Focus](capture-device-focus.md): Configure the automatic focus behavior of a camera, or manually set its lens position.
- [White balance](capture-device-white-balance.md): Configure the automatic white balance behavior of a camera, or manually control white balance settings.
- [Lighting](capture-device-lighting.md): Configure the device flash, torch, and low light settings.
- [Color](capture-device-color.md): Manage HDR and color space settings for a device.
- [Zoom](capture-device-zoom.md): Configure device zooming behavior and inspect hardware capabilities.

# Exposure (Objective-C)

**Framework:** AVFoundation  
**Kind:** API Collection

Configure the automatic exposure behavior of a camera, or manually control its exposure settings.

## Topics

### Managing the exposure mode

- [isExposureModeSupported:](avcapturedevice/isexposuremodesupported%28__%29.md): Returns a Boolean value that indicates whether a device supports the specified exposure mode.
- [exposureMode](avcapturedevice/exposuremode-swift.property.md): The exposure mode for the device.
- [AVCaptureExposureMode](avcapturedevice/exposuremode-swift.enum.md): Constants that specify the exposure mode of a capture device.

### Setting an exposure point of interest

- [exposurePointOfInterestSupported](avcapturedevice/isexposurepointofinterestsupported.md): A Boolean value that indicates whether the device supports a point of interest for exposure.
- [exposurePointOfInterest](avcapturedevice/exposurepointofinterest.md): The point of interest for exposure.

### Setting an exposure rectangle of interest

- [exposureRectOfInterestSupported](avcapturedevice/isexposurerectofinterestsupported.md): Whether the device supports exposure rectangles of interest.
- [exposureRectOfInterest](avcapturedevice/exposurerectofinterest.md): The device’s current exposure rectangle of interest, if it has one.
- [minExposureRectOfInterestSize](avcapturedevice/minexposurerectofinterestsize.md): The minimum size you may use when specifying a rectangle of interest.
- [defaultRectForExposurePointOfInterest:](avcapturedevice/defaultrectforexposurepoint%28ofinterest_%29.md): The default rectangle of interest used for a given exposure point of interest.

### Configuring face-driven automatic exposure

- [faceDrivenAutoExposureEnabled](avcapturedevice/isfacedrivenautoexposureenabled.md): A Boolean value that indicates whether the device has face-driven autoexposure enabled.
- [automaticallyAdjustsFaceDrivenAutoExposureEnabled](avcapturedevice/automaticallyadjustsfacedrivenautoexposureenabled.md): A Boolean value that indicates whether the device automatically adjusts face-driven autoexposure.

### Monitoring exposure changes

- [adjustingExposure](avcapturedevice/isadjustingexposure.md): A Boolean value that indicates whether the device is currently adjusting its exposure setting.

### Adjusting exposure compensation

- [exposureTargetOffset](avcapturedevice/exposuretargetoffset.md): The metered exposure level’s offset from the target exposure value, in exposure value (EV) units.
- [exposureTargetBias](avcapturedevice/exposuretargetbias.md): The bias to apply to the target exposure value, in exposure value (EV) units.
- [minExposureTargetBias](avcapturedevice/minexposuretargetbias.md): The minimum supported exposure bias, in exposure value (EV) units.
- [maxExposureTargetBias](avcapturedevice/maxexposuretargetbias.md): The maximum supported exposure bias, in exposure value (EV) units.
- [AVCaptureExposureTargetBiasCurrent](avcapturedevice/currentexposuretargetbias.md): A special constant that represents the current exposure bias value.
- [setExposureTargetBias:completionHandler:](avcapturedevice/setexposuretargetbias%28__completionhandler_%29.md): Sets the bias to apply to the target exposure value.

### Configuring exposure manually

- [setExposureModeCustomWithDuration:ISO:completionHandler:](avcapturedevice/setexposuremodecustom%28duration_iso_completionhandler_%29.md): Sets the exposure mode to a custom state, and locks exposure duration and ISO at explicit values.
- [setExposureModeCustomWithLensAperture:duration:ISO:completionHandler:](avcapturedevice/setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md): Sets a custom exposure mode with the specified lens aperture, exposure duration, and ISO values.
- [AVCaptureExposureDurationAuto](avcapturedevice/autoexposureduration.md): A special value that may be passed as the duration parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the exposure duration.
- [AVCaptureISOAuto](avcapturedevice/autoiso.md): A special value that may be passed as the ISO parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the gain value.
- [AVCaptureLensApertureAuto](avcapturedevice/autolensaperture.md): A special value that may be passed as the lensAperture parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the aperture.
- [AVCaptureLensApertureCurrent](avcapturedevice/currentlensaperture.md): A special value that may be passed as the lensAperture parameter of a device’s `setExposureModeCustom...` methods to lock at the current position.
- [exposureDuration](avcapturedevice/exposureduration.md): The length of time over which exposure takes place.
- [ISO](avcapturedevice/iso.md): The current exposure ISO value.
- [lensAperture](avcapturedevice/lensaperture.md): The size of the lens diaphragm.
- [activeMaxExposureDuration](avcapturedevice/activemaxexposureduration.md): The maximum exposure duration, in seconds, defined in the autoexposure algorithm.
- [automaticallyAdjustsExposureDuration](avcapturedevice/automaticallyadjustsexposureduration.md): This property reports true whenever exposureDuration is unlocked, either by setting exposureMode to one of the automatic modes, or by passing `AVCaptureExposureDurationAuto` to the duration parameter of [setExposureModeCustomWithDuration:ISO:completionHandler:](avcapturedevice/setexposuremodecustom%28duration_iso_completionhandler_%29.md) or [setExposureModeCustomWithLensAperture:duration:ISO:completionHandler:](avcapturedevice/setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md).
- [automaticallyAdjustsISO](avcapturedevice/automaticallyadjustsiso.md): This property reports true whenever ISO is unlocked, either by setting exposureMode to one of the automatic modes, or by passing `AVCaptureISOAuto` to the ISO parameter of [setExposureModeCustomWithDuration:ISO:completionHandler:](avcapturedevice/setexposuremodecustom%28duration_iso_completionhandler_%29.md) or [setExposureModeCustomWithLensAperture:duration:ISO:completionHandler:](avcapturedevice/setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md).
- [automaticallyAdjustsLensAperture](avcapturedevice/automaticallyadjustslensaperture.md): This property reports true whenever lensAperture is unlocked, either by setting exposureMode to one of the automatic modes, or by passing `AVCaptureLensApertureAuto` to the aperture parameter of [setExposureModeCustomWithLensAperture:duration:ISO:completionHandler:](avcapturedevice/setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md).
- [autoExposureLensApertureRateLimit](avcapturedevice/autoexposurelensapertureratelimit.md): Specifies a rate limit for aperture motion, whenever auto-exposure is active.

### Configuring exposure signals

- [activeExposureSignals](avcapturedevice/activeexposuresignals.md): Reports which characteristics the auto exposure system associates with the current scene. Auto exposure may adjust properties such as lens aperture size based on these factors. This property is key-value observable.
- [enabledExposureSignals](avcapturedevice/enabledexposuresignals.md): Can be assigned to control which characteristics AE should use in its decision making, must be a subset of supportedExposureSignals.
- [supportedExposureSignals](avcapturedevice/supportedexposuresignals.md): Indicates what values can be included in `enabledExposureSignals`. This property is key-value observable.
- [automaticallyEnablesExposureSignals](avcapturedevice/automaticallyenablesexposuresignals.md): When true (the default), capture sessions may automatically modify `enabledExposureSignals` based on changes to other device or session properties.
- [AVCaptureDeviceExposureSignal](avcapturedeviceexposuresignal.md): Values that can be used to configure the auto exposure system via [enabledExposureSignals](avcapturedevice/enabledexposuresignals.md) and associated methods.

## See Also

### Configuring camera hardware

- [lockForConfiguration:](avcapturedevice/lockforconfiguration%28%29.md): Requests exclusive access to configure device hardware properties.
- [unlockForConfiguration](avcapturedevice/unlockforconfiguration%28%29.md): Releases exclusive control over device hardware properties.
- [subjectAreaChangeMonitoringEnabled](avcapturedevice/issubjectareachangemonitoringenabled.md): A Boolean value that indicates whether the device monitors the subject area for changes.
- [AVCaptureDeviceSubjectAreaDidChangeNotification](avcapturedevice/subjectareadidchangenotification.md): A notification the system posts when a capture device detects a substantial change to the video subject area.
- [Formats](capture-device-formats.md): Configure capture formats and camera frame rates.
- [Focus](capture-device-focus.md): Configure the automatic focus behavior of a camera, or manually set its lens position.
- [White balance](capture-device-white-balance.md): Configure the automatic white balance behavior of a camera, or manually control white balance settings.
- [Lighting](capture-device-lighting.md): Configure the device flash, torch, and low light settings.
- [Color](capture-device-color.md): Manage HDR and color space settings for a device.
- [Zoom](capture-device-zoom.md): Configure device zooming behavior and inspect hardware capabilities.
