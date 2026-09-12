> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderstages](https://developer.apple.com/documentation/metal/mtlrenderstages)

# MTLRenderStages (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The stages in a render pass that triggers a synchronization command.

## Declaration

```swift
struct MTLRenderStages
```

<a id="overview"></a>

## Overview

Render stage boundaries provide synchronization opportunities within a render pass for specific resources and resource types. For example, you can designate render stage a synchronization point for a memory barrier or a fence (see [memoryBarrier(resources:after:before:)](mtlrendercommandencoder/memorybarrier%28resources_after_before_%29.md) and [MTLFence](mtlfence.md), respectively). This allows a GPU to overlap its execution of two adjacent stages, which can shorten its overall runtime for the render pass.

## Topics

### Render pass stages

- [object](mtlrenderstages/object.md): The object rendering stage.
- [mesh](mtlrenderstages/mesh.md): The mesh rendering stage.
- [vertex](mtlrenderstages/vertex.md): The vertex rendering stage.
- [fragment](mtlrenderstages/fragment.md): The fragment rendering stage.
- [tile](mtlrenderstages/tile.md): The tile rendering stage.

### Swift support

- [init(rawValue:)](mtlrenderstages/init%28rawvalue_%29.md): Creates a render stage from a raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Synchronizing with barriers and fences

- [Synchronizing stages within a pass](synchronizing-stages-within-a-pass.md): Block GPU stages in the a pass from running until other stages in the same pass finish.
- [Synchronizing passes with a fence](synchronizing-passes-with-a-fence.md): Block GPU stages in a pass until another pass unblocks it by signaling a fence.
- [Synchronizing passes with consumer barriers](synchronizing-passes-with-consumer-barriers.md): Block GPU stages in a pass, and all subsequent passes, from running until stages from earlier passes finish.
- [Synchronizing passes with producer barriers](synchronizing-passes-with-producer-barriers.md): Block GPU stages in subsequent passes from running until stages in a pass, and earlier passes, finish.
- [Synchronizing CPU and GPU work](synchronizing-cpu-and-gpu-work.md): Avoid stalls between CPU and GPU work by using multiple instances of a resource.
- [Implementing a multistage image filter using heaps and fences](implementing-a-multistage-image-filter-using-heaps-and-fences.md): Use fences to synchronize access to resources allocated on a heap.
- [MTLStages](mtlstages.md): The segments of command execution within the Metal pass types.
- [MTLFence](mtlfence.md): A synchronization mechanism that orders memory operations between GPU passes.
- [MTLBarrierScope](mtlbarrierscope.md): Describes the types of resources that a barrier operates on.
- [MTL4VisibilityOptions](mtl4visibilityoptions.md): Memory consistency options for synchronization commands.

# MTLRenderStages (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The stages in a render pass that triggers a synchronization command.

## Declaration

```objectivec
enum MTLRenderStages : NSUInteger;
```

<a id="overview"></a>

## Overview

Render stage boundaries provide synchronization opportunities within a render pass for specific resources and resource types. For example, you can designate render stage a synchronization point for a memory barrier or a fence (see [memoryBarrier(resources:after:before:)](mtlrendercommandencoder/memorybarrier%28resources_after_before_%29.md) and [MTLFence](mtlfence.md), respectively). This allows a GPU to overlap its execution of two adjacent stages, which can shorten its overall runtime for the render pass.

## Topics

### Render pass stages

- [MTLRenderStageObject](mtlrenderstages/object.md): The object rendering stage.
- [MTLRenderStageMesh](mtlrenderstages/mesh.md): The mesh rendering stage.
- [MTLRenderStageVertex](mtlrenderstages/vertex.md): The vertex rendering stage.
- [MTLRenderStageFragment](mtlrenderstages/fragment.md): The fragment rendering stage.
- [MTLRenderStageTile](mtlrenderstages/tile.md): The tile rendering stage.

## See Also

### Synchronizing with barriers and fences

- [Synchronizing stages within a pass](synchronizing-stages-within-a-pass.md): Block GPU stages in the a pass from running until other stages in the same pass finish.
- [Synchronizing passes with a fence](synchronizing-passes-with-a-fence.md): Block GPU stages in a pass until another pass unblocks it by signaling a fence.
- [Synchronizing passes with consumer barriers](synchronizing-passes-with-consumer-barriers.md): Block GPU stages in a pass, and all subsequent passes, from running until stages from earlier passes finish.
- [Synchronizing passes with producer barriers](synchronizing-passes-with-producer-barriers.md): Block GPU stages in subsequent passes from running until stages in a pass, and earlier passes, finish.
- [Synchronizing CPU and GPU work](synchronizing-cpu-and-gpu-work.md): Avoid stalls between CPU and GPU work by using multiple instances of a resource.
- [Implementing a multistage image filter using heaps and fences](implementing-a-multistage-image-filter-using-heaps-and-fences.md): Use fences to synchronize access to resources allocated on a heap.
- [MTLStages](mtlstages.md): The segments of command execution within the Metal pass types.
- [MTLFence](mtlfence.md): A synchronization mechanism that orders memory operations between GPU passes.
- [MTLBarrierScope](mtlbarrierscope.md): Describes the types of resources that a barrier operates on.
- [MTL4VisibilityOptions](mtl4visibilityoptions.md): Memory consistency options for synchronization commands.
