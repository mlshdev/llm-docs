> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/day/julianmodified(minimumlength:)](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/day/julianmodified(minimumlength:))

# julianModified(minimumLength:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a custom day format style representing the modified Julian day.

## Declaration

```swift
static func julianModified(minimumLength: Int = 1) -> Date.FormatStyle.Symbol.Day
```

## Parameters

- `minimumLength`: Specifies the minimum number of digits.

<a id="return-value"></a>

## Return Value

The minimum length specifies the minimum number of digits, zero-padded if necessary. For example, `002451334`.

## See Also

### Modifying a Day Format

- [defaultDigits](defaultdigits.md): Custom format style portraying the minimum number of digits that represents the numeric day of month.
- [ordinalOfDayInMonth](ordinalofdayinmonth.md): Custom format style portraying the ordinal of the day in the month.
- [twoDigits](twodigits.md): Custom format style portraying the two-digit numeric day of month, zero-padded if necessary.
