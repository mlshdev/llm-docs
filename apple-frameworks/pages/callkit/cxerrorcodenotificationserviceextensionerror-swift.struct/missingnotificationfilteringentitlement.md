> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxerrorcodenotificationserviceextensionerror-swift.struct/missingnotificationfilteringentitlement](https://developer.apple.com/documentation/callkit/cxerrorcodenotificationserviceextensionerror-swift.struct/missingnotificationfilteringentitlement)

# missingNotificationFilteringEntitlement

**Framework:** CallKit  
**Kind:** Type Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+ · watchOS 9.0+

An error indicating that the notification service extension is missing the required filtering entitlement.

## Declaration

```swift
static var missingNotificationFilteringEntitlement: CXErrorCodeNotificationServiceExtensionError.Code { get }
```

<a id="Discussion"></a>

## Discussion

To call the [reportNewIncomingVoIPPushPayload(\_:completion:)](../cxprovider/reportnewincomingvoippushpayload%28__completion_%29.md) method, a notification service extension must have a `com.apple.developer.usernotifications.filtering` entitlement. To apply for this entitlement, see [https://developer.apple.com/contact/request/notification-service](https://developer.apple.com/contact/request/notification-service).

After you receive permission to use the entitlement, add [com.apple.developer.usernotifications.filtering](../../bundleresources/entitlements/com.apple.developer.usernotifications.filtering.md) to the entitlements file for the Notification Service Extension target.

## See Also

### Understanding Error Codes

- [invalidClientProcess](invalidclientprocess.md): An error indicating that an invalid client process reported the incoming call.
- [unknown](unknown.md): An error that occurs when there is an unknown problem.
- [CXErrorCodeNotificationServiceExtensionError.Code](code.md): Constants for errors returned when reporting new, incoming VoIP calls.
