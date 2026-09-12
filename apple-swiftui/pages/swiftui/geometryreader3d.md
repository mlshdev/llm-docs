> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/geometryreader3d](https://developer.apple.com/documentation/swiftui/geometryreader3d)

# GeometryReader3D

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 1.0+

A container view that defines its content as a function of its own size and coordinate space.

## Declaration

```swift
@frozen nonisolated struct GeometryReader3D<Content> where Content : View
```

<a id="overview"></a>

## Overview

This view returns a flexible preferred size to its own container view.

This container differs from [GeometryReader](geometryreader.md) in that it also reads available depth, and thus also returns a flexible preferred depth to its parent layout. Use the 3D version only in situations where you need to read depth, because it affects depth layout when used in a container like a [ZStack](zstack.md).

## Topics

### Creating a geometry reader

- [init(content:)](geometryreader3d/init%28content_%29.md)
- [content](geometryreader3d/content.md)

## Relationships

### Conforms To

- [View](view.md)

## See Also

### Measuring a view

- [GeometryReader](geometryreader.md): A container view that defines its content as a function of its own size and coordinate space.
- [GeometryProxy](geometryproxy.md): A proxy for access to the size and coordinate space (for anchor resolution) of the container view.
- [GeometryProxy3D](geometryproxy3d.md): A proxy for access to the size and coordinate space of the container view.
- [coordinateSpace(\_:)](view/coordinatespace%28__%29.md): Assigns a name to the view’s coordinate space, so other code can operate on dimensions like points and sizes relative to the named space.
- [CoordinateSpace](coordinatespace.md): A resolved coordinate space created by the coordinate space protocol.
- [CoordinateSpaceProtocol](coordinatespaceprotocol.md): A frame of reference within the layout system.
- [PhysicalMetric](physicalmetric.md): Provides access to a value in points that corresponds to the specified physical measurement.
- [PhysicalMetricsConverter](physicalmetricsconverter.md): A physical metrics converter provides conversion between point values and their extent in 3D space, in the form of physical length measurements.
