> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilocalnotification/repeatinterval](https://developer.apple.com/documentation/uikit/uilocalnotification/repeatinterval)

# repeatInterval (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

The calendar interval at which to reschedule the notification.

> For more information, see [UILocalNotification](../uilocalnotification.md).

## Declaration

```swift
var repeatInterval: NSCalendar.Unit { get set }
```

<a id="Discussion"></a>

## Discussion

If you assign a calendar unit such as weekly ([weekOfYear](../../foundation/nscalendar/unit/weekofyear.md)) or yearly ([year](../../foundation/nscalendar/unit/year.md)), the system reschedules the notification for delivery at the specified interval. Note that intervals of less than one minute are not supported. The default value is 0, which means that the system fires the notification once and then discards it.

## See Also

### Scheduling a local notification

- [fireDate](firedate.md): Deprecated. The date and time when the system should deliver the notification.
- [timeZone](timezone.md): Deprecated. The time zone of the notification’s fire date.
- [repeatCalendar](repeatcalendar.md): Deprecated. The calendar the system should refer to when it reschedules a repeating notification.
- [region](region.md): Deprecated. The geographic region that triggers the notification.
- [regionTriggersOnce](regiontriggersonce.md): Deprecated. A Boolean value indicating whether crossing a geographic region boundary delivers only one notification.

# repeatInterval (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

The calendar interval at which to reschedule the notification.

> For more information, see [UILocalNotification](../uilocalnotification.md).

## Declaration

```objectivec
@property (nonatomic) NSCalendarUnit repeatInterval;
```

<a id="Discussion"></a>

## Discussion

If you assign a calendar unit such as weekly ([NSCalendarUnitWeekOfYear](../../foundation/nscalendar/unit/weekofyear.md)) or yearly ([NSCalendarUnitYear](../../foundation/nscalendar/unit/year.md)), the system reschedules the notification for delivery at the specified interval. Note that intervals of less than one minute are not supported. The default value is 0, which means that the system fires the notification once and then discards it.

## See Also

### Scheduling a local notification

- [fireDate](firedate.md): Deprecated. The date and time when the system should deliver the notification.
- [timeZone](timezone.md): Deprecated. The time zone of the notification’s fire date.
- [repeatCalendar](repeatcalendar.md): Deprecated. The calendar the system should refer to when it reschedules a repeating notification.
- [region](region.md): Deprecated. The geographic region that triggers the notification.
- [regionTriggersOnce](regiontriggersonce.md): Deprecated. A Boolean value indicating whether crossing a geographic region boundary delivers only one notification.
