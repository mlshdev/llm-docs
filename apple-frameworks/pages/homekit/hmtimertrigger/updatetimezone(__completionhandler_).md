> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmtimertrigger/updatetimezone(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmtimertrigger/updatetimezone(_:completionhandler:))

# updateTimeZone(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 16.4) · iPadOS 8.0+ (deprecated in 16.4) · Mac Catalyst 8.0+ (deprecated in 16.4) · tvOS 12.0+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 5.0+ (deprecated in 9.4)

Updates the trigger’s time zone.

> Use [HMEventTrigger](../hmeventtrigger.md) with [HMCalendarEvent](../hmcalendarevent.md) for triggers based on a time-zone-relative time of day.

## Declaration

```swift
func updateTimeZone(_ timeZone: TimeZone?, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func updateTimeZone(_ timeZone: TimeZone?) async throws
```

## Parameters

- `timeZone`: The new time zone; may be `nil`.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

See [timeZone](timezone.md) for a description of how the time zone is interpreted.

## See Also

### Deprecated symbols

- [init(name:fireDate:timeZone:recurrence:recurrenceCalendar:)](init%28name_firedate_timezone_recurrence_recurrencecalendar_%29.md): Deprecated. Initializes a timer trigger with specified timing information.
- [timeZone](timezone.md): Deprecated. The timezone in which to evaluate the fire time.
- [recurrenceCalendar](recurrencecalendar.md): Deprecated. The calendar in which the recurrence value is evaluated.

# updateTimeZone:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 16.4) · iPadOS 8.0+ (deprecated in 16.4) · Mac Catalyst 14.0+ (deprecated in 16.4) · tvOS 12.0+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 5.0+ (deprecated in 9.4)

Updates the trigger’s time zone.

> Use [HMEventTrigger](../hmeventtrigger.md) with [HMCalendarEvent](../hmcalendarevent.md) for triggers based on a time-zone-relative time of day.

## Declaration

```objectivec
- (void) updateTimeZone:(NSTimeZone *) timeZone completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `timeZone`: The new time zone; may be `nil`.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

See [timeZone](timezone.md) for a description of how the time zone is interpreted.

## See Also

### Deprecated symbols

- [initWithName:fireDate:timeZone:recurrence:recurrenceCalendar:](init%28name_firedate_timezone_recurrence_recurrencecalendar_%29.md): Deprecated. Initializes a timer trigger with specified timing information.
- [timeZone](timezone.md): Deprecated. The timezone in which to evaluate the fire time.
- [recurrenceCalendar](recurrencecalendar.md): Deprecated. The calendar in which the recurrence value is evaluated.
