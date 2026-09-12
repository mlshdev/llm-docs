> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxerrorcodenotificationserviceextensionerror-swift.struct/invalidclientprocess](https://developer.apple.com/documentation/callkit/cxerrorcodenotificationserviceextensionerror-swift.struct/invalidclientprocess)

# invalidClientProcess

**Framework:** CallKit  
**Kind:** Type Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+ · watchOS 9.0+

An error indicating that an invalid client process reported the incoming call.

## Declaration

```swift
static var invalidClientProcess: CXErrorCodeNotificationServiceExtensionError.Code { get }
```

<a id="Discussion"></a>

## Discussion

Only call the [reportNewIncomingVoIPPushPayload(\_:completion:)](../cxprovider/reportnewincomingvoippushpayload%28__completion_%29.md) method from a [UNNotificationServiceExtension](../../usernotifications/unnotificationserviceextension.md) object that is responding to an incoming notification request.

## See Also

### Understanding Error Codes

- [missingNotificationFilteringEntitlement](missingnotificationfilteringentitlement.md): An error indicating that the notification service extension is missing the required filtering entitlement.
- [unknown](unknown.md): An error that occurs when there is an unknown problem.
- [CXErrorCodeNotificationServiceExtensionError.Code](code.md): Constants for errors returned when reporting new, incoming VoIP calls.
