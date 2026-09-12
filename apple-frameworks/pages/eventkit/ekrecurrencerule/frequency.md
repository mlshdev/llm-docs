> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekrecurrencerule/frequency](https://developer.apple.com/documentation/eventkit/ekrecurrencerule/frequency)

# frequency (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The frequency of the recurrence rule.

## Declaration

```swift
var frequency: EKRecurrenceFrequency { get }
```

## See Also

### Accessing Recurrence Rule Properties

- [EKRecurrenceFrequency](../ekrecurrencefrequency.md): The frequency for recurrence rules.
- [calendarIdentifier](calendaridentifier.md): The identifier for the recurrence rule’s calendar.
- [recurrenceEnd](recurrenceend.md): Indicates when the recurrence rule ends.
- [interval](interval.md): Specifies how often the recurrence rule repeats over the unit of time indicated by its frequency.
- [firstDayOfTheWeek](firstdayoftheweek.md): Indicates which day of the week the recurrence rule treats as the first day of the week.
- [daysOfTheWeek](daysoftheweek.md): The days of the week associated with the recurrence rule, as an array of [EKRecurrenceDayOfWeek](../ekrecurrencedayofweek.md) objects.
- [daysOfTheMonth](daysofthemonth.md): The days of the month associated with the recurrence rule, as an array of `NSNumber` objects.
- [daysOfTheYear](daysoftheyear.md): The days of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [weeksOfTheYear](weeksoftheyear.md): The weeks of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [monthsOfTheYear](monthsoftheyear.md): The months of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [setPositions](setpositions.md): An array of ordinal numbers that filters which recurrences to include in the recurrence rule’s frequency.
- [EK_LOSE_FRACTIONAL_SECONDS_DO_NOT_USE()](../ek_lose_fractional_seconds_do_not_use%28%29.md): Deprecated. A deprecated function.

# frequency (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The frequency of the recurrence rule.

## Declaration

```objectivec
@property (nonatomic, readonly) EKRecurrenceFrequency frequency;
```

## See Also

### Accessing Recurrence Rule Properties

- [EKRecurrenceFrequency](../ekrecurrencefrequency.md): The frequency for recurrence rules.
- [calendarIdentifier](calendaridentifier.md): The identifier for the recurrence rule’s calendar.
- [recurrenceEnd](recurrenceend.md): Indicates when the recurrence rule ends.
- [interval](interval.md): Specifies how often the recurrence rule repeats over the unit of time indicated by its frequency.
- [firstDayOfTheWeek](firstdayoftheweek.md): Indicates which day of the week the recurrence rule treats as the first day of the week.
- [daysOfTheWeek](daysoftheweek.md): The days of the week associated with the recurrence rule, as an array of [EKRecurrenceDayOfWeek](../ekrecurrencedayofweek.md) objects.
- [daysOfTheMonth](daysofthemonth.md): The days of the month associated with the recurrence rule, as an array of `NSNumber` objects.
- [daysOfTheYear](daysoftheyear.md): The days of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [weeksOfTheYear](weeksoftheyear.md): The weeks of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [monthsOfTheYear](monthsoftheyear.md): The months of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [setPositions](setpositions.md): An array of ordinal numbers that filters which recurrences to include in the recurrence rule’s frequency.
- [EK_LOSE_FRACTIONAL_SECONDS_DO_NOT_USE](../ek_lose_fractional_seconds_do_not_use%28%29.md): Deprecated. A deprecated function.
