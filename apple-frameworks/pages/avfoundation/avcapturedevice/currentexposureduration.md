> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/currentexposureduration](https://developer.apple.com/documentation/avfoundation/avcapturedevice/currentexposureduration)

# currentExposureDuration (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A special constant representing the current exposure duration setting.

## Declaration

```swift
class let currentExposureDuration: CMTime
```

<a id="Discussion"></a>

## Discussion

Pass this value to [setExposureModeCustom(duration:iso:completionHandler:)](setexposuremodecustom%28duration_iso_completionhandler_%29.md) to lock exposure duration to its current value (that’s, to disable autoexposure).

## See Also

### Exposure constants

- [currentISO](currentiso.md): A constant to indicate not to specify a new ISO value, and instead set it to its current value.

# AVCaptureExposureDurationCurrent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A special constant representing the current exposure duration setting.

## Declaration

```objectivec
extern const CMTime AVCaptureExposureDurationCurrent;
```

<a id="Discussion"></a>

## Discussion

Pass this value to [setExposureModeCustomWithDuration:ISO:completionHandler:](setexposuremodecustom%28duration_iso_completionhandler_%29.md) to lock exposure duration to its current value (that’s, to disable autoexposure).

## See Also

### Exposure constants

- [AVCaptureISOCurrent](currentiso.md): A constant to indicate not to specify a new ISO value, and instead set it to its current value.
