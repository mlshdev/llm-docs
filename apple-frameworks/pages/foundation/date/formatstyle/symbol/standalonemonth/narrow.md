> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/standalonemonth/narrow

# narrow

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The shortest representation of a standalone month.

## Declaration

```swift
static var narrow: Date.FormatStyle.Symbol.StandaloneMonth { get }
```

<a id="Discussion"></a>

## Discussion

This custom format style conveys the shortest representation of a month, like `O` (the letter) for October.

## See Also

### Modifying a Standalone Month

- [abbreviated](abbreviated.md): The abbreviated representation of a standalone month.
- [defaultDigits](defaultdigits.md): The custom month format style that shows the minimum number of digits to represent a standalone month.
- [twoDigits](twodigits.md): The two-digit representation of a standalone month.
- [wide](wide.md): The full representation of a standalone month.
