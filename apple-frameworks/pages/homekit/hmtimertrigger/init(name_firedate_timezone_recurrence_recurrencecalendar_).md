> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmtimertrigger/init(name:firedate:timezone:recurrence:recurrencecalendar:)](https://developer.apple.com/documentation/homekit/hmtimertrigger/init(name:firedate:timezone:recurrence:recurrencecalendar:))

# init(name:fireDate:timeZone:recurrence:recurrenceCalendar:) (Swift)

**Framework:** HomeKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 16.4) · iPadOS 8.0+ (deprecated in 16.4) · Mac Catalyst 8.0+ (deprecated in 16.4) · tvOS 10.0+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 9.4)

Initializes a timer trigger with specified timing information.

## Declaration

```swift
init(name: String, fireDate: Date, timeZone: TimeZone?, recurrence: DateComponents?, recurrenceCalendar: Calendar?)
```

## Parameters

- `name`: The name of the timer trigger.
- `fireDate`: The first fire date.
- `timeZone`: The time zone for the first fire date. Pass `nil` to use the default time zone. See [timeZone](timezone.md) for a description of how the time zone is interpreted.
- `recurrence`: The recurrence interval on which to fire the trigger. `nil` indicates a one-time trigger.
- `recurrenceCalendar`: The calendar in which to evaluate the recurrence interval of a timer trigger. May be `nil`, in which case the current calendar [current](../../foundation/nscalendar/current.md) is used.

<a id="return-value"></a>

## Return Value

A newly-initialized timer trigger with the specified values.

<a id="Discussion"></a>

## Discussion

A new timer trigger starts out disabled, and must be enabled using [enable(\_:completionHandler:)](../hmtrigger/enable%28__completionhandler_%29.md) before use.

## See Also

### Deprecated symbols

- [timeZone](timezone.md): Deprecated. The timezone in which to evaluate the fire time.
- [updateTimeZone(\_:completionHandler:)](updatetimezone%28__completionhandler_%29.md): Deprecated. Updates the trigger’s time zone.
- [recurrenceCalendar](recurrencecalendar.md): Deprecated. The calendar in which the recurrence value is evaluated.

# initWithName:fireDate:timeZone:recurrence:recurrenceCalendar: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 16.4) · iPadOS 8.0+ (deprecated in 16.4) · Mac Catalyst 14.0+ (deprecated in 16.4) · tvOS 10.0+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 9.4)

Initializes a timer trigger with specified timing information.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name fireDate:(NSDate *) fireDate timeZone:(NSTimeZone *) timeZone recurrence:(NSDateComponents *) recurrence recurrenceCalendar:(NSCalendar *) recurrenceCalendar;
```

## Parameters

- `name`: The name of the timer trigger.
- `fireDate`: The first fire date.
- `timeZone`: The time zone for the first fire date. Pass `nil` to use the default time zone. See [timeZone](timezone.md) for a description of how the time zone is interpreted.
- `recurrence`: The recurrence interval on which to fire the trigger. `nil` indicates a one-time trigger.
- `recurrenceCalendar`: The calendar in which to evaluate the recurrence interval of a timer trigger. May be `nil`, in which case the current calendar [currentCalendar](../../foundation/nscalendar/current.md) is used.

<a id="return-value"></a>

## Return Value

A newly-initialized timer trigger with the specified values.

<a id="Discussion"></a>

## Discussion

A new timer trigger starts out disabled, and must be enabled using [enable:completionHandler:](../hmtrigger/enable%28__completionhandler_%29.md) before use.

## See Also

### Deprecated symbols

- [timeZone](timezone.md): Deprecated. The timezone in which to evaluate the fire time.
- [updateTimeZone:completionHandler:](updatetimezone%28__completionhandler_%29.md): Deprecated. Updates the trigger’s time zone.
- [recurrenceCalendar](recurrencecalendar.md): Deprecated. The calendar in which the recurrence value is evaluated.
