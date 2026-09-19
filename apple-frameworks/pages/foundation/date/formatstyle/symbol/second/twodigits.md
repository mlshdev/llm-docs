> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/second/twodigits

# twoDigits

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The custom format style that conveys a two-digit numeric second, zero-padded if necessary.

## Declaration

```swift
static var twoDigits: Date.FormatStyle.Symbol.Second { get }
```

<a id="Discussion"></a>

## Discussion

This style represents the seconds field like `01` or `18`.

## See Also

### Modifying a Second

- [defaultDigits](defaultdigits.md): The custom format style that conveys the minimum number of digits that represents the numeric second.
