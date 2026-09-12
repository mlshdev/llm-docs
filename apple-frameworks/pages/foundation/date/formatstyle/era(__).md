> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/era(_:)](https://developer.apple.com/documentation/foundation/date/formatstyle/era(_:))

# era(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the date format style to use the specified era format style.

## Declaration

```swift
func era(_ format: Date.FormatStyle.Symbol.Era = .abbreviated) -> Date.FormatStyle
```

## Parameters

- `format`: The era format style applied to the date format style.

<a id="return-value"></a>

## Return Value

A date format style modified to include the specified era style.

<a id="Discussion"></a>

## Discussion

Possible values of [Date.FormatStyle.Symbol.Era](symbol/era.md) include [abbreviated](symbol/era/abbreviated.md), [narrow](symbol/era/narrow.md), and [wide](symbol/era/wide.md).

This example shows a variety of [Date.FormatStyle.Symbol.Era](symbol/era.md) format styles applied to a date:

```swift
let meetingDate = Date() // Feb 9, 2021 at 3:00 PM
meetingDate.formatted(Date.FormatStyle().era(.abbreviated)) // AD
meetingDate.formatted(Date.FormatStyle().era(.narrow)) // A
meetingDate.formatted(Date.FormatStyle().era(.wide)) // Anno Domini
meetingDate.formatted(Date.FormatStyle().era()) // AD
```

If you don’t provide a format, the [abbreviated](symbol/era/abbreviated.md) static variable is the default format.

For more information about formatting dates, see [Date.FormatStyle](../formatstyle.md).

## See Also

### Specifying the Date Format

- [day(\_:)](day%28__%29.md): Modifies the date format style to use the specified day format style.
- [dayOfYear(\_:)](dayofyear%28__%29.md): Modifies the date format style to use the specified day of the year format style.
- [month(\_:)](month%28__%29.md): Modifies the date format style to use the specified month format style.
- [quarter(\_:)](quarter%28__%29.md): Modifies the date format style to use the specified quarter format style.
- [week(\_:)](week%28__%29.md): Modifies the date format style to use the specified week format style.
- [weekday(\_:)](weekday%28__%29.md): Modifies the date format style to use the specified weekday format style.
- [year(\_:)](year%28__%29.md): Modifies the date format style to use the specified year format style.
- [Date.FormatStyle.DateStyle](datestyle.md): Type that defines date styles varied in length or components included.
