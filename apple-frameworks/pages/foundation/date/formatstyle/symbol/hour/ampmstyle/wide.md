> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/hour/ampmstyle/wide](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/hour/ampmstyle/wide)

# wide

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that represents the wide day period if the locale prefers using day period with hour.

## Declaration

```swift
static let wide: Date.FormatStyle.Symbol.Hour.AMPMStyle
```

<a id="Discussion"></a>

## Discussion

This type represents the hour period in a wide format where appropriate. For example, when used with `defaultDigits`, this style may represent 8 a.m. as  `8` or `8 A.M.,` and 1 p.m. as  `13` or `1 P.M.` With `twoDigits`, this style produce `08` or `08 A.M.` and `13 or 01 P.M.`

## See Also

### Creating AMPM Styles

- [abbreviated](abbreviated.md): A type that specifies the abbreviated day period for when the locale prefers using day period with hour.
- [narrow](narrow.md): A type that specifies the narrow day period if the locale prefers using day period with hour.
- [omitted](omitted.md): A type that hides the day period marker.
