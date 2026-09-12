> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/datestyle/complete](https://developer.apple.com/documentation/foundation/date/formatstyle/datestyle/complete)

# complete

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A date style with all components represented.

## Declaration

```swift
static let complete: Date.FormatStyle.DateStyle
```

<a id="Discussion"></a>

## Discussion

A `complete` date style represents the day, month, day of month, and year components in the format. For example, `Saturday, October 17, 2020`,` `for locale `en_US`.

## See Also

### Modifying a Date Style

- [abbreviated](abbreviated.md): A date style with some components abbreviated for space-constrained applications.
- [long](long.md): A lengthened date style with the full month, day of month, and year components represented.
- [numeric](numeric.md): A date style with the month, day of month, and year components represented as numeric values.
- [omitted](omitted.md): A date style with no date-related components represented.
