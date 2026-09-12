> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uishape-swift.struct/circle](https://developer.apple.com/documentation/uikit/uishape-swift.struct/circle)

# circle

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Creates a circular shape, with a radius equal to half the length of the frame rectangle’s smallest edge.

## Declaration

```swift
static var circle: UIShape { get }
```

## See Also

### Creating a hover shape

- [rect](rect.md): Creates a rectangular shape.
- [capsule](capsule.md): Creates a capsule shape, a rounded rectangle with a corner radius equal to half the length of the rectangle’s smallest edge.
- [rect(cornerRadius:cornerCurve:maskedCorners:)](rect%28cornerradius_cornercurve_maskedcorners_%29.md): Creates a rectangular shape with rounded corners, using the provided corner radius, corner curve, and rectangle corners.
- [fixedRect(\_:cornerRadius:cornerCurve:maskedCorners:)](fixedrect%28__cornerradius_cornercurve_maskedcorners_%29.md): Creates a fixed rectangular shape that uses the provided rectangle as its shape, regardless of the frame that contains it.
- [UICornerCurve](../uicornercurve.md): The corner curve to apply to a view.
