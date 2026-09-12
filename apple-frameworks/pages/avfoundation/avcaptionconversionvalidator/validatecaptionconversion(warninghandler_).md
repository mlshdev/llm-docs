> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionconversionvalidator/validatecaptionconversion(warninghandler:)](https://developer.apple.com/documentation/avfoundation/avcaptionconversionvalidator/validatecaptionconversion(warninghandler:))

# validateCaptionConversion(warningHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Validates the object’s captions.

## Declaration

```swift
func validateCaptionConversion(warningHandler handler: @escaping @Sendable (AVCaptionConversionWarning?) -> Void)
```

## Parameters

- `handler`: The callback the system invokes when it finishes validation.

<a id="Discussion"></a>

## Discussion

When the object finishes validating and reports all warnings, it invokes the callback once with a value of `nil` for its warning parameter. When this occurs, the validator’s [status](status-swift.property.md) value changes to [AVCaptionConversionValidator.Status.completed](status-swift.enum/completed.md).

Stop an in-progress validation operation by calling [stopValidating()](stopvalidating%28%29.md).

> **Important**

>  It’s only valid to call this method when the validator’s state is [AVCaptionConversionValidator.Status.unknown](status-swift.enum/unknown.md).

## See Also

### Validating captions

- [warnings](warnings.md): The collection of warnings the validator encountered.
- [AVCaptionConversionWarning](../avcaptionconversionwarning.md): An object that represents a conversion warning produced by a validator.
- [stopValidating()](stopvalidating%28%29.md): Stops the active validation operation.

# validateCaptionConversionWithWarningHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Validates the object’s captions.

## Declaration

```objectivec
- (void) validateCaptionConversionWithWarningHandler:(void (^)(AVCaptionConversionWarning *warning)) handler;
```

## Parameters

- `handler`: The callback the system invokes when it finishes validation.

<a id="Discussion"></a>

## Discussion

When the object finishes validating and reports all warnings, it invokes the callback once with a value of `nil` for its warning parameter. When this occurs, the validator’s [status](status-swift.property.md) value changes to [AVCaptionConversionValidatorStatusCompleted](status-swift.enum/completed.md).

Stop an in-progress validation operation by calling [stopValidating](stopvalidating%28%29.md).

> **Important**

>  It’s only valid to call this method when the validator’s state is [AVCaptionConversionValidatorStatusUnknown](status-swift.enum/unknown.md).

## See Also

### Validating captions

- [warnings](warnings.md): The collection of warnings the validator encountered.
- [AVCaptionConversionWarning](../avcaptionconversionwarning.md): An object that represents a conversion warning produced by a validator.
- [stopValidating](stopvalidating%28%29.md): Stops the active validation operation.
