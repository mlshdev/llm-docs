> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/week(_:)](https://developer.apple.com/documentation/foundation/date/formatstyle/week(_:))

# week(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the date format style to use the specified week format style.

## Declaration

```swift
func week(_ format: Date.FormatStyle.Symbol.Week = .defaultDigits) -> Date.FormatStyle
```

## Parameters

- `format`: The week format style applied to the date format style.

<a id="return-value"></a>

## Return Value

A date format style modified to include the specified week format style.

<a id="Discussion"></a>

## Discussion

Possible values of [Date.FormatStyle.Symbol.Week](symbol/week.md) include [defaultDigits](symbol/week/defaultdigits.md), [twoDigits](symbol/week/twodigits.md), and [weekOfMonth](symbol/week/weekofmonth.md).

This example shows a variety of [Date.FormatStyle.Symbol.Week](symbol/week.md) format styles applied to a date:

```swift
let meetingDate = Date() // May 3, 2021 at 3:00 PM
meetingDate.formatted(Date.FormatStyle().week(.defaultDigits)) // 19
meetingDate.formatted(Date.FormatStyle().week(.twoDigits)) // 19
meetingDate.formatted(Date.FormatStyle().week(.weekOfMonth)) // 2
meetingDate.formatted(Date.FormatStyle().week()) // 19

```

An incomplete week at the start of a month is the first week of the month `1`. If you don’t provide a format, the [defaultDigits](symbol/week/defaultdigits.md) static variable is the default format.

For more information about formatting dates, see [Date.FormatStyle](../formatstyle.md).

## See Also

### Specifying the Date Format

- [day(\_:)](day%28__%29.md): Modifies the date format style to use the specified day format style.
- [dayOfYear(\_:)](dayofyear%28__%29.md): Modifies the date format style to use the specified day of the year format style.
- [era(\_:)](era%28__%29.md): Modifies the date format style to use the specified era format style.
- [month(\_:)](month%28__%29.md): Modifies the date format style to use the specified month format style.
- [quarter(\_:)](quarter%28__%29.md): Modifies the date format style to use the specified quarter format style.
- [weekday(\_:)](weekday%28__%29.md): Modifies the date format style to use the specified weekday format style.
- [year(\_:)](year%28__%29.md): Modifies the date format style to use the specified year format style.
- [Date.FormatStyle.DateStyle](datestyle.md): Type that defines date styles varied in length or components included.
