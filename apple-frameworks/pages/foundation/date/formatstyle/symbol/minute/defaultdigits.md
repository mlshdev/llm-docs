> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/minute/defaultdigits](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/minute/defaultdigits)

# defaultDigits

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The custom minute format style showing the minimum number of digits that represents the numeric minute.

## Declaration

```swift
static var defaultDigits: Date.FormatStyle.Symbol.Minute { get }
```

<a id="Discussion"></a>

## Discussion

For example, this style represents one minute past the hour as `1`, and eighteen past as `18`.

## See Also

### Modifying a Minute

- [twoDigits](twodigits.md): The custom format style that shows the two-digit numeric minute, zero-padded if necessary.
