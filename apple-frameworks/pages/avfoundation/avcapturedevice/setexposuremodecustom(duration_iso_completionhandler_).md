> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/setexposuremodecustom(duration:iso:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/setexposuremodecustom(duration:iso:completionhandler:))

# setExposureModeCustom(duration:iso:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Sets the exposure mode to a custom state, and locks exposure duration and ISO at explicit values.

## Declaration

```swift
func setExposureModeCustom(duration: CMTime, iso ISO: Float, completionHandler handler: (@Sendable (CMTime) -> Void)? = nil)
```

```swift
func setExposureModeCustom(duration: CMTime, iso ISO: Float) async -> CMTime
```

## Parameters

- `duration`: The exposure duration.

  Pass a value of [currentExposureDuration](currentexposureduration.md) to leave the current exposure duration unchanged.

  Changes made to the exposure duration may result in changes to [activeVideoMinFrameDuration](activevideominframeduration.md) or [activeVideoMaxFrameDuration](activevideomaxframeduration.md).
- `ISO`: The exposure ISO value.

  Pass a value of [currentISO](currentiso.md) to leave the current ISO unchanged.
- `handler`: A callback the system invokes when the adjustment to the exposure duration and ISO is complete. If you call this method multiple times, the system calls the completion handlers in FIFO order.

  The system passes a time value that matches that of the first buffer to which its applied all settings. It synchronizes the timestamp to the device clock, and you must convert the timestamp to the [synchronizationClock](../avcapturesession/synchronizationclock.md) prior to comparison with the timestamps of buffers delivered through an [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md).

  You can pass `nil` for this parameter if you don’t require this information.

<a id="Discussion"></a>

## Discussion

This method throws an exception if you set the exposure duration or ISO values to an unsupported level

