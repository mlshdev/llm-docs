> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmtimertrigger/recurrencecalendar](https://developer.apple.com/documentation/homekit/hmtimertrigger/recurrencecalendar)

# recurrenceCalendar (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.4) · iPadOS 8.0+ (deprecated in 16.4) · Mac Catalyst 8.0+ (deprecated in 16.4) · tvOS 10.0+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 9.4)

The calendar in which the recurrence value is evaluated.

> This property is no longer supported.

## Declaration

```swift
var recurrenceCalendar: Calendar? { get }
```

<a id="Discussion"></a>

## Discussion

See [recurrence](recurrence.md) for a discussion of how the recurrence value and recurrence calendar are used.

## See Also

### Deprecated symbols

- [init(name:fireDate:timeZone:recurrence:recurrenceCalendar:)](init%28name_firedate_timezone_recurrence_recurrencecalendar_%29.md): Deprecated. Initializes a timer trigger with specified timing information.
- [timeZone](timezone.md): Deprecated. The timezone in which to evaluate the fire time.
- [updateTimeZone(\_:completionHandler:)](updatetimezone%28__completionhandler_%29.md): Deprecated. Updates the trigger’s time zone.

# recurrenceCalendar (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.4) · iPadOS 8.0+ (deprecated in 16.4) · Mac Catalyst 14.0+ (deprecated in 16.4) · tvOS 10.0+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 9.4)

The calendar in which the recurrence value is evaluated.

> This property is no longer supported.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSCalendar * recurrenceCalendar;
```

<a id="Discussion"></a>

## Discussion

See [recurrence](recurrence.md) for a discussion of how the recurrence value and recurrence calendar are used.

## See Also

### Deprecated symbols

- [initWithName:fireDate:timeZone:recurrence:recurrenceCalendar:](init%28name_firedate_timezone_recurrence_recurrencecalendar_%29.md): Deprecated. Initializes a timer trigger with specified timing information.
- [timeZone](timezone.md): Deprecated. The timezone in which to evaluate the fire time.
- [updateTimeZone:completionHandler:](updatetimezone%28__completionhandler_%29.md): Deprecated. Updates the trigger’s time zone.
