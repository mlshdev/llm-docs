> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotification/deliverydate](https://developer.apple.com/documentation/foundation/nsusernotification/deliverydate)

# deliveryDate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Specifies when the notification should be delivered.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```swift
var deliveryDate: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

The delivery date is specified in an absolute time.

After a notification is delivered, it may be presented to the user.

## See Also

### Delivery Timing

- [actualDeliveryDate](actualdeliverydate.md): Deprecated. The date this notification was actually delivered.
- [deliveryRepeatInterval](deliveryrepeatinterval.md): Deprecated. Specifies the date components that control how often a user notification is repeated.
- [deliveryTimeZone](deliverytimezone.md): Deprecated. Specify the time zone to interpret the delivery date in.

# deliveryDate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Specifies when the notification should be delivered.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```objectivec
@property (copy, nullable) NSDate * deliveryDate;
```

<a id="Discussion"></a>

## Discussion

The delivery date is specified in an absolute time.

After a notification is delivered, it may be presented to the user.

## See Also

### Delivery Timing

- [actualDeliveryDate](actualdeliverydate.md): Deprecated. The date this notification was actually delivered.
- [deliveryRepeatInterval](deliveryrepeatinterval.md): Deprecated. Specifies the date components that control how often a user notification is repeated.
- [deliveryTimeZone](deliverytimezone.md): Deprecated. Specify the time zone to interpret the delivery date in.
