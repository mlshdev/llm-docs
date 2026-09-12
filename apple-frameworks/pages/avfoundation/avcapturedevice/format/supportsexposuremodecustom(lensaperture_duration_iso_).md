> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/supportsexposuremodecustom(lensaperture:duration:iso:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/supportsexposuremodecustom(lensaperture:duration:iso:))

# supportsExposureModeCustom(lensAperture:duration:iso:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+

Reports if the given set of exposure parameters are supported by this format.

## Declaration

```swift
func supportsExposureModeCustom(lensAperture: Float, duration: CMTime, iso ISO: Float) -> Bool
```

<a id="discussion"></a>

## Discussion

The intended use of this method is to query which combinations of “Auto” parameters (`AVFCapture/AVCaptureLensApertureAuto`, `AVFCapture/AVCaptureExposureDurationAuto`, `AVFCapture/AVCaptureISOAuto`) are supported by this format. If you pass a numeric constant it will be range checked against the parameter’s supported min and max. However you can also pass the “Current” constants (`AVFCapture/AVCaptureLensApertureCurrent`, `AVFCapture/AVCaptureExposureDurationCurrent`, `AVFCapture/AVCaptureISOCurrent`) to generically query locked vs. auto parameter support without picking arbitrary lock values.

> **Example**

> To query support for “shutter priority” where the exposure duration is locked but auto-exposure continues to manage aperture and ISO:
>
> ```swift
> format.supportsExposureModeCustom(lensAperture: AVCaptureDevice.autoLensAperture, duration: AVCaptureDevice.currentExposureDuration, iso: AVCaptureDevice.autoISO)
> ```

Devices that have fixed aperture will have equivalent support for `AVFCapture/AVCaptureLensApertureAuto` and `AVFCapture/AVCaptureLensApertureCurrent`.

# supportsExposureModeCustomWithLensAperture:duration:ISO: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+

Reports if the given set of exposure parameters are supported by this format.

## Declaration

```objectivec
- (BOOL) supportsExposureModeCustomWithLensAperture:(float) lensAperture duration:(CMTime) duration ISO:(float) ISO;
```

<a id="discussion"></a>

## Discussion

The intended use of this method is to query which combinations of “Auto” parameters (`AVFCapture/AVCaptureLensApertureAuto`, `AVFCapture/AVCaptureExposureDurationAuto`, `AVFCapture/AVCaptureISOAuto`) are supported by this format. If you pass a numeric constant it will be range checked against the parameter’s supported min and max. However you can also pass the “Current” constants (`AVFCapture/AVCaptureLensApertureCurrent`, `AVFCapture/AVCaptureExposureDurationCurrent`, `AVFCapture/AVCaptureISOCurrent`) to generically query locked vs. auto parameter support without picking arbitrary lock values.

> **Example**

> To query support for “shutter priority” where the exposure duration is locked but auto-exposure continues to manage aperture and ISO:
>
> ```swift
> format.supportsExposureModeCustom(lensAperture: AVCaptureDevice.autoLensAperture, duration: AVCaptureDevice.currentExposureDuration, iso: AVCaptureDevice.autoISO)
> ```

Devices that have fixed aperture will have equivalent support for `AVFCapture/AVCaptureLensApertureAuto` and `AVFCapture/AVCaptureLensApertureCurrent`.
