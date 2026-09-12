> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/currentiso](https://developer.apple.com/documentation/avfoundation/avcapturedevice/currentiso)

# currentISO (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A constant to indicate not to specify a new ISO value, and instead set it to its current value.

## Declaration

```swift
class let currentISO: Float
```

<a id="Discussion"></a>

## Discussion

A special value that you may pass as the ISO parameter of the [setExposureModeCustom(duration:iso:completionHandler:)](setexposuremodecustom%28duration_iso_completionhandler_%29.md) method to indicate that the caller doesn’t specify a value for the ISO property, and to instead set to its current value.

> **Note**

>  A device may be adjusting ISO at the time of the call, in which case the value set may differ from the value of thee [iso](iso.md) property.

## See Also

### Exposure constants

- [currentExposureDuration](currentexposureduration.md): A special constant representing the current exposure duration setting.

# AVCaptureISOCurrent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A constant to indicate not to specify a new ISO value, and instead set it to its current value.

## Declaration

```objectivec
extern const float AVCaptureISOCurrent;
```

<a id="Discussion"></a>

## Discussion

A special value that you may pass as the ISO parameter of the [setExposureModeCustomWithDuration:ISO:completionHandler:](setexposuremodecustom%28duration_iso_completionhandler_%29.md) method to indicate that the caller doesn’t specify a value for the ISO property, and to instead set to its current value.

> **Note**

>  A device may be adjusting ISO at the time of the call, in which case the value set may differ from the value of thee [ISO](iso.md) property.

## See Also

### Exposure constants

- [AVCaptureExposureDurationCurrent](currentexposureduration.md): A special constant representing the current exposure duration setting.
