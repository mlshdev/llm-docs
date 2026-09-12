> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/hour/ampmstyle/narrow](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/hour/ampmstyle/narrow)

# narrow

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that specifies the narrow day period if the locale prefers using day period with hour.

## Declaration

```swift
static let narrow: Date.FormatStyle.Symbol.Hour.AMPMStyle
```

<a id="Discussion"></a>

## Discussion

This type represents the hour period in a narrow format where appropriate. For example, when used with `defaultDigits`, this style may represent 8 a.m. as `8` or `8a`, and 1 p.m. as `13`, or `1p`. With `twoDigits`, this style produces `08` or `08a`, and `13` or `01p`, respectively.

## See Also

### Creating AMPM Styles

- [abbreviated](abbreviated.md): A type that specifies the abbreviated day period for when the locale prefers using day period with hour.
- [omitted](omitted.md): A type that hides the day period marker.
- [wide](wide.md): A type that represents the wide day period if the locale prefers using day period with hour.
