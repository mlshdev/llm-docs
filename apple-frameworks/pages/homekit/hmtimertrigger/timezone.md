> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmtimertrigger/timezone](https://developer.apple.com/documentation/homekit/hmtimertrigger/timezone)

# timeZone (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.4) · iPadOS 8.0+ (deprecated in 16.4) · Mac Catalyst 8.0+ (deprecated in 16.4) · tvOS 10.0+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 9.4)

The timezone in which to evaluate the fire time.

> Use [HMEventTrigger](../hmeventtrigger.md) with [HMCalendarEvent](../hmcalendarevent.md) for triggers based on a time-zone-relative time of day.

## Declaration

```swift
var timeZone: TimeZone? { get }
```

<a id="Discussion"></a>

## Discussion

If this value is `nil`, the trigger’s fire time will stay at the same relative time if the user changes timezones. If this value is set to a specific value, the trigger’s fire time will always be the same absolute time as evaluated in that time zone. A common value to set this to is the time zone where the accessories are physically located. This will result in the trigger firing at a specific time of day in that location, regardless of where the iOS device is located.

## See Also

### Deprecated symbols

- [init(name:fireDate:timeZone:recurrence:recurrenceCalendar:)](init%28name_firedate_timezone_recurrence_recurrencecalendar_%29.md): Deprecated. Initializes a timer trigger with specified timing information.
- [updateTimeZone(\_:completionHandler:)](updatetimezone%28__completionhandler_%29.md): Deprecated. Updates the trigger’s time zone.
- [recurrenceCalendar](recurrencecalendar.md): Deprecated. The calendar in which the recurrence value is evaluated.

# timeZone (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.4) · iPadOS 8.0+ (deprecated in 16.4) · Mac Catalyst 14.0+ (deprecated in 16.4) · tvOS 10.0+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 9.4)

The timezone in which to evaluate the fire time.

> Use [HMEventTrigger](../hmeventtrigger.md) with [HMCalendarEvent](../hmcalendarevent.md) for triggers based on a time-zone-relative time of day.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSTimeZone * timeZone;
```

<a id="Discussion"></a>

## Discussion

If this value is `nil`, the trigger’s fire time will stay at the same relative time if the user changes timezones. If this value is set to a specific value, the trigger’s fire time will always be the same absolute time as evaluated in that time zone. A common value to set this to is the time zone where the accessories are physically located. This will result in the trigger firing at a specific time of day in that location, regardless of where the iOS device is located.

## See Also

### Deprecated symbols

- [initWithName:fireDate:timeZone:recurrence:recurrenceCalendar:](init%28name_firedate_timezone_recurrence_recurrencecalendar_%29.md): Deprecated. Initializes a timer trigger with specified timing information.
- [updateTimeZone:completionHandler:](updatetimezone%28__completionhandler_%29.md): Deprecated. Updates the trigger’s time zone.
- [recurrenceCalendar](recurrencecalendar.md): Deprecated. The calendar in which the recurrence value is evaluated.
