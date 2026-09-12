> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indatecomponentsrange/init(ekrecurrencerule:)-5p7kt](https://developer.apple.com/documentation/intents/indatecomponentsrange/init(ekrecurrencerule:)-5p7kt)

# init(ekRecurrenceRule:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes the date range using the specified recurrence rule.

## Declaration

```swift
convenience init(ekRecurrenceRule recurrenceRule: EKRecurrenceRule)
```

## Parameters

- `recurrenceRule`: An Event Kit recurrence rule.

<a id="return-value"></a>

## Return Value

An initialized [INDateComponentsRange](../indatecomponentsrange.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to initialize the date range from Event Kit recurrence rules. For example, apps that support the creation of calendar events and reminders using Event Kit might use this method to specify date ranges when processing intents.

## See Also

### Initializing a Date Components Range

- [init(start:end:)](init%28start_end_%29.md): Initializes the object using the specified start and end dates.
- [init(start:end:recurrenceRule:)](init%28start_end_recurrencerule_%29.md): Initializes the date range to a repeating time period.

# initWithEKRecurrenceRule: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes the date range using the specified recurrence rule.

## Declaration

```objectivec
- (instancetype) initWithEKRecurrenceRule:(EKRecurrenceRule *) recurrenceRule;
```

## Parameters

- `recurrenceRule`: An Event Kit recurrence rule.

<a id="return-value"></a>

## Return Value

An initialized [INDateComponentsRange](../indatecomponentsrange.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to initialize the date range from Event Kit recurrence rules. For example, apps that support the creation of calendar events and reminders using Event Kit might use this method to specify date ranges when processing intents.

## See Also

### Initializing a Date Components Range

- [initWithStartDateComponents:endDateComponents:](init%28start_end_%29.md): Initializes the object using the specified start and end dates.
- [initWithStartDateComponents:endDateComponents:recurrenceRule:](init%28start_end_recurrencerule_%29.md): Initializes the date range to a repeating time period.
