> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/day/ordinalofdayinmonth](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/day/ordinalofdayinmonth)

# ordinalOfDayInMonth

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Custom format style portraying the ordinal of the day in the month.

## Declaration

```swift
static var ordinalOfDayInMonth: Date.FormatStyle.Symbol.Day { get }
```

<a id="Discussion"></a>

## Discussion

For example, the second Wednesday in July would yield `2`.

## See Also

### Modifying a Day Format

- [defaultDigits](defaultdigits.md): Custom format style portraying the minimum number of digits that represents the numeric day of month.
- [twoDigits](twodigits.md): Custom format style portraying the two-digit numeric day of month, zero-padded if necessary.
- [julianModified(minimumLength:)](julianmodified%28minimumlength_%29.md): Creates a custom day format style representing the modified Julian day.
