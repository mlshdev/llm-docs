> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/month](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/month)

# Date.FormatStyle.Symbol.Month

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that specifies a format for the month in a date format style.

## Declaration

```swift
struct Month
```

<a id="overview"></a>

## Overview

The type [Date.FormatStyle.Symbol.Month](month.md) includes static factory variables that create custom [Date.FormatStyle.Symbol.Month](month.md) objects:

| Factory variable | Description |
| --- | --- |
| [abbreviated](month/abbreviated.md) | Abbreviated month name. For example, `Sep`. |
| [defaultDigits](month/defaultdigits.md) | Minimum number of digits that represents the numeric month. For example, `9`, `12`. |
| [narrow](month/narrow.md) | Narrow month name. For example, `S`. |
| [twoDigits](month/twodigits.md) | Two-digit numeric month, zero-padded if necessary. For example, `09`, `12`. |
| [wide](month/wide.md) | Wide month name. For example, `September`. |

To customize the month format in a string representation of a `Date`, use [month(\_:)](../month%28__%29.md). The following example shows a variety of [Date.FormatStyle.Symbol.Month](month.md) format styles applied to a date.

```swift
let meetingDate = Date() // Feb 9, 2021 at 3:00 PM
meetingDate.formatted(Date.FormatStyle().month(.abbreviated)) // Feb
meetingDate.formatted(Date.FormatStyle().month(.narrow)) // F
meetingDate.formatted(Date.FormatStyle().month(.defaultDigits)) // 2
meetingDate.formatted(Date.FormatStyle().month(.twoDigits)) // 02
meetingDate.formatted(Date.FormatStyle().month(.wide)) // February
meetingDate.formatted(Date.FormatStyle().month()) // Feb
```

If no format is specified as a parameter, the [abbreviated](month/abbreviated.md) static variable is the default format.

For more information about formatting dates, see the [Date.FormatStyle](../../formatstyle.md).

## Topics

### Modifying a Month

- [abbreviated](month/abbreviated.md): The abbreviated representation of a month.
- [defaultDigits](month/defaultdigits.md): Custom month format style showing the minimum number of digits that represents the numeric month.
- [narrow](month/narrow.md): The shortest representation of a month.
- [twoDigits](month/twodigits.md): The custom month format style that uses two digits to represent the numeric month.
- [wide](month/wide.md): The full representation of a month.

### Comparing a Month

- [==(\_:\_:)](../../==%28____%29.md): Returns true if the two `Date` values represent the same point in time.

### Type Properties

- [omitted](month/omitted.md): The option for not including the symbol in the formatted output.

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
- [Date.FormatStyle.Symbol.Quarter](quarter.md): A type that specifies the format for the quarter in a date format style.
- [Date.FormatStyle.Symbol.Second](second.md): A type that specifies the format for the seconds in a date format style.
- [Date.FormatStyle.Symbol.SecondFraction](secondfraction.md): A type that specifies the format for the second fraction in a date format style.
- [Date.FormatStyle.Symbol.StandaloneMonth](standalonemonth.md): A type that specifies the format for a standalone month.
- [Date.FormatStyle.Symbol.StandaloneQuarter](standalonequarter.md): A type that specifies the format for a standalone quarter.
- [Date.FormatStyle.Symbol.StandaloneWeekday](standaloneweekday.md): A type that specifies the format for a standalone weekday.
- [Date.FormatStyle.Symbol.TimeZone](timezone.md): A type that specifies a format for the time zone in a date format style.
- [Date.FormatStyle.Symbol.VerbatimHour](verbatimhour.md): A type that specifies a format for the hour in a date format style.
