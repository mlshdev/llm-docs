> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionconversionvalidator](https://developer.apple.com/documentation/avfoundation/avcaptionconversionvalidator)

# AVCaptionConversionValidator (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that validates captions for a conversion operation.

## Declaration

```swift
class AVCaptionConversionValidator
```

## Topics

### Creating a validator

- [init(captions:timeRange:conversionSettings:)](avcaptionconversionvalidator/init%28captions_timerange_conversionsettings_%29.md): Creates an object that validates captions for a conversion operation.

### Inspecting the validator

- [captions](avcaptionconversionvalidator/captions.md): The array of captions that the system validates.
- [timeRange](avcaptionconversionvalidator/timerange.md): The time range of the media timeline in which the captions must exist.

### Validating captions

- [validateCaptionConversion(warningHandler:)](avcaptionconversionvalidator/validatecaptionconversion%28warninghandler_%29.md): Validates the object’s captions.
- [warnings](avcaptionconversionvalidator/warnings.md): The collection of warnings the validator encountered.
- [AVCaptionConversionWarning](avcaptionconversionwarning.md): An object that represents a conversion warning produced by a validator.
- [stopValidating()](avcaptionconversionvalidator/stopvalidating%28%29.md): Stops the active validation operation.

### Checking the status

- [status](avcaptionconversionvalidator/status-swift.property.md): A value that indicates the status of validation.
- [AVCaptionConversionValidator.Status](avcaptionconversionvalidator/status-swift.enum.md): Constants that indicate the status of a validator.

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

## See Also

### Conversion and validation

- [AVCaptionSettingsKey](avcaptionsettingskey.md): A structure that defines dictionary keys to configure the caption converter and validator.
- [AVCaptionFormatConformer](avcaptionformatconformer.md): An object that converts a canonical caption to a specific format.

# AVCaptionConversionValidator (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that validates captions for a conversion operation.

## Declaration

```objectivec
@interface AVCaptionConversionValidator : NSObject
```

## Topics

### Creating a validator

- [initWithCaptions:timeRange:conversionSettings:](avcaptionconversionvalidator/init%28captions_timerange_conversionsettings_%29.md): Creates an object that validates captions for a conversion operation.
- [captionConversionValidatorWithCaptions:timeRange:conversionSettings:](avcaptionconversionvalidator/captionconversionvalidatorwithcaptions_timerange_conversionsettings_.md): A convenience initializer to create an object that validates captions for a conversion operation.

### Inspecting the validator

- [captions](avcaptionconversionvalidator/captions.md): The array of captions that the system validates.
- [timeRange](avcaptionconversionvalidator/timerange.md): The time range of the media timeline in which the captions must exist.

### Validating captions

- [validateCaptionConversionWithWarningHandler:](avcaptionconversionvalidator/validatecaptionconversion%28warninghandler_%29.md): Validates the object’s captions.
- [warnings](avcaptionconversionvalidator/warnings.md): The collection of warnings the validator encountered.
- [AVCaptionConversionWarning](avcaptionconversionwarning.md): An object that represents a conversion warning produced by a validator.
- [stopValidating](avcaptionconversionvalidator/stopvalidating%28%29.md): Stops the active validation operation.

### Checking the status

- [status](avcaptionconversionvalidator/status-swift.property.md): A value that indicates the status of validation.
- [AVCaptionConversionValidatorStatus](avcaptionconversionvalidator/status-swift.enum.md): Constants that indicate the status of a validator.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Conversion and validation

- [AVCaptionSettingsKey](avcaptionsettingskey.md): A structure that defines dictionary keys to configure the caption converter and validator.
- [AVCaptionFormatConformer](avcaptionformatconformer.md): An object that converts a canonical caption to a specific format.
