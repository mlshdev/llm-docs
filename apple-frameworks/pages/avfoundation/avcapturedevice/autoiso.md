> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/autoiso](https://developer.apple.com/documentation/avfoundation/avcapturedevice/autoiso)

# autoISO (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+

A special value that may be passed as the ISO parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the gain value.

## Declaration

```swift
class let autoISO: Float
```

<a id="discussion"></a>

## Discussion

This value may be passed to [setExposureModeCustom(duration:iso:completionHandler:)](setexposuremodecustom%28duration_iso_completionhandler_%29.md) or [setExposureModeCustom(lensAperture:duration:iso:completionHandler:)](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md) to enable “priority” modes, where some parameters are locked to specified values (given “priority”), whereas the ones specified as “auto” will be continually adjusted by the system to maintain image brightness.

## See Also

### Configuring exposure manually

- [setExposureModeCustom(duration:iso:completionHandler:)](setexposuremodecustom%28duration_iso_completionhandler_%29.md): Sets the exposure mode to a custom state, and locks exposure duration and ISO at explicit values.
- [setExposureModeCustom(lensAperture:duration:iso:completionHandler:)](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md): Sets a custom exposure mode with the specified lens aperture, exposure duration, and ISO values.
- [autoExposureDuration](autoexposureduration.md): A special value that may be passed as the duration parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the exposure duration.
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

# AVCaptureISOAuto (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+

A special value that may be passed as the ISO parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the gain value.

## Declaration

```objectivec
extern const float AVCaptureISOAuto;
```

<a id="discussion"></a>

## Discussion

This value may be passed to [setExposureModeCustomWithDuration:ISO:completionHandler:](setexposuremodecustom%28duration_iso_completionhandler_%29.md) or [setExposureModeCustomWithLensAperture:duration:ISO:completionHandler:](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md) to enable “priority” modes, where some parameters are locked to specified values (given “priority”), whereas the ones specified as “auto” will be continually adjusted by the system to maintain image brightness.

## See Also

### Configuring exposure manually

- [setExposureModeCustomWithDuration:ISO:completionHandler:](setexposuremodecustom%28duration_iso_completionhandler_%29.md): Sets the exposure mode to a custom state, and locks exposure duration and ISO at explicit values.
- [setExposureModeCustomWithLensAperture:duration:ISO:completionHandler:](setexposuremodecustom%28lensaperture_duration_iso_completionhandler_%29.md): Sets a custom exposure mode with the specified lens aperture, exposure duration, and ISO values.
- [AVCaptureExposureDurationAuto](autoexposureduration.md): A special value that may be passed as the duration parameter of a device’s `setExposureModeCustom...` methods to allow the system’s auto-exposure system to manage the exposure duration.
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
