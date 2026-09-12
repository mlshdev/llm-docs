> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxerrorcodenotificationserviceextensionerror-swift.struct/code/invalidclientprocess](https://developer.apple.com/documentation/callkit/cxerrorcodenotificationserviceextensionerror-swift.struct/code/invalidclientprocess)

# CXErrorCodeNotificationServiceExtensionError.Code.invalidClientProcess (Swift)

**Framework:** CallKit  
**Kind:** Case  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+ · watchOS 9.0+

An error indicating that an invalid client process reported the incoming call.

## Declaration

```swift
case invalidClientProcess
```

<a id="Discussion"></a>

## Discussion

Only call the [reportNewIncomingVoIPPushPayload(\_:completion:)](../../cxprovider/reportnewincomingvoippushpayload%28__completion_%29.md) method from a [UNNotificationServiceExtension](../../../usernotifications/unnotificationserviceextension.md) object that is responding to an incoming notification request.

## See Also

### Error Codes

- [CXErrorCodeNotificationServiceExtensionError.Code.missingNotificationFilteringEntitlement](missingnotificationfilteringentitlement.md): An error indicating that the notification service extension is missing the required filtering entitlement.
- [CXErrorCodeNotificationServiceExtensionError.Code.unknown](unknown.md): An error that occurs when there is an unknown problem.

# CXErrorCodeNotificationServiceExtensionErrorInvalidClientProcess (Objective-C)

**Framework:** CallKit  
**Kind:** Enumeration Case  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+ · watchOS 9.0+

An error indicating that an invalid client process reported the incoming call.

## Declaration

```objectivec
CXErrorCodeNotificationServiceExtensionErrorInvalidClientProcess
```

<a id="Discussion"></a>

## Discussion

Only call the [reportNewIncomingVoIPPushPayload:completion:](../../cxprovider/reportnewincomingvoippushpayload%28__completion_%29.md) method from a [UNNotificationServiceExtension](../../../usernotifications/unnotificationserviceextension.md) object that is responding to an incoming notification request.

## See Also

### Error Codes

- [CXErrorCodeNotificationServiceExtensionErrorMissingNotificationFilteringEntitlement](missingnotificationfilteringentitlement.md): An error indicating that the notification service extension is missing the required filtering entitlement.
- [CXErrorCodeNotificationServiceExtensionErrorUnknown](unknown.md): An error that occurs when there is an unknown problem.
