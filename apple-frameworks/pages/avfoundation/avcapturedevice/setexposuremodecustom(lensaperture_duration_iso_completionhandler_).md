> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/setexposuremodecustom(lensaperture:duration:iso:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/setexposuremodecustom(lensaperture:duration:iso:completionhandler:))

# setExposureModeCustom(lensAperture:duration:iso:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+

Sets a custom exposure mode with the specified lens aperture, exposure duration, and ISO values.

## Declaration

```swift
func setExposureModeCustom(lensAperture: Float, duration: CMTime, iso ISO: Float, completionHandler handler: (@Sendable (CMTime) -> Void)? = nil)
```

```swift
func setExposureModeCustom(lensAperture: Float, duration: CMTime, iso ISO: Float) async -> CMTime
```

## Parameters

- `lensAperture`: The lens aperture, as described in the documentation for the [lensAperture](lensaperture.md) property. You may specify one of the special `AVFCapture/AVCaptureLensApertureCurrent` or `AVFCapture/AVCaptureLensApertureAuto` constants listed in the discussion section below, or values between the [minLensAperture](format/minlensaperture.md) and [maxLensAperture](format/maxlensaperture.md) of the [activeFormat](activeformat.md).
- `duration`: The exposure duration, as described in the documentation for the [exposureDuration](exposureduration.md) property. You may specify one of the special `AVFCapture/AVCaptureExposureDurationCurrent` or `AVFCapture/AVCaptureExposureDurationAuto` constants listed in the discussion section below, or values between the [minExposureDuration](format/minexposureduration.md) and [maxExposureDuration](format/maxexposureduration.md) of the [activeFormat](activeformat.md).
- `ISO`: The exposure ISO value, as described in the documentation for the [iso](iso.md) property. You may specify one of the special `AVFCapture/AVCaptureISOCurrent` or `AVFCapture/AVCaptureISOAuto` constants listed in the discussion section below, or values between the [minISO](format/miniso.md) and [maxISO](format/maxiso.md) of the [activeFormat](activeformat.md).
- `handler`: A block to be called when all parameters have been set to the values specified and [exposureMode](exposuremode-swift.property.md) is set to [AVCaptureDevice.ExposureMode.custom](exposuremode-swift.enum/custom.md). If the `setExposureModeCustom...` methods are called multiple times, their completion handlers are always called in FIFO order. The block receives a timestamp which matches that of the first buffer to which all settings have been applied. Note that the timestamp is synchronized to the device clock, and thus must be converted to the [synchronizationClock](../avcapturesession/synchronizationclock.md) prior to comparison with the timestamps of buffers delivered via an [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md). The client may pass nil for the handler parameter if knowledge of the operation’s completion is not required.

<a id="discussion"></a>

## Discussion

Besides a numeric value, each of the exposure parameters can be set to either of these special constants:

> **Lock To Current Value**

>  A value of `AVFCapture/AVCaptureLensApertureCurrent` can be passed for `lensAperture`, or `AVFCapture/AVCaptureExposureDurationCurrent` for `duration`, or `AVFCapture/AVCaptureISOCurrent` for `ISO`, to indicate you wish to lock that parameter at the current value.  When auto-exposure is active, it is preferable to use these constants rather than querying the property getter, as auto-exposure system may be asynchronously changing the value as the command is processed.
>
> Passing `AVFCapture/AVCaptureLensApertureCurrent` is equivalent to calling [setExposureModeCustom(duration:iso:completionHandler:)](setexposuremodecustom%28duration_iso_completionhandler_%29.md).

> **Priority Modes**

>  A value of `AVFCapture/AVCaptureLensApertureAuto` can be passed for `lensAperture`, or `AVFCapture/AVCaptureExposureDurationAuto`  for `duration`, or `AVFCapture/AVCaptureISOAuto` for `ISO`, to indicate the auto-exposure system should continue to manage that parameter to produce balanced image brightness.  This allows you to lock one of the exposure parameters (the “priority”) while the system will automatically adjust the other.
>
> Not all priority mode combinations may be supported. Use [supportsExposureModeCustom(lensAperture:duration:iso:)](format/supportsexposuremodecustom%28lensaperture_duration_iso_%29.md) to validate whether a given configuration will be accepted.

