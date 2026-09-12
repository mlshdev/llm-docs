> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/yearforweekofyear/padded(_:)](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/yearforweekofyear/padded(_:))

# padded(\_:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a custom format style that represents the three or more digits of the year in week-of-year calendars, zero-padded if necessary.

## Declaration

```swift
static func padded(_ length: Int) -> Date.FormatStyle.Symbol.YearForWeekOfYear
```

## Parameters

- `length`: The length of the string to display a calendar year.

<a id="return-value"></a>

## Return Value

A custom year format style that portrays the year of a week of year calendar system with the provided length.

## See Also

### Modifying a Year for Week-of-Year

- [defaultDigits](defaultdigits.md): Custom week of the year format style showing the minimum number of digits that represents the year in week-of-year calendars.
- [twoDigits](twodigits.md): The custom format style that represents the two-digit numeric year in week-of-year calendars, zero-padded or truncated if necessary.
