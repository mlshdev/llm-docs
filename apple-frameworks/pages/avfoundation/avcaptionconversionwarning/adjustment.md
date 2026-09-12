> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionconversionwarning/adjustment](https://developer.apple.com/documentation/avfoundation/avcaptionconversionwarning/adjustment)

# adjustment (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A correction the converter makes when it converts a caption to a specific format.

## Declaration

```swift
var adjustment: AVCaptionConversionAdjustment? { get }
```

<a id="Discussion"></a>

## Discussion

If this value is `nil` and you perform the conversion without correcting the problem, the system doesn’t include captions that you indicate in the output media data.

## See Also

### Inspecting the warning

- [warningType](warningtype-swift.property.md): A type that indicates the nature of the validation warning.
- [rangeOfCaptions](rangeofcaptions.md): The range of the captions for which the system issued a warning.
- [AVCaptionConversionAdjustment](../avcaptionconversionadjustment.md): An object that describes an adjustment to correct a problem found during validation of a caption conversion.
- [AVCaptionConversionWarning.WarningType](warningtype-swift.struct.md): The type of a caption conversion warning.

# adjustment (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A correction the converter makes when it converts a caption to a specific format.

## Declaration

```objectivec
@property (readonly, nullable) AVCaptionConversionAdjustment * adjustment;
```

<a id="Discussion"></a>

## Discussion

If this value is `nil` and you perform the conversion without correcting the problem, the system doesn’t include captions that you indicate in the output media data.

## See Also

### Inspecting the warning

- [warningType](warningtype-swift.property.md): A type that indicates the nature of the validation warning.
- [rangeOfCaptions](rangeofcaptions.md): The range of the captions for which the system issued a warning.
- [AVCaptionConversionAdjustment](../avcaptionconversionadjustment.md): An object that describes an adjustment to correct a problem found during validation of a caption conversion.
- [AVCaptionConversionWarningType](warningtype-swift.struct.md): The type of a caption conversion warning.
