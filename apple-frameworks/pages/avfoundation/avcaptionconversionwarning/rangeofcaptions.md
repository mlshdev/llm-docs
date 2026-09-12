> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionconversionwarning/rangeofcaptions](https://developer.apple.com/documentation/avfoundation/avcaptionconversionwarning/rangeofcaptions)

# rangeOfCaptions (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The range of the captions for which the system issued a warning.

## Declaration

```swift
var rangeOfCaptions: NSRange { get }
```

<a id="Discussion"></a>

## Discussion

This object only references captions with the same time range. If captions with different start times and durations have similar problems, or if individual captions have multiple problems, the validator generates separate instances of this class for each problem case.

## See Also

### Inspecting the warning

- [warningType](warningtype-swift.property.md): A type that indicates the nature of the validation warning.
- [adjustment](adjustment.md): A correction the converter makes when it converts a caption to a specific format.
- [AVCaptionConversionAdjustment](../avcaptionconversionadjustment.md): An object that describes an adjustment to correct a problem found during validation of a caption conversion.
- [AVCaptionConversionWarning.WarningType](warningtype-swift.struct.md): The type of a caption conversion warning.

# rangeOfCaptions (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The range of the captions for which the system issued a warning.

## Declaration

```objectivec
@property (readonly) NSRange rangeOfCaptions;
```

<a id="Discussion"></a>

## Discussion

This object only references captions with the same time range. If captions with different start times and durations have similar problems, or if individual captions have multiple problems, the validator generates separate instances of this class for each problem case.

## See Also

### Inspecting the warning

- [warningType](warningtype-swift.property.md): A type that indicates the nature of the validation warning.
- [adjustment](adjustment.md): A correction the converter makes when it converts a caption to a specific format.
- [AVCaptionConversionAdjustment](../avcaptionconversionadjustment.md): An object that describes an adjustment to correct a problem found during validation of a caption conversion.
- [AVCaptionConversionWarningType](warningtype-swift.struct.md): The type of a caption conversion warning.