The applied exposure duration of streaming frames are limited to [activeMaxExposureDuration](activemaxexposureduration.md) when either lensAperture or ISO is set to “Auto”, but the full exposure duration may be applied during still capture.  Auto parameter(s) will attempt to simulate how a still capture will appear, while maintaining the current frame rate for responsive preview.  If none of the parameters are “Auto”, changes to the exposure duration may result in changes to [activeVideoMaxFrameDuration](activevideomaxframeduration.md).

If you wish to use the custom locked values for [AVCapturePhotoOutput](../avcapturephotooutput.md) captures, you must set the [photoQualityPrioritization](../avcapturephotosettings/photoqualityprioritization.md) property to [AVCapturePhotoOutput.QualityPrioritization.speed](../avcapturephotooutput/qualityprioritization/speed.md). The default value of [AVCapturePhotoOutput.QualityPrioritization.balanced](../avcapturephotooutput/qualityprioritization/balanced.md) allows photo capture to temporarily override the capture device’s ISO and exposureDuration values if the scene is dark enough to warrant some form of multi-image fusion to improve quality.

Note selecting speed prioritization disables image stabilization. If you then re-enable image stabilization via the deprecated [isAutoStillImageStabilizationEnabled](../avcapturephotosettings/isautostillimagestabilizationenabled.md) property or [automaticallyEnablesStillImageStabilizationWhenAvailable](../avcapturestillimageoutput/automaticallyenablesstillimagestabilizationwhenavailable.md) property, this counteracts speed prioritization and can result in image capture adopting different exposure settings.

> **Throws**

> `NSRangeException` if any parameter is set to an unsupported level.

> **Throws**

> `NSInvalidArgumentException` if the custom mode is not supported.  (See [supportsExposureModeCustom(lensAperture:duration:iso:)](format/supportsexposuremodecustom%28lensaperture_duration_iso_%29.md))

> **Throws**

> `NSGenericException` if called without first obtaining exclusive access to the receiver using [lockForConfiguration()](lockforconfiguration%28%29.md).

## See Also

### Configuring exposure manually

- [setExposureModeCustom(duration:iso:completionHandler:)](setexposuremodecustom%28duration_iso_completionhandler_%29.md): Sets the exposure mode to a custom state, and locks exposure duration and ISO at explicit values.
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

# setExposureModeCustomWithLensAperture:duration:ISO:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+

Sets a custom exposure mode with the specified lens aperture, exposure duration, and ISO values.

## Declaration

```objectivec
- (void) setExposureModeCustomWithLensAperture:(float) lensAperture duration:(CMTime) duration ISO:(float) ISO completionHandler:(void (^)(CMTime syncTime)) handler;
```

## Parameters

- `lensAperture`: The lens aperture, as described in the documentation for the [lensAperture](lensaperture.md) property. You may specify one of the special `AVFCapture/AVCaptureLensApertureCurrent` or `AVFCapture/AVCaptureLensApertureAuto` constants listed in the discussion section below, or values between the [minLensAperture](format/minlensaperture.md) and [maxLensAperture](format/maxlensaperture.md) of the [activeFormat](activeformat.md).
- `duration`: The exposure duration, as described in the documentation for the [exposureDuration](exposureduration.md) property. You may specify one of the special `AVFCapture/AVCaptureExposureDurationCurrent` or `AVFCapture/AVCaptureExposureDurationAuto` constants listed in the discussion section below, or values between the [minExposureDuration](format/minexposureduration.md) and [maxExposureDuration](format/maxexposureduration.md) of the [activeFormat](activeformat.md).
- `ISO`: The exposure ISO value, as described in the documentation for the [ISO](iso.md) property. You may specify one of the special `AVFCapture/AVCaptureISOCurrent` or `AVFCapture/AVCaptureISOAuto` constants listed in the discussion section below, or values between the [minISO](format/miniso.md) and [maxISO](format/maxiso.md) of the [activeFormat](activeformat.md).
- `handler`: A block to be called when all parameters have been set to the values specified and [exposureMode](exposuremode-swift.property.md) is set to [AVCaptureExposureModeCustom](exposuremode-swift.enum/custom.md). If the `setExposureModeCustom...` methods are called multiple times, their completion handlers are always called in FIFO order. The block receives a timestamp which matches that of the first buffer to which all settings have been applied. Note that the timestamp is synchronized to the device clock, and thus must be converted to the [synchronizationClock](../avcapturesession/synchronizationclock.md) prior to comparison with the timestamps of buffers delivered via an [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md). The client may pass nil for the handler parameter if knowledge of the operation’s completion is not required.

