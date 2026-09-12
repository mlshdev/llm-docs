> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilocalnotification/repeatcalendar](https://developer.apple.com/documentation/uikit/uilocalnotification/repeatcalendar)

# repeatCalendar (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

The calendar the system should refer to when it reschedules a repeating notification.

> For more information, see [UILocalNotification](../uilocalnotification.md).

## Declaration

```swift
var repeatCalendar: Calendar? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which indicates that the current user calendar is used. (The current user calendar is returned by the [current](../../foundation/nscalendar/current.md) class method of `NSCalendar`.)

## See Also

### Scheduling a local notification

- [fireDate](firedate.md): Deprecated. The date and time when the system should deliver the notification.
- [timeZone](timezone.md): Deprecated. The time zone of the notification’s fire date.
- [repeatInterval](repeatinterval.md): Deprecated. The calendar interval at which to reschedule the notification.
- [region](region.md): Deprecated. The geographic region that triggers the notification.
- [regionTriggersOnce](regiontriggersonce.md): Deprecated. A Boolean value indicating whether crossing a geographic region boundary delivers only one notification.

# repeatCalendar (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

The calendar the system should refer to when it reschedules a repeating notification.

> For more information, see [UILocalNotification](../uilocalnotification.md).

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSCalendar * repeatCalendar;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which indicates that the current user calendar is used. (The current user calendar is returned by the [currentCalendar](../../foundation/nscalendar/current.md) class method of `NSCalendar`.)

## See Also

### Scheduling a local notification

- [fireDate](firedate.md): Deprecated. The date and time when the system should deliver the notification.
- [timeZone](timezone.md): Deprecated. The time zone of the notification’s fire date.
- [repeatInterval](repeatinterval.md): Deprecated. The calendar interval at which to reschedule the notification.
- [region](region.md): Deprecated. The geographic region that triggers the notification.
- [regionTriggersOnce](regiontriggersonce.md): Deprecated. A Boolean value indicating whether crossing a geographic region boundary delivers only one notification.
