> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/geometryproxycoordinatespace3d](https://developer.apple.com/documentation/swiftui/geometryproxycoordinatespace3d)

# GeometryProxyCoordinateSpace3D

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 26.0+

A representation of a `GeometryProxy3D` which can be used for `CoordinateSpace3D` based conversions.

## Declaration

```swift
struct GeometryProxyCoordinateSpace3D
```

## Topics

### Instance Methods

- [anchored(in:)](geometryproxycoordinatespace3d/anchored%28in_%29.md): Returns a modified `CoordinateSpace3D` offset to match the provided `anchorPoint` in the original coordinate space.

## Relationships

### Conforms To

- [CoordinateSpace3D](https://developer.apple.com/documentation/spatial/coordinatespace3d)

## See Also

### Accessing geometric constructs

- [Axis](axis.md): The horizontal or vertical dimension in a 2D coordinate system.
- [Angle](angle.md): A geometric angle whose value you access in either radians or degrees.
- [UnitPoint](unitpoint.md): A normalized 2D point in a view’s coordinate space.
- [UnitPoint3D](unitpoint3d.md): A normalized 3D point in a view’s coordinate space.
- [Anchor](anchor.md): An opaque value derived from an anchor source and a particular view.
- [DepthAlignmentID](depthalignmentid.md)
- [Alignment3D](alignment3d.md): An alignment in all three axes.
