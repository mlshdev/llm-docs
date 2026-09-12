> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalcomponent/makeportal(surfacestyle:boundarystyle:boundarymode:)](https://developer.apple.com/documentation/realitykit/portalcomponent/makeportal(surfacestyle:boundarystyle:boundarymode:))

# makePortal(surfaceStyle:boundaryStyle:boundaryMode:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a portal entity and a world entity, and configures them.

## Declaration

```swift
static func makePortal(surfaceStyle: PortalComponent.SurfaceStyle, boundaryStyle: PortalComponent.BoundaryStyle = .infinitePlane(), boundaryMode: PortalComponent.BoundaryMode = .none) -> PortalComponent.Portal
```

## Parameters

- `surfaceStyle`: The size of the portal surface mesh.
- `boundaryStyle`: The shape of the clipping and crossing boundary. Defaults to [infinitePlane()](boundarystyle/infiniteplane%28%29.md).
- `boundaryMode`: The combination of clipping and crossing behaviors to enable. Defaults to [PortalComponent.BoundaryMode.none](boundarymode/none.md).

<a id="return-value"></a>

## Return Value

A [PortalComponent.Portal](portal.md) containing the new portal entity and world entity.

<a id="discussion"></a>

## Discussion

This is the simplest way to set up a portal. The returned [PortalComponent.Portal](portal.md) value contains a fresh portal entity and a fresh world entity that you add to your scene. To add portal world content, parent it under the returned `worldEntity`.

```swift
let portal = PortalComponent.makePortal(
    surfaceStyle: .init(width: 0.5, height: 0.5),
    boundaryStyle: .infinitePlane(),
    boundaryMode: .clippingAndCrossing
)

content.add(portal.worldEntity)
content.add(portal.portalEntity)
```

To configure entities you already own — for example, a portal entity that has gesture components, or a world entity that’s already in your scene hierarchy — use [configure(world:portalEntity:surfaceStyle:boundaryStyle:boundaryMode:)](configure%28world_portalentity_surfacestyle_boundarystyle_boundarymode_%29.md) instead.
