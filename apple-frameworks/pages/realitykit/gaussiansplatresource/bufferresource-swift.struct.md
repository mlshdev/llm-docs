> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/gaussiansplatresource/bufferresource-swift.struct](https://developer.apple.com/documentation/realitykit/gaussiansplatresource/bufferresource-swift.struct)

# GaussianSplatResource.BufferResource

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A set of buffer descriptors that supplies the per-splat data for rendering.

## Declaration

```swift
struct BufferResource
```

<a id="overview"></a>

## Overview

The descriptors can share one buffer at different offsets, or use a separate buffer for each property.

## Topics

### Initializers

- [init(count:position:scale:rotation:opacity:sphericalHarmonics:)](bufferresource-swift.struct/init%28count_position_scale_rotation_opacity_sphericalharmonics_%29.md): Creates a buffer resource from descriptors for each per-splat property.

### Instance Properties

- [count](bufferresource-swift.struct/count.md): The number of splats the resource renders.
- [degree](bufferresource-swift.struct/degree.md): The amount of view-dependent color detail stored per splat.
- [opacity](bufferresource-swift.struct/opacity.md): The descriptor for each splat’s opacity, stored as a single float.
- [position](bufferresource-swift.struct/position.md): The descriptor for each splat’s position, stored as three floats.
- [rotation](bufferresource-swift.struct/rotation.md): The descriptor for each splat’s rotation, stored as a four-component quaternion.
- [scale](bufferresource-swift.struct/scale.md): The descriptor for each splat’s scale, stored as three floats.
- [sphericalHarmonics](bufferresource-swift.struct/sphericalharmonics.md): The descriptor for each splat’s spherical harmonic color coefficients.
