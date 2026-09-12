> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pushkit/pkpushregistrydelegate/pushregistry(_:didupdate:for:)](https://developer.apple.com/documentation/pushkit/pkpushregistrydelegate/pushregistry(_:didupdate:for:))

# pushRegistry(\_:didUpdate:for:) (Swift)

**Framework:** PushKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate that the system updated the credentials for the specified type of push notification.

## Declaration

```swift
func pushRegistry(_ registry: PKPushRegistry, didUpdate pushCredentials: PKPushCredentials, for type: PKPushType)
```

## Parameters

- `registry`: The [PKPushRegistry](../pkpushregistry.md) instance responsible for the delegate callback.
- `pushCredentials`: The push credentials that can be used to send pushes to the device for the specified push type.
- `type`: One of the requested notification types. This type is present in the [desiredPushTypes](../pkpushregistry/desiredpushtypes.md) property of the push registry.

## Mentioned In

- [Supporting PushKit Notifications in Your App](../supporting-pushkit-notifications-in-your-app.md)

<a id="Discussion"></a>

## Discussion

The system calls this method when it receives new credentials (including a push token) for the specified push type.

## See Also

### Responding to Registration Events

- [pushRegistry(\_:didInvalidatePushTokenFor:)](pushregistry%28__didinvalidatepushtokenfor_%29.md): Tells the delegate that the system invalidated the push token for the specified type.

# pushRegistry:didUpdatePushCredentials:forType: (Objective-C)

**Framework:** PushKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate that the system updated the credentials for the specified type of push notification.

## Declaration

```objectivec
- (void) pushRegistry:(PKPushRegistry *) registry didUpdatePushCredentials:(PKPushCredentials *) pushCredentials forType:(PKPushType) type;
```

## Parameters

- `registry`: The [PKPushRegistry](../pkpushregistry.md) instance responsible for the delegate callback.
- `pushCredentials`: The push credentials that can be used to send pushes to the device for the specified push type.
- `type`: One of the requested notification types. This type is present in the [desiredPushTypes](../pkpushregistry/desiredpushtypes.md) property of the push registry.

## Mentioned In

- [Supporting PushKit Notifications in Your App](../supporting-pushkit-notifications-in-your-app.md)

<a id="Discussion"></a>

## Discussion

The system calls this method when it receives new credentials (including a push token) for the specified push type.

## See Also

### Responding to Registration Events

- [pushRegistry:didInvalidatePushTokenForType:](pushregistry%28__didinvalidatepushtokenfor_%29.md): Tells the delegate that the system invalidated the push token for the specified type.
