> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotificationcenterdelegate/usernotificationcenter(_:didactivate:)](https://developer.apple.com/documentation/foundation/nsusernotificationcenterdelegate/usernotificationcenter(_:didactivate:))

# userNotificationCenter(\_:didActivate:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Sent to the delegate when a user clicks on a user notification presented by the user notification center.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```swift
optional func userNotificationCenter(_ center: NSUserNotificationCenter, didActivate notification: NSUserNotification)
```

## Parameters

- `center`: The user notification center.
- `notification`: The user notification object.

<a id="Discussion"></a>

## Discussion

This would be a good time to take action in response to user interacting with a specific notification.

To take an action when your application is launched as a result of a user clicking on a notification, be sure to implement the [applicationDidFinishLaunching(\_:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationdidfinishlaunching%28_:%29) method in the application class that implements the [NSApplicationDelegate](https://developer.apple.com/documentation/appkit/nsapplicationdelegate) protocol. The notification parameter to that method has a `userInfo` dictionary, and if that dictionary has the `NSApplicationLaunchUserNotificationKey` key. The value of that key is the [NSUserNotification](../nsusernotification.md) object that caused the application to launch. The `NSUserNotification` object is delivered to the `NSApplication` delegate because that message will be sent before your application has a chance to set a delegate for the `NSUserNotificationCenter`.

## See Also

### User Notification Delivery Information

- [userNotificationCenter(\_:didDeliver:)](usernotificationcenter%28__diddeliver_%29.md): Deprecated. Sent to the delegate when a notification delivery date has arrived.

# userNotificationCenter:didActivateNotification: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Sent to the delegate when a user clicks on a user notification presented by the user notification center.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```objectivec
- (void) userNotificationCenter:(NSUserNotificationCenter *) center didActivateNotification:(NSUserNotification *) notification;
```

## Parameters

- `center`: The user notification center.
- `notification`: The user notification object.

<a id="Discussion"></a>

## Discussion

This would be a good time to take action in response to user interacting with a specific notification.

To take an action when your application is launched as a result of a user clicking on a notification, be sure to implement the [applicationDidFinishLaunching:](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationdidfinishlaunching%28_:%29) method in the application class that implements the [NSApplicationDelegate](https://developer.apple.com/documentation/appkit/nsapplicationdelegate) protocol. The notification parameter to that method has a `userInfo` dictionary, and if that dictionary has the `NSApplicationLaunchUserNotificationKey` key. The value of that key is the [NSUserNotification](../nsusernotification.md) object that caused the application to launch. The `NSUserNotification` object is delivered to the `NSApplication` delegate because that message will be sent before your application has a chance to set a delegate for the `NSUserNotificationCenter`.

## See Also

### User Notification Delivery Information

- [userNotificationCenter:didDeliverNotification:](usernotificationcenter%28__diddeliver_%29.md): Deprecated. Sent to the delegate when a notification delivery date has arrived.
