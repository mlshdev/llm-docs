> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/isregisteredforremotenotifications](https://developer.apple.com/documentation/uikit/uiapplication/isregisteredforremotenotifications)

# isRegisteredForRemoteNotifications (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the app is currently registered for remote notifications.

## Declaration

```swift
var isRegisteredForRemoteNotifications: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This method reflects whether the remote registration process completed successfully—a process that begins when you call the [registerForRemoteNotifications()](registerforremotenotifications%28%29.md) method. This method does not reflect whether remote notifications are actually available due to connectivity issues. The value returned by this method takes into account the user’s preferences for receiving remote notifications.

## See Also

### Registering for remote notifications

- [registerForRemoteNotifications()](registerforremotenotifications%28%29.md): Registers to receive remote notifications through Apple Push Notification service.
- [unregisterForRemoteNotifications()](unregisterforremotenotifications%28%29.md): Unregisters for all remote notifications received through Apple Push Notification service.

# registeredForRemoteNotifications (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the app is currently registered for remote notifications.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isRegisteredForRemoteNotifications) BOOL registeredForRemoteNotifications;
```

<a id="Discussion"></a>

## Discussion

This method reflects whether the remote registration process completed successfully—a process that begins when you call the [registerForRemoteNotifications](registerforremotenotifications%28%29.md) method. This method does not reflect whether remote notifications are actually available due to connectivity issues. The value returned by this method takes into account the user’s preferences for receiving remote notifications.

## See Also

### Registering for remote notifications

- [registerForRemoteNotifications](registerforremotenotifications%28%29.md): Registers to receive remote notifications through Apple Push Notification service.
- [unregisterForRemoteNotifications](unregisterforremotenotifications%28%29.md): Unregisters for all remote notifications received through Apple Push Notification service.
