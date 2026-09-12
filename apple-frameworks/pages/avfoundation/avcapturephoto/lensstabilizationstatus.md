> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephoto/lensstabilizationstatus](https://developer.apple.com/documentation/avfoundation/avcapturephoto/lensstabilizationstatus)

# lensStabilizationStatus (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Information about the use of lens stabilization during bracketed photo capture.

## Declaration

```swift
var lensStabilizationStatus: AVCaptureDevice.LensStabilizationStatus { get }
```

<a id="Discussion"></a>

## Discussion

This property applies only to capture results for which you requested optical image stabilization (OIS) across all frames of a bracketed photo capture (using the [AVCapturePhotoBracketSettings](../avcapturephotobracketsettings.md) [isLensStabilizationEnabled](../avcapturephotobracketsettings/islensstabilizationenabled.md) property).

If the device configuration does not support OIS, this property’s value is [AVCaptureDevice.LensStabilizationStatus.unsupported](../avcapturedevice/lensstabilizationstatus/unsupported.md). If OIS is supported, but this captured photo is not from a bracketed capture where OIS was requested, this property’s value is [AVCaptureDevice.LensStabilizationStatus.off](../avcapturedevice/lensstabilizationstatus/off.md). Otherwise, this property indicates how the device applied OIS across the duration of the bracketed capture.

## See Also

### Examining bracketed capture information

- [bracketSettings](bracketsettings.md): The variations available for bracketed capture settings for this photo.
- [sequenceCount](sequencecount.md): The 1-based index of this photo in a bracketed capture sequence.
- [AVCaptureDevice.LensStabilizationStatus](../avcapturedevice/lensstabilizationstatus.md): Constants that indicate the status of optical image stabilization hardware during a bracketed photo capture.

# lensStabilizationStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Information about the use of lens stabilization during bracketed photo capture.

## Declaration

```objectivec
@property (readonly) AVCaptureLensStabilizationStatus lensStabilizationStatus;
```

<a id="Discussion"></a>

## Discussion

This property applies only to capture results for which you requested optical image stabilization (OIS) across all frames of a bracketed photo capture (using the [AVCapturePhotoBracketSettings](../avcapturephotobracketsettings.md) [lensStabilizationEnabled](../avcapturephotobracketsettings/islensstabilizationenabled.md) property).

If the device configuration does not support OIS, this property’s value is [AVCaptureLensStabilizationStatusUnsupported](../avcapturedevice/lensstabilizationstatus/unsupported.md). If OIS is supported, but this captured photo is not from a bracketed capture where OIS was requested, this property’s value is [AVCaptureLensStabilizationStatusOff](../avcapturedevice/lensstabilizationstatus/off.md). Otherwise, this property indicates how the device applied OIS across the duration of the bracketed capture.

## See Also

### Examining bracketed capture information

- [bracketSettings](bracketsettings.md): The variations available for bracketed capture settings for this photo.
- [sequenceCount](sequencecount.md): The 1-based index of this photo in a bracketed capture sequence.
- [AVCaptureLensStabilizationStatus](../avcapturedevice/lensstabilizationstatus.md): Constants that indicate the status of optical image stabilization hardware during a bracketed photo capture.
