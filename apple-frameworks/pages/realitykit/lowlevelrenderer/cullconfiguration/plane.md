> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/cullconfiguration/plane](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/cullconfiguration/plane)

# LowLevelRenderer.CullConfiguration.Plane

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An infinite directed plane used to cull mesh instances.

## Declaration

```swift
@frozen struct Plane
```

<a id="overview"></a>

## Overview

Each plane has an outward normal that points away from the visible region. An instance is culled when its mesh part bounds lie entirely on the outward side of the plane.

## Topics

### Creating a plane

- [init(position:direction:)](plane/init%28position_direction_%29.md): Creates a plane from a point on the plane and an outward normal direction.
- [init(position0:position1:position2:)](plane/init%28position0_position1_position2_%29.md): Creates a plane from three positions.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
