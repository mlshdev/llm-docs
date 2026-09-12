> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shape/rect(cornerradius:style:)](https://developer.apple.com/documentation/swiftui/shape/rect(cornerradius:style:))

# rect(cornerRadius:style:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A rectangular shape with rounded corners, aligned inside the frame of the view containing it.

## Declaration

```swift
@export(implementation) static func rect(cornerRadius: CGFloat, style: RoundedCornerStyle = .continuous) -> Self
```

## See Also

### Getting rectangles

- [rect](rect.md): Conforms when `Self` is `Rectangle`. A rectangular shape aligned inside the frame of the view containing it.
- [rect(cornerRadii:style:)](rect%28cornerradii_style_%29.md): Conforms when `Self` is `UnevenRoundedRectangle`. A rectangular shape with rounded corners with different values, aligned inside the frame of the view containing it.
- [rect(corners:isUniform:)](rect%28corners_isuniform_%29.md): Creates a rectangle with the same corner style set on four corners.
- [rect(cornerSize:style:)](rect%28cornersize_style_%29.md): Conforms when `Self` is `RoundedRectangle`. A rectangular shape with rounded corners, aligned inside the frame of the view containing it.
- [rect(topLeadingCorner:topTrailingCorner:bottomLeadingCorner:bottomTrailingCorner:)](rect%28topleadingcorner_toptrailingcorner_bottomleadingcorner_bottomtrailingcorner_%29.md): Creates a rectangle with individual styles for each corner.
- [rect(topLeadingRadius:bottomLeadingRadius:bottomTrailingRadius:topTrailingRadius:style:)](rect%28topleadingradius_bottomleadingradius_bottomtrailingradius_toptrailingradius_style_%29.md): Conforms when `Self` is `UnevenRoundedRectangle`. A rectangular shape with rounded corners with different values, aligned inside the frame of the view containing it.
- [rect(uniformBottomCorners:topLeadingCorner:topTrailingCorner:)](rect%28uniformbottomcorners_topleadingcorner_toptrailingcorner_%29.md): Creates a rectangle with a corner style set on the two bottom corners uniformly, and two other styles for the two top corners respectively.
- [rect(uniformLeadingCorners:topTrailingCorner:bottomTrailingCorner:)](rect%28uniformleadingcorners_toptrailingcorner_bottomtrailingcorner_%29.md): Creates a rectangle with a corner style uniformly set on the two leading corners, and two other styles for the two trailing corners respectively.
- [rect(uniformLeadingCorners:uniformTrailingCorners:)](rect%28uniformleadingcorners_uniformtrailingcorners_%29.md): Creates a rectangle with a corner style uniformly set on the two leading corners, and another style uniformly set on the two trailing corners.
- [rect(uniformTopCorners:bottomLeadingCorner:bottomTrailingCorner:)](rect%28uniformtopcorners_bottomleadingcorner_bottomtrailingcorner_%29.md): Creates a rectangle with a corner style uniformly set on the two top corners, and two other styles for the bottom two corners respectively.
- [rect(uniformTopCorners:uniformBottomCorners:)](rect%28uniformtopcorners_uniformbottomcorners_%29.md): Creates a rectangle with a corner style uniformly set on the two top corners, and another style uniformly set on the two bottom corners.
- [rect(uniformTrailingCorners:topLeadingCorner:bottomLeadingCorner:)](rect%28uniformtrailingcorners_topleadingcorner_bottomleadingcorner_%29.md): Creates a rectangle with a corner style uniformly set on the two trailing corners, and two other styles for the two leading corners respectively.
