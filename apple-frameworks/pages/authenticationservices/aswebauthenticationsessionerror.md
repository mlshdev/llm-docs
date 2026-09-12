> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsessionerror](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsessionerror)

# ASWebAuthenticationSessionError

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.15+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 6.2+

Errors that a web authentication session can generate.

## Declaration

```swift
struct ASWebAuthenticationSessionError
```

## Topics

### Error Domain

- [ASWebAuthenticationSessionErrorDomain](aswebauthenticationsessionerrordomain.md): The error domain for a web authentication session.

### Error Codes

- [canceledLogin](aswebauthenticationsessionerror/canceledlogin.md): The login has been canceled.
- [presentationContextNotProvided](aswebauthenticationsessionerror/presentationcontextnotprovided.md): A context wasn’t provided.
- [presentationContextInvalid](aswebauthenticationsessionerror/presentationcontextinvalid.md): The context was invalid.
- [ASWebAuthenticationSessionError.Code](aswebauthenticationsessionerror/code.md): The error code for a web authentication session error.

### Type Properties

- [errorDomain](aswebauthenticationsessionerror/errordomain.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Recognizing Errors

- [ASWebAuthenticationSessionErrorDomain](aswebauthenticationsessionerrordomain.md): The error domain for a web authentication session.
- [ASWebAuthenticationSessionError.Code](aswebauthenticationsessionerror/code.md): The error code for a web authentication session error.