Before changing exposure mode, you must call [lockForConfiguration()](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, setting the value of this property raises an exception. When you finish configuring the device, call [unlockForConfiguration()](unlockforconfiguration%28%29.md) to release the lock and allow other devices to configure the settings.

When using [AVCapturePhotoOutput](../avcapturephotooutput.md) to capture photos, the [photoQualityPrioritization](../avcapturephotosettings/photoqualityprioritization.md) property of [AVCapturePhotoSettings](../avcapturephotosettings.md) defaults to [AVCapturePhotoOutput.QualityPrioritization.balanced](../avcapturephotooutput/qualityprioritization/balanced.md), which allows photo capture to temporarily override the capture device’s exposure duration and ISO if the scene is dark enough to require multi-image fusion to improve quality. To ensure that the system honors the device exposure duration and ISO values while in [AVCaptureDevice.ExposureMode.custom](exposuremode-swift.enum/custom.md) or [AVCaptureDevice.ExposureMode.locked](exposuremode-swift.enum/locked.md) mode, you must photo quality prioritization to [AVCapturePhotoOutput.QualityPrioritization.speed](../avcapturephotooutput/qualityprioritization/speed.md).

## Topics

### Exposure constants

- [currentExposureDuration](currentexposureduration.md): A special constant representing the current exposure duration setting.
- [currentISO](currentiso.md): A constant to indicate not to specify a new ISO value, and instead set it to its current value.

## See Also

### Configuring exposure manually

- [setExposureModeCustom(lensAperture:duration:iso:completionHandler:)](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md): Sets a custom exposure mode with the specified lens aperture, exposure duration, and ISO values.
- [autoExposureDuration](autoexposureduration.md): A special value that may be passed as the duration parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the exposure duration.
- [autoISO](autoiso.md): A special value that may be passed as the ISO parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the gain value.
- [autoLensAperture](autolensaperture.md): A special value that may be passed as the lensAperture parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the aperture.
- [currentLensAperture](currentlensaperture.md): A special value that may be passed as the lensAperture parameter of a device’s `setExposureModeCustom...` methods to lock at the current position.
- [exposureDuration](exposureduration.md): The length of time over which exposure takes place.
- [iso](iso.md): The current exposure ISO value.
- [lensAperture](lensaperture.md): The size of the lens diaphragm.
- [activeMaxExposureDuration](activemaxexposureduration.md): The maximum exposure duration, in seconds, defined in the autoexposure algorithm.
- [automaticallyAdjustsExposureDuration](automaticallyadjustsexposureduration.md): This property reports true whenever exposureDuration is unlocked, either by setting exposureMode to one of the automatic modes, or by passing `AVCaptureExposureDurationAuto` to the duration parameter of [setExposureModeCustom(duration:iso:completionHandler:)](setexposuremodecustom%28duration_iso_completionhandler_%29.md) or [setExposureModeCustom(lensAperture:duration:iso:completionHandler:)](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md).
- [automaticallyAdjustsISO](automaticallyadjustsiso.md): This property reports true whenever ISO is unlocked, either by setting exposureMode to one of the automatic modes, or by passing `AVCaptureISOAuto` to the ISO parameter of [setExposureModeCustom(duration:iso:completionHandler:)](setexposuremodecustom%28duration_iso_completionhandler_%29.md) or [setExposureModeCustom(lensAperture:duration:iso:completionHandler:)](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md).
- [automaticallyAdjustsLensAperture](automaticallyadjustslensaperture.md): This property reports true whenever lensAperture is unlocked, either by setting exposureMode to one of the automatic modes, or by passing `AVCaptureLensApertureAuto` to the aperture parameter of [setExposureModeCustom(lensAperture:duration:iso:completionHandler:)](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md).
- [autoExposureLensApertureRateLimit](autoexposurelensapertureratelimit.md): Specifies a rate limit for aperture motion, whenever auto-exposure is active.

# setExposureModeCustomWithDuration:ISO:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Sets the exposure mode to a custom state, and locks exposure duration and ISO at explicit values.

## Declaration

```objectivec
- (void) setExposureModeCustomWithDuration:(CMTime) duration ISO:(float) ISO completionHandler:(void (^)(CMTime syncTime)) handler;
```

## Parameters

- `duration`: The exposure duration.

  Pass a value of [AVCaptureExposureDurationCurrent](currentexposureduration.md) to leave the current exposure duration unchanged.

  Changes made to the exposure duration may result in changes to [activeVideoMinFrameDuration](activevideominframeduration.md) or [activeVideoMaxFrameDuration](activevideomaxframeduration.md).
- `ISO`: The exposure ISO value.

  Pass a value of [AVCaptureISOCurrent](currentiso.md) to leave the current ISO unchanged.
- `handler`: A callback the system invokes when the adjustment to the exposure duration and ISO is complete. If you call this method multiple times, the system calls the completion handlers in FIFO order.

  The system passes a time value that matches that of the first buffer to which its applied all settings. It synchronizes the timestamp to the device clock, and you must convert the timestamp to the [synchronizationClock](../avcapturesession/synchronizationclock.md) prior to comparison with the timestamps of buffers delivered through an [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md).

  You can pass `nil` for this parameter if you don’t require this information.

<a id="Discussion"></a>

## Discussion

This method throws an exception if you set the exposure duration or ISO values to an unsupported level

Before changing exposure mode, you must call [lockForConfiguration:](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, setting the value of this property raises an exception. When you finish configuring the device, call [unlockForConfiguration](unlockforconfiguration%28%29.md) to release the lock and allow other devices to configure the settings.

When using [AVCapturePhotoOutput](../avcapturephotooutput.md) to capture photos, the [photoQualityPrioritization](../avcapturephotosettings/photoqualityprioritization.md) property of [AVCapturePhotoSettings](../avcapturephotosettings.md) defaults to [AVCapturePhotoQualityPrioritizationBalanced](../avcapturephotooutput/qualityprioritization/balanced.md), which allows photo capture to temporarily override the capture device’s exposure duration and ISO if the scene is dark enough to require multi-image fusion to improve quality. To ensure that the system honors the device exposure duration and ISO values while in [AVCaptureExposureModeCustom](exposuremode-swift.enum/custom.md) or [AVCaptureExposureModeLocked](exposuremode-swift.enum/locked.md) mode, you must photo quality prioritization to [AVCapturePhotoQualityPrioritizationSpeed](../avcapturephotooutput/qualityprioritization/speed.md).

## Topics

### Exposure constants

- [AVCaptureExposureDurationCurrent](currentexposureduration.md): A special constant representing the current exposure duration setting.
- [AVCaptureISOCurrent](currentiso.md): A constant to indicate not to specify a new ISO value, and instead set it to its current value.

## See Also

### Configuring exposure manually

- [setExposureModeCustomWithLensAperture:duration:ISO:completionHandler:](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md): Sets a custom exposure mode with the specified lens aperture, exposure duration, and ISO values.
- [AVCaptureExposureDurationAuto](autoexposureduration.md): A special value that may be passed as the duration parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the exposure duration.
- [AVCaptureISOAuto](autoiso.md): A special value that may be passed as the ISO parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the gain value.
- [AVCaptureLensApertureAuto](autolensaperture.md): A special value that may be passed as the lensAperture parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the aperture.
- [AVCaptureLensApertureCurrent](currentlensaperture.md): A special value that may be passed as the lensAperture parameter of a device’s `setExposureModeCustom...` methods to lock at the current position.
- [exposureDuration](exposureduration.md): The length of time over which exposure takes place.
- [ISO](iso.md): The current exposure ISO value.
- [lensAperture](lensaperture.md): The size of the lens diaphragm.
- [activeMaxExposureDuration](activemaxexposureduration.md): The maximum exposure duration, in seconds, defined in the autoexposure algorithm.
- [automaticallyAdjustsExposureDuration](automaticallyadjustsexposureduration.md): This property reports true whenever exposureDuration is unlocked, either by setting exposureMode to one of the automatic modes, or by passing `AVCaptureExposureDurationAuto` to the duration parameter of [setExposureModeCustomWithDuration:ISO:completionHandler:](setexposuremodecustom%28duration_iso_completionhandler_%29.md) or [setExposureModeCustomWithLensAperture:duration:ISO:completionHandler:](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md).
- [automaticallyAdjustsISO](automaticallyadjustsiso.md): This property reports true whenever ISO is unlocked, either by setting exposureMode to one of the automatic modes, or by passing `AVCaptureISOAuto` to the ISO parameter of [setExposureModeCustomWithDuration:ISO:completionHandler:](setexposuremodecustom%28duration_iso_completionhandler_%29.md) or [setExposureModeCustomWithLensAperture:duration:ISO:completionHandler:](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md).
- [automaticallyAdjustsLensAperture](automaticallyadjustslensaperture.md): This property reports true whenever lensAperture is unlocked, either by setting exposureMode to one of the automatic modes, or by passing `AVCaptureLensApertureAuto` to the aperture parameter of [setExposureModeCustomWithLensAperture:duration:ISO:completionHandler:](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md).
- [autoExposureLensApertureRateLimit](autoexposurelensapertureratelimit.md): Specifies a rate limit for aperture motion, whenever auto-exposure is active.
