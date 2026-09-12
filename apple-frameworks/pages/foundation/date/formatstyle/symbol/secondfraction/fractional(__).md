> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/secondfraction/fractional(_:)](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/secondfraction/fractional(_:))

# fractional(\_:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a custom format style representing the fractional seconds component of a date.

## Declaration

```swift
static func fractional(_ val: Int) -> Date.FormatStyle.Symbol.SecondFraction
```

## Parameters

- `val`: Length of the string representation of the fractional seconds component.

<a id="return-value"></a>

## Return Value

Returns the numerical representation of the fractional component of the second.

## See Also

### Modifying a Second Fraction

- [milliseconds(\_:)](milliseconds%28__%29.md): Creates a custom format style representing the milliseconds elapsed in a day.
