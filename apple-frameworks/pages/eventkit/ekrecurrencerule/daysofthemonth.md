> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekrecurrencerule/daysofthemonth](https://developer.apple.com/documentation/eventkit/ekrecurrencerule/daysofthemonth)

# daysOfTheMonth (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The days of the month associated with the recurrence rule, as an array of `NSNumber` objects.

## Declaration

```swift
var daysOfTheMonth: [NSNumber]? { get }
```

<a id="Discussion"></a>

## Discussion

Values can be from `1` to `31` and from `-1` to `-31`. This property value is valid only for recurrence rules that were initialized with specific days of the month and a frequency type of [EKRecurrenceFrequency.monthly](../ekrecurrencefrequency/monthly.md).

Negative values indicate counting backwards from the end of the month.

## See Also

### Accessing Recurrence Rule Properties

- [EKRecurrenceFrequency](../ekrecurrencefrequency.md): The frequency for recurrence rules.
- [calendarIdentifier](calendaridentifier.md): The identifier for the recurrence rule’s calendar.
- [recurrenceEnd](recurrenceend.md): Indicates when the recurrence rule ends.
- [frequency](frequency.md): The frequency of the recurrence rule.
- [interval](interval.md): Specifies how often the recurrence rule repeats over the unit of time indicated by its frequency.
- [firstDayOfTheWeek](firstdayoftheweek.md): Indicates which day of the week the recurrence rule treats as the first day of the week.
- [daysOfTheWeek](daysoftheweek.md): The days of the week associated with the recurrence rule, as an array of [EKRecurrenceDayOfWeek](../ekrecurrencedayofweek.md) objects.
- [daysOfTheYear](daysoftheyear.md): The days of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [weeksOfTheYear](weeksoftheyear.md): The weeks of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [monthsOfTheYear](monthsoftheyear.md): The months of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [setPositions](setpositions.md): An array of ordinal numbers that filters which recurrences to include in the recurrence rule’s frequency.
- [EK_LOSE_FRACTIONAL_SECONDS_DO_NOT_USE()](../ek_lose_fractional_seconds_do_not_use%28%29.md): Deprecated. A deprecated function.

# daysOfTheMonth (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The days of the month associated with the recurrence rule, as an array of `NSNumber` objects.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<NSNumber *> * daysOfTheMonth;
```

<a id="Discussion"></a>

## Discussion

Values can be from `1` to `31` and from `-1` to `-31`. This property value is valid only for recurrence rules that were initialized with specific days of the month and a frequency type of [EKRecurrenceFrequencyMonthly](../ekrecurrencefrequency/monthly.md).

Negative values indicate counting backwards from the end of the month.

## See Also

### Accessing Recurrence Rule Properties

- [EKRecurrenceFrequency](../ekrecurrencefrequency.md): The frequency for recurrence rules.
- [calendarIdentifier](calendaridentifier.md): The identifier for the recurrence rule’s calendar.
- [recurrenceEnd](recurrenceend.md): Indicates when the recurrence rule ends.
- [frequency](frequency.md): The frequency of the recurrence rule.
- [interval](interval.md): Specifies how often the recurrence rule repeats over the unit of time indicated by its frequency.
- [firstDayOfTheWeek](firstdayoftheweek.md): Indicates which day of the week the recurrence rule treats as the first day of the week.
- [daysOfTheWeek](daysoftheweek.md): The days of the week associated with the recurrence rule, as an array of [EKRecurrenceDayOfWeek](../ekrecurrencedayofweek.md) objects.
- [daysOfTheYear](daysoftheyear.md): The days of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [weeksOfTheYear](weeksoftheyear.md): The weeks of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [monthsOfTheYear](monthsoftheyear.md): The months of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [setPositions](setpositions.md): An array of ordinal numbers that filters which recurrences to include in the recurrence rule’s frequency.
- [EK_LOSE_FRACTIONAL_SECONDS_DO_NOT_USE](../ek_lose_fractional_seconds_do_not_use%28%29.md): Deprecated. A deprecated function.
