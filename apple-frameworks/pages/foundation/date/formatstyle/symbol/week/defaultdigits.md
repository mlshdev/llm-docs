> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/week/defaultdigits](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/week/defaultdigits)

# defaultDigits

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Custom week format style showing the minimum number of digits that represents the numeric week.

## Declaration

```swift
static var defaultDigits: Date.FormatStyle.Symbol.Week { get }
```

<a id="Discussion"></a>

## Discussion

This style represents weeks like `1` or `18`.

## See Also

### Modifying a Week

- [twoDigits](twodigits.md): Custom format style portraying the two-digit numeric week, zero-padded if necessary.
- [weekOfMonth](weekofmonth.md): Custom format style portraying the numeric week of the month.
