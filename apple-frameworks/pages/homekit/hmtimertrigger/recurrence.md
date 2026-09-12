> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmtimertrigger/recurrence](https://developer.apple.com/documentation/homekit/hmtimertrigger/recurrence)

# recurrence (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The interval on which to repeat firing the trigger.

## Declaration

```swift
var recurrence: DateComponents? { get }
```

<a id="Discussion"></a>

## Discussion

This value may be `nil` if the trigger should not repeat.

The next fire date is calculated by adding the date components to the last fire date, as evaluated in the context of the trigger’s [recurrenceCalendar](recurrencecalendar.md). Depending on the calendar, some date components may result in an undefined next fire date.

The minimum recurrence interval is five minutes, and the most precision possible are whole minute values—you may not specify seconds in a recurrence interval. The maximum recurrence interval is five weeks.

## See Also

### Using recurrence

- [updateRecurrence(\_:completionHandler:)](updaterecurrence%28__completionhandler_%29.md): Updates the recurrence interval.

# recurrence (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The interval on which to repeat firing the trigger.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDateComponents * recurrence;
```

<a id="Discussion"></a>

## Discussion

This value may be `nil` if the trigger should not repeat.

The next fire date is calculated by adding the date components to the last fire date, as evaluated in the context of the trigger’s [recurrenceCalendar](recurrencecalendar.md). Depending on the calendar, some date components may result in an undefined next fire date.

The minimum recurrence interval is five minutes, and the most precision possible are whole minute values—you may not specify seconds in a recurrence interval. The maximum recurrence interval is five weeks.

## See Also

### Using recurrence

- [updateRecurrence:completionHandler:](updaterecurrence%28__completionhandler_%29.md): Updates the recurrence interval.
