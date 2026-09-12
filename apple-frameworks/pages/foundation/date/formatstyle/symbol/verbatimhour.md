> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/verbatimhour](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/verbatimhour)

# Date.FormatStyle.Symbol.VerbatimHour

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that specifies a format for the hour in a date format style.

## Declaration

```swift
struct VerbatimHour
```

## Topics

### Modifying a Verbatim Hour

- [defaultDigits(clock:hourCycle:)](verbatimhour/defaultdigits%28clock_hourcycle_%29.md): Creates a custom format style portraying the minimum number of digits that represents the hour.
- [twoDigits(clock:hourCycle:)](verbatimhour/twodigits%28clock_hourcycle_%29.md): Creates a custom format style portraying two digits that represent the hour.

### Supporting Structures

- [Date.FormatStyle.Symbol.VerbatimHour.Clock](verbatimhour/clock.md): A type that specifies a clock representation for the format of an hour.
- [Date.FormatStyle.Symbol.VerbatimHour.HourCycle](verbatimhour/hourcycle.md): A type that specifies the start of a clock representation for the format of a hour.

### Comparing a Verbatim Hour

- [==(\_:\_:)](../../==%28____%29.md): Returns true if the two `Date` values represent the same point in time.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Modifying Date Style Format Symbols

- [Date.FormatStyle.Symbol.CyclicYear](cyclicyear.md): A type that specifies a format for a cyclic year in a date format style.
- [Date.FormatStyle.Symbol.Day](day.md): A type that specifies the format for a day in a date format style.
- [Date.FormatStyle.Symbol.DayOfYear](dayofyear.md): A type that specifies the format for the day of the year in a date format style.
- [Date.FormatStyle.Symbol.DayPeriod](dayperiod.md): A type that specifies a format for the time period in a date format style.
- [Date.FormatStyle.Symbol.Era](era.md): A type that specifies a format for the era in a date format style.
- [Date.FormatStyle.Symbol.Hour](hour.md): A type that specifies a format for the hour in a date format style.
- [Date.FormatStyle.Symbol.Minute](minute.md): A type that specifies the format for the minutes in a date format style.
- [Date.FormatStyle.Symbol.Month](month.md): A type that specifies a format for the month in a date format style.
- [Date.FormatStyle.Symbol.Quarter](quarter.md): A type that specifies the format for the quarter in a date format style.
- [Date.FormatStyle.Symbol.Second](second.md): A type that specifies the format for the seconds in a date format style.
- [Date.FormatStyle.Symbol.SecondFraction](secondfraction.md): A type that specifies the format for the second fraction in a date format style.
- [Date.FormatStyle.Symbol.StandaloneMonth](standalonemonth.md): A type that specifies the format for a standalone month.
- [Date.FormatStyle.Symbol.StandaloneQuarter](standalonequarter.md): A type that specifies the format for a standalone quarter.
- [Date.FormatStyle.Symbol.StandaloneWeekday](standaloneweekday.md): A type that specifies the format for a standalone weekday.
- [Date.FormatStyle.Symbol.TimeZone](timezone.md): A type that specifies a format for the time zone in a date format style.
