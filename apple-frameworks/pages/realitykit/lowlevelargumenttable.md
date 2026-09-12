> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelargumenttable](https://developer.apple.com/documentation/realitykit/lowlevelargumenttable)

# LowLevelArgumentTable

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A table of buffer slices and textures bound to a single shader function.

## Declaration

```swift
final class LowLevelArgumentTable
```

<a id="overview"></a>

## Overview

A `LowLevelArgumentTable` binds a set of `LowLevelBufferSlice` and `LowLevelTextureResource` objects at indexed slots. Its layout is described by an `LowLevelArgumentTable.Descriptor` that must match the `argumentTableDescriptor` on the corresponding material function.

Create a `LowLevelArgumentTable` using [makeArgumentTable(descriptor:buffers:textures:)](lowlevelrendercontext/makeargumenttable%28descriptor_buffers_textures_%29.md).

## Topics

### Inspecting the table

- [descriptor](lowlevelargumenttable/descriptor-swift.property.md): The descriptor that describes the buffer and texture slots of this argument table.
- [LowLevelArgumentTable.Descriptor](lowlevelargumenttable/descriptor-swift.struct.md): The buffer and texture slot configuration for an argument table.

### Accessing textures

- [texture(at:)](lowlevelargumenttable/texture%28at_%29.md): Returns the texture bound at the given index, or `nil` if the slot is unset.
- [setTexture(\_:at:)](lowlevelargumenttable/settexture%28__at_%29.md): Binds a texture to the slot at the given index.

### Accessing buffer slices

- [bufferSlice(at:)](lowlevelargumenttable/bufferslice%28at_%29.md): Returns the buffer slice bound at the given index, or `nil` if the slot is unset.
- [setBufferSlice(\_:at:)](lowlevelargumenttable/setbufferslice%28__at_%29.md): Binds a buffer slice to the slot at the given index.

## See Also

### Pipeline and render targets

- [LowLevelRenderPipelineState](lowlevelrenderpipelinestate.md): A compiled Metal render pipeline state for a specific mesh descriptor, material, and render target configuration.
- [LowLevelRenderTarget](lowlevelrendertarget.md): An object that describes the pixel format configuration for a render pass’s color and depth attachments.
- [LowLevelMaterialParameterMapping](lowlevelmaterialparametermapping.md): A mapping of named buffer and texture parameters to binding indices for a compiled shader function.
