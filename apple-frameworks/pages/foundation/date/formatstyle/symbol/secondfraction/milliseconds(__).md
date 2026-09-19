> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/secondfraction/milliseconds(_:)

# milliseconds(\_:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a custom format style representing the milliseconds elapsed in a day.

## Declaration

```swift
static func milliseconds(_ val: Int) -> Date.FormatStyle.Symbol.SecondFraction
```

## Parameters

- `val`: Length of the string representation of the number of milliseconds elapsed in a day.

<a id="return-value"></a>

## Return Value

Returns the number of milliseconds elapsed in the day.

## See Also

### Modifying a Second Fraction

- [fractional(\_:)](fractional%28__%29.md): Creates a custom format style representing the fractional seconds component of a date.
