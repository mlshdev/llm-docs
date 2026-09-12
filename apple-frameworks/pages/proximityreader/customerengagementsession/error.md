> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagementsession/error](https://developer.apple.com/documentation/proximityreader/customerengagementsession/error)

# CustomerEngagementSession.Error

**Framework:** ProximityReader  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Errors that can occur during the engagement session.

## Declaration

```swift
enum Error
```

## Mentioned In

- [Adding support for Tap to Share to your app](../adding-support-for-tap-to-share-to-your-app.md)

## Topics

### Enumeration Cases

- [CustomerEngagementSession.Error.connectionFailed](error/connectionfailed.md): An error occurred while connecting to the customer.
- [CustomerEngagementSession.Error.expiredCredential](error/expiredcredential.md): The credential used to create the session has expired.
- [CustomerEngagementSession.Error.incompatibleRequest](error/incompatiblerequest.md): An error that indicates the request is not compatible with the connected client type or version.
- [CustomerEngagementSession.Error.internalError](error/internalerror.md): An error that occurs internally within the session.
- [CustomerEngagementSession.Error.invalidCredential](error/invalidcredential.md): The credential used to create the session is not valid.
- [CustomerEngagementSession.Error.invalidPassTypeIdentifier](error/invalidpasstypeidentifier.md): An error that indicates the passTypeIdentifier validation failed.
- [CustomerEngagementSession.Error.invalidRequest](error/invalidrequest.md): An error that indicates the request validation failed.
- [CustomerEngagementSession.Error.invalidSession](error/invalidsession.md): The session is no longer active or is invalidated.
- [CustomerEngagementSession.Error.notReady](error/notready.md): The session has not yet received the `.ready` event from the customer. The merchant must wait for the `.ready` event before sending requests.
- [CustomerEngagementSession.Error.notSupported](error/notsupported.md): The current device or the environment doesn’t support this feature.
- [CustomerEngagementSession.Error.pairingFailed](error/pairingfailed.md): An error occurred while pairing with the peer.
- [CustomerEngagementSession.Error.paymentRequestCancelled](error/paymentrequestcancelled.md): An error indicating the payment request to the customer was cancelled.
- [CustomerEngagementSession.Error.paymentRequestFailed](error/paymentrequestfailed.md): An error indicating the payment request to the customer failed.
- [CustomerEngagementSession.Error.requestCancelled](error/requestcancelled.md): An error indicating the request is cancelled.
- [CustomerEngagementSession.Error.requestFailed](error/requestfailed.md): An error that occurs while sending the request to the customer.
- [CustomerEngagementSession.Error.sessionBusy](error/sessionbusy.md): An error indicating the session is busy due to a pending request.
- [CustomerEngagementSession.Error.sessionFailed](error/sessionfailed.md): An error indicating that the framework failed to create the session.
- [CustomerEngagementSession.Error.userDeclined](error/userdeclined.md): An error indicating that the customer declined to share requested information.
- [CustomerEngagementSession.Error.wifiDisabled](error/wifidisabled.md): An error indicating that Wi-Fi is turned off.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
