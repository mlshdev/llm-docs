> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotificationcenterdelegate/usernotificationcenter(_:shouldpresent:)](https://developer.apple.com/documentation/foundation/nsusernotificationcenterdelegate/usernotificationcenter(_:shouldpresent:))

# userNotificationCenter(\_:shouldPresent:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Sent to the delegate when the user notification center has decided not to present your notification.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```swift
optional func userNotificationCenter(_ center: NSUserNotificationCenter, shouldPresent notification: NSUserNotification) -> Bool
```

## Parameters

- `center`: The user notification center.
- `notification`: The user notification object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user notification should be displayed regardless; [false](https://developer.apple.com/documentation/swift/false) otherwise.

# userNotificationCenter:shouldPresentNotification: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Sent to the delegate when the user notification center has decided not to present your notification.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```objectivec
- (BOOL) userNotificationCenter:(NSUserNotificationCenter *) center shouldPresentNotification:(NSUserNotification *) notification;
```

## Parameters

- `center`: The user notification center.
- `notification`: The user notification object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user notification should be displayed regardless; [false](https://developer.apple.com/documentation/swift/false) otherwise.
