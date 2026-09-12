> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxprovider/reportnewincomingvoippushpayload(_:completion:)](https://developer.apple.com/documentation/callkit/cxprovider/reportnewincomingvoippushpayload(_:completion:))

# reportNewIncomingVoIPPushPayload(\_:completion:) (Swift)

**Framework:** CallKit  
**Kind:** Type Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

Reports a new incoming call after your notification service extension decrypts a VoIP call request.

## Declaration

```swift
class func reportNewIncomingVoIPPushPayload(_ dictionaryPayload: [AnyHashable : Any], completion: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
class func reportNewIncomingVoIPPushPayload(_ dictionaryPayload: [AnyHashable : Any]) async throws
```

## Parameters

- `dictionaryPayload`: A dictionary containing additional data about the incoming call. All keys and values in the dictionary must implement the [NSSecureCoding](../../foundation/nssecurecoding.md) protocol.
- `completion`: A block that CallKit executes after allowing or disallowing the call. CallKit executes the block on a private serial queue. The completion handler takes the following parameter:

  - **`error`**: When the system disallows a call, it sets this parameter to an error object that contains information about why it disallowed the call; otherwise it’s `nil`.

## Mentioned In

- [Sending End-to-End Encrypted VoIP Calls](../sending-end-to-end-encrypted-voip-calls.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func reportNewIncomingVoIPPushPayload(_ dictionaryPayload: [AnyHashable : Any]) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Call this method when your notification service extension receives an encrypted VoIP call request. The system then launches your app and calls your [pushRegistry(\_:didReceiveIncomingPushWith:for:completion:)](../../pushkit/pkpushregistrydelegate/pushregistry%28__didreceiveincomingpushwith_for_completion_%29.md) method. From this point, the app handles the call just like any incoming VoIP call. For more information, see [Sending End-to-End Encrypted VoIP Calls](../sending-end-to-end-encrypted-voip-calls.md).

To call this method, your notification service extension must have the [com.apple.developer.usernotifications.filtering](../../bundleresources/entitlements/com.apple.developer.usernotifications.filtering.md) entitlement.

> **Important**

>  Only call this method when your server can’t determine whether an outgoing notification is a request for a VoIP call or some other data (such as a text message) due to metadata encryption. If your server knows that the outgoing content is a VoIP call, send a [voIP](../../pushkit/pkpushtype/voip.md) push notification instead. For more information, see [PushKit](../../pushkit.md).

## See Also

### Reporting Calls

- [reportNewIncomingCall(with:update:completion:)](reportnewincomingcall%28with_update_completion_%29.md): Reports a new incoming call with the specified unique identifier to the provider.
- [com.apple.developer.usernotifications.filtering](../../bundleresources/entitlements/com.apple.developer.usernotifications.filtering.md): Enable receiving notifications without displaying the notification to the user.
- [reportOutgoingCall(with:startedConnectingAt:)](reportoutgoingcall%28with_startedconnectingat_%29.md): Reports to the provider that an outgoing call with the specified unique identifier started connecting at a particular time.
- [reportOutgoingCall(with:connectedAt:)](reportoutgoingcall%28with_connectedat_%29.md): Reports to the provider that an outgoing call with the specified unique identifier finished connecting at a particular time.
- [reportCall(with:updated:)](reportcall%28with_updated_%29.md): Reports to the provider that an active call updated its information.
- [reportCall(with:endedAt:reason:)](reportcall%28with_endedat_reason_%29.md): Reports to the provider that a call with the specified identifier ended at a given date for a particular reason.

# reportNewIncomingVoIPPushPayload:completion: (Objective-C)

**Framework:** CallKit  
**Kind:** Type Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

Reports a new incoming call after your notification service extension decrypts a VoIP call request.

## Declaration

```objectivec
+ (void) reportNewIncomingVoIPPushPayload:(NSDictionary *) dictionaryPayload completion:(void (^)(NSError *)) completion;
```

## Parameters

- `dictionaryPayload`: A dictionary containing additional data about the incoming call. All keys and values in the dictionary must implement the [NSSecureCoding](../../foundation/nssecurecoding.md) protocol.
- `completion`: A block that CallKit executes after allowing or disallowing the call. CallKit executes the block on a private serial queue. The completion handler takes the following parameter:

  - **`error`**: When the system disallows a call, it sets this parameter to an error object that contains information about why it disallowed the call; otherwise it’s `nil`.

## Mentioned In

- [Sending End-to-End Encrypted VoIP Calls](../sending-end-to-end-encrypted-voip-calls.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func reportNewIncomingVoIPPushPayload(_ dictionaryPayload: [AnyHashable : Any]) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Call this method when your notification service extension receives an encrypted VoIP call request. The system then launches your app and calls your [pushRegistry:didReceiveIncomingPushWithPayload:forType:withCompletionHandler:](../../pushkit/pkpushregistrydelegate/pushregistry%28__didreceiveincomingpushwith_for_completion_%29.md) method. From this point, the app handles the call just like any incoming VoIP call. For more information, see [Sending End-to-End Encrypted VoIP Calls](../sending-end-to-end-encrypted-voip-calls.md).

To call this method, your notification service extension must have the [com.apple.developer.usernotifications.filtering](../../bundleresources/entitlements/com.apple.developer.usernotifications.filtering.md) entitlement.

> **Important**

>  Only call this method when your server can’t determine whether an outgoing notification is a request for a VoIP call or some other data (such as a text message) due to metadata encryption. If your server knows that the outgoing content is a VoIP call, send a [PKPushTypeVoIP](../../pushkit/pkpushtype/voip.md) push notification instead. For more information, see [PushKit](../../pushkit.md).

## See Also

### Reporting Calls

- [reportNewIncomingCallWithUUID:update:completion:](reportnewincomingcall%28with_update_completion_%29.md): Reports a new incoming call with the specified unique identifier to the provider.
- [com.apple.developer.usernotifications.filtering](../../bundleresources/entitlements/com.apple.developer.usernotifications.filtering.md): Enable receiving notifications without displaying the notification to the user.
- [reportOutgoingCallWithUUID:startedConnectingAtDate:](reportoutgoingcall%28with_startedconnectingat_%29.md): Reports to the provider that an outgoing call with the specified unique identifier started connecting at a particular time.
- [reportOutgoingCallWithUUID:connectedAtDate:](reportoutgoingcall%28with_connectedat_%29.md): Reports to the provider that an outgoing call with the specified unique identifier finished connecting at a particular time.
- [reportCallWithUUID:updated:](reportcall%28with_updated_%29.md): Reports to the provider that an active call updated its information.
- [reportCallWithUUID:endedAtDate:reason:](reportcall%28with_endedat_reason_%29.md): Reports to the provider that a call with the specified identifier ended at a given date for a particular reason.
