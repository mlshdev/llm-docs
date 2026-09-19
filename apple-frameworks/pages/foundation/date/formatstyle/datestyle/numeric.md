> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/date/formatstyle/datestyle/numeric

# numeric

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A date style with the month, day of month, and year components represented as numeric values.

## Declaration

```swift
static let numeric: Date.FormatStyle.DateStyle
```

<a id="Discussion"></a>

## Discussion

A `numeric` date style represents the date components using numeric values. For example, `10/17/2020`, for locale `en_US`.

## See Also

### Modifying a Date Style

- [abbreviated](abbreviated.md): A date style with some components abbreviated for space-constrained applications.
- [complete](complete.md): A date style with all components represented.
- [long](long.md): A lengthened date style with the full month, day of month, and year components represented.
- [omitted](omitted.md): A date style with no date-related components represented.
