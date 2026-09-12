> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilocalnotification/firedate](https://developer.apple.com/documentation/uikit/uilocalnotification/firedate)

# fireDate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

The date and time when the system should deliver the notification.

> For more information, see [UILocalNotification](../uilocalnotification.md).

## Declaration

```swift
var fireDate: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

The fire date is interpreted according to the value specified in the [timeZone](timezone.md) property. If the specified value is `nil` or is a date in the past, the notification is delivered immediately.

You may specify a value for this property or the [region](region.md) property but not both. Attempting to schedule a local notification that contains both a region and fire date raises an exception.

## See Also

### Scheduling a local notification

- [timeZone](timezone.md): Deprecated. The time zone of the notification’s fire date.
- [repeatInterval](repeatinterval.md): Deprecated. The calendar interval at which to reschedule the notification.
- [repeatCalendar](repeatcalendar.md): Deprecated. The calendar the system should refer to when it reschedules a repeating notification.
- [region](region.md): Deprecated. The geographic region that triggers the notification.
- [regionTriggersOnce](regiontriggersonce.md): Deprecated. A Boolean value indicating whether crossing a geographic region boundary delivers only one notification.

# fireDate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

The date and time when the system should deliver the notification.

> For more information, see [UILocalNotification](../uilocalnotification.md).

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDate * fireDate;
```

<a id="Discussion"></a>

## Discussion

The fire date is interpreted according to the value specified in the [timeZone](timezone.md) property. If the specified value is `nil` or is a date in the past, the notification is delivered immediately.

You may specify a value for this property or the [region](region.md) property but not both. Attempting to schedule a local notification that contains both a region and fire date raises an exception.

## See Also

### Scheduling a local notification

- [timeZone](timezone.md): Deprecated. The time zone of the notification’s fire date.
- [repeatInterval](repeatinterval.md): Deprecated. The calendar interval at which to reschedule the notification.
- [repeatCalendar](repeatcalendar.md): Deprecated. The calendar the system should refer to when it reschedules a repeating notification.
- [region](region.md): Deprecated. The geographic region that triggers the notification.
- [regionTriggersOnce](regiontriggersonce.md): Deprecated. A Boolean value indicating whether crossing a geographic region boundary delivers only one notification.
