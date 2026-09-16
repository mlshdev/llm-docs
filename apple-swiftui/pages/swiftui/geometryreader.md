> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/geometryreader

# GeometryReader

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A container view that defines its content as a function of its own size and coordinate space.

## Declaration

```swift
@frozen nonisolated struct GeometryReader<Content> where Content : View
```

<a id="overview"></a>

## Overview

This view returns a flexible preferred size to its parent layout.

## Topics

### Creating a geometry reader

- [init(content:)](geometryreader/init%28content_%29.md)
- [content](geometryreader/content.md)

## Relationships

### Conforms To

- [View](view.md)

## See Also

### Measuring a view

- [GeometryReader3D](geometryreader3d.md): A container view that defines its content as a function of its own size and coordinate space.
- [GeometryProxy](geometryproxy.md): A proxy for access to the size and coordinate space (for anchor resolution) of the container view.
- [reservedRegions(kind:options:layoutDirectionBehavior:)](geometryproxy/reservedregions%28kind_options_layoutdirectionbehavior_%29.md): Beta. Returns an array of reserved regions that match the selection options you specify.
- [ReservedRegion](reservedregion.md): Beta. A region within a view’s coordinate space that another entity reserves.
- [GeometryProxy3D](geometryproxy3d.md): A proxy for access to the size and coordinate space of the container view.
- [coordinateSpace(\_:)](view/coordinatespace%28__%29.md): Assigns a name to the view’s coordinate space, so other code can operate on dimensions like points and sizes relative to the named space.
- [CoordinateSpace](coordinatespace.md): A resolved coordinate space created by the coordinate space protocol.
- [CoordinateSpaceProtocol](coordinatespaceprotocol.md): A frame of reference within the layout system.
- [PhysicalMetric](physicalmetric.md): Provides access to a value in points that corresponds to the specified physical measurement.
- [PhysicalMetricsConverter](physicalmetricsconverter.md): A physical metrics converter provides conversion between point values and their extent in 3D space, in the form of physical length measurements.
