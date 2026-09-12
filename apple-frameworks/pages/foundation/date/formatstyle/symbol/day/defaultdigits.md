> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/day/defaultdigits](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/day/defaultdigits)

# defaultDigits

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Custom format style portraying the minimum number of digits that represents the numeric day of month.

## Declaration

```swift
static var defaultDigits: Date.FormatStyle.Symbol.Day { get }
```

<a id="Discussion"></a>

## Discussion

This style produces `1` for the  first day of the month and `18` for the eighteenth. To force two-digit display in all cases, use [twoDigits](twodigits.md).

## See Also

### Modifying a Day Format

- [ordinalOfDayInMonth](ordinalofdayinmonth.md): Custom format style portraying the ordinal of the day in the month.
- [twoDigits](twodigits.md): Custom format style portraying the two-digit numeric day of month, zero-padded if necessary.
- [julianModified(minimumLength:)](julianmodified%28minimumlength_%29.md): Creates a custom day format style representing the modified Julian day.
