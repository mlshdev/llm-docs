> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotificationcenter/delegate](https://developer.apple.com/documentation/foundation/nsusernotificationcenter/delegate)

# delegate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Specifies the notification center delegate.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```swift
unowned(unsafe) var delegate: (any NSUserNotificationCenterDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate must conform to the [NSUserNotificationCenterDelegate](../nsusernotificationcenterdelegate.md) protocol.

# delegate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Specifies the notification center delegate.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```objectivec
@property (assign, nullable) id<NSUserNotificationCenterDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate must conform to the [NSUserNotificationCenterDelegate](../nsusernotificationcenterdelegate.md) protocol.
