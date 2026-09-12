> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/standalonemonth/defaultdigits](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/standalonemonth/defaultdigits)

# defaultDigits

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The custom month format style that shows the minimum number of digits to represent a standalone month.

## Declaration

```swift
static var defaultDigits: Date.FormatStyle.Symbol.StandaloneMonth { get }
```

<a id="Discussion"></a>

## Discussion

This style uses representations like `1` for January and `10` for October.

## See Also

### Modifying a Standalone Month

- [abbreviated](abbreviated.md): The abbreviated representation of a standalone month.
- [narrow](narrow.md): The shortest representation of a standalone month.
- [twoDigits](twodigits.md): The two-digit representation of a standalone month.
- [wide](wide.md): The full representation of a standalone month.
