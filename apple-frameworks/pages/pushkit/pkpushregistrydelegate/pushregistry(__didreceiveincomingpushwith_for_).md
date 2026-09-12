> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pushkit/pkpushregistrydelegate/pushregistry(_:didreceiveincomingpushwith:for:)](https://developer.apple.com/documentation/pushkit/pkpushregistrydelegate/pushregistry(_:didreceiveincomingpushwith:for:))

# pushRegistry(\_:didReceiveIncomingPushWith:for:) (Swift)

**Framework:** PushKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 8.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Notifies the delegate that a remote push has been received.

> Use [pushRegistry(\_:didReceiveIncomingPushWith:for:completion:)](pushregistry%28__didreceiveincomingpushwith_for_completion_%29.md) instead.

## Declaration

```swift
optional func pushRegistry(_ registry: PKPushRegistry, didReceiveIncomingPushWith payload: PKPushPayload, for type: PKPushType)
```

## Parameters

- `registry`: The [PKPushRegistry](../pkpushregistry.md) instance responsible for the delegate callback.
- `payload`: The push payload sent by a developer via APNS server API.
- `type`: This is a [PKPushType](../pkpushtype.md) constant, which is present in `[registry desiredPushTypes]`.

<a id="Discussion"></a>

## Discussion

This method is invoked when a push notification has been received for the specified push type.

# pushRegistry:didReceiveIncomingPushWithPayload:forType: (Objective-C)

**Framework:** PushKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 8.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Notifies the delegate that a remote push has been received.

> Use [pushRegistry:didReceiveIncomingPushWithPayload:forType:withCompletionHandler:](pushregistry%28__didreceiveincomingpushwith_for_completion_%29.md) instead.

## Declaration

```objectivec
- (void) pushRegistry:(PKPushRegistry *) registry didReceiveIncomingPushWithPayload:(PKPushPayload *) payload forType:(PKPushType) type;
```

## Parameters

- `registry`: The [PKPushRegistry](../pkpushregistry.md) instance responsible for the delegate callback.
- `payload`: The push payload sent by a developer via APNS server API.
- `type`: This is a [PKPushType](../pkpushtype.md) constant, which is present in `[registry desiredPushTypes]`.

<a id="Discussion"></a>

## Discussion

This method is invoked when a push notification has been received for the specified push type.
