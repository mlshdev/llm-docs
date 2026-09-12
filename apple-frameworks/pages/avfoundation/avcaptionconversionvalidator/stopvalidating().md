> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionconversionvalidator/stopvalidating()](https://developer.apple.com/documentation/avfoundation/avcaptionconversionvalidator/stopvalidating())

# stopValidating() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Stops the active validation operation.

## Declaration

```swift
func stopValidating()
```

<a id="Discussion"></a>

## Discussion

You can call this method at any time, even within the validator’s callback to its handler.

Calling this method stops validation and changes the [status](status-swift.property.md) value to [AVCaptionConversionValidator.Status.stopped](status-swift.enum/stopped.md).

## See Also

### Validating captions

- [validateCaptionConversion(warningHandler:)](validatecaptionconversion%28warninghandler_%29.md): Validates the object’s captions.
- [warnings](warnings.md): The collection of warnings the validator encountered.
- [AVCaptionConversionWarning](../avcaptionconversionwarning.md): An object that represents a conversion warning produced by a validator.

# stopValidating (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Stops the active validation operation.

## Declaration

```objectivec
- (void) stopValidating;
```

<a id="Discussion"></a>

## Discussion

You can call this method at any time, even within the validator’s callback to its handler.

Calling this method stops validation and changes the [status](status-swift.property.md) value to [AVCaptionConversionValidatorStatusStopped](status-swift.enum/stopped.md).

## See Also

### Validating captions

- [validateCaptionConversionWithWarningHandler:](validatecaptionconversion%28warninghandler_%29.md): Validates the object’s captions.
- [warnings](warnings.md): The collection of warnings the validator encountered.
- [AVCaptionConversionWarning](../avcaptionconversionwarning.md): An object that represents a conversion warning produced by a validator.
