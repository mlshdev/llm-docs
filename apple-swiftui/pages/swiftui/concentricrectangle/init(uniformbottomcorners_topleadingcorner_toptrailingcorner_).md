> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/concentricrectangle/init(uniformbottomcorners:topleadingcorner:toptrailingcorner:)](https://developer.apple.com/documentation/swiftui/concentricrectangle/init(uniformbottomcorners:topleadingcorner:toptrailingcorner:))

# init(uniformBottomCorners:topLeadingCorner:topTrailingCorner:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a rectangle with a corner style set on the bottom two corners uniformly, and two other styles for the top two corners respectively.

## Declaration

```swift
init(uniformBottomCorners: Edge.Corner.Style = .concentric, topLeadingCorner: Edge.Corner.Style = .concentric, topTrailingCorner: Edge.Corner.Style = .concentric)
```

## Parameters

- `uniformBottomCorners`: The corner style to apply to the bottom two corners uniformly.
- `topLeadingCorner`: The corner style for the top leading corner.
- `topTrailingCorner`: The corner style for the top trailing corner.

<a id="discussion"></a>

## Discussion

For the two bottom corners, the system calculates the radius for each corner first. Then, it selects the largest radius and applies it to each bottom corner to achieve the symmetric look.

## See Also

### Creating a rectangle with uniform bottom corners

- [rect(uniformBottomCorners:topLeadingCorner:topTrailingCorner:)](../shape/rect%28uniformbottomcorners_topleadingcorner_toptrailingcorner_%29.md): Creates a rectangle with a corner style set on the two bottom corners uniformly, and two other styles for the two top corners respectively.
