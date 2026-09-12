> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/yearforweekofyear](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/yearforweekofyear)

# Date.FormatStyle.Symbol.YearForWeekOfYear

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that specifies the format for a year in week-of-year calendars when you parse a string with a date format string.

## Declaration

```swift
struct YearForWeekOfYear
```

## Topics

### Modifying a Year for Week-of-Year

- [defaultDigits](yearforweekofyear/defaultdigits.md): Custom week of the year format style showing the minimum number of digits that represents the year in week-of-year calendars.
- [twoDigits](yearforweekofyear/twodigits.md): The custom format style that represents the two-digit numeric year in week-of-year calendars, zero-padded or truncated if necessary.
- [padded(\_:)](yearforweekofyear/padded%28__%29.md): Returns a custom format style that represents the three or more digits of the year in week-of-year calendars, zero-padded if necessary.

### Comparing a Year for Week-of-Year

- [==(\_:\_:)](../../==%28____%29.md): Returns true if the two `Date` values represent the same point in time.

### Type Properties

- [omitted](yearforweekofyear/omitted.md): The option for not including the symbol in the formatted output.

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
