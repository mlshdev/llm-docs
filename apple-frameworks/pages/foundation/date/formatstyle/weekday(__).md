> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/weekday(_:)](https://developer.apple.com/documentation/foundation/date/formatstyle/weekday(_:))

# weekday(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the date format style to use the specified weekday format style.

## Declaration

```swift
func weekday(_ format: Date.FormatStyle.Symbol.Weekday = .abbreviated) -> Date.FormatStyle
```

## Parameters

- `format`: The weekday format style applied to the date format style.

<a id="return-value"></a>

## Return Value

A date format style modified to include the specified week format style.

<a id="Discussion"></a>

## Discussion

Possible values of [Date.FormatStyle.Symbol.Weekday](symbol/weekday.md) include [abbreviated](symbol/weekday/abbreviated.md), [narrow](symbol/weekday/narrow.md), [oneDigit](symbol/weekday/onedigit.md), [short](symbol/weekday/short.md), [twoDigits](symbol/weekday/twodigits.md), and [wide](symbol/weekday/wide.md).

## See Also

### Specifying the Date Format

- [day(\_:)](day%28__%29.md): Modifies the date format style to use the specified day format style.
- [dayOfYear(\_:)](dayofyear%28__%29.md): Modifies the date format style to use the specified day of the year format style.
- [era(\_:)](era%28__%29.md): Modifies the date format style to use the specified era format style.
- [month(\_:)](month%28__%29.md): Modifies the date format style to use the specified month format style.
- [quarter(\_:)](quarter%28__%29.md): Modifies the date format style to use the specified quarter format style.
- [week(\_:)](week%28__%29.md): Modifies the date format style to use the specified week format style.
- [year(\_:)](year%28__%29.md): Modifies the date format style to use the specified year format style.
- [Date.FormatStyle.DateStyle](datestyle.md): Type that defines date styles varied in length or components included.
