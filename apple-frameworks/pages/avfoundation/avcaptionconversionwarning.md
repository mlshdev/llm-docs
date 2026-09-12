> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionconversionwarning](https://developer.apple.com/documentation/avfoundation/avcaptionconversionwarning)

# AVCaptionConversionWarning (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that represents a conversion warning produced by a validator.

## Declaration

```swift
class AVCaptionConversionWarning
```

## Topics

### Inspecting the warning

- [warningType](avcaptionconversionwarning/warningtype-swift.property.md): A type that indicates the nature of the validation warning.
- [rangeOfCaptions](avcaptionconversionwarning/rangeofcaptions.md): The range of the captions for which the system issued a warning.
- [adjustment](avcaptionconversionwarning/adjustment.md): A correction the converter makes when it converts a caption to a specific format.
- [AVCaptionConversionAdjustment](avcaptionconversionadjustment.md): An object that describes an adjustment to correct a problem found during validation of a caption conversion.
- [AVCaptionConversionWarning.WarningType](avcaptionconversionwarning/warningtype-swift.struct.md): The type of a caption conversion warning.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

### Validating captions

- [validateCaptionConversion(warningHandler:)](avcaptionconversionvalidator/validatecaptionconversion%28warninghandler_%29.md): Validates the object’s captions.
- [warnings](avcaptionconversionvalidator/warnings.md): The collection of warnings the validator encountered.
- [stopValidating()](avcaptionconversionvalidator/stopvalidating%28%29.md): Stops the active validation operation.

# AVCaptionConversionWarning (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that represents a conversion warning produced by a validator.

## Declaration

```objectivec
@interface AVCaptionConversionWarning : NSObject
```

## Topics

### Inspecting the warning

- [warningType](avcaptionconversionwarning/warningtype-swift.property.md): A type that indicates the nature of the validation warning.
- [rangeOfCaptions](avcaptionconversionwarning/rangeofcaptions.md): The range of the captions for which the system issued a warning.
- [adjustment](avcaptionconversionwarning/adjustment.md): A correction the converter makes when it converts a caption to a specific format.
- [AVCaptionConversionAdjustment](avcaptionconversionadjustment.md): An object that describes an adjustment to correct a problem found during validation of a caption conversion.
- [AVCaptionConversionWarningType](avcaptionconversionwarning/warningtype-swift.struct.md): The type of a caption conversion warning.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Validating captions

- [validateCaptionConversionWithWarningHandler:](avcaptionconversionvalidator/validatecaptionconversion%28warninghandler_%29.md): Validates the object’s captions.
- [warnings](avcaptionconversionvalidator/warnings.md): The collection of warnings the validator encountered.
- [stopValidating](avcaptionconversionvalidator/stopvalidating%28%29.md): Stops the active validation operation.
