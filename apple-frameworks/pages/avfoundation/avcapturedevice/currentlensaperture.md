> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/currentlensaperture](https://developer.apple.com/documentation/avfoundation/avcapturedevice/currentlensaperture)

# currentLensAperture (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+

A special value that may be passed as the lensAperture parameter of a device’s `setExposureModeCustom...` methods to lock at the current position.

## Declaration

```swift
class let currentLensAperture: Float
```

<a id="discussion"></a>

## Discussion

This value may be passed to [setExposureModeCustom(lensAperture:duration:iso:completionHandler:)](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md) to lock it to its current value. Note that the device may be adjusting the aperture at the time of the call, in which case [lensAperture](lensaperture.md) may be locked to different value than the value obtained by querying the property.

## See Also

### Configuring exposure manually

- [setExposureModeCustom(duration:iso:completionHandler:)](setexposuremodecustom%28duration_iso_completionhandler_%29.md): Sets the exposure mode to a custom state, and locks exposure duration and ISO at explicit values.
- [setExposureModeCustom(lensAperture:duration:iso:completionHandler:)](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md): Sets a custom exposure mode with the specified lens aperture, exposure duration, and ISO values.
- [autoExposureDuration](autoexposureduration.md): A special value that may be passed as the duration parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the exposure duration.
- [autoISO](autoiso.md): A special value that may be passed as the ISO parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the gain value.
- [autoLensAperture](autolensaperture.md): A special value that may be passed as the lensAperture parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the aperture.
- [exposureDuration](exposureduration.md): The length of time over which exposure takes place.
- [iso](iso.md): The current exposure ISO value.
- [lensAperture](lensaperture.md): The size of the lens diaphragm.
- [activeMaxExposureDuration](activemaxexposureduration.md): The maximum exposure duration, in seconds, defined in the autoexposure algorithm.
- [automaticallyAdjustsExposureDuration](automaticallyadjustsexposureduration.md): This property reports true whenever exposureDuration is unlocked, either by setting exposureMode to one of the automatic modes, or by passing `AVCaptureExposureDurationAuto` to the duration parameter of [setExposureModeCustom(duration:iso:completionHandler:)](setexposuremodecustom%28duration_iso_completionhandler_%29.md) or [setExposureModeCustom(lensAperture:duration:iso:completionHandler:)](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md).
- [automaticallyAdjustsISO](automaticallyadjustsiso.md): This property reports true whenever ISO is unlocked, either by setting exposureMode to one of the automatic modes, or by passing `AVCaptureISOAuto` to the ISO parameter of [setExposureModeCustom(duration:iso:completionHandler:)](setexposuremodecustom%28duration_iso_completionhandler_%29.md) or [setExposureModeCustom(lensAperture:duration:iso:completionHandler:)](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md).
- [automaticallyAdjustsLensAperture](automaticallyadjustslensaperture.md): This property reports true whenever lensAperture is unlocked, either by setting exposureMode to one of the automatic modes, or by passing `AVCaptureLensApertureAuto` to the aperture parameter of [setExposureModeCustom(lensAperture:duration:iso:completionHandler:)](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md).
- [autoExposureLensApertureRateLimit](autoexposurelensapertureratelimit.md): Specifies a rate limit for aperture motion, whenever auto-exposure is active.

# AVCaptureLensApertureCurrent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+

A special value that may be passed as the lensAperture parameter of a device’s `setExposureModeCustom...` methods to lock at the current position.

## Declaration

```objectivec
extern const float AVCaptureLensApertureCurrent;
```

<a id="discussion"></a>

## Discussion

This value may be passed to [setExposureModeCustomWithLensAperture:duration:ISO:completionHandler:](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md) to lock it to its current value. Note that the device may be adjusting the aperture at the time of the call, in which case [lensAperture](lensaperture.md) may be locked to different value than the value obtained by querying the property.

## See Also

### Configuring exposure manually

- [setExposureModeCustomWithDuration:ISO:completionHandler:](setexposuremodecustom%28duration_iso_completionhandler_%29.md): Sets the exposure mode to a custom state, and locks exposure duration and ISO at explicit values.
- [setExposureModeCustomWithLensAperture:duration:ISO:completionHandler:](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md): Sets a custom exposure mode with the specified lens aperture, exposure duration, and ISO values.
- [AVCaptureExposureDurationAuto](autoexposureduration.md): A special value that may be passed as the duration parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the exposure duration.
- [AVCaptureISOAuto](autoiso.md): A special value that may be passed as the ISO parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the gain value.
- [AVCaptureLensApertureAuto](autolensaperture.md): A special value that may be passed as the lensAperture parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the aperture.
- [exposureDuration](exposureduration.md): The length of time over which exposure takes place.
- [ISO](iso.md): The current exposure ISO value.
- [lensAperture](lensaperture.md): The size of the lens diaphragm.
- [activeMaxExposureDuration](activemaxexposureduration.md): The maximum exposure duration, in seconds, defined in the autoexposure algorithm.
- [automaticallyAdjustsExposureDuration](automaticallyadjustsexposureduration.md): This property reports true whenever exposureDuration is unlocked, either by setting exposureMode to one of the automatic modes, or by passing `AVCaptureExposureDurationAuto` to the duration parameter of [setExposureModeCustomWithDuration:ISO:completionHandler:](setexposuremodecustom%28duration_iso_completionhandler_%29.md) or [setExposureModeCustomWithLensAperture:duration:ISO:completionHandler:](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md).
- [automaticallyAdjustsISO](automaticallyadjustsiso.md): This property reports true whenever ISO is unlocked, either by setting exposureMode to one of the automatic modes, or by passing `AVCaptureISOAuto` to the ISO parameter of [setExposureModeCustomWithDuration:ISO:completionHandler:](setexposuremodecustom%28duration_iso_completionhandler_%29.md) or [setExposureModeCustomWithLensAperture:duration:ISO:completionHandler:](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md).
- [automaticallyAdjustsLensAperture](automaticallyadjustslensaperture.md): This property reports true whenever lensAperture is unlocked, either by setting exposureMode to one of the automatic modes, or by passing `AVCaptureLensApertureAuto` to the aperture parameter of [setExposureModeCustomWithLensAperture:duration:ISO:completionHandler:](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md).
- [autoExposureLensApertureRateLimit](autoexposurelensapertureratelimit.md): Specifies a rate limit for aperture motion, whenever auto-exposure is active.
