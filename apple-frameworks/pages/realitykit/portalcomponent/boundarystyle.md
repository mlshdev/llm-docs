> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalcomponent/boundarystyle](https://developer.apple.com/documentation/realitykit/portalcomponent/boundarystyle)

# PortalComponent.BoundaryStyle

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The shape of a portal’s clipping and crossing boundary.

## Declaration

```swift
struct BoundaryStyle
```

<a id="overview"></a>

## Overview

A portal has two related but separate concepts:

- The *surface*, a flat plane mesh that RealityKit renders with [PortalMaterial](../portalmaterial.md) and sizes from [PortalComponent.SurfaceStyle](surfacestyle.md).
- The *boundary*, the volume in space that clips portal world content and that crossing entities pass through. [PortalComponent.BoundaryStyle](boundarystyle.md) describes the shape of that volume.

Pair a boundary style with a [PortalComponent.BoundaryMode](boundarymode.md) to control whether the boundary clips content, allows entities to cross, both, or neither.

## Topics

### Type Methods

- [enclosingBox(depth:)](boundarystyle/enclosingbox%28depth_%29.md): Returns a boundary style that uses a box enclosing the portal surface.
- [infinitePlane()](boundarystyle/infiniteplane%28%29.md): Returns a boundary style that uses an infinite plane.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
