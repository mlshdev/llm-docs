> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxerrorcodeincomingcallerror-swift.struct](https://developer.apple.com/documentation/callkit/cxerrorcodeincomingcallerror-swift.struct)

# CXErrorCodeIncomingCallError

**Framework:** CallKit  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Codes for errors that occur during incoming calls.

## Declaration

```swift
struct CXErrorCodeIncomingCallError
```

## Topics

### Errors

- [callUUIDAlreadyExists](cxerrorcodeincomingcallerror-swift.struct/calluuidalreadyexists.md): The incoming call UUID already exists.
- [filteredByBlockList](cxerrorcodeincomingcallerror-swift.struct/filteredbyblocklist.md): The system is filtering the incoming call because the user is blocking it.
- [filteredByDoNotDisturb](cxerrorcodeincomingcallerror-swift.struct/filteredbydonotdisturb.md): The system is filtering the incoming call because Do Not Disturb is active and the incoming caller isn’t a VIP.
- [unentitled](cxerrorcodeincomingcallerror-swift.struct/unentitled.md): The app doesn’t have the entitlement to receive incoming calls.
- [unknown](cxerrorcodeincomingcallerror-swift.struct/unknown.md): An unknown error occurred.

### Type Properties

- [filteredDuringRestrictedSharingMode](cxerrorcodeincomingcallerror-swift.struct/filteredduringrestrictedsharingmode.md)
- [callIsProtected](cxerrorcodeincomingcallerror-swift.struct/callisprotected.md)
- [errorDomain](cxerrorcodeincomingcallerror-swift.struct/errordomain.md)
- [filteredBySensitiveParticipants](cxerrorcodeincomingcallerror-swift.struct/filteredbysensitiveparticipants.md)

### Enumerations

- [CXErrorCodeIncomingCallError.Code](cxerrorcodeincomingcallerror-swift.struct/code.md): Codes for errors that occur during incoming calls.

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
- [CXError](cxerror.md): Error codes for the CallKit errors.
- [CXError.Code](cxerror/code.md): Error codes for the CallKit errors.
- [CXErrorCodeIncomingCallError.Code](cxerrorcodeincomingcallerror-swift.struct/code.md): Codes for errors that occur during incoming calls.
- [CXErrorCodeNotificationServiceExtensionError](cxerrorcodenotificationserviceextensionerror-swift.struct.md): Errors that can occur when reporting new, incoming VoIP calls.
- [CXErrorDomain](cxerrordomain.md): The domain for CallKit errors.
- [CXErrorDomainIncomingCall](cxerrordomainincomingcall.md): The domain for errors that occur during incoming calls.
