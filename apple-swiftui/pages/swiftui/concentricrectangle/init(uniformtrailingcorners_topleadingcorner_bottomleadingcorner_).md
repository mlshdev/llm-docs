> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/concentricrectangle/init(uniformtrailingcorners:topleadingcorner:bottomleadingcorner:)](https://developer.apple.com/documentation/swiftui/concentricrectangle/init(uniformtrailingcorners:topleadingcorner:bottomleadingcorner:))

# init(uniformTrailingCorners:topLeadingCorner:bottomLeadingCorner:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a rectangle with a corner style set on the trailing two corners uniformly, and two other styles for the leading two corners respectively.

## Declaration

```swift
init(uniformTrailingCorners: Edge.Corner.Style = .concentric, topLeadingCorner: Edge.Corner.Style = .concentric, bottomLeadingCorner: Edge.Corner.Style = .concentric)
```

## Parameters

- `uniformTrailingCorners`: The corner style to apply to the trailing two corners uniformly.
- `topLeadingCorner`: The corner style for the top leading corner.
- `bottomLeadingCorner`: The corner style for the bottom leading corner.

<a id="discussion"></a>

## Discussion

For the two trailing corners, the system calculates the radius for each corner first. Then, it selects the largest radius and applies it to each trailing corner to achieve the symmetric look.

## See Also

### Creating a rectangle with uniform trailing corners

- [rect(uniformTrailingCorners:topLeadingCorner:bottomLeadingCorner:)](../shape/rect%28uniformtrailingcorners_topleadingcorner_bottomleadingcorner_%29.md): Creates a rectangle with a corner style uniformly set on the two trailing corners, and two other styles for the two leading corners respectively.
