> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephoto/bracketsettings](https://developer.apple.com/documentation/avfoundation/avcapturephoto/bracketsettings)

# bracketSettings (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The variations available for bracketed capture settings for this photo.

## Declaration

```swift
var bracketSettings: AVCaptureBracketedStillImageSettings? { get }
```

<a id="Discussion"></a>

## Discussion

When you request a bracketed capture using the [AVCapturePhotoBracketSettings](../avcapturephotobracketsettings.md) class, you specify an array of [AVCaptureBracketedStillImageSettings](../avcapturebracketedstillimagesettings.md) objects indicating the capture setting variations (such as exposure compensation) to apply to each image in the bracket. This property indicates the settings associated with this particular photo, or `nil` if this photo is not part of a bracketed capture.

## See Also

### Examining bracketed capture information

- [sequenceCount](sequencecount.md): The 1-based index of this photo in a bracketed capture sequence.
- [lensStabilizationStatus](lensstabilizationstatus.md): Information about the use of lens stabilization during bracketed photo capture.
- [AVCaptureDevice.LensStabilizationStatus](../avcapturedevice/lensstabilizationstatus.md): Constants that indicate the status of optical image stabilization hardware during a bracketed photo capture.

# bracketSettings (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The variations available for bracketed capture settings for this photo.

## Declaration

```objectivec
@property (readonly, nullable) AVCaptureBracketedStillImageSettings * bracketSettings;
```

<a id="Discussion"></a>

## Discussion

When you request a bracketed capture using the [AVCapturePhotoBracketSettings](../avcapturephotobracketsettings.md) class, you specify an array of [AVCaptureBracketedStillImageSettings](../avcapturebracketedstillimagesettings.md) objects indicating the capture setting variations (such as exposure compensation) to apply to each image in the bracket. This property indicates the settings associated with this particular photo, or `nil` if this photo is not part of a bracketed capture.

## See Also

### Examining bracketed capture information

- [sequenceCount](sequencecount.md): The 1-based index of this photo in a bracketed capture sequence.
- [lensStabilizationStatus](lensstabilizationstatus.md): Information about the use of lens stabilization during bracketed photo capture.
- [AVCaptureLensStabilizationStatus](../avcapturedevice/lensstabilizationstatus.md): Constants that indicate the status of optical image stabilization hardware during a bracketed photo capture.
