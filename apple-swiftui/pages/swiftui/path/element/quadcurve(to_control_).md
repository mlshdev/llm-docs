> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/path/element/quadcurve(to:control:)](https://developer.apple.com/documentation/swiftui/path/element/quadcurve(to:control:))

# Path.Element.quadCurve(to:control:)

**Framework:** SwiftUI  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A quadratic Bézier curve from the previous current point to the given end-point, using the single control point to define the curve.

## Declaration

```swift
case quadCurve(to: CGPoint, control: CGPoint)
```

<a id="discussion"></a>

## Discussion

The end-point of the curve becomes the new current point.

## See Also

### Getting path elements

- [Path.Element.closeSubpath](closesubpath.md): A line from the start point of the current subpath (if any) to the current point, which terminates the subpath.
- [Path.Element.curve(to:control1:control2:)](curve%28to_control1_control2_%29.md): A cubic Bézier curve from the previous current point to the given end-point, using the two control points to define the curve.
- [Path.Element.line(to:)](line%28to_%29.md): A line from the previous current point to the given point, which becomes the new current point.
- [Path.Element.move(to:)](move%28to_%29.md): A path element that terminates the current subpath (without closing it) and defines a new current point.
