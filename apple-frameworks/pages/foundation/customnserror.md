> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/customnserror](https://developer.apple.com/documentation/foundation/customnserror)

# CustomNSError

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A specialized error that provides a domain, error code, and user-info dictionary.

## Declaration

```swift
protocol CustomNSError : Error
```

## Topics

### Instance Properties

- [errorCode](customnserror/errorcode.md): The error code within the given domain.
- [errorUserInfo](customnserror/erroruserinfo.md): The user-info dictionary.

### Type Properties

- [errorDomain](customnserror/errordomain.md): The domain of the error.

## Relationships

### Inherits From

- [Error](https://developer.apple.com/documentation/swift/error)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [CocoaError](cocoaerror.md)
- [MachError](macherror.md)
- [POSIXError](posixerror.md)
- [URLError](urlerror.md)

## See Also

### User-Relevant Errors

- [Error](https://developer.apple.com/documentation/swift/error): A type representing an error value that can be thrown.
- [NSError](nserror.md): Information about an error condition including a domain, a domain-specific error code, and application-specific information.
- [LocalizedError](localizederror.md): A specialized error that provides localized messages describing the error and why it occurred.
- [RecoverableError](recoverableerror.md): A specialized error that may be recoverable by presenting several potential recovery options to the user.
