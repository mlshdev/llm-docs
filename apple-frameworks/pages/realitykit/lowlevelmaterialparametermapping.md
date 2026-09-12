> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmaterialparametermapping](https://developer.apple.com/documentation/realitykit/lowlevelmaterialparametermapping)

# LowLevelMaterialParameterMapping

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A mapping of named buffer and texture parameters to binding indices for a compiled shader function.

## Declaration

```swift
struct LowLevelMaterialParameterMapping
```

<a id="overview"></a>

## Overview

Use `bufferLocation(named:)`, `constantLocation(named:)`, and `textureLocation(named:)` to look up the binding index for a named parameter, then bind a resource to that slot with [setBufferSlice(\_:at:)](lowlevelargumenttable/setbufferslice%28__at_%29.md) or [setTexture(\_:at:)](lowlevelargumenttable/settexture%28__at_%29.md).

## Topics

### Accessing parameter mappings

- [buffers](lowlevelmaterialparametermapping/buffers.md): The ordered buffer slot descriptions for this function.
- [LowLevelMaterialParameterMapping.Buffer](lowlevelmaterialparametermapping/buffer.md): The contents of a buffer slot, either a collection of packed constants or a single structured buffer.
- [LowLevelMaterialParameterMapping.BufferParameter](lowlevelmaterialparametermapping/bufferparameter.md): A structured buffer parameter.
- [textures](lowlevelmaterialparametermapping/textures.md): The ordered texture slot descriptions for this function.
- [LowLevelMaterialParameterMapping.TextureParameter](lowlevelmaterialparametermapping/textureparameter.md): A texture parameter.
- [LowLevelMaterialParameterMapping.ConstantParameter](lowlevelmaterialparametermapping/constantparameter.md): A constant parameter embedded within a buffer slot.

### Locating parameters

- [bufferLocation(named:)](lowlevelmaterialparametermapping/bufferlocation%28named_%29.md): Returns the argument table buffer slot index for the named buffer parameter, or `nil` if no parameter with that name exists.
- [textureLocation(named:)](lowlevelmaterialparametermapping/texturelocation%28named_%29.md): Returns the argument table texture slot index for the named texture parameter, or `nil` if no parameter with that name exists.
- [constantLocation(named:)](lowlevelmaterialparametermapping/constantlocation%28named_%29.md): Returns the resolved buffer and constant indices for the named constant parameter, or `nil` if no parameter with that name exists.
- [LowLevelMaterialParameterMapping.ConstantLocation](lowlevelmaterialparametermapping/constantlocation.md): The resolved buffer and constant slot indices for a named constant parameter.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Pipeline and render targets

- [LowLevelRenderPipelineState](lowlevelrenderpipelinestate.md): A compiled Metal render pipeline state for a specific mesh descriptor, material, and render target configuration.
- [LowLevelRenderTarget](lowlevelrendertarget.md): An object that describes the pixel format configuration for a render pass’s color and depth attachments.
- [LowLevelArgumentTable](lowlevelargumenttable.md): A table of buffer slices and textures bound to a single shader function.
