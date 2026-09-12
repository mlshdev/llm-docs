> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxerrorcodeincomingcallerror-swift.struct/code](https://developer.apple.com/documentation/callkit/cxerrorcodeincomingcallerror-swift.struct/code)

# CXErrorCodeIncomingCallError.Code (Swift)

**Framework:** CallKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Codes for errors that occur during incoming calls.

## Declaration

```swift
enum Code
```

## Topics

### Errors

- [CXErrorCodeIncomingCallError.Code.unknown](code/unknown.md): An unknown error occurred.
- [CXErrorCodeIncomingCallError.Code.unentitled](code/unentitled.md): The app isn’t entitled to receive incoming calls.
- [CXErrorCodeIncomingCallError.Code.callUUIDAlreadyExists](code/calluuidalreadyexists.md): The incoming call UUID already exists.
- [CXErrorCodeIncomingCallError.Code.filteredByDoNotDisturb](code/filteredbydonotdisturb.md): The incoming call is filtered because Do Not Disturb is active and the incoming caller is not a VIP.
- [CXErrorCodeIncomingCallError.Code.filteredByBlockList](code/filteredbyblocklist.md): The incoming call is filtered because the incoming caller has been blocked by the user.

### Enumeration Cases

- [CXErrorCodeIncomingCallError.Code.filteredDuringRestrictedSharingMode](code/filteredduringrestrictedsharingmode.md)
- [CXErrorCodeIncomingCallError.Code.callIsProtected](code/callisprotected.md)
- [CXErrorCodeIncomingCallError.Code.filteredBySensitiveParticipants](code/filteredbysensitiveparticipants.md)

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

### Handling Errors

- [CXCallEndedReason](../cxcallendedreason.md): The reason that a call ended.
- [CXError](../cxerror.md): Error codes for the CallKit errors.
- [CXError.Code](../cxerror/code.md): Error codes for the CallKit errors.
- [CXErrorCodeIncomingCallError](../cxerrorcodeincomingcallerror-swift.struct.md): Codes for errors that occur during incoming calls.
- [CXErrorCodeNotificationServiceExtensionError](../cxerrorcodenotificationserviceextensionerror-swift.struct.md): Errors that can occur when reporting new, incoming VoIP calls.
- [CXErrorDomain](../cxerrordomain.md): The domain for CallKit errors.
- [CXErrorDomainIncomingCall](../cxerrordomainincomingcall.md): The domain for errors that occur during incoming calls.

# CXErrorCodeIncomingCallError (Objective-C)

**Framework:** CallKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Codes for errors that occur during incoming calls.

## Declaration

```objectivec
enum CXErrorCodeIncomingCallError : NSInteger;
```

## Topics

### Errors

- [CXErrorCodeIncomingCallErrorUnknown](code/unknown.md): An unknown error occurred.
- [CXErrorCodeIncomingCallErrorUnentitled](code/unentitled.md): The app isn’t entitled to receive incoming calls.
- [CXErrorCodeIncomingCallErrorCallUUIDAlreadyExists](code/calluuidalreadyexists.md): The incoming call UUID already exists.
- [CXErrorCodeIncomingCallErrorFilteredByDoNotDisturb](code/filteredbydonotdisturb.md): The incoming call is filtered because Do Not Disturb is active and the incoming caller is not a VIP.
- [CXErrorCodeIncomingCallErrorFilteredByBlockList](code/filteredbyblocklist.md): The incoming call is filtered because the incoming caller has been blocked by the user.

### Enumeration Cases

- [CXErrorCodeIncomingCallErrorFilteredDuringRestrictedSharingMode](code/filteredduringrestrictedsharingmode.md)
- [CXErrorCodeIncomingCallErrorCallIsProtected](code/callisprotected.md)
- [CXErrorCodeIncomingCallErrorFilteredBySensitiveParticipants](code/filteredbysensitiveparticipants.md)

## See Also

### Handling Errors

- [CXCallEndedReason](../cxcallendedreason.md): The reason that a call ended.
- [CXErrorCode](../cxerror/code.md): Error codes for the CallKit errors.
- [CXErrorDomain](../cxerrordomain.md): The domain for CallKit errors.
- [CXErrorDomainIncomingCall](../cxerrordomainincomingcall.md): The domain for errors that occur during incoming calls.
