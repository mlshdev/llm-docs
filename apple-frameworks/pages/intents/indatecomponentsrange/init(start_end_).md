> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indatecomponentsrange/init(start:end:)](https://developer.apple.com/documentation/intents/indatecomponentsrange/init(start:end:))

# init(start:end:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Initializes the object using the specified start and end dates.

## Declaration

```swift
convenience init(start startDateComponents: DateComponents?, end endDateComponents: DateComponents?)
```

## Parameters

- `startDateComponents`: The starting date for the time range assigned to the [startDateComponents](startdatecomponents.md) property. Specify `nil` if you want the time range to start in the distant past.
- `endDateComponents`: The ending date for the time range assigned to the [endDateComponents](enddatecomponents.md) property. Specify `nil` if you want the time range to end in the distant future.

<a id="return-value"></a>

## Return Value

An initialized [INDateComponentsRange](../indatecomponentsrange.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to initialize a date range with specific parameters. In a date components object, include only the values you want to specify, such as a range that measures only in days or a range that measures only in minutes.

## See Also

### Initializing a Date Components Range

- [init(start:end:recurrenceRule:)](init%28start_end_recurrencerule_%29.md): Initializes the date range to a repeating time period.
- [init(ekRecurrenceRule:)](init%28ekrecurrencerule_%29-5p7kt.md): Initializes the date range using the specified recurrence rule.

# initWithStartDateComponents:endDateComponents: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Initializes the object using the specified start and end dates.

## Declaration

```objectivec
- (instancetype) initWithStartDateComponents:(NSDateComponents *) startDateComponents endDateComponents:(NSDateComponents *) endDateComponents;
```

## Parameters

- `startDateComponents`: The starting date for the time range assigned to the [startDateComponents](startdatecomponents.md) property. Specify `nil` if you want the time range to start in the distant past.
- `endDateComponents`: The ending date for the time range assigned to the [endDateComponents](enddatecomponents.md) property. Specify `nil` if you want the time range to end in the distant future.

<a id="return-value"></a>

## Return Value

An initialized [INDateComponentsRange](../indatecomponentsrange.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to initialize a date range with specific parameters. In a date components object, include only the values you want to specify, such as a range that measures only in days or a range that measures only in minutes.

## See Also

### Initializing a Date Components Range

- [initWithStartDateComponents:endDateComponents:recurrenceRule:](init%28start_end_recurrencerule_%29.md): Initializes the date range to a repeating time period.
- [initWithEKRecurrenceRule:](init%28ekrecurrencerule_%29-5p7kt.md): Initializes the date range using the specified recurrence rule.
