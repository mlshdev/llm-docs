> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/day/twodigits](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/day/twodigits)

# twoDigits

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Custom format style portraying the two-digit numeric day of month, zero-padded if necessary.

## Declaration

```swift
static var twoDigits: Date.FormatStyle.Symbol.Day { get }
```

<a id="Discussion"></a>

## Discussion

This style produces `01` for the first day of the month and `18` for the eighteenth. To use single digits when possible, use [defaultDigits](defaultdigits.md).

## See Also

### Modifying a Day Format

- [defaultDigits](defaultdigits.md): Custom format style portraying the minimum number of digits that represents the numeric day of month.
- [ordinalOfDayInMonth](ordinalofdayinmonth.md): Custom format style portraying the ordinal of the day in the month.
- [julianModified(minimumLength:)](julianmodified%28minimumlength_%29.md): Creates a custom day format style representing the modified Julian day.
