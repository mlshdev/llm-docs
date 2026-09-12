> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/weekday](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/weekday)

# Date.FormatStyle.Symbol.Weekday

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that specifies the format for the weekday name in a date format style.

## Declaration

```swift
struct Weekday
```

<a id="overview"></a>

## Overview

The type [Date.FormatStyle.Symbol.Weekday](weekday.md) includes static factory variables that create custom [Date.FormatStyle.Symbol.Weekday](weekday.md) objects:

| Factory variable | Description |
| --- | --- |
| [abbreviated](month/abbreviated.md) | Abbreviated weekday name. For example, `Tue`. |
| [wide](month/wide.md) | Wide weekday name. For example, `Tuesday`. |
| [narrow](month/narrow.md) | Narrow weekday name. For example, `T`. |
| [short](weekday/short.md) | Short weekday name. For example, `Tu`. |
| [oneDigit](weekday/onedigit.md) | Local numeric one-digit day of week. The value depends on the local starting day of the week. For example, this is `2` if Sunday is the first day of the week. |
| [twoDigits](weekday/twodigits.md) | Local numeric two-digit day of week, zero-padded if necessary. The value depends on the local starting day of the week. For example, this is `02` if Sunday is the first day of the week. |

To customize the weekday, name format in a string representation of a `Date`, use [weekday(\_:)](../weekday%28__%29.md). This example shows a variety of [Date.FormatStyle.Symbol.Weekday](weekday.md) format styles applied to a Thursday, using locale `en_US`:

```swift
let meetingDate = Date() // Feb 18, 2021 at 3:00 PM
meetingDate.formatted(Date.FormatStyle().weekday(.abbreviated)) // Thu
meetingDate.formatted(Date.FormatStyle().weekday(.narrow)) // T
meetingDate.formatted(Date.FormatStyle().weekday(.short)) // Th
meetingDate.formatted(Date.FormatStyle().weekday(.wide)) // Thursday
meetingDate.formatted(Date.FormatStyle().weekday(.oneDigit)) // 5
meetingDate.formatted(Date.FormatStyle().weekday(.twoDigits)) // 05
meetingDate.formatted(Date.FormatStyle().weekday()) // Thu
```

If no format is specified as a parameter, the [abbreviated](month/abbreviated.md) static variable is the default format.

For more information about formatting dates, see the [Date.FormatStyle](../../formatstyle.md).

## Topics

### Modifying a Weekday

- [abbreviated](weekday/abbreviated.md): A shortened weekday representation.
- [narrow](weekday/narrow.md): The shortest weekday representation.
- [oneDigit](weekday/onedigit.md): The one-digit representation of a weekday.
- [short](weekday/short.md): The short weekday representation.
- [twoDigits](weekday/twodigits.md): The two-digit representation of a standalone weekday, zero-padded if necessary.
- [wide](weekday/wide.md): The complete weekday representation.

### Comparing a Weekday

- [==(\_:\_:)](../../==%28____%29.md): Returns true if the two `Date` values represent the same point in time.

### Type Properties

- [omitted](weekday/omitted.md): The option for not including the symbol in the formatted output.

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
