> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalcomponent/volume](https://developer.apple.com/documentation/realitykit/portalcomponent/volume)

# PortalComponent.Volume

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A box-shaped region in portal-local space that defines a volumetric portal boundary.

## Declaration

```swift
struct Volume
```

<a id="overview"></a>

## Overview

Pair this type with [PortalComponent.ClippingMode.volume(\_:)](clippingmode-swift.enum/volume%28__%29.md) to clip portal world content to a box, or with [PortalComponent.CrossingMode.volume(\_:)](crossingmode-swift.enum/volume%28__%29.md) to allow crossing entities to pass through the box’s faces.

[PortalComponent.Volume](volume.md) describes an axis-aligned box in the portal entity’s local coordinate space. The box is centered at [position](volume/position.md) and spans the full lengths given by [extents](volume/extents.md) along each axis. [extents](volume/extents.md) are full extents, not half-extents — a volume with `extents = [1, 1, 1]` is a one-cubic-meter box.

For typical room-sized portals where the box should enclose the portal surface, prefer [enclosingBox(depth:)](boundarystyle/enclosingbox%28depth_%29.md), which derives the X and Y extents from the portal’s [PortalComponent.SurfaceStyle](surfacestyle.md) for you.

## Topics

### Creating a volume

- [init(position:extents:)](volume/init%28position_extents_%29.md): Creates a volume with the given center position and extents.

### Configuring the extents

- [extents](volume/extents.md): The full lengths of the volume along the X, Y, and Z axes of portal-local space, in meters.

### Instance Properties

- [position](volume/position.md): The center of the volume in portal-local space, in meters.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
