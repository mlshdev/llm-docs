> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderpipelinestate](https://developer.apple.com/documentation/realitykit/lowlevelrenderpipelinestate)

# LowLevelRenderPipelineState

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A compiled Metal render pipeline state for a specific mesh descriptor, material, and render target configuration.

## Declaration

```swift
final class LowLevelRenderPipelineState
```

<a id="overview"></a>

## Overview

The mesh descriptor, material, render target descriptors, and blending are specified via the descriptor and cannot be changed after the pipeline state is created.

Create a `LowLevelRenderPipelineState` using [makeRenderPipelineState(descriptor:)](lowlevelrendercontext/makerenderpipelinestate%28descriptor_%29.md).

## Topics

### Creating a pipeline state

- [LowLevelRenderPipelineState.Descriptor](lowlevelrenderpipelinestate/descriptor.md): The inputs required to compile a render pipeline state.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Pipeline and render targets

- [LowLevelRenderTarget](lowlevelrendertarget.md): An object that describes the pixel format configuration for a render pass’s color and depth attachments.
- [LowLevelArgumentTable](lowlevelargumenttable.md): A table of buffer slices and textures bound to a single shader function.
- [LowLevelMaterialParameterMapping](lowlevelmaterialparametermapping.md): A mapping of named buffer and texture parameters to binding indices for a compiled shader function.
