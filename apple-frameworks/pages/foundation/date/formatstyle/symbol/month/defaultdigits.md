> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/month/defaultdigits

# defaultDigits

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Custom month format style showing the minimum number of digits that represents the numeric month.

## Declaration

```swift
static var defaultDigits: Date.FormatStyle.Symbol.Month { get }
```

<a id="Discussion"></a>

## Discussion

This style represents the month like `1` or `12`.

## See Also

### Modifying a Month

- [abbreviated](abbreviated.md): The abbreviated representation of a month.
- [narrow](narrow.md): The shortest representation of a month.
- [twoDigits](twodigits.md): The custom month format style that uses two digits to represent the numeric month.
- [wide](wide.md): The full representation of a month.
