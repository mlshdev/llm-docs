> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pushkit/pkpushregistrydelegate/pushregistry(_:didinvalidatepushtokenfor:)](https://developer.apple.com/documentation/pushkit/pkpushregistrydelegate/pushregistry(_:didinvalidatepushtokenfor:))

# pushRegistry(\_:didInvalidatePushTokenFor:) (Swift)

**Framework:** PushKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate that the system invalidated the push token for the specified type.

## Declaration

```swift
optional func pushRegistry(_ registry: PKPushRegistry, didInvalidatePushTokenFor type: PKPushType)
```

## Parameters

- `registry`: The [PKPushRegistry](../pkpushregistry.md) instance responsible for the delegate callback.
- `type`: This is a [PKPushType](../pkpushtype.md) constant, which is present in `[registry desiredPushTypes]`.

<a id="Discussion"></a>

## Discussion

The system calls this method when a previously provided push token is no longer valid for use. No action is necessary on your part to reregister the push type. Instead, use this method to notify your server not to send push notifications using the matching push token.

## See Also

### Responding to Registration Events

- [pushRegistry(\_:didUpdate:for:)](pushregistry%28__didupdate_for_%29.md): Tells the delegate that the system updated the credentials for the specified type of push notification.

# pushRegistry:didInvalidatePushTokenForType: (Objective-C)

**Framework:** PushKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate that the system invalidated the push token for the specified type.

## Declaration

```objectivec
- (void) pushRegistry:(PKPushRegistry *) registry didInvalidatePushTokenForType:(PKPushType) type;
```

## Parameters

- `registry`: The [PKPushRegistry](../pkpushregistry.md) instance responsible for the delegate callback.
- `type`: This is a [PKPushType](../pkpushtype.md) constant, which is present in `[registry desiredPushTypes]`.

<a id="Discussion"></a>

## Discussion

The system calls this method when a previously provided push token is no longer valid for use. No action is necessary on your part to reregister the push type. Instead, use this method to notify your server not to send push notifications using the matching push token.

## See Also

### Responding to Registration Events

- [pushRegistry:didUpdatePushCredentials:forType:](pushregistry%28__didupdate_for_%29.md): Tells the delegate that the system updated the credentials for the specified type of push notification.
