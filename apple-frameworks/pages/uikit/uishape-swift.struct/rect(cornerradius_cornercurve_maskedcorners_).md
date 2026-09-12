> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uishape-swift.struct/rect(cornerradius:cornercurve:maskedcorners:)](https://developer.apple.com/documentation/uikit/uishape-swift.struct/rect(cornerradius:cornercurve:maskedcorners:))

# rect(cornerRadius:cornerCurve:maskedCorners:)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Creates a rectangular shape with rounded corners, using the provided corner radius, corner curve, and rectangle corners.

## Declaration

```swift
static func rect(cornerRadius: CGFloat, cornerCurve: UICornerCurve = .automatic, maskedCorners: UIRectCorner = .allCorners) -> UIShape
```

## See Also

### Creating a hover shape

- [rect](rect.md): Creates a rectangular shape.
- [capsule](capsule.md): Creates a capsule shape, a rounded rectangle with a corner radius equal to half the length of the rectangle’s smallest edge.
- [circle](circle.md): Creates a circular shape, with a radius equal to half the length of the frame rectangle’s smallest edge.
- [fixedRect(\_:cornerRadius:cornerCurve:maskedCorners:)](fixedrect%28__cornerradius_cornercurve_maskedcorners_%29.md): Creates a fixed rectangular shape that uses the provided rectangle as its shape, regardless of the frame that contains it.
- [UICornerCurve](../uicornercurve.md): The corner curve to apply to a view.
