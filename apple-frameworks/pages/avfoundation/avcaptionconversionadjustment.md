> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionconversionadjustment](https://developer.apple.com/documentation/avfoundation/avcaptionconversionadjustment)

# AVCaptionConversionAdjustment (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that describes an adjustment to correct a problem found during validation of a caption conversion.

## Declaration

```swift
class AVCaptionConversionAdjustment
```

## Topics

### Accessing the adjustment type

- [adjustmentType](avcaptionconversionadjustment/adjustmenttype-swift.property.md): The type of caption conversion adjustment.
- [AVCaptionConversionAdjustment.AdjustmentType](avcaptionconversionadjustment/adjustmenttype-swift.struct.md): Constants that indicate an adjustment type.
- [AVCaptionConversionTimeRangeAdjustment](avcaptionconversiontimerangeadjustment.md): An object that describes an adjustment to the time range of one or more captions.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVCaptionConversionTimeRangeAdjustment](avcaptionconversiontimerangeadjustment.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting the warning

- [warningType](avcaptionconversionwarning/warningtype-swift.property.md): A type that indicates the nature of the validation warning.
- [rangeOfCaptions](avcaptionconversionwarning/rangeofcaptions.md): The range of the captions for which the system issued a warning.
- [adjustment](avcaptionconversionwarning/adjustment.md): A correction the converter makes when it converts a caption to a specific format.
- [AVCaptionConversionWarning.WarningType](avcaptionconversionwarning/warningtype-swift.struct.md): The type of a caption conversion warning.

# AVCaptionConversionAdjustment (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that describes an adjustment to correct a problem found during validation of a caption conversion.

## Declaration

```objectivec
@interface AVCaptionConversionAdjustment : NSObject
```

## Topics

### Accessing the adjustment type

- [adjustmentType](avcaptionconversionadjustment/adjustmenttype-swift.property.md): The type of caption conversion adjustment.
- [AVCaptionConversionAdjustmentType](avcaptionconversionadjustment/adjustmenttype-swift.struct.md): Constants that indicate an adjustment type.
- [AVCaptionConversionTimeRangeAdjustment](avcaptionconversiontimerangeadjustment.md): An object that describes an adjustment to the time range of one or more captions.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVCaptionConversionTimeRangeAdjustment](avcaptionconversiontimerangeadjustment.md)

## See Also

### Inspecting the warning

- [warningType](avcaptionconversionwarning/warningtype-swift.property.md): A type that indicates the nature of the validation warning.
- [rangeOfCaptions](avcaptionconversionwarning/rangeofcaptions.md): The range of the captions for which the system issued a warning.
- [adjustment](avcaptionconversionwarning/adjustment.md): A correction the converter makes when it converts a caption to a specific format.
- [AVCaptionConversionWarningType](avcaptionconversionwarning/warningtype-swift.struct.md): The type of a caption conversion warning.
