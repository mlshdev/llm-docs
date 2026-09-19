> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturedevice/autofocusrangerestriction-swift.enum/none

# AVCaptureDevice.AutoFocusRangeRestriction.none (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The device attempts to focus on objects at any range.

## Declaration

```swift
case none
```

<a id="Discussion"></a>

## Discussion

This value is the default, and the only value allowed on devices that do not support focus range restriction.

## See Also

### Constants

- [AVCaptureDevice.AutoFocusRangeRestriction.near](near.md): The device primarily attempts to focus on subjects near the camera.
- [AVCaptureDevice.AutoFocusRangeRestriction.far](far.md): The device primarily attempts to focus on subjects far away from the camera.

# AVCaptureAutoFocusRangeRestrictionNone (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The device attempts to focus on objects at any range.

## Declaration

```objectivec
AVCaptureAutoFocusRangeRestrictionNone
```

<a id="Discussion"></a>

## Discussion

This value is the default, and the only value allowed on devices that do not support focus range restriction.

## See Also

### Constants

- [AVCaptureAutoFocusRangeRestrictionNear](near.md): The device primarily attempts to focus on subjects near the camera.
- [AVCaptureAutoFocusRangeRestrictionFar](far.md): The device primarily attempts to focus on subjects far away from the camera.
