> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/recoverableerror](https://developer.apple.com/documentation/foundation/recoverableerror)

# RecoverableError

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A specialized error that may be recoverable by presenting several potential recovery options to the user.

## Declaration

```swift
protocol RecoverableError : Error
```

## Topics

### Instance Properties

- [recoveryOptions](recoverableerror/recoveryoptions.md): Provides a set of possible recovery options to present to the user.

### Instance Methods

- [attemptRecovery(optionIndex:)](recoverableerror/attemptrecovery%28optionindex_%29.md): Attempt to recover from this error when the user selected the option at the given index. Returns true to indicate successful recovery, and false otherwise.
- [attemptRecovery(optionIndex:resultHandler:)](recoverableerror/attemptrecovery%28optionindex_resulthandler_%29.md): Attempt to recover from this error when the user selected the option at the given index. This routine must call handler and indicate whether recovery was successful (or not).

## Relationships

### Inherits From

- [Error](https://developer.apple.com/documentation/swift/error)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### User-Relevant Errors

- [Error](https://developer.apple.com/documentation/swift/error): A type representing an error value that can be thrown.
- [NSError](nserror.md): Information about an error condition including a domain, a domain-specific error code, and application-specific information.
- [LocalizedError](localizederror.md): A specialized error that provides localized messages describing the error and why it occurred.
- [CustomNSError](customnserror.md): A specialized error that provides a domain, error code, and user-info dictionary.
