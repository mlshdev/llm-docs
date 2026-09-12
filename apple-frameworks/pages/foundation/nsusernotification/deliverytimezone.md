> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotification/deliverytimezone](https://developer.apple.com/documentation/foundation/nsusernotification/deliverytimezone)

# deliveryTimeZone (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Specify the time zone to interpret the delivery date in.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```swift
var deliveryTimeZone: TimeZone? { get set }
```

<a id="Discussion"></a>

## Discussion

If this value is `nil` and the user switches time zones, the notification center will adjust the time of presentation to account for the time zone change.

If a notification should be delivered at a time in a specific time zone (regardless of whether the user switches time zones), set this value to the specific time zone, for example the current time zone.

## See Also

### Delivery Timing

- [deliveryDate](deliverydate.md): Deprecated. Specifies when the notification should be delivered.
- [actualDeliveryDate](actualdeliverydate.md): Deprecated. The date this notification was actually delivered.
- [deliveryRepeatInterval](deliveryrepeatinterval.md): Deprecated. Specifies the date components that control how often a user notification is repeated.

# deliveryTimeZone (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Specify the time zone to interpret the delivery date in.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```objectivec
@property (copy, nullable) NSTimeZone * deliveryTimeZone;
```

<a id="Discussion"></a>

## Discussion

If this value is `nil` and the user switches time zones, the notification center will adjust the time of presentation to account for the time zone change.

If a notification should be delivered at a time in a specific time zone (regardless of whether the user switches time zones), set this value to the specific time zone, for example the current time zone.

## See Also

### Delivery Timing

- [deliveryDate](deliverydate.md): Deprecated. Specifies when the notification should be delivered.
- [actualDeliveryDate](actualdeliverydate.md): Deprecated. The date this notification was actually delivered.
- [deliveryRepeatInterval](deliveryrepeatinterval.md): Deprecated. Specifies the date components that control how often a user notification is repeated.
