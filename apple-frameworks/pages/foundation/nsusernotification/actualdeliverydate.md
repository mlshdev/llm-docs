> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotification/actualdeliverydate](https://developer.apple.com/documentation/foundation/nsusernotification/actualdeliverydate)

# actualDeliveryDate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 11.0)

The date this notification was actually delivered.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```swift
var actualDeliveryDate: Date? { get }
```

<a id="Discussion"></a>

## Discussion

The notification center will set this value if a notification is put in the scheduled list and the delivery time arrives.

If the notification is delivered directly using the [deliver(\_:)](../nsusernotificationcenter/deliver%28__%29.md) method of the [NSUserNotificationCenter](../nsusernotificationcenter.md) class, this value is set to the [deliveryDate](deliverydate.md) value. If the [deliveryDate](deliverydate.md) value `nil`  this value is set to the current date.

This value is used to sort the list of notifications in the user interface.

## See Also

### Delivery Timing

- [deliveryDate](deliverydate.md): Deprecated. Specifies when the notification should be delivered.
- [deliveryRepeatInterval](deliveryrepeatinterval.md): Deprecated. Specifies the date components that control how often a user notification is repeated.
- [deliveryTimeZone](deliverytimezone.md): Deprecated. Specify the time zone to interpret the delivery date in.

# actualDeliveryDate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 11.0)

The date this notification was actually delivered.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDate * actualDeliveryDate;
```

<a id="Discussion"></a>

## Discussion

The notification center will set this value if a notification is put in the scheduled list and the delivery time arrives.

If the notification is delivered directly using the [deliverNotification:](../nsusernotificationcenter/deliver%28__%29.md) method of the [NSUserNotificationCenter](../nsusernotificationcenter.md) class, this value is set to the [deliveryDate](deliverydate.md) value. If the [deliveryDate](deliverydate.md) value `nil`  this value is set to the current date.

This value is used to sort the list of notifications in the user interface.

## See Also

### Delivery Timing

- [deliveryDate](deliverydate.md): Deprecated. Specifies when the notification should be delivered.
- [deliveryRepeatInterval](deliveryrepeatinterval.md): Deprecated. Specifies the date components that control how often a user notification is repeated.
- [deliveryTimeZone](deliverytimezone.md): Deprecated. Specify the time zone to interpret the delivery date in.
