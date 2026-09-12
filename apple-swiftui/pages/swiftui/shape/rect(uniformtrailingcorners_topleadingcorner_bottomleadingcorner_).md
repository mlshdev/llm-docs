> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shape/rect(uniformtrailingcorners:topleadingcorner:bottomleadingcorner:)](https://developer.apple.com/documentation/swiftui/shape/rect(uniformtrailingcorners:topleadingcorner:bottomleadingcorner:))

# rect(uniformTrailingCorners:topLeadingCorner:bottomLeadingCorner:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a rectangle with a corner style uniformly set on the two trailing corners, and two other styles for the two leading corners respectively.

## Declaration

```swift
@export(implementation) static func rect(uniformTrailingCorners: Edge.Corner.Style, topLeadingCorner: Edge.Corner.Style, bottomLeadingCorner: Edge.Corner.Style) -> Self
```

## Parameters

- `uniformTrailingCorners`: The corner style to apply uniformly to the two trailing corners.
- `topLeadingCorner`: The top leading corner style.
- `bottomLeadingCorner`: The bottom leading corner style.

<a id="discussion"></a>

## Discussion

For the two trailing corners, the system calculates the radius for each corner first. Then, it selects the largest radius and applies it to each trailing corner to achieve the symmetric look.

## See Also

### Creating a rectangle with uniform trailing corners

- [init(uniformTrailingCorners:topLeadingCorner:bottomLeadingCorner:)](../concentricrectangle/init%28uniformtrailingcorners_topleadingcorner_bottomleadingcorner_%29.md): Creates a rectangle with a corner style set on the trailing two corners uniformly, and two other styles for the leading two corners respectively.
