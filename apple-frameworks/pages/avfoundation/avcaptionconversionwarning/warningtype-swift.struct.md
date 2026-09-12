> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionconversionwarning/warningtype-swift.struct](https://developer.apple.com/documentation/avfoundation/avcaptionconversionwarning/warningtype-swift.struct)

# AVCaptionConversionWarning.WarningType (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The type of a caption conversion warning.

## Declaration

```swift
struct WarningType
```

## Topics

### Warning types

- [excessMediaData](warningtype-swift.struct/excessmediadata.md): A type that indicates one or more captions exceed the media data capacity for media of the type and subtype that the conversion settings specify.

### Initializers

- [init(rawValue:)](warningtype-swift.struct/init%28rawvalue_%29.md): Creates a warning type with a string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting the warning

- [warningType](warningtype-swift.property.md): A type that indicates the nature of the validation warning.
- [rangeOfCaptions](rangeofcaptions.md): The range of the captions for which the system issued a warning.
- [adjustment](adjustment.md): A correction the converter makes when it converts a caption to a specific format.
- [AVCaptionConversionAdjustment](../avcaptionconversionadjustment.md): An object that describes an adjustment to correct a problem found during validation of a caption conversion.

# AVCaptionConversionWarningType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The type of a caption conversion warning.

## Declaration

```objectivec
typedef NSString * AVCaptionConversionWarningType;
```

## Topics

### Warning types

- [AVCaptionConversionWarningTypeExcessMediaData](warningtype-swift.struct/excessmediadata.md): A type that indicates one or more captions exceed the media data capacity for media of the type and subtype that the conversion settings specify.

## See Also

### Inspecting the warning

- [warningType](warningtype-swift.property.md): A type that indicates the nature of the validation warning.
- [rangeOfCaptions](rangeofcaptions.md): The range of the captions for which the system issued a warning.
- [adjustment](adjustment.md): A correction the converter makes when it converts a caption to a specific format.
- [AVCaptionConversionAdjustment](../avcaptionconversionadjustment.md): An object that describes an adjustment to correct a problem found during validation of a caption conversion.
