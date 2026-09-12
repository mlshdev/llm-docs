> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrecurrencerule/frequency](https://developer.apple.com/documentation/intents/inrecurrencerule/frequency)

# frequency (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The time frame for which the rule applies.

## Declaration

```swift
var frequency: INRecurrenceFrequency { get }
```

<a id="Discussion"></a>

## Discussion

This property represents the time frame over which a date or time recurs. For example, applying a recurrence rule with the frequency of [INRecurrenceFrequency.daily](../inrecurrencefrequency/daily.md) to date components containing the hour of 7:00 would let you create a trigger that applies at 7:00 each day.

Use the [interval](interval.md) property to create gaps in the repetition of the specified date.

## See Also

### Getting the Rule Conditions

- [INRecurrenceFrequency](../inrecurrencefrequency.md): The time frame for which the rule applies.
- [interval](interval.md): The interval at which the recurrence rule is applied.

# frequency (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The time frame for which the rule applies.

## Declaration

```objectivec
@property (nonatomic, readonly) INRecurrenceFrequency frequency;
```

<a id="Discussion"></a>

## Discussion

This property represents the time frame over which a date or time recurs. For example, applying a recurrence rule with the frequency of [INRecurrenceFrequencyDaily](../inrecurrencefrequency/daily.md) to date components containing the hour of 7:00 would let you create a trigger that applies at 7:00 each day.

Use the [interval](interval.md) property to create gaps in the repetition of the specified date.

## See Also

### Getting the Rule Conditions

- [INRecurrenceFrequency](../inrecurrencefrequency.md): The time frame for which the rule applies.
- [interval](interval.md): The interval at which the recurrence rule is applied.
