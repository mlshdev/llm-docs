> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalcomponent/portal](https://developer.apple.com/documentation/realitykit/portalcomponent/portal)

# PortalComponent.Portal

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A pair of related entities that make up a configured portal.

## Declaration

```swift
struct Portal
```

<a id="overview"></a>

## Overview

[makePortal(surfaceStyle:boundaryStyle:boundaryMode:)](makeportal%28surfacestyle_boundarystyle_boundarymode_%29.md) returns this value. You’re responsible for adding both entities to your scene.

## Topics

### Instance Properties

- [portalEntity](portal/portalentity.md): The entity that has the portal surface mesh, [PortalMaterial](../portalmaterial.md), and [PortalComponent](../portalcomponent.md).
- [worldEntity](portal/worldentity.md): The entity that has [WorldComponent](../worldcomponent.md). Add portal world content as descendants of this entity.
