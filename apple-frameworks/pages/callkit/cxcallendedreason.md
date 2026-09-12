> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcallendedreason](https://developer.apple.com/documentation/callkit/cxcallendedreason)

# CXCallEndedReason (Swift)

**Framework:** CallKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

The reason that a call ended.

## Declaration

```swift
enum CXCallEndedReason
```

<a id="overview"></a>

## Overview

Pass these values to the [reportCall(with:endedAt:reason:)](cxprovider/reportcall%28with_endedat_reason_%29.md) method.

## Topics

### Constants

- [CXCallEndedReason.failed](cxcallendedreason/failed.md): An error occurred while attempting to service the call.
- [CXCallEndedReason.remoteEnded](cxcallendedreason/remoteended.md): The remote party explicitly ended the call.
- [CXCallEndedReason.unanswered](cxcallendedreason/unanswered.md): The call never started connecting and was never explicitly ended, such as when an outgoing or incoming call times out.
- [CXCallEndedReason.answeredElsewhere](cxcallendedreason/answeredelsewhere.md): Another device answered the call.
- [CXCallEndedReason.declinedElsewhere](cxcallendedreason/declinedelsewhere.md): Another device declined the call.

### Initializers

- [init(rawValue:)](cxcallendedreason/init%28rawvalue_%29.md)

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

- [CXError](cxerror.md): Error codes for the CallKit errors.
- [CXError.Code](cxerror/code.md): Error codes for the CallKit errors.
- [CXErrorCodeIncomingCallError](cxerrorcodeincomingcallerror-swift.struct.md): Codes for errors that occur during incoming calls.
- [CXErrorCodeIncomingCallError.Code](cxerrorcodeincomingcallerror-swift.struct/code.md): Codes for errors that occur during incoming calls.
- [CXErrorCodeNotificationServiceExtensionError](cxerrorcodenotificationserviceextensionerror-swift.struct.md): Errors that can occur when reporting new, incoming VoIP calls.
- [CXErrorDomain](cxerrordomain.md): The domain for CallKit errors.
- [CXErrorDomainIncomingCall](cxerrordomainincomingcall.md): The domain for errors that occur during incoming calls.

# CXCallEndedReason (Objective-C)

**Framework:** CallKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

The reason that a call ended.

## Declaration

```objectivec
enum CXCallEndedReason : NSInteger;
```

<a id="overview"></a>

## Overview

Pass these values to the [reportCallWithUUID:endedAtDate:reason:](cxprovider/reportcall%28with_endedat_reason_%29.md) method.

## Topics

### Constants

- [CXCallEndedReasonFailed](cxcallendedreason/failed.md): An error occurred while attempting to service the call.
- [CXCallEndedReasonRemoteEnded](cxcallendedreason/remoteended.md): The remote party explicitly ended the call.
- [CXCallEndedReasonUnanswered](cxcallendedreason/unanswered.md): The call never started connecting and was never explicitly ended, such as when an outgoing or incoming call times out.
- [CXCallEndedReasonAnsweredElsewhere](cxcallendedreason/answeredelsewhere.md): Another device answered the call.
- [CXCallEndedReasonDeclinedElsewhere](cxcallendedreason/declinedelsewhere.md): Another device declined the call.

## See Also

### Handling Errors

- [CXErrorCode](cxerror/code.md): Error codes for the CallKit errors.
- [CXErrorCodeIncomingCallError](cxerrorcodeincomingcallerror-swift.struct/code.md): Codes for errors that occur during incoming calls.
- [CXErrorDomain](cxerrordomain.md): The domain for CallKit errors.
- [CXErrorDomainIncomingCall](cxerrordomainincomingcall.md): The domain for errors that occur during incoming calls.
