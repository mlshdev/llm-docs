> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionconversionvalidator/status-swift.enum](https://developer.apple.com/documentation/avfoundation/avcaptionconversionvalidator/status-swift.enum)

# AVCaptionConversionValidator.Status (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Constants that indicate the status of a validator.

## Declaration

```swift
enum Status
```

## Topics

### Validation statuses

- [AVCaptionConversionValidator.Status.unknown](status-swift.enum/unknown.md): A status that indicates the system didn’t initialize the validation operation.
- [AVCaptionConversionValidator.Status.validating](status-swift.enum/validating.md): A status that indicates the system validation is in progress.
- [AVCaptionConversionValidator.Status.completed](status-swift.enum/completed.md): A status that indicates the system validation is complete.
- [AVCaptionConversionValidator.Status.stopped](status-swift.enum/stopped.md): A status that indicates the system validation stopped prior to completion.

### Initializers

- [init(rawValue:)](status-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking the status

- [status](status-swift.property.md): A value that indicates the status of validation.

# AVCaptionConversionValidatorStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Constants that indicate the status of a validator.

## Declaration

```objectivec
enum AVCaptionConversionValidatorStatus : NSInteger;
```

## Topics

### Validation statuses

- [AVCaptionConversionValidatorStatusUnknown](status-swift.enum/unknown.md): A status that indicates the system didn’t initialize the validation operation.
- [AVCaptionConversionValidatorStatusValidating](status-swift.enum/validating.md): A status that indicates the system validation is in progress.
- [AVCaptionConversionValidatorStatusCompleted](status-swift.enum/completed.md): A status that indicates the system validation is complete.
- [AVCaptionConversionValidatorStatusStopped](status-swift.enum/stopped.md): A status that indicates the system validation stopped prior to completion.

## See Also

### Checking the status

- [status](status-swift.property.md): A value that indicates the status of validation.
