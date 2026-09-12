> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendertarget/descriptor](https://developer.apple.com/documentation/realitykit/lowlevelrendertarget/descriptor)

# LowLevelRenderTarget.Descriptor

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A color and depth pixel format combination for a render pass.

## Declaration

```swift
struct Descriptor
```

<a id="overview"></a>

## Overview

Use [renderTargetDescriptor](../lowlevelrenderer/configuration/rendertargetdescriptor.md) to obtain a descriptor from each renderer configuration you plan to use. Collect one or more descriptors into a [LowLevelRenderTarget.DescriptorSet](descriptorset.md), then pass the set to [makeRenderPipelineState(descriptor:)](../lowlevelrendercontext/makerenderpipelinestate%28descriptor_%29.md) and [makeMeshInstanceArray(renderTargets:count:)](../lowlevelrendercontext/makemeshinstancearray%28rendertargets_count_%29.md).

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing the render target

- [LowLevelRenderTarget.DescriptorSet](descriptorset.md): An unordered set of render target descriptors that defines the output format combination a pipeline state or mesh instance array is compatible with.
