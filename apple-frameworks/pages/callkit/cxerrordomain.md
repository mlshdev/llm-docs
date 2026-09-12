> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxerrordomain](https://developer.apple.com/documentation/callkit/cxerrordomain)

# CXErrorDomain (Swift)

**Framework:** CallKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

The domain for CallKit errors.

## Declaration

```swift
let CXErrorDomain: String
```

<a id="Discussion"></a>

## Discussion

See [CXProvider](cxprovider.md) for possible error codes.

## See Also

### Handling Errors

- [CXCallEndedReason](cxcallendedreason.md): The reason that a call ended.
- [CXError](cxerror.md): Error codes for the CallKit errors.
- [CXError.Code](cxerror/code.md): Error codes for the CallKit errors.
- [CXErrorCodeIncomingCallError](cxerrorcodeincomingcallerror-swift.struct.md): Codes for errors that occur during incoming calls.
- [CXErrorCodeIncomingCallError.Code](cxerrorcodeincomingcallerror-swift.struct/code.md): Codes for errors that occur during incoming calls.
- [CXErrorCodeNotificationServiceExtensionError](cxerrorcodenotificationserviceextensionerror-swift.struct.md): Errors that can occur when reporting new, incoming VoIP calls.
- [CXErrorDomainIncomingCall](cxerrordomainincomingcall.md): The domain for errors that occur during incoming calls.

# CXErrorDomain (Objective-C)

**Framework:** CallKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

The domain for CallKit errors.

## Declaration

```objectivec
extern NSErrorDomain const CXErrorDomain;
```

<a id="Discussion"></a>

## Discussion

See [CXProvider](cxprovider.md) for possible error codes.

## See Also

### Handling Errors

- [CXCallEndedReason](cxcallendedreason.md): The reason that a call ended.
- [CXErrorCode](cxerror/code.md): Error codes for the CallKit errors.
- [CXErrorCodeIncomingCallError](cxerrorcodeincomingcallerror-swift.struct/code.md): Codes for errors that occur during incoming calls.
- [CXErrorDomainIncomingCall](cxerrordomainincomingcall.md): The domain for errors that occur during incoming calls.
