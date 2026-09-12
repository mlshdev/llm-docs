> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/worldcomponent](https://developer.apple.com/documentation/realitykit/worldcomponent)

# WorldComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A component that defines a portal world.

## Declaration

```swift
struct WorldComponent
```

<a id="overview"></a>

## Overview

This component separates an entity and its descendants from the default world, allowing it to only be visible through a portal.

Use a [PortalComponent](portalcomponent.md) and point its [targetEntity](portalcomponent/targetentity.md) to this entity to render this world.

See [PortalComponent](portalcomponent.md) for information about example usage, clipping, crossing, and lighting.

## Topics

### Initializers

- [init()](worldcomponent/init%28%29.md)

## Relationships

### Conforms To

- [Component](component.md)

## See Also

### Portals

- [PortalMaterial](portalmaterial.md): A material that makes the mesh part a portal to a different world.
- [PortalMaterial.FaceCulling](portalmaterial/faceculling-swift.typealias.md): An alias for the cull mode object that’s appropriate for this material class.
- [PortalMaterial.TriangleFillMode](portalmaterial/trianglefillmode-swift.typealias.md): An alias for the triangle fill mode object that’s appropriate for this material class.
- [PortalComponent](portalcomponent.md): A component that turns mesh surfaces into portals to a different world.
- [PortalCrossingComponent](portalcrossingcomponent.md): A component that allows entities to cross portal boundaries.
