> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/localizederror](https://developer.apple.com/documentation/foundation/localizederror)

# LocalizedError

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A specialized error that provides localized messages describing the error and why it occurred.

## Declaration

```swift
protocol LocalizedError : Error
```

## Topics

### Instance Properties

- [errorDescription](localizederror/errordescription.md): A localized message describing what error occurred.
- [failureReason](localizederror/failurereason.md): A localized message describing the reason for the failure.
- [helpAnchor](localizederror/helpanchor.md): A localized message providing “help” text if the user requests help.
- [recoverySuggestion](localizederror/recoverysuggestion.md): A localized message describing how one might recover from the failure.

## Relationships

### Inherits From

- [Error](https://developer.apple.com/documentation/swift/error)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### User-Relevant Errors

- [Error](https://developer.apple.com/documentation/swift/error): A type representing an error value that can be thrown.
- [NSError](nserror.md): Information about an error condition including a domain, a domain-specific error code, and application-specific information.
- [RecoverableError](recoverableerror.md): A specialized error that may be recoverable by presenting several potential recovery options to the user.
- [CustomNSError](customnserror.md): A specialized error that provides a domain, error code, and user-info dictionary.
