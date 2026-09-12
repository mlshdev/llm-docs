> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/day(_:)](https://developer.apple.com/documentation/foundation/date/formatstyle/day(_:))

# day(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the date format style to use the specified day format style.

## Declaration

```swift
func day(_ format: Date.FormatStyle.Symbol.Day = .defaultDigits) -> Date.FormatStyle
```

## Parameters

- `format`: The day format style applied to the date format style.

<a id="return-value"></a>

## Return Value

A date format style modified to include the specified day style.

<a id="Discussion"></a>

## Discussion

Possible values of [Date.FormatStyle.Symbol.Day](symbol/day.md) are [defaultDigits](symbol/day/defaultdigits.md), [ordinalOfDayInMonth](symbol/day/ordinalofdayinmonth.md), and [twoDigits](symbol/day/twodigits.md).

This example shows a variety of [Date.FormatStyle.Symbol.Day](symbol/day.md) formats applied to a date:

```swift
let meetingDate = Date() // Feb 9, 2021 at 3:00 PM
meetingDate.formatted(Date.FormatStyle().day(.defaultDigits)) // 9
meetingDate.formatted(Date.FormatStyle().day(.ordinalOfDayInMonth)) // 2 (second Tuesday of the month)
meetingDate.formatted(Date.FormatStyle().day(.twoDigits)) // 09
meetingDate.formatted(Date.FormatStyle().day()) // 9
```

If you don’t provide a format, the [defaultDigits](symbol/day/defaultdigits.md) static variable is the default format.

For more information about formatting dates, see [Date.FormatStyle](../formatstyle.md).

## See Also

### Specifying the Date Format

- [dayOfYear(\_:)](dayofyear%28__%29.md): Modifies the date format style to use the specified day of the year format style.
- [era(\_:)](era%28__%29.md): Modifies the date format style to use the specified era format style.
- [month(\_:)](month%28__%29.md): Modifies the date format style to use the specified month format style.
- [quarter(\_:)](quarter%28__%29.md): Modifies the date format style to use the specified quarter format style.
- [week(\_:)](week%28__%29.md): Modifies the date format style to use the specified week format style.
- [weekday(\_:)](weekday%28__%29.md): Modifies the date format style to use the specified weekday format style.
- [year(\_:)](year%28__%29.md): Modifies the date format style to use the specified year format style.
- [Date.FormatStyle.DateStyle](datestyle.md): Type that defines date styles varied in length or components included.
