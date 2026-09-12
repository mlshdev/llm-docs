> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/concentricrectangle/init(uniformtopcorners:bottomleadingcorner:bottomtrailingcorner:)](https://developer.apple.com/documentation/swiftui/concentricrectangle/init(uniformtopcorners:bottomleadingcorner:bottomtrailingcorner:))

# init(uniformTopCorners:bottomLeadingCorner:bottomTrailingCorner:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a rectangle with a corner style set on the top two corners uniformly, and two other styles for the bottom two corners respectively.

## Declaration

```swift
init(uniformTopCorners: Edge.Corner.Style = .concentric, bottomLeadingCorner: Edge.Corner.Style = .concentric, bottomTrailingCorner: Edge.Corner.Style = .concentric)
```

## Parameters

- `uniformTopCorners`: The corner style to apply to the top two corners uniformly.
- `bottomLeadingCorner`: The corner style for the bottom leading corner.
- `bottomTrailingCorner`: The corner style for the bottom trailing corner.

<a id="discussion"></a>

## Discussion

For the two top corners, the system calculates the radius for each corner first. Then, it selects the largest radius and applies it to each top corner to achieve the symmetric look.

## See Also

### Creating a rectangle with uniform top corners

- [rect(uniformTopCorners:bottomLeadingCorner:bottomTrailingCorner:)](../shape/rect%28uniformtopcorners_bottomleadingcorner_bottomtrailingcorner_%29.md): Creates a rectangle with a corner style uniformly set on the two top corners, and two other styles for the bottom two corners respectively.
