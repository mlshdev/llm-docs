> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekrecurrencerule/init(recurrencewith:interval:end:)](https://developer.apple.com/documentation/eventkit/ekrecurrencerule/init(recurrencewith:interval:end:))

# init(recurrenceWith:interval:end:) (Swift)

**Framework:** EventKit  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns a simple recurrence rule with a given frequency, interval, and end.

## Declaration

```swift
init(recurrenceWith type: EKRecurrenceFrequency, interval: Int, end: EKRecurrenceEnd?)
```

## Parameters

- `type`: The frequency of the recurrence rule. Can be daily, weekly, monthly, or yearly.
- `interval`: The interval between instances of this recurrence. For example, a weekly recurrence rule with an interval of `2` occurs every other week. Must be greater than `0`.
- `end`: The end of the recurrence rule.

<a id="return-value"></a>

## Return Value

The initialized recurrence rule, or `nil` if invalid values are provided.

## Mentioned In

- [Creating a recurring event](../creating-a-recurring-event.md)

## See Also

### Related Documentation

- [Calendar and Reminders Programming Guide](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/EventKitProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009765)

### Creating a Basic Recurrence Rule

- [EKSpan](../ekspan.md): An object that indicates whether modifications should apply to a single event or all future events of a recurring event.

# initRecurrenceWithFrequency:interval:end: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns a simple recurrence rule with a given frequency, interval, and end.

## Declaration

```objectivec
- (instancetype) initRecurrenceWithFrequency:(EKRecurrenceFrequency) type interval:(NSInteger) interval end:(EKRecurrenceEnd *) end;
```

## Parameters

- `type`: The frequency of the recurrence rule. Can be daily, weekly, monthly, or yearly.
- `interval`: The interval between instances of this recurrence. For example, a weekly recurrence rule with an interval of `2` occurs every other week. Must be greater than `0`.
- `end`: The end of the recurrence rule.

<a id="return-value"></a>

## Return Value

The initialized recurrence rule, or `nil` if invalid values are provided.

## Mentioned In

- [Creating a recurring event](../creating-a-recurring-event.md)

## See Also

### Related Documentation

- [Calendar and Reminders Programming Guide](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/EventKitProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009765)

### Creating a Basic Recurrence Rule

- [EKSpan](../ekspan.md): An object that indicates whether modifications should apply to a single event or all future events of a recurring event.
