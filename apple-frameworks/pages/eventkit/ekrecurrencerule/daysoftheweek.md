> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekrecurrencerule/daysoftheweek](https://developer.apple.com/documentation/eventkit/ekrecurrencerule/daysoftheweek)

# daysOfTheWeek (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The days of the week associated with the recurrence rule, as an array of [EKRecurrenceDayOfWeek](../ekrecurrencedayofweek.md) objects.

## Declaration

```swift
var daysOfTheWeek: [EKRecurrenceDayOfWeek]? { get }
```

<a id="Discussion"></a>

## Discussion

This property value is valid only for recurrence rules that were initialized with specific days of the week and a frequency type of [EKRecurrenceFrequency.weekly](../ekrecurrencefrequency/weekly.md), [EKRecurrenceFrequency.monthly](../ekrecurrencefrequency/monthly.md), or [EKRecurrenceFrequency.yearly](../ekrecurrencefrequency/yearly.md).

## See Also

### Accessing Recurrence Rule Properties

- [EKRecurrenceFrequency](../ekrecurrencefrequency.md): The frequency for recurrence rules.
- [calendarIdentifier](calendaridentifier.md): The identifier for the recurrence rule’s calendar.
- [recurrenceEnd](recurrenceend.md): Indicates when the recurrence rule ends.
- [frequency](frequency.md): The frequency of the recurrence rule.
- [interval](interval.md): Specifies how often the recurrence rule repeats over the unit of time indicated by its frequency.
- [firstDayOfTheWeek](firstdayoftheweek.md): Indicates which day of the week the recurrence rule treats as the first day of the week.
- [daysOfTheMonth](daysofthemonth.md): The days of the month associated with the recurrence rule, as an array of `NSNumber` objects.
- [daysOfTheYear](daysoftheyear.md): The days of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [weeksOfTheYear](weeksoftheyear.md): The weeks of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [monthsOfTheYear](monthsoftheyear.md): The months of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [setPositions](setpositions.md): An array of ordinal numbers that filters which recurrences to include in the recurrence rule’s frequency.
- [EK_LOSE_FRACTIONAL_SECONDS_DO_NOT_USE()](../ek_lose_fractional_seconds_do_not_use%28%29.md): Deprecated. A deprecated function.

# daysOfTheWeek (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The days of the week associated with the recurrence rule, as an array of [EKRecurrenceDayOfWeek](../ekrecurrencedayofweek.md) objects.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<EKRecurrenceDayOfWeek *> * daysOfTheWeek;
```

<a id="Discussion"></a>

## Discussion

This property value is valid only for recurrence rules that were initialized with specific days of the week and a frequency type of [EKRecurrenceFrequencyWeekly](../ekrecurrencefrequency/weekly.md), [EKRecurrenceFrequencyMonthly](../ekrecurrencefrequency/monthly.md), or [EKRecurrenceFrequencyYearly](../ekrecurrencefrequency/yearly.md).

## See Also

### Accessing Recurrence Rule Properties

- [EKRecurrenceFrequency](../ekrecurrencefrequency.md): The frequency for recurrence rules.
- [calendarIdentifier](calendaridentifier.md): The identifier for the recurrence rule’s calendar.
- [recurrenceEnd](recurrenceend.md): Indicates when the recurrence rule ends.
- [frequency](frequency.md): The frequency of the recurrence rule.
- [interval](interval.md): Specifies how often the recurrence rule repeats over the unit of time indicated by its frequency.
- [firstDayOfTheWeek](firstdayoftheweek.md): Indicates which day of the week the recurrence rule treats as the first day of the week.
- [daysOfTheMonth](daysofthemonth.md): The days of the month associated with the recurrence rule, as an array of `NSNumber` objects.
- [daysOfTheYear](daysoftheyear.md): The days of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [weeksOfTheYear](weeksoftheyear.md): The weeks of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [monthsOfTheYear](monthsoftheyear.md): The months of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [setPositions](setpositions.md): An array of ordinal numbers that filters which recurrences to include in the recurrence rule’s frequency.
- [EK_LOSE_FRACTIONAL_SECONDS_DO_NOT_USE](../ek_lose_fractional_seconds_do_not_use%28%29.md): Deprecated. A deprecated function.
