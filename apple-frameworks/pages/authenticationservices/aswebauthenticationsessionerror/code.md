> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsessionerror/code](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsessionerror/code)

# ASWebAuthenticationSessionError.Code (Swift)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.15+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 6.2+

The error code for a web authentication session error.

## Declaration

```swift
enum Code
```

## Topics

### Codes

- [ASWebAuthenticationSessionError.Code.canceledLogin](code/canceledlogin.md): The login has been canceled.
- [ASWebAuthenticationSessionError.Code.presentationContextNotProvided](code/presentationcontextnotprovided.md): A context wasn’t provided.
- [ASWebAuthenticationSessionError.Code.presentationContextInvalid](code/presentationcontextinvalid.md): The context was invalid.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Recognizing Errors

- [ASWebAuthenticationSessionError](../aswebauthenticationsessionerror.md): Errors that a web authentication session can generate.
- [ASWebAuthenticationSessionErrorDomain](../aswebauthenticationsessionerrordomain.md): The error domain for a web authentication session.

# ASWebAuthenticationSessionErrorCode (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 6.2+

The error code for a web authentication session error.

## Declaration

```objectivec
enum ASWebAuthenticationSessionErrorCode : NSInteger;
```

## Topics

### Codes

- [ASWebAuthenticationSessionErrorCodeCanceledLogin](code/canceledlogin.md): The login has been canceled.
- [ASWebAuthenticationSessionErrorCodePresentationContextNotProvided](code/presentationcontextnotprovided.md): A context wasn’t provided.
- [ASWebAuthenticationSessionErrorCodePresentationContextInvalid](code/presentationcontextinvalid.md): The context was invalid.

## See Also

### Recognizing Errors

- [ASWebAuthenticationSessionErrorDomain](../aswebauthenticationsessionerrordomain.md): The error domain for a web authentication session.
