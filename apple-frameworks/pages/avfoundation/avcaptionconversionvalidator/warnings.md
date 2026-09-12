> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionconversionvalidator/warnings](https://developer.apple.com/documentation/avfoundation/avcaptionconversionvalidator/warnings)

# warnings (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The collection of warnings the validator encountered.

## Declaration

```swift
var warnings: [AVCaptionConversionWarning] { get }
```

<a id="Discussion"></a>

## Discussion

This property value may change while the validator’s status is [AVCaptionConversionValidator.Status.validating](status-swift.enum/validating.md).

## See Also

### Validating captions

- [validateCaptionConversion(warningHandler:)](validatecaptionconversion%28warninghandler_%29.md): Validates the object’s captions.
- [AVCaptionConversionWarning](../avcaptionconversionwarning.md): An object that represents a conversion warning produced by a validator.
- [stopValidating()](stopvalidating%28%29.md): Stops the active validation operation.

# warnings (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The collection of warnings the validator encountered.

## Declaration

```objectivec
@property (readonly) NSArray<AVCaptionConversionWarning *> * warnings;
```

<a id="Discussion"></a>

## Discussion

This property value may change while the validator’s status is [AVCaptionConversionValidatorStatusValidating](status-swift.enum/validating.md).

## See Also

### Validating captions

- [validateCaptionConversionWithWarningHandler:](validatecaptionconversion%28warninghandler_%29.md): Validates the object’s captions.
- [AVCaptionConversionWarning](../avcaptionconversionwarning.md): An object that represents a conversion warning produced by a validator.
- [stopValidating](stopvalidating%28%29.md): Stops the active validation operation.
