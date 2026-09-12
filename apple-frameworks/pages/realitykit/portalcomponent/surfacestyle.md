> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalcomponent/surfacestyle](https://developer.apple.com/documentation/realitykit/portalcomponent/surfacestyle)

# PortalComponent.SurfaceStyle

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The size of the flat plane mesh that RealityKit generates for a portal.

## Declaration

```swift
struct SurfaceStyle
```

<a id="overview"></a>

## Overview

The factory entry points [makePortal(surfaceStyle:boundaryStyle:boundaryMode:)](makeportal%28surfacestyle_boundarystyle_boundarymode_%29.md) and [configure(world:portalEntity:surfaceStyle:boundaryStyle:boundaryMode:)](configure%28world_portalentity_surfacestyle_boundarystyle_boundarymode_%29.md) use this value to build a [ModelComponent](../modelcomponent.md) whose mesh is a plane on the entity’s local XY plane, centered at the entity’s origin.

The portal mesh size is independent of the clipping or crossing boundary, which you configure with [PortalComponent.BoundaryStyle](boundarystyle.md).

## Topics

### Initializers

- [init(width:height:)](surfacestyle/init%28width_height_%29.md): Creates a surface style with the given width and height in meters.

### Instance Properties

- [height](surfacestyle/height.md): The height of the portal mesh, in meters, along the entity’s local Y axis.
- [width](surfacestyle/width.md): The width of the portal mesh, in meters, along the entity’s local X axis.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
