> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indatecomponentsrange/init(start:end:recurrencerule:)](https://developer.apple.com/documentation/intents/indatecomponentsrange/init(start:end:recurrencerule:))

# init(start:end:recurrenceRule:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes the date range to a repeating time period.

## Declaration

```swift
init(start startDateComponents: DateComponents?, end endDateComponents: DateComponents?, recurrenceRule: INRecurrenceRule?)
```

## Parameters

- `startDateComponents`: The starting date for the time range. This value is assigned to the [startDateComponents](startdatecomponents.md) property. Specify `nil` if you want the time range to start in the distant past.
- `endDateComponents`: The starting date for the time range. This value is assigned to the [endDateComponents](enddatecomponents.md) property. Specify `nil` if you want the time range to end in the distant future.
- `recurrenceRule`: The recurrence rule to use when repeating the date range.

<a id="return-value"></a>

## Return Value

An initialized [INDateComponentsRange](../indatecomponentsrange.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to initialize a date range that repeats over time. For example, you could create a range that represents the time range of “every wednesday”. Use the start and end dates to specify the date and time values that you want to repeat and use the `recurrenceRule` property to establish the conditions for repeating the value.

## See Also

### Initializing a Date Components Range

- [init(start:end:)](init%28start_end_%29.md): Initializes the object using the specified start and end dates.
- [init(ekRecurrenceRule:)](init%28ekrecurrencerule_%29-5p7kt.md): Initializes the date range using the specified recurrence rule.

# initWithStartDateComponents:endDateComponents:recurrenceRule: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes the date range to a repeating time period.

## Declaration

```objectivec
- (instancetype) initWithStartDateComponents:(NSDateComponents *) startDateComponents endDateComponents:(NSDateComponents *) endDateComponents recurrenceRule:(INRecurrenceRule *) recurrenceRule;
```

## Parameters

- `startDateComponents`: The starting date for the time range. This value is assigned to the [startDateComponents](startdatecomponents.md) property. Specify `nil` if you want the time range to start in the distant past.
- `endDateComponents`: The starting date for the time range. This value is assigned to the [endDateComponents](enddatecomponents.md) property. Specify `nil` if you want the time range to end in the distant future.
- `recurrenceRule`: The recurrence rule to use when repeating the date range.

<a id="return-value"></a>

## Return Value

An initialized [INDateComponentsRange](../indatecomponentsrange.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to initialize a date range that repeats over time. For example, you could create a range that represents the time range of “every wednesday”. Use the start and end dates to specify the date and time values that you want to repeat and use the `recurrenceRule` property to establish the conditions for repeating the value.

## See Also

### Initializing a Date Components Range

- [initWithStartDateComponents:endDateComponents:](init%28start_end_%29.md): Initializes the object using the specified start and end dates.
- [initWithEKRecurrenceRule:](init%28ekrecurrencerule_%29-5p7kt.md): Initializes the date range using the specified recurrence rule.
