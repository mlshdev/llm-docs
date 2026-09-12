> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/geometryproxy3d](https://developer.apple.com/documentation/swiftui/geometryproxy3d)

# GeometryProxy3D

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 1.0+

A proxy for access to the size and coordinate space of the container view.

## Declaration

```swift
struct GeometryProxy3D
```

<a id="overview"></a>

## Overview

You can use a proxy for anchor resolution.

## Topics

### Accessing geometry characteristics

- [frame(in:)](geometryproxy3d/frame%28in_%29.md): The container view’s bounds rectangle converted to a defined coordinate space.
- [size](geometryproxy3d/size.md): The size of the container view.
- [safeAreaInsets](geometryproxy3d/safeareainsets.md): The safe area inset of the container view.
- [subscript(\_:)](geometryproxy3d/subscript%28__%29.md): Resolves the value of an anchor to the container view.
- [transform(in:)](geometryproxy3d/transform%28in_%29.md): The container view’s 3D transform converted to a defined coordinate space.

### Instance Methods

- [coordinateSpace3D(for:)](geometryproxy3d/coordinatespace3d%28for_%29.md): Returns a value that can be used for `CoordinateSpace3D` based coordinate conversions.

## See Also

### Measuring a view

- [GeometryReader](geometryreader.md): A container view that defines its content as a function of its own size and coordinate space.
- [GeometryReader3D](geometryreader3d.md): A container view that defines its content as a function of its own size and coordinate space.
- [GeometryProxy](geometryproxy.md): A proxy for access to the size and coordinate space (for anchor resolution) of the container view.
- [coordinateSpace(\_:)](view/coordinatespace%28__%29.md): Assigns a name to the view’s coordinate space, so other code can operate on dimensions like points and sizes relative to the named space.
- [CoordinateSpace](coordinatespace.md): A resolved coordinate space created by the coordinate space protocol.
- [CoordinateSpaceProtocol](coordinatespaceprotocol.md): A frame of reference within the layout system.
- [PhysicalMetric](physicalmetric.md): Provides access to a value in points that corresponds to the specified physical measurement.
- [PhysicalMetricsConverter](physicalmetricsconverter.md): A physical metrics converter provides conversion between point values and their extent in 3D space, in the form of physical length measurements.
