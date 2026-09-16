> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/reservedregion

# ReservedRegion

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

A region within a view’s coordinate space that another entity reserves.

## Declaration

```swift
struct ReservedRegion
```

<a id="overview"></a>

## Overview

A reserved region indicates an area within a view’s coordinate space that an entity, such as the device hardware, reserves. Arrange the view’s content to account for this region. Each region describes a frame, margins, active state, and an identifier.

There are two categories of reserved regions:

- **[occlusion](reservedregion/kind-swift.struct/occlusion.md)**: An area where an element, such as the Dynamic Island, a camera, or window controls, occludes content.
- **[division](reservedregion/kind-swift.struct/division.md)**: An area where content splits into separate regions, such as at the fold of a hinge.

Read reserved regions using the [reservedRegions(kind:options:layoutDirectionBehavior:)](geometryproxy/reservedregions%28kind_options_layoutdirectionbehavior_%29.md) method, which returns all of the reserved regions that currently intersect your view regardless of whether they are currently active.

In the example below, a custom [Layout](layout.md) uses the reserved regions from a [GeometryProxy](geometryproxy.md) instance to handle positioning its subviews away from any regions that intersect it.

```swift
GeometryReader { proxy in
    RegionAvoidingLayout(
        regions: proxy.reservedRegions(kind: .occlusion)
    ) {
        ForEach(items) { item in
            ItemView(item)
        }
    }
}    
```

When you manually position your content to incorporate reserved regions, consider right-to-left layout directions. Reserved regions are typically in a fixed coordinate space; the absolute location of a device’s camera doesn’t flip depending on a person’s preferred language. By default, the system mirrors the geometry of these regions automatically before it provides them to SwiftUI APIs.

For example, a [Layout](layout.md) automatically flips the geometry of the subviews you place. By mirroring the geometry of the reserved regions, your layout doesn’t need to account for the layout direction when determining whether a particular subview intersects the region.

There may be cases when you need to make more manual adjustments for the frames of reserved regions for right-to-left layout directions. In these cases, you can provide the [LayoutDirectionBehavior.fixed](layoutdirectionbehavior/fixed.md) value to the method and the system doesn’t mirror the frames of the regions.

## Topics

### Getting region details

- [id](reservedregion/id-swift.property.md): Beta. The identifier of the region.
- [ReservedRegion.ID](reservedregion/id-swift.struct.md): Beta. An identifier for a reserved region.
- [frame](reservedregion/frame.md): Beta. The rect of the region in the view’s coordinate space, including the margins.
- [isActive](reservedregion/isactive.md): Beta. Whether the region is active.
- [kind](reservedregion/kind-swift.property.md): Beta. The kind of the region.
- [ReservedRegion.Kind](reservedregion/kind-swift.struct.md): Beta. A kind of reserved region.
- [margins](reservedregion/margins.md): Beta. The margins included in the frame around the rect for interactive content.

### Querying reserved regions

- [ReservedRegion.QueryOptions](reservedregion/queryoptions.md): Beta. Options for querying reserved regions.

### Default Implementations

- [Identifiable Implementations](reservedregion/identifiable-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Measuring a view

- [GeometryReader](geometryreader.md): A container view that defines its content as a function of its own size and coordinate space.
- [GeometryReader3D](geometryreader3d.md): A container view that defines its content as a function of its own size and coordinate space.
- [GeometryProxy](geometryproxy.md): A proxy for access to the size and coordinate space (for anchor resolution) of the container view.
- [reservedRegions(kind:options:layoutDirectionBehavior:)](geometryproxy/reservedregions%28kind_options_layoutdirectionbehavior_%29.md): Beta. Returns an array of reserved regions that match the selection options you specify.
- [GeometryProxy3D](geometryproxy3d.md): A proxy for access to the size and coordinate space of the container view.
- [coordinateSpace(\_:)](view/coordinatespace%28__%29.md): Assigns a name to the view’s coordinate space, so other code can operate on dimensions like points and sizes relative to the named space.
- [CoordinateSpace](coordinatespace.md): A resolved coordinate space created by the coordinate space protocol.
- [CoordinateSpaceProtocol](coordinatespaceprotocol.md): A frame of reference within the layout system.
- [PhysicalMetric](physicalmetric.md): Provides access to a value in points that corresponds to the specified physical measurement.
- [PhysicalMetricsConverter](physicalmetricsconverter.md): A physical metrics converter provides conversion between point values and their extent in 3D space, in the form of physical length measurements.
