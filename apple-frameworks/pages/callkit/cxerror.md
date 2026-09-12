> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxerror](https://developer.apple.com/documentation/callkit/cxerror)

# CXError

**Framework:** CallKit  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Error codes for the CallKit errors.

## Declaration

```swift
struct CXError
```

## Topics

### Constants

- [invalidArgument](cxerror/invalidargument.md): The argument is invalid.
- [unentitled](cxerror/unentitled.md): The caller doesn’t have the correct entitlement.
- [unknownError](cxerror/unknownerror.md): An unknown error occurred.

### Type Properties

- [missingVoIPBackgroundMode](cxerror/missingvoipbackgroundmode.md)
- [errorDomain](cxerror/errordomain.md)

### Enumerations

- [CXError.Code](cxerror/code.md): Error codes for the CallKit errors.

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling Errors

- [CXCallEndedReason](cxcallendedreason.md): The reason that a call ended.
- [CXError.Code](cxerror/code.md): Error codes for the CallKit errors.
- [CXErrorCodeIncomingCallError](cxerrorcodeincomingcallerror-swift.struct.md): Codes for errors that occur during incoming calls.
- [CXErrorCodeIncomingCallError.Code](cxerrorcodeincomingcallerror-swift.struct/code.md): Codes for errors that occur during incoming calls.
- [CXErrorCodeNotificationServiceExtensionError](cxerrorcodenotificationserviceextensionerror-swift.struct.md): Errors that can occur when reporting new, incoming VoIP calls.
- [CXErrorDomain](cxerrordomain.md): The domain for CallKit errors.
- [CXErrorDomainIncomingCall](cxerrordomainincomingcall.md): The domain for errors that occur during incoming calls.
