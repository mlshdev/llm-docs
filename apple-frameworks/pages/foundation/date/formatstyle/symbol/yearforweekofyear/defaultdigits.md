> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/yearforweekofyear/defaultdigits](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/yearforweekofyear/defaultdigits)

# defaultDigits

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Custom week of the year format style showing the minimum number of digits that represents the year in week-of-year calendars.

## Declaration

```swift
static var defaultDigits: Date.FormatStyle.Symbol.YearForWeekOfYear { get }
```

<a id="Discussion"></a>

## Discussion

This represents week-of-year values like `1` or `18`.

## See Also

### Modifying a Year for Week-of-Year

- [twoDigits](twodigits.md): The custom format style that represents the two-digit numeric year in week-of-year calendars, zero-padded or truncated if necessary.
- [padded(\_:)](padded%28__%29.md): Returns a custom format style that represents the three or more digits of the year in week-of-year calendars, zero-padded if necessary.
