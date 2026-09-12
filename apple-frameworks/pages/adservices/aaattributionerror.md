> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/adservices/aaattributionerror](https://developer.apple.com/documentation/adservices/aaattributionerror)

# AAAttributionError

**Framework:** AdServices  
**Kind:** Structure  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · macOS 11.1+ · visionOS 1.0+

The error code that the parent class issues.

## Declaration

```swift
struct AAAttributionError
```

## Topics

### Error domain

- [errorDomain](aaattributionerror/errordomain.md): The error domain the framework uses when returning errors.

### Error codes

- [internalError](aaattributionerror/internalerror.md): The server is unable to provide a token because of an internal error.
- [networkError](aaattributionerror/networkerror.md): The server is unable to provide a token because the internet isn’t available.
- [platformNotSupported](aaattributionerror/platformnotsupported.md): The server is unable to provide a token because of an unsupported operating system.
- [AAAttributionError.Code](aaattributionerror/code.md): The error code that the parent class issues.

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [AAAttributionErrorDomain](aaattributionerrordomain.md): The framework attribution error domain.
- [AAAttributionError.Code](aaattributionerror/code.md): The error code that the parent class issues.
