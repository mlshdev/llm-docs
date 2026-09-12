> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalcomponent/boundarystyle/enclosingbox(depth:)](https://developer.apple.com/documentation/realitykit/portalcomponent/boundarystyle/enclosingbox(depth:))

# enclosingBox(depth:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a boundary style that uses a box enclosing the portal surface.

## Declaration

```swift
static func enclosingBox(depth: Float) -> PortalComponent.BoundaryStyle
```

## Parameters

- `depth`: The depth of the box in meters, along the entity’s local Z axis.

<a id="discussion"></a>

## Discussion

The box is centered on the portal entity’s origin. Its X and Y extents come from the accompanying [PortalComponent.SurfaceStyle](../surfacestyle.md); its Z extent is the `depth` you provide.

Use this style for room-sized portals and other bounded portal spaces where content shouldn’t extend infinitely behind the surface. Entities with [PortalCrossingComponent](../../portalcrossingcomponent.md) cross the box’s faces rather than an infinite plane.

This boundary corresponds to [PortalComponent.ClippingMode.volume(\_:)](../clippingmode-swift.enum/volume%28__%29.md) and [PortalComponent.CrossingMode.volume(\_:)](../crossingmode-swift.enum/volume%28__%29.md). To offset the box from the portal entity’s origin, configure those modes directly with a [PortalComponent.Volume](../volume.md) that has a non-zero `position`.
