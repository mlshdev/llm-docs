> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxerrorcodenotificationserviceextensionerror-swift.struct](https://developer.apple.com/documentation/callkit/cxerrorcodenotificationserviceextensionerror-swift.struct)

# CXErrorCodeNotificationServiceExtensionError

**Framework:** CallKit  
**Kind:** Structure  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+ · watchOS 9.0+

Errors that can occur when reporting new, incoming VoIP calls.

## Declaration

```swift
struct CXErrorCodeNotificationServiceExtensionError
```

<a id="overview"></a>

## Overview

The system can return these errors to the [reportNewIncomingVoIPPushPayload(\_:completion:)](cxprovider/reportnewincomingvoippushpayload%28__completion_%29.md) method’s completion handler.

## Topics

### Understanding Error Codes

- [invalidClientProcess](cxerrorcodenotificationserviceextensionerror-swift.struct/invalidclientprocess.md): An error indicating that an invalid client process reported the incoming call.
- [missingNotificationFilteringEntitlement](cxerrorcodenotificationserviceextensionerror-swift.struct/missingnotificationfilteringentitlement.md): An error indicating that the notification service extension is missing the required filtering entitlement.
- [unknown](cxerrorcodenotificationserviceextensionerror-swift.struct/unknown.md): An error that occurs when there is an unknown problem.
- [CXErrorCodeNotificationServiceExtensionError.Code](cxerrorcodenotificationserviceextensionerror-swift.struct/code.md): Constants for errors returned when reporting new, incoming VoIP calls.

### Type Properties

- [errorDomain](cxerrorcodenotificationserviceextensionerror-swift.struct/errordomain.md)

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
- [CXErrorCodeIncomingCallError](cxerrorcodeincomingcallerror-swift.struct.md): Codes for errors that occur during incoming calls.
- [CXErrorCodeIncomingCallError.Code](cxerrorcodeincomingcallerror-swift.struct/code.md): Codes for errors that occur during incoming calls.
- [CXErrorDomain](cxerrordomain.md): The domain for CallKit errors.
- [CXErrorDomainIncomingCall](cxerrordomainincomingcall.md): The domain for errors that occur during incoming calls.
