> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekrecurrencefrequency](https://developer.apple.com/documentation/eventkit/ekrecurrencefrequency)

# EKRecurrenceFrequency (Swift)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The frequency for recurrence rules.

## Declaration

```swift
enum EKRecurrenceFrequency
```

## Mentioned In

- [Creating a recurring event](creating-a-recurring-event.md)

## Topics

### Constants

- [EKRecurrenceFrequency.daily](ekrecurrencefrequency/daily.md): Indicates a daily recurrence rule.
- [EKRecurrenceFrequency.weekly](ekrecurrencefrequency/weekly.md): Indicates a weekly recurrence rule.
- [EKRecurrenceFrequency.monthly](ekrecurrencefrequency/monthly.md): Indicates a monthly recurrence rule.
- [EKRecurrenceFrequency.yearly](ekrecurrencefrequency/yearly.md): Indicates a yearly recurrence rule.

### Initializers

- [init(rawValue:)](ekrecurrencefrequency/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Recurrence Rule Properties

- [calendarIdentifier](ekrecurrencerule/calendaridentifier.md): The identifier for the recurrence rule’s calendar.
- [recurrenceEnd](ekrecurrencerule/recurrenceend.md): Indicates when the recurrence rule ends.
- [frequency](ekrecurrencerule/frequency.md): The frequency of the recurrence rule.
- [interval](ekrecurrencerule/interval.md): Specifies how often the recurrence rule repeats over the unit of time indicated by its frequency.
- [firstDayOfTheWeek](ekrecurrencerule/firstdayoftheweek.md): Indicates which day of the week the recurrence rule treats as the first day of the week.
- [daysOfTheWeek](ekrecurrencerule/daysoftheweek.md): The days of the week associated with the recurrence rule, as an array of [EKRecurrenceDayOfWeek](ekrecurrencedayofweek.md) objects.
- [daysOfTheMonth](ekrecurrencerule/daysofthemonth.md): The days of the month associated with the recurrence rule, as an array of `NSNumber` objects.
- [daysOfTheYear](ekrecurrencerule/daysoftheyear.md): The days of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [weeksOfTheYear](ekrecurrencerule/weeksoftheyear.md): The weeks of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [monthsOfTheYear](ekrecurrencerule/monthsoftheyear.md): The months of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [setPositions](ekrecurrencerule/setpositions.md): An array of ordinal numbers that filters which recurrences to include in the recurrence rule’s frequency.
- [EK_LOSE_FRACTIONAL_SECONDS_DO_NOT_USE()](ek_lose_fractional_seconds_do_not_use%28%29.md): Deprecated. A deprecated function.

# EKRecurrenceFrequency (Objective-C)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The frequency for recurrence rules.

## Declaration

```objectivec
enum EKRecurrenceFrequency : NSInteger;
```

## Mentioned In

- [Creating a recurring event](creating-a-recurring-event.md)

## Topics

### Constants

- [EKRecurrenceFrequencyDaily](ekrecurrencefrequency/daily.md): Indicates a daily recurrence rule.
- [EKRecurrenceFrequencyWeekly](ekrecurrencefrequency/weekly.md): Indicates a weekly recurrence rule.
- [EKRecurrenceFrequencyMonthly](ekrecurrencefrequency/monthly.md): Indicates a monthly recurrence rule.
- [EKRecurrenceFrequencyYearly](ekrecurrencefrequency/yearly.md): Indicates a yearly recurrence rule.

## See Also

### Accessing Recurrence Rule Properties

- [calendarIdentifier](ekrecurrencerule/calendaridentifier.md): The identifier for the recurrence rule’s calendar.
- [recurrenceEnd](ekrecurrencerule/recurrenceend.md): Indicates when the recurrence rule ends.
- [frequency](ekrecurrencerule/frequency.md): The frequency of the recurrence rule.
- [interval](ekrecurrencerule/interval.md): Specifies how often the recurrence rule repeats over the unit of time indicated by its frequency.
- [firstDayOfTheWeek](ekrecurrencerule/firstdayoftheweek.md): Indicates which day of the week the recurrence rule treats as the first day of the week.
- [daysOfTheWeek](ekrecurrencerule/daysoftheweek.md): The days of the week associated with the recurrence rule, as an array of [EKRecurrenceDayOfWeek](ekrecurrencedayofweek.md) objects.
- [daysOfTheMonth](ekrecurrencerule/daysofthemonth.md): The days of the month associated with the recurrence rule, as an array of `NSNumber` objects.
- [daysOfTheYear](ekrecurrencerule/daysoftheyear.md): The days of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [weeksOfTheYear](ekrecurrencerule/weeksoftheyear.md): The weeks of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [monthsOfTheYear](ekrecurrencerule/monthsoftheyear.md): The months of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [setPositions](ekrecurrencerule/setpositions.md): An array of ordinal numbers that filters which recurrences to include in the recurrence rule’s frequency.
- [EK_LOSE_FRACTIONAL_SECONDS_DO_NOT_USE](ek_lose_fractional_seconds_do_not_use%28%29.md): Deprecated. A deprecated function.
