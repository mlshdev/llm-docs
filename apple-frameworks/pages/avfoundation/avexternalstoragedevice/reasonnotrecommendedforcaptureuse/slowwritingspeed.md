> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avexternalstoragedevice/reasonnotrecommendedforcaptureuse/slowwritingspeed

# slowWritingSpeed (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

## Declaration

```swift
static let slowWritingSpeed: AVExternalStorageDevice.ReasonNotRecommendedForCaptureUse
```

<a id="discussion"></a>

## Discussion

Indicates that the storage device is not recommended for capture as it doesn’t support the recommended writing speed.

## See Also

### Reasons

- [encrypted](encrypted.md)
- [unknownWritingSpeed](unknownwritingspeed.md)
- [unsupportedFileSystem](unsupportedfilesystem.md)

# AVExternalStorageDeviceReasonNotRecommendedForCaptureUseSlowWritingSpeed (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

## Declaration

```objectivec
extern AVExternalStorageDeviceReasonNotRecommendedForCaptureUse AVExternalStorageDeviceReasonNotRecommendedForCaptureUseSlowWritingSpeed;
```

<a id="discussion"></a>

## Discussion

Indicates that the storage device is not recommended for capture as it doesn’t support the recommended writing speed.

## See Also

### Reasons

- [AVExternalStorageDeviceReasonNotRecommendedForCaptureUseEncrypted](encrypted.md)
- [AVExternalStorageDeviceReasonNotRecommendedForCaptureUseUnknownWritingSpeed](unknownwritingspeed.md)
- [AVExternalStorageDeviceReasonNotRecommendedForCaptureUseUnsupportedFileSystem](unsupportedfilesystem.md)
