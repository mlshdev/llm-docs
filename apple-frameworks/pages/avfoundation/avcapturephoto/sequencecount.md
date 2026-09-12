> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephoto/sequencecount](https://developer.apple.com/documentation/avfoundation/avcapturephoto/sequencecount)

# sequenceCount (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The 1-based index of this photo in a bracketed capture sequence.

## Declaration

```swift
var sequenceCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

If this photo is part of a bracketed capture (requested with the [AVCapturePhotoBracketSettings](../avcapturephotobracketsettings.md) class), this property indicates the current result’s count in the sequence, starting with `1` for the first result.

If this photo is not part of a bracketed capture, this property’s value is `0`.

## See Also

### Examining bracketed capture information

- [bracketSettings](bracketsettings.md): The variations available for bracketed capture settings for this photo.
- [lensStabilizationStatus](lensstabilizationstatus.md): Information about the use of lens stabilization during bracketed photo capture.
- [AVCaptureDevice.LensStabilizationStatus](../avcapturedevice/lensstabilizationstatus.md): Constants that indicate the status of optical image stabilization hardware during a bracketed photo capture.

# sequenceCount (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The 1-based index of this photo in a bracketed capture sequence.

## Declaration

```objectivec
@property (readonly) NSInteger sequenceCount;
```

<a id="Discussion"></a>

## Discussion

If this photo is part of a bracketed capture (requested with the [AVCapturePhotoBracketSettings](../avcapturephotobracketsettings.md) class), this property indicates the current result’s count in the sequence, starting with `1` for the first result.

If this photo is not part of a bracketed capture, this property’s value is `0`.

## See Also

### Examining bracketed capture information

- [bracketSettings](bracketsettings.md): The variations available for bracketed capture settings for this photo.
- [lensStabilizationStatus](lensstabilizationstatus.md): Information about the use of lens stabilization during bracketed photo capture.
- [AVCaptureLensStabilizationStatus](../avcapturedevice/lensstabilizationstatus.md): Constants that indicate the status of optical image stabilization hardware during a bracketed photo capture.
