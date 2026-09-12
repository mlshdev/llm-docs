> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/activemaxexposureduration](https://developer.apple.com/documentation/avfoundation/avcapturedevice/activemaxexposureduration)

# activeMaxExposureDuration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The maximum exposure duration, in seconds, defined in the autoexposure algorithm.

## Declaration

```swift
var activeMaxExposureDuration: CMTime { get set }
```

<a id="Discussion"></a>

## Discussion

When you set the exposureMode to [AVCaptureDevice.ExposureMode.autoExpose](exposuremode-swift.enum/autoexpose.md) or [AVCaptureDevice.ExposureMode.continuousAutoExposure](exposuremode-swift.enum/continuousautoexposure.md), the autoexposure algorithm picks a default maximum exposure duration that’s tuned for the current configuration, balancing low light image quality with motion preservation. By querying or key-value observing this property, you can determine the current maximum exposure duration in use.

You may also override the default value by setting this property to a value between the format’s [minExposureDuration](format/minexposureduration.md) and [maxExposureDuration](format/maxexposureduration.md) values. The system throws an exception if you pass an out-of-bounds exposure value.

Setting the property to the special value of [invalid](../../coremedia/cmtime/invalid.md) resets the autoexposure maximum duration to the device’s default for your current configuration. When the device’s [activeFormat](activeformat.md) or the capture session’s [sessionPreset](../avcapturesession/sessionpreset.md) changes, this property resets to the default max exposure duration for the new format or session preset.

On some devices, the auto exposure algorithm picks a different maximum exposure duration for a given format depending on whether you used the [sessionPreset](../avcapturesession/sessionpreset.md) or [activeFormat](activeformat.md) APIs to set to set the format. To ensure uniform default handling of maximum exposure duration, set the value of a capture input’s [unifiedAutoExposureDefaultsEnabled](../avcapturedeviceinput/unifiedautoexposuredefaultsenabled.md) property to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring exposure manually

- [setExposureModeCustom(duration:iso:completionHandler:)](setexposuremodecustom%28duration_iso_completionhandler_%29.md): Sets the exposure mode to a custom state, and locks exposure duration and ISO at explicit values.
- [setExposureModeCustom(lensAperture:duration:iso:completionHandler:)](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md): Sets a custom exposure mode with the specified lens aperture, exposure duration, and ISO values.
- [autoExposureDuration](autoexposureduration.md): A special value that may be passed as the duration parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the exposure duration.
- [autoISO](autoiso.md): A special value that may be passed as the ISO parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the gain value.
- [autoLensAperture](autolensaperture.md): A special value that may be passed as the lensAperture parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the aperture.
- [currentLensAperture](currentlensaperture.md): A special value that may be passed as the lensAperture parameter of a device’s `setExposureModeCustom...` methods to lock at the current position.
- [exposureDuration](exposureduration.md): The length of time over which exposure takes place.
- [iso](iso.md): The current exposure ISO value.
- [lensAperture](lensaperture.md): The size of the lens diaphragm.
- [automaticallyAdjustsExposureDuration](automaticallyadjustsexposureduration.md): This property reports true whenever exposureDuration is unlocked, either by setting exposureMode to one of the automatic modes, or by passing `AVCaptureExposureDurationAuto` to the duration parameter of [setExposureModeCustom(duration:iso:completionHandler:)](setexposuremodecustom%28duration_iso_completionhandler_%29.md) or [setExposureModeCustom(lensAperture:duration:iso:completionHandler:)](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md).
- [automaticallyAdjustsISO](automaticallyadjustsiso.md): This property reports true whenever ISO is unlocked, either by setting exposureMode to one of the automatic modes, or by passing `AVCaptureISOAuto` to the ISO parameter of [setExposureModeCustom(duration:iso:completionHandler:)](setexposuremodecustom%28duration_iso_completionhandler_%29.md) or [setExposureModeCustom(lensAperture:duration:iso:completionHandler:)](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md).
- [automaticallyAdjustsLensAperture](automaticallyadjustslensaperture.md): This property reports true whenever lensAperture is unlocked, either by setting exposureMode to one of the automatic modes, or by passing `AVCaptureLensApertureAuto` to the aperture parameter of [setExposureModeCustom(lensAperture:duration:iso:completionHandler:)](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md).
- [autoExposureLensApertureRateLimit](autoexposurelensapertureratelimit.md): Specifies a rate limit for aperture motion, whenever auto-exposure is active.

# activeMaxExposureDuration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The maximum exposure duration, in seconds, defined in the autoexposure algorithm.

## Declaration

```objectivec
@property (nonatomic) CMTime activeMaxExposureDuration;
```

<a id="Discussion"></a>

## Discussion

When you set the exposureMode to [AVCaptureExposureModeAutoExpose](exposuremode-swift.enum/autoexpose.md) or [AVCaptureExposureModeContinuousAutoExposure](exposuremode-swift.enum/continuousautoexposure.md), the autoexposure algorithm picks a default maximum exposure duration that’s tuned for the current configuration, balancing low light image quality with motion preservation. By querying or key-value observing this property, you can determine the current maximum exposure duration in use.

You may also override the default value by setting this property to a value between the format’s [minExposureDuration](format/minexposureduration.md) and [maxExposureDuration](format/maxexposureduration.md) values. The system throws an exception if you pass an out-of-bounds exposure value.

Setting the property to the special value of [kCMTimeInvalid](../../coremedia/cmtime/invalid.md) resets the autoexposure maximum duration to the device’s default for your current configuration. When the device’s [activeFormat](activeformat.md) or the capture session’s [sessionPreset](../avcapturesession/sessionpreset.md) changes, this property resets to the default max exposure duration for the new format or session preset.

On some devices, the auto exposure algorithm picks a different maximum exposure duration for a given format depending on whether you used the [sessionPreset](../avcapturesession/sessionpreset.md) or [activeFormat](activeformat.md) APIs to set to set the format. To ensure uniform default handling of maximum exposure duration, set the value of a capture input’s [unifiedAutoExposureDefaultsEnabled](../avcapturedeviceinput/unifiedautoexposuredefaultsenabled.md) property to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring exposure manually

- [setExposureModeCustomWithDuration:ISO:completionHandler:](setexposuremodecustom%28duration_iso_completionhandler_%29.md): Sets the exposure mode to a custom state, and locks exposure duration and ISO at explicit values.
- [setExposureModeCustomWithLensAperture:duration:ISO:completionHandler:](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md): Sets a custom exposure mode with the specified lens aperture, exposure duration, and ISO values.
- [AVCaptureExposureDurationAuto](autoexposureduration.md): A special value that may be passed as the duration parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the exposure duration.
- [AVCaptureISOAuto](autoiso.md): A special value that may be passed as the ISO parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the gain value.
- [AVCaptureLensApertureAuto](autolensaperture.md): A special value that may be passed as the lensAperture parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the aperture.
- [AVCaptureLensApertureCurrent](currentlensaperture.md): A special value that may be passed as the lensAperture parameter of a device’s `setExposureModeCustom...` methods to lock at the current position.
- [exposureDuration](exposureduration.md): The length of time over which exposure takes place.
- [ISO](iso.md): The current exposure ISO value.
- [lensAperture](lensaperture.md): The size of the lens diaphragm.
- [automaticallyAdjustsExposureDuration](automaticallyadjustsexposureduration.md): This property reports true whenever exposureDuration is unlocked, either by setting exposureMode to one of the automatic modes, or by passing `AVCaptureExposureDurationAuto` to the duration parameter of [setExposureModeCustomWithDuration:ISO:completionHandler:](setexposuremodecustom%28duration_iso_completionhandler_%29.md) or [setExposureModeCustomWithLensAperture:duration:ISO:completionHandler:](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md).
- [automaticallyAdjustsISO](automaticallyadjustsiso.md): This property reports true whenever ISO is unlocked, either by setting exposureMode to one of the automatic modes, or by passing `AVCaptureISOAuto` to the ISO parameter of [setExposureModeCustomWithDuration:ISO:completionHandler:](setexposuremodecustom%28duration_iso_completionhandler_%29.md) or [setExposureModeCustomWithLensAperture:duration:ISO:completionHandler:](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md).
- [automaticallyAdjustsLensAperture](automaticallyadjustslensaperture.md): This property reports true whenever lensAperture is unlocked, either by setting exposureMode to one of the automatic modes, or by passing `AVCaptureLensApertureAuto` to the aperture parameter of [setExposureModeCustomWithLensAperture:duration:ISO:completionHandler:](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md).
- [autoExposureLensApertureRateLimit](autoexposurelensapertureratelimit.md): Specifies a rate limit for aperture motion, whenever auto-exposure is active.
