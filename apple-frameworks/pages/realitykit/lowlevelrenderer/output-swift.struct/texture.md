> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/output-swift.struct/texture](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/output-swift.struct/texture)

# LowLevelRenderer.Output.Texture

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A reference to a specific mip level, slice, and depth plane within a Metal texture.

## Declaration

```swift
struct Texture
```

<a id="overview"></a>

## Overview

Corresponds to the level/slice/depthPlane parameters on `MTLRenderPassAttachmentDescriptor`.

## Topics

### Creating a texture reference

- [init(texture:level:slice:depthPlane:)](texture/init%28texture_level_slice_depthplane_%29.md): Creates a texture reference with the given texture, mip level, slice, and depth plane.

### Addressing the texture

- [level](texture/level.md): The mipmap level of the texture to use. Corresponds to `MTLRenderPassAttachmentDescriptor.level`.
- [slice](texture/slice.md): The slice of the texture to use. Corresponds to `MTLRenderPassAttachmentDescriptor.slice`.
- [depthPlane](texture/depthplane.md): The depth plane of the texture to use. Corresponds to `MTLRenderPassAttachmentDescriptor.depthPlane`.

### Instance Properties

- [texture](texture/texture.md): The underlying Metal texture.

## See Also

### Creating an output

- [init(color:depth:)](init%28color_depth_%29.md): Creates an output configuration with the given color and depth texture targets.
