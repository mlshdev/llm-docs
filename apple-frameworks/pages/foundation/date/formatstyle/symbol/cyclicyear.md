> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/cyclicyear](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/cyclicyear)

# Date.FormatStyle.Symbol.CyclicYear

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that specifies a format for a cyclic year in a date format style.

## Declaration

```swift
struct CyclicYear
```

<a id="overview"></a>

## Overview

Calendars such as the Chinese lunar calendar and Hindu calendars use 60-year cycles of year names. If the calendar doesn’t provide cyclic year-name data, or if the year value to format is out of the range of years for which the system provides cyclic name data, then the formatting is numeric, as in [Date.FormatStyle.Symbol.Year](year.md).

The [Date.FormatStyle.Symbol.CyclicYear](cyclicyear.md) type includes static factory variables that create custom [Date.FormatStyle.Symbol.CyclicYear](cyclicyear.md) objects:

| Factory variable | Description |
| --- | --- |
| [abbreviated](cyclicyear/abbreviated.md) | A shortened representation of the cyclic year appropriate for space-constrained applications. |
| [narrow](cyclicyear/narrow.md) | The shortest representation of the cyclic year. |
| [wide](cyclicyear/wide.md) | The full representation of the cyclic year. |

If no format is specified as a parameter, the [abbreviated](cyclicyear/abbreviated.md) static variable is the default format.

For more information about formatting dates, see [Date.FormatStyle](../../formatstyle.md).

## Topics

### Modifying a Cyclic Year

- [abbreviated](cyclicyear/abbreviated.md): Custom cyclic year format style that portrays a shortened cyclic year.
- [narrow](cyclicyear/narrow.md): Custom cyclic year format style that portrays the shortest representation of a cyclic year.
- [wide](cyclicyear/wide.md): Custom cyclic year format style that portrays a complete representation of a cyclic year.

### Comparing Cyclic Years

- [==(\_:\_:)](../../==%28____%29.md): Returns true if the two `Date` values represent the same point in time.

### Type Properties

- [omitted](cyclicyear/omitted.md): The option for not including the symbol in the formatted output.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Modifying Date Style Format Symbols

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
- [Date.FormatStyle.Symbol.VerbatimHour](verbatimhour.md): A type that specifies a format for the hour in a date format style.
