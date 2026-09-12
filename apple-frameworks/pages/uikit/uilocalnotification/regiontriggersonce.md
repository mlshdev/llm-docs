> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilocalnotification/regiontriggersonce](https://developer.apple.com/documentation/uikit/uilocalnotification/regiontriggersonce)

# regionTriggersOnce (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

A Boolean value indicating whether crossing a geographic region boundary delivers only one notification.

## Declaration

```swift
var regionTriggersOnce: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the user is notified only upon the first crossing the boundary of the target [region](region.md). After the first crossing, the local notification is unscheduled. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), notifications are delivered with each boundary crossing. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

The region object itself defines whether the notification is triggered when the user enters or exits the region.

## See Also

### Scheduling a local notification

- [fireDate](firedate.md): Deprecated. The date and time when the system should deliver the notification.
- [timeZone](timezone.md): Deprecated. The time zone of the notification’s fire date.
- [repeatInterval](repeatinterval.md): Deprecated. The calendar interval at which to reschedule the notification.
- [repeatCalendar](repeatcalendar.md): Deprecated. The calendar the system should refer to when it reschedules a repeating notification.
- [region](region.md): Deprecated. The geographic region that triggers the notification.

# regionTriggersOnce (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

A Boolean value indicating whether crossing a geographic region boundary delivers only one notification.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL regionTriggersOnce;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the user is notified only upon the first crossing the boundary of the target [region](region.md). After the first crossing, the local notification is unscheduled. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), notifications are delivered with each boundary crossing. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

The region object itself defines whether the notification is triggered when the user enters or exits the region.

## See Also

### Scheduling a local notification

- [fireDate](firedate.md): Deprecated. The date and time when the system should deliver the notification.
- [timeZone](timezone.md): Deprecated. The time zone of the notification’s fire date.
- [repeatInterval](repeatinterval.md): Deprecated. The calendar interval at which to reschedule the notification.
- [repeatCalendar](repeatcalendar.md): Deprecated. The calendar the system should refer to when it reschedules a repeating notification.
- [region](region.md): Deprecated. The geographic region that triggers the notification.
