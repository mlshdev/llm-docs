> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/year(_:)](https://developer.apple.com/documentation/foundation/date/formatstyle/year(_:))

# year(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the date format style to use the specified year format style.

## Declaration

```swift
func year(_ format: Date.FormatStyle.Symbol.Year = .defaultDigits) -> Date.FormatStyle
```

## Parameters

- `format`: The year format style applied to the date format style.

<a id="return-value"></a>

## Return Value

A date format style modified to include the specified year format style.

<a id="Discussion"></a>

## Discussion

Possible values of [Date.FormatStyle.Symbol.Year](symbol/year.md) include [twoDigits](symbol/year/twodigits.md), [padded(\_:)](symbol/year/padded%28__%29.md), [relatedGregorian(minimumLength:)](symbol/year/relatedgregorian%28minimumlength_%29.md), and [extended(minimumLength:)](symbol/year/extended%28minimumlength_%29.md).

This example shows a variety of [Date.FormatStyle.Symbol.Year](symbol/year.md) formats applied to a date:

```swift
let meetingDate = Date() // Feb 9, 2021 at 3:00 PM
meetingDate.formatted(Date.FormatStyle().year(.defaultDigits)) // 2021
meetingDate.formatted(Date.FormatStyle().year(.twoDigits)) // 21
meetingDate.formatted(Date.FormatStyle().year(.padded(6))) // 002021
```

If you don’t provide a format, the [defaultDigits](symbol/day/defaultdigits.md) static variable is the default format.

For more information about formatting dates, see [Date.FormatStyle](../formatstyle.md).

## See Also

### Specifying the Date Format

- [day(\_:)](day%28__%29.md): Modifies the date format style to use the specified day format style.
- [dayOfYear(\_:)](dayofyear%28__%29.md): Modifies the date format style to use the specified day of the year format style.
- [era(\_:)](era%28__%29.md): Modifies the date format style to use the specified era format style.
- [month(\_:)](month%28__%29.md): Modifies the date format style to use the specified month format style.
- [quarter(\_:)](quarter%28__%29.md): Modifies the date format style to use the specified quarter format style.
- [week(\_:)](week%28__%29.md): Modifies the date format style to use the specified week format style.
- [weekday(\_:)](weekday%28__%29.md): Modifies the date format style to use the specified weekday format style.
- [Date.FormatStyle.DateStyle](datestyle.md): Type that defines date styles varied in length or components included.
