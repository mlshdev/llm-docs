> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/hour/ampmstyle/omitted](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/hour/ampmstyle/omitted)

# omitted

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that hides the day period marker.

## Declaration

```swift
static let omitted: Date.FormatStyle.Symbol.Hour.AMPMStyle
```

<a id="Discussion"></a>

## Discussion

This type represents the hour period numerically only. For example, `8` (for 8 a.m.) or `1` (for 1 p.m.) if used with `defaultDigits`, and `08` or `01` if used with `twoDigits`.

## See Also

### Creating AMPM Styles

- [abbreviated](abbreviated.md): A type that specifies the abbreviated day period for when the locale prefers using day period with hour.
- [narrow](narrow.md): A type that specifies the narrow day period if the locale prefers using day period with hour.
- [wide](wide.md): A type that represents the wide day period if the locale prefers using day period with hour.
