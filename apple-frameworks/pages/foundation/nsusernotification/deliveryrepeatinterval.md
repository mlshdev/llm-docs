> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotification/deliveryrepeatinterval](https://developer.apple.com/documentation/foundation/nsusernotification/deliveryrepeatinterval)

# deliveryRepeatInterval (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Specifies the date components that control how often a user notification is repeated.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```swift
var deliveryRepeatInterval: DateComponents? { get set }
```

<a id="Discussion"></a>

## Discussion

This value may be `nil` if the notification should not repeat.

The date component values are relative to the date the notification was delivered.

If the calendar value of the `deliveryRepeatInterval` is `nil`, the current calendar is used to calculate the repeat interval. For example, if a notification should repeat every hour, set the `hour` property of the `deliveryRepeatInterval` to `1`.

This value is ignored unless the user notification is scheduled with the [NSUserNotificationCenter](../nsusernotificationcenter.md) object.

## See Also

### Delivery Timing

- [deliveryDate](deliverydate.md): Deprecated. Specifies when the notification should be delivered.
- [actualDeliveryDate](actualdeliverydate.md): Deprecated. The date this notification was actually delivered.
- [deliveryTimeZone](deliverytimezone.md): Deprecated. Specify the time zone to interpret the delivery date in.

# deliveryRepeatInterval (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Specifies the date components that control how often a user notification is repeated.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```objectivec
@property (copy, nullable) NSDateComponents * deliveryRepeatInterval;
```

<a id="Discussion"></a>

## Discussion

This value may be `nil` if the notification should not repeat.

The date component values are relative to the date the notification was delivered.

If the calendar value of the `deliveryRepeatInterval` is `nil`, the current calendar is used to calculate the repeat interval. For example, if a notification should repeat every hour, set the `hour` property of the `deliveryRepeatInterval` to `1`.

This value is ignored unless the user notification is scheduled with the [NSUserNotificationCenter](../nsusernotificationcenter.md) object.

## See Also

### Delivery Timing

- [deliveryDate](deliverydate.md): Deprecated. Specifies when the notification should be delivered.
- [actualDeliveryDate](actualdeliverydate.md): Deprecated. The date this notification was actually delivered.
- [deliveryTimeZone](deliverytimezone.md): Deprecated. Specify the time zone to interpret the delivery date in.
