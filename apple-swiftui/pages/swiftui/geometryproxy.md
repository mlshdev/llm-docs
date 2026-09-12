> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/geometryproxy](https://developer.apple.com/documentation/swiftui/geometryproxy)

# GeometryProxy

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A proxy for access to the size and coordinate space (for anchor resolution) of the container view.

## Declaration

```swift
struct GeometryProxy
```

## Topics

### Accessing geometry characteristics

- [bounds(of:)](geometryproxy/bounds%28of_%29.md): Returns the given coordinate space’s bounds rectangle, converted to the local coordinate space.
- [concentricCornerRadii](geometryproxy/concentriccornerradii.md): The concentric corner radii for this view’s bounds relative to the container shape.
- [concentricCornerRadii(in:)](geometryproxy/concentriccornerradii%28in_%29.md): Returns the concentric corner radii for the specified frame relative to the container shape.
- [containerCornerInsets](geometryproxy/containercornerinsets.md): Returns the corner insets of the container view. Use this value to adjust the geometry of a view based on the overlapping corner insets of the container view. Corner insets may include pieces of system UI as well as the corner radii for windows and presentations.
- [frame(in:)](geometryproxy/frame%28in_%29.md): Returns the container view’s bounds rectangle, converted to a defined coordinate space.
- [size](geometryproxy/size.md): The size of the container view.
- [safeAreaInsets](geometryproxy/safeareainsets.md): The safe area inset of the container view.
- [subscript(\_:)](geometryproxy/subscript%28__%29.md): Resolves the value of an anchor to the container view.
- [transform(in:)](geometryproxy/transform%28in_%29.md): The container view’s 3D transform converted to a defined coordinate space.

## See Also

### Measuring a view

- [GeometryReader](geometryreader.md): A container view that defines its content as a function of its own size and coordinate space.
- [GeometryReader3D](geometryreader3d.md): A container view that defines its content as a function of its own size and coordinate space.
- [GeometryProxy3D](geometryproxy3d.md): A proxy for access to the size and coordinate space of the container view.
- [coordinateSpace(\_:)](view/coordinatespace%28__%29.md): Assigns a name to the view’s coordinate space, so other code can operate on dimensions like points and sizes relative to the named space.
- [CoordinateSpace](coordinatespace.md): A resolved coordinate space created by the coordinate space protocol.
- [CoordinateSpaceProtocol](coordinatespaceprotocol.md): A frame of reference within the layout system.
- [PhysicalMetric](physicalmetric.md): Provides access to a value in points that corresponds to the specified physical measurement.
- [PhysicalMetricsConverter](physicalmetricsconverter.md): A physical metrics converter provides conversion between point values and their extent in 3D space, in the form of physical length measurements.
