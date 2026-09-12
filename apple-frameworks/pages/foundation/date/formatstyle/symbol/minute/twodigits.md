> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/minute/twodigits](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/minute/twodigits)

# twoDigits

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The custom format style that shows the two-digit numeric minute, zero-padded if necessary.

## Declaration

```swift
static var twoDigits: Date.FormatStyle.Symbol.Minute { get }
```

<a id="Discussion"></a>

## Discussion

For example, this style represents one minute past the hour as `01`, and eighteen past as `18`.

## See Also

### Modifying a Minute

- [defaultDigits](defaultdigits.md): The custom minute format style showing the minimum number of digits that represents the numeric minute.
