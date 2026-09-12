> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrecurrencerule/interval](https://developer.apple.com/documentation/intents/inrecurrencerule/interval)

# interval (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The interval at which the recurrence rule is applied.

## Declaration

```swift
var interval: Int { get }
```

<a id="Discussion"></a>

## Discussion

This property allows you to define recurrence rules that skip a particular instance. For example, a rule whose frequency is [INRecurrenceFrequency.weekly](../inrecurrencefrequency/weekly.md) and whose interval is `2` represents a recurrence that occurs every two weeks, instead of every week.

## See Also

### Getting the Rule Conditions

- [frequency](frequency.md): The time frame for which the rule applies.
- [INRecurrenceFrequency](../inrecurrencefrequency.md): The time frame for which the rule applies.

# interval (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The interval at which the recurrence rule is applied.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger interval;
```

<a id="Discussion"></a>

## Discussion

This property allows you to define recurrence rules that skip a particular instance. For example, a rule whose frequency is [INRecurrenceFrequencyWeekly](../inrecurrencefrequency/weekly.md) and whose interval is `2` represents a recurrence that occurs every two weeks, instead of every week.

## See Also

### Getting the Rule Conditions

- [frequency](frequency.md): The time frame for which the rule applies.
- [INRecurrenceFrequency](../inrecurrencefrequency.md): The time frame for which the rule applies.
