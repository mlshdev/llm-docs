> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilocalnotification/timezone](https://developer.apple.com/documentation/uikit/uilocalnotification/timezone)

# timeZone (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

The time zone of the notification’s fire date.

> For more information, see [UILocalNotification](../uilocalnotification.md).

## Declaration

```swift
var timeZone: TimeZone? { get set }
```

<a id="Discussion"></a>

## Discussion

The date specified in [fireDate](firedate.md) is interpreted according to the value of this property. If you specify `nil` (the default), the fire date is interpreted as an absolute GMT time, which is suitable for cases such as countdown timers. If you assign a valid [NSTimeZone](../../foundation/nstimezone.md) object to this property, the fire date is interpreted as a wall-clock time that is automatically adjusted when there are changes in time zones; an example suitable for this case is an an alarm clock.

## See Also

### Scheduling a local notification

- [fireDate](firedate.md): Deprecated. The date and time when the system should deliver the notification.
- [repeatInterval](repeatinterval.md): Deprecated. The calendar interval at which to reschedule the notification.
- [repeatCalendar](repeatcalendar.md): Deprecated. The calendar the system should refer to when it reschedules a repeating notification.
- [region](region.md): Deprecated. The geographic region that triggers the notification.
- [regionTriggersOnce](regiontriggersonce.md): Deprecated. A Boolean value indicating whether crossing a geographic region boundary delivers only one notification.

# timeZone (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

The time zone of the notification’s fire date.

> For more information, see [UILocalNotification](../uilocalnotification.md).

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSTimeZone * timeZone;
```

<a id="Discussion"></a>

## Discussion

The date specified in [fireDate](firedate.md) is interpreted according to the value of this property. If you specify `nil` (the default), the fire date is interpreted as an absolute GMT time, which is suitable for cases such as countdown timers. If you assign a valid [NSTimeZone](../../foundation/nstimezone.md) object to this property, the fire date is interpreted as a wall-clock time that is automatically adjusted when there are changes in time zones; an example suitable for this case is an an alarm clock.

## See Also

### Scheduling a local notification

- [fireDate](firedate.md): Deprecated. The date and time when the system should deliver the notification.
- [repeatInterval](repeatinterval.md): Deprecated. The calendar interval at which to reschedule the notification.
- [repeatCalendar](repeatcalendar.md): Deprecated. The calendar the system should refer to when it reschedules a repeating notification.
- [region](region.md): Deprecated. The geographic region that triggers the notification.
- [regionTriggersOnce](regiontriggersonce.md): Deprecated. A Boolean value indicating whether crossing a geographic region boundary delivers only one notification.