<a id="discussion"></a>

## Discussion

Besides a numeric value, each of the exposure parameters can be set to either of these special constants:

> **Lock To Current Value**

>  A value of `AVFCapture/AVCaptureLensApertureCurrent` can be passed for `lensAperture`, or `AVFCapture/AVCaptureExposureDurationCurrent` for `duration`, or `AVFCapture/AVCaptureISOCurrent` for `ISO`, to indicate you wish to lock that parameter at the current value.  When auto-exposure is active, it is preferable to use these constants rather than querying the property getter, as auto-exposure system may be asynchronously changing the value as the command is processed.
>
> Passing `AVFCapture/AVCaptureLensApertureCurrent` is equivalent to calling [setExposureModeCustomWithDuration:ISO:completionHandler:](setexposuremodecustom%28duration_iso_completionhandler_%29.md).

> **Priority Modes**

>  A value of `AVFCapture/AVCaptureLensApertureAuto` can be passed for `lensAperture`, or `AVFCapture/AVCaptureExposureDurationAuto`  for `duration`, or `AVFCapture/AVCaptureISOAuto` for `ISO`, to indicate the auto-exposure system should continue to manage that parameter to produce balanced image brightness.  This allows you to lock one of the exposure parameters (the “priority”) while the system will automatically adjust the other.
>
> Not all priority mode combinations may be supported. Use [supportsExposureModeCustomWithLensAperture:duration:ISO:](format/supportsexposuremodecustom%28lensaperture_duration_iso_%29.md) to validate whether a given configuration will be accepted.

The applied exposure duration of streaming frames are limited to [activeMaxExposureDuration](activemaxexposureduration.md) when either lensAperture or ISO is set to “Auto”, but the full exposure duration may be applied during still capture.  Auto parameter(s) will attempt to simulate how a still capture will appear, while maintaining the current frame rate for responsive preview.  If none of the parameters are “Auto”, changes to the exposure duration may result in changes to [activeVideoMaxFrameDuration](activevideomaxframeduration.md).

If you wish to use the custom locked values for [AVCapturePhotoOutput](../avcapturephotooutput.md) captures, you must set the [photoQualityPrioritization](../avcapturephotosettings/photoqualityprioritization.md) property to [AVCapturePhotoQualityPrioritizationSpeed](../avcapturephotooutput/qualityprioritization/speed.md). The default value of [AVCapturePhotoQualityPrioritizationBalanced](../avcapturephotooutput/qualityprioritization/balanced.md) allows photo capture to temporarily override the capture device’s ISO and exposureDuration values if the scene is dark enough to warrant some form of multi-image fusion to improve quality.

Note selecting speed prioritization disables image stabilization. If you then re-enable image stabilization via the deprecated [autoStillImageStabilizationEnabled](../avcapturephotosettings/isautostillimagestabilizationenabled.md) property or [automaticallyEnablesStillImageStabilizationWhenAvailable](../avcapturestillimageoutput/automaticallyenablesstillimagestabilizationwhenavailable.md) property, this counteracts speed prioritization and can result in image capture adopting different exposure settings.

> **Throws**

> `NSRangeException` if any parameter is set to an unsupported level.

> **Throws**

> `NSInvalidArgumentException` if the custom mode is not supported.  (See [supportsExposureModeCustomWithLensAperture:duration:ISO:](format/supportsexposuremodecustom%28lensaperture_duration_iso_%29.md))

> **Throws**

> `NSGenericException` if called without first obtaining exclusive access to the receiver using [lockForConfiguration:](lockforconfiguration%28%29.md).

## See Also

### Configuring exposure manually

- [setExposureModeCustomWithDuration:ISO:completionHandler:](setexposuremodecustom%28duration_iso_completionhandler_%29.md): Sets the exposure mode to a custom state, and locks exposure duration and ISO at explicit values.
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
