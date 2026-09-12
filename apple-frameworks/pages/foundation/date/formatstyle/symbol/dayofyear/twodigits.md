> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/dayofyear/twodigits](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/dayofyear/twodigits)

# twoDigits

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Custom format style portraying the two-digit numeric day of the year, zero-padded if necessary.

## Declaration

```swift
static var twoDigits: Date.FormatStyle.Symbol.DayOfYear { get }
```

<a id="Discussion"></a>

## Discussion

For example, `01`, `18`, `317`.

## See Also

### Modifying a Day of Year Value

- [defaultDigits](defaultdigits.md): Custom format style portraying the minimum number of digits that represents the numeric day of the year.
- [threeDigits](threedigits.md): Custom format style portraying the three-digit numeric day of the year, zero-padded if necessary.
