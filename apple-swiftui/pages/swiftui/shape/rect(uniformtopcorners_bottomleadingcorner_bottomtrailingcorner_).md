> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shape/rect(uniformtopcorners:bottomleadingcorner:bottomtrailingcorner:)](https://developer.apple.com/documentation/swiftui/shape/rect(uniformtopcorners:bottomleadingcorner:bottomtrailingcorner:))

# rect(uniformTopCorners:bottomLeadingCorner:bottomTrailingCorner:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a rectangle with a corner style uniformly set on the two top corners, and two other styles for the bottom two corners respectively.

## Declaration

```swift
@export(implementation) static func rect(uniformTopCorners: Edge.Corner.Style, bottomLeadingCorner: Edge.Corner.Style, bottomTrailingCorner: Edge.Corner.Style) -> Self
```

## Parameters

- `uniformTopCorners`: The corner style to apply uniformly to the two top corners.
- `bottomLeadingCorner`: The bottom leading corner style.
- `bottomTrailingCorner`: The bottom trailing corner style.

<a id="discussion"></a>

## Discussion

For the two top corners, the system calculates the radius for each corner first. Then, it selects the largest radius and applies it to each top corner to achieve the symmetric look.

## See Also

### Creating a rectangle with uniform top corners

- [init(uniformTopCorners:bottomLeadingCorner:bottomTrailingCorner:)](../concentricrectangle/init%28uniformtopcorners_bottomleadingcorner_bottomtrailingcorner_%29.md): Creates a rectangle with a corner style set on the top two corners uniformly, and two other styles for the bottom two corners respectively.
