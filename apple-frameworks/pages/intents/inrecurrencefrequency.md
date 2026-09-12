> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrecurrencefrequency](https://developer.apple.com/documentation/intents/inrecurrencefrequency)

# INRecurrenceFrequency (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

The time frame for which the rule applies.

## Declaration

```swift
enum INRecurrenceFrequency
```

## Topics

### Enumeration Cases

- [INRecurrenceFrequency.unknown](inrecurrencefrequency/unknown.md): An unknown repetition frequency.
- [INRecurrenceFrequency.minute](inrecurrencefrequency/minute.md): A time range that repeats every minute.
- [INRecurrenceFrequency.hourly](inrecurrencefrequency/hourly.md): A time range that repeats on an hourly basis.
- [INRecurrenceFrequency.daily](inrecurrencefrequency/daily.md): A time range that repeats on a daily basis.
- [INRecurrenceFrequency.weekly](inrecurrencefrequency/weekly.md): A date range that repeats on a weekly basis.
- [INRecurrenceFrequency.monthly](inrecurrencefrequency/monthly.md): A date range that repeats on a monthly basis.
- [INRecurrenceFrequency.yearly](inrecurrencefrequency/yearly.md): A date range that repeats on a yearly basis.

### Initializers

- [init(rawValue:)](inrecurrencefrequency/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Rule Conditions

- [frequency](inrecurrencerule/frequency.md): The time frame for which the rule applies.
- [interval](inrecurrencerule/interval.md): The interval at which the recurrence rule is applied.

# INRecurrenceFrequency (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

The time frame for which the rule applies.

## Declaration

```objectivec
enum INRecurrenceFrequency : NSInteger;
```

## Topics

### Enumeration Cases

- [INRecurrenceFrequencyUnknown](inrecurrencefrequency/unknown.md): An unknown repetition frequency.
- [INRecurrenceFrequencyMinute](inrecurrencefrequency/minute.md): A time range that repeats every minute.
- [INRecurrenceFrequencyHourly](inrecurrencefrequency/hourly.md): A time range that repeats on an hourly basis.
- [INRecurrenceFrequencyDaily](inrecurrencefrequency/daily.md): A time range that repeats on a daily basis.
- [INRecurrenceFrequencyWeekly](inrecurrencefrequency/weekly.md): A date range that repeats on a weekly basis.
- [INRecurrenceFrequencyMonthly](inrecurrencefrequency/monthly.md): A date range that repeats on a monthly basis.
- [INRecurrenceFrequencyYearly](inrecurrencefrequency/yearly.md): A date range that repeats on a yearly basis.

## See Also

### Getting the Rule Conditions

- [frequency](inrecurrencerule/frequency.md): The time frame for which the rule applies.
- [interval](inrecurrencerule/interval.md): The interval at which the recurrence rule is applied.
