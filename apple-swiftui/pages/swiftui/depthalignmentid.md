> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/depthalignmentid

# DepthAlignmentID

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** visionOS 1.0+

A type that defines a custom depth alignment guide.

## Declaration

```swift
protocol DepthAlignmentID
```

<a id="overview"></a>

## Overview

SwiftUI provides guides for the front, center, and back of a view. Conform to this protocol when you need to align views on some other plane along the depth axis, the way [AlignmentID](alignmentid.md) lets you add guides across width and height.

Implement [defaultValue(in:)](depthalignmentid/defaultvalue%28in_%29.md) to say where the guide falls in a view that does not set it, then wrap the type in a [DepthAlignment](depthalignment.md) so containers can align to it:

```swift
private enum FrontThird: DepthAlignmentID {
    static func defaultValue(in context: ViewDimensions3D) -> CGFloat {
        context.size.depth / 3
    }
}

extension DepthAlignment {
    static let frontThird = DepthAlignment(FrontThird.self)
}
```

A layout then aligns its subviews on the new guide, and any subview can override the default with [alignmentGuide(\_:computeValue:)](view/alignmentguide%28__computevalue_%29.md):

```swift
let shelf = HStackLayout().depthAlignment(.frontThird)
shelf {
    Model3D(named: "lamp")
    Model3D(named: "table")
        .alignmentGuide(.frontThird) { context in
            context.size.depth / 2
        }
}
```

## Topics

### Type Methods

- [defaultValue(in:)](depthalignmentid/defaultvalue%28in_%29.md): Calculates a default value for the corresponding guide in the specified context.

## See Also

### Accessing geometric constructs

- [Axis](axis.md): The horizontal or vertical dimension in a 2D coordinate system.
- [Angle](angle.md): A geometric angle whose value you access in either radians or degrees.
- [UnitPoint](unitpoint.md): A normalized 2D point in a view’s coordinate space.
- [UnitPoint3D](unitpoint3d.md): A normalized 3D point in a view’s coordinate space.
- [Anchor](anchor.md): An opaque value derived from an anchor source and a particular view.
- [Alignment3D](alignment3d.md): An alignment in all three axes.
- [GeometryProxyCoordinateSpace3D](geometryproxycoordinatespace3d.md): A representation of a `GeometryProxy3D` which can be used for `CoordinateSpace3D` based conversions.
