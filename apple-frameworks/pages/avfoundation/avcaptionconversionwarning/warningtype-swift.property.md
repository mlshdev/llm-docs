> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionconversionwarning/warningtype-swift.property](https://developer.apple.com/documentation/avfoundation/avcaptionconversionwarning/warningtype-swift.property)

# warningType (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A type that indicates the nature of the validation warning.

## Declaration

```swift
var warningType: AVCaptionConversionWarning.WarningType { get }
```

## See Also

### Inspecting the warning

- [rangeOfCaptions](rangeofcaptions.md): The range of the captions for which the system issued a warning.
- [adjustment](adjustment.md): A correction the converter makes when it converts a caption to a specific format.
- [AVCaptionConversionAdjustment](../avcaptionconversionadjustment.md): An object that describes an adjustment to correct a problem found during validation of a caption conversion.
- [AVCaptionConversionWarning.WarningType](warningtype-swift.struct.md): The type of a caption conversion warning.

# warningType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A type that indicates the nature of the validation warning.

## Declaration

```objectivec
@property (readonly) AVCaptionConversionWarningType warningType;
```

## See Also

### Inspecting the warning

- [rangeOfCaptions](rangeofcaptions.md): The range of the captions for which the system issued a warning.
- [adjustment](adjustment.md): A correction the converter makes when it converts a caption to a specific format.
- [AVCaptionConversionAdjustment](../avcaptionconversionadjustment.md): An object that describes an adjustment to correct a problem found during validation of a caption conversion.
- [AVCaptionConversionWarningType](warningtype-swift.struct.md): The type of a caption conversion warning.
