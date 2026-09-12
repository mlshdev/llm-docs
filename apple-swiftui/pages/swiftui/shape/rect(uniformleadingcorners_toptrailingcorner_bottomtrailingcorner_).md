> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shape/rect(uniformleadingcorners:toptrailingcorner:bottomtrailingcorner:)](https://developer.apple.com/documentation/swiftui/shape/rect(uniformleadingcorners:toptrailingcorner:bottomtrailingcorner:))

# rect(uniformLeadingCorners:topTrailingCorner:bottomTrailingCorner:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a rectangle with a corner style uniformly set on the two leading corners, and two other styles for the two trailing corners respectively.

## Declaration

```swift
@export(implementation) static func rect(uniformLeadingCorners: Edge.Corner.Style, topTrailingCorner: Edge.Corner.Style, bottomTrailingCorner: Edge.Corner.Style) -> Self
```

## Parameters

- `uniformLeadingCorners`: The corner style to apply uniformly to the two leading corners.
- `topTrailingCorner`: The top trailing corner style.
- `bottomTrailingCorner`: The bottom trailing corner style.

<a id="discussion"></a>

## Discussion

For the two leading corners, the system calculates the radius for each corner first. Then, it selects the largest radius and applies it to each leading corner to achieve the symmetric look.

## See Also

### Creating a rectangle with uniform leading corners

- [init(uniformLeadingCorners:topTrailingCorner:bottomTrailingCorner:)](../concentricrectangle/init%28uniformleadingcorners_toptrailingcorner_bottomtrailingcorner_%29.md): Creates a rectangle with a corner style set on the leading two corners uniformly, and two other styles for the trailing two corners respectively.
