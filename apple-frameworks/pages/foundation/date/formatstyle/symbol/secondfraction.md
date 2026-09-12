> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/secondfraction](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/secondfraction)

# Date.FormatStyle.Symbol.SecondFraction

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that specifies the format for the second fraction in a date format style.

## Declaration

```swift
struct SecondFraction
```

<a id="overview"></a>

## Overview

The type [Date.FormatStyle.Symbol.SecondFraction](secondfraction.md) includes static factory methods that create custom [Date.FormatStyle.Symbol.SecondFraction](secondfraction.md) objects:

| Factory variable | Description |
| --- | --- |
| [fractional(\_:)](secondfraction/fractional%28__%29.md) | Returns the numerical representation of the fractional component of the second. For example, `8`, `827`. |
| [milliseconds(\_:)](secondfraction/milliseconds%28__%29.md) | Returns the number of milliseconds elapsed in the day. For example, `11122827`. |

To customize the second format in a string representation of a `Date`, use [secondFraction(\_:)](../secondfraction%28__%29.md). The following example shows a variety of [Date.FormatStyle.Symbol.SecondFraction](secondfraction.md) format styles applied to a date.

```swift
let meetingDate = Date() // Feb 9, 2021 at 3:05:41 PM
meetingDate.formatted(Date.FormatStyle().secondFraction(.fractional(3))) // 827
meetingDate.formatted(Date.FormatStyle().secondFraction(.fractional(1))) // 8
meetingDate.formatted(Date.FormatStyle().secondFraction(.milliseconds(4))) // 11122827
```

For more information about formatting dates, see the [Date.FormatStyle](../../formatstyle.md).

## Topics

### Modifying a Second Fraction

- [fractional(\_:)](secondfraction/fractional%28__%29.md): Creates a custom format style representing the fractional seconds component of a date.
- [milliseconds(\_:)](secondfraction/milliseconds%28__%29.md): Creates a custom format style representing the milliseconds elapsed in a day.

### Comparing Second Fractions

- [==(\_:\_:)](../../==%28____%29.md): Returns true if the two `Date` values represent the same point in time.

### Type Properties

- [omitted](secondfraction/omitted.md): The option for not including the symbol in the formatted output.

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
- [Date.FormatStyle.Symbol.StandaloneMonth](standalonemonth.md): A type that specifies the format for a standalone month.
- [Date.FormatStyle.Symbol.StandaloneQuarter](standalonequarter.md): A type that specifies the format for a standalone quarter.
- [Date.FormatStyle.Symbol.StandaloneWeekday](standaloneweekday.md): A type that specifies the format for a standalone weekday.
- [Date.FormatStyle.Symbol.TimeZone](timezone.md): A type that specifies a format for the time zone in a date format style.
- [Date.FormatStyle.Symbol.VerbatimHour](verbatimhour.md): A type that specifies a format for the hour in a date format style.
