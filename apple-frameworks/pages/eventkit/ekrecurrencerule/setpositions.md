> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekrecurrencerule/setpositions](https://developer.apple.com/documentation/eventkit/ekrecurrencerule/setpositions)

# setPositions (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

An array of ordinal numbers that filters which recurrences to include in the recurrence rule’s frequency.

## Declaration

```swift
var setPositions: [NSNumber]? { get }
```

<a id="Discussion"></a>

## Discussion

For example, a yearly recurrence rule that has a [daysOfTheWeek](daysoftheweek.md) value that specifies Monday through Friday, and a [setPositions](setpositions.md) array containing `2` and `-1`, occurs only on the second weekday and last weekday of every year. Values can be from `1` to `366` and from `-1` to `-366`.

Negative values indicate counting backwards from the end of the recurrence rule’s frequency (week, month, or year).

## See Also

### Accessing Recurrence Rule Properties

- [EKRecurrenceFrequency](../ekrecurrencefrequency.md): The frequency for recurrence rules.
- [calendarIdentifier](calendaridentifier.md): The identifier for the recurrence rule’s calendar.
- [recurrenceEnd](recurrenceend.md): Indicates when the recurrence rule ends.
- [frequency](frequency.md): The frequency of the recurrence rule.
- [interval](interval.md): Specifies how often the recurrence rule repeats over the unit of time indicated by its frequency.
- [firstDayOfTheWeek](firstdayoftheweek.md): Indicates which day of the week the recurrence rule treats as the first day of the week.
- [daysOfTheWeek](daysoftheweek.md): The days of the week associated with the recurrence rule, as an array of [EKRecurrenceDayOfWeek](../ekrecurrencedayofweek.md) objects.
- [daysOfTheMonth](daysofthemonth.md): The days of the month associated with the recurrence rule, as an array of `NSNumber` objects.
- [daysOfTheYear](daysoftheyear.md): The days of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [weeksOfTheYear](weeksoftheyear.md): The weeks of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [monthsOfTheYear](monthsoftheyear.md): The months of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [EK_LOSE_FRACTIONAL_SECONDS_DO_NOT_USE()](../ek_lose_fractional_seconds_do_not_use%28%29.md): Deprecated. A deprecated function.

# setPositions (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

An array of ordinal numbers that filters which recurrences to include in the recurrence rule’s frequency.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<NSNumber *> * setPositions;
```

<a id="Discussion"></a>

## Discussion

For example, a yearly recurrence rule that has a [daysOfTheWeek](daysoftheweek.md) value that specifies Monday through Friday, and a [setPositions](setpositions.md) array containing `2` and `-1`, occurs only on the second weekday and last weekday of every year. Values can be from `1` to `366` and from `-1` to `-366`.

Negative values indicate counting backwards from the end of the recurrence rule’s frequency (week, month, or year).

## See Also

### Accessing Recurrence Rule Properties

- [EKRecurrenceFrequency](../ekrecurrencefrequency.md): The frequency for recurrence rules.
- [calendarIdentifier](calendaridentifier.md): The identifier for the recurrence rule’s calendar.
- [recurrenceEnd](recurrenceend.md): Indicates when the recurrence rule ends.
- [frequency](frequency.md): The frequency of the recurrence rule.
- [interval](interval.md): Specifies how often the recurrence rule repeats over the unit of time indicated by its frequency.
- [firstDayOfTheWeek](firstdayoftheweek.md): Indicates which day of the week the recurrence rule treats as the first day of the week.
- [daysOfTheWeek](daysoftheweek.md): The days of the week associated with the recurrence rule, as an array of [EKRecurrenceDayOfWeek](../ekrecurrencedayofweek.md) objects.
- [daysOfTheMonth](daysofthemonth.md): The days of the month associated with the recurrence rule, as an array of `NSNumber` objects.
- [daysOfTheYear](daysoftheyear.md): The days of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [weeksOfTheYear](weeksoftheyear.md): The weeks of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [monthsOfTheYear](monthsoftheyear.md): The months of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [EK_LOSE_FRACTIONAL_SECONDS_DO_NOT_USE](../ek_lose_fractional_seconds_do_not_use%28%29.md): Deprecated. A deprecated function.
