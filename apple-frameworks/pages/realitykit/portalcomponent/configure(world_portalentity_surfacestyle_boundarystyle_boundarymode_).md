> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalcomponent/configure(world:portalentity:surfacestyle:boundarystyle:boundarymode:)](https://developer.apple.com/documentation/realitykit/portalcomponent/configure(world:portalentity:surfacestyle:boundarystyle:boundarymode:))

# configure(world:portalEntity:surfaceStyle:boundaryStyle:boundaryMode:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Configures an existing pair of entities as a portal and its target world.

## Declaration

```swift
static func configure(world: Entity, portalEntity: Entity, surfaceStyle: PortalComponent.SurfaceStyle, boundaryStyle: PortalComponent.BoundaryStyle = .infinitePlane(), boundaryMode: PortalComponent.BoundaryMode = .none)
```

## Parameters

- `world`: The entity that contains the portal’s content. Place portal world descendants under this entity.
- `portalEntity`: The entity that displays the portal surface in the host scene.
- `surfaceStyle`: The size of the portal surface mesh.
- `boundaryStyle`: The shape of the clipping and crossing boundary. Defaults to [infinitePlane()](boundarystyle/infiniteplane%28%29.md).
- `boundaryMode`: The combination of clipping and crossing behaviors to enable. Defaults to [PortalComponent.BoundaryMode.none](boundarymode/none.md).

<a id="discussion"></a>

## Discussion

This method writes a coordinated set of components onto the two entities you provide. Use it when you already own both entities — for example, when the portal entity holds gestures or other components, or when the world entity is a child of an existing scene.

On the world entity, this method sets:

- [WorldComponent](../worldcomponent.md)

On the portal entity, this method sets:

- [ModelComponent](../modelcomponent.md) with a flat plane mesh sized by `surfaceStyle`, applied with [PortalMaterial](../portalmaterial.md)
- [PortalComponent](../portalcomponent.md) with [clippingMode](clippingmode-swift.property.md) and [crossingMode](crossingmode-swift.property.md) configured from `boundaryStyle` and `boundaryMode`

This method replaces any existing [WorldComponent](../worldcomponent.md), [ModelComponent](../modelcomponent.md), or [PortalComponent](../portalcomponent.md) on the entities. Other components on either entity are preserved.

To create both entities at once, use [makePortal(surfaceStyle:boundaryStyle:boundaryMode:)](makeportal%28surfacestyle_boundarystyle_boundarymode_%29.md) instead.
