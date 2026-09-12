> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxerror/code](https://developer.apple.com/documentation/callkit/cxerror/code)

# CXError.Code (Swift)

**Framework:** CallKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Error codes for the CallKit errors.

## Declaration

```swift
enum Code
```

## Topics

### Constants

- [CXError.Code.invalidArgument](code/invalidargument.md): The argument is invalid.
- [CXError.Code.unentitled](code/unentitled.md): The caller doesn’t have the correct entitlement.
- [CXError.Code.unknownError](code/unknownerror.md): An unknown error occurred.

### Enumeration Cases

- [CXError.Code.missingVoIPBackgroundMode](code/missingvoipbackgroundmode.md)

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
- [CXErrorCodeIncomingCallError](../cxerrorcodeincomingcallerror-swift.struct.md): Codes for errors that occur during incoming calls.
- [CXErrorCodeIncomingCallError.Code](../cxerrorcodeincomingcallerror-swift.struct/code.md): Codes for errors that occur during incoming calls.
- [CXErrorCodeNotificationServiceExtensionError](../cxerrorcodenotificationserviceextensionerror-swift.struct.md): Errors that can occur when reporting new, incoming VoIP calls.
- [CXErrorDomain](../cxerrordomain.md): The domain for CallKit errors.
- [CXErrorDomainIncomingCall](../cxerrordomainincomingcall.md): The domain for errors that occur during incoming calls.

# CXErrorCode (Objective-C)

**Framework:** CallKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Error codes for the CallKit errors.

## Declaration

```objectivec
enum CXErrorCode : NSInteger;
```

## Topics

### Constants

- [CXErrorCodeInvalidArgument](code/invalidargument.md): The argument is invalid.
- [CXErrorCodeUnentitled](code/unentitled.md): The caller doesn’t have the correct entitlement.
- [CXErrorCodeUnknownError](code/unknownerror.md): An unknown error occurred.

### Enumeration Cases

- [CXErrorCodeMissingVoIPBackgroundMode](code/missingvoipbackgroundmode.md)

## See Also

### Handling Errors

- [CXCallEndedReason](../cxcallendedreason.md): The reason that a call ended.
- [CXErrorCodeIncomingCallError](../cxerrorcodeincomingcallerror-swift.struct/code.md): Codes for errors that occur during incoming calls.
- [CXErrorDomain](../cxerrordomain.md): The domain for CallKit errors.
- [CXErrorDomainIncomingCall](../cxerrordomainincomingcall.md): The domain for errors that occur during incoming calls.
