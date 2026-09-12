> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/datestyle/long](https://developer.apple.com/documentation/foundation/date/formatstyle/datestyle/long)

# long

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A lengthened date style with the full month, day of month, and year components represented.

## Declaration

```swift
static let long: Date.FormatStyle.DateStyle
```

<a id="Discussion"></a>

## Discussion

A `long` date style represents the full date without the day of week in the format. For example, `October 17, 2020`.

## See Also

### Modifying a Date Style

- [abbreviated](abbreviated.md): A date style with some components abbreviated for space-constrained applications.
- [complete](complete.md): A date style with all components represented.
- [numeric](numeric.md): A date style with the month, day of month, and year components represented as numeric values.
- [omitted](omitted.md): A date style with no date-related components represented.
