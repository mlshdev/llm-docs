> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/verbatimhour/twodigits(clock:hourcycle:)](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/verbatimhour/twodigits(clock:hourcycle:))

# twoDigits(clock:hourCycle:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a custom format style portraying two digits that represent the hour.

## Declaration

```swift
static func twoDigits(clock: Date.FormatStyle.Symbol.VerbatimHour.Clock, hourCycle: Date.FormatStyle.Symbol.VerbatimHour.HourCycle) -> Date.FormatStyle.Symbol.VerbatimHour
```

## Parameters

- `clock`: The clock representation.
- `hourCycle`: The start of the clock representation.

<a id="return-value"></a>

## Return Value

An hour format style customized according to the specified clock representation and the start of the clock representation.

## See Also

### Modifying a Verbatim Hour

- [defaultDigits(clock:hourCycle:)](defaultdigits%28clock_hourcycle_%29.md): Creates a custom format style portraying the minimum number of digits that represents the hour.
