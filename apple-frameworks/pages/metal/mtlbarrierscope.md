> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbarrierscope](https://developer.apple.com/documentation/metal/mtlbarrierscope)

# MTLBarrierScope (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Describes the types of resources that a barrier operates on.

## Declaration

```swift
struct MTLBarrierScope
```

## Topics

### Initializers

- [init(rawValue:)](mtlbarrierscope/init%28rawvalue_%29.md)

### Type Properties

- [buffers](mtlbarrierscope/buffers.md): The barrier affects any buffer objects.
- [renderTargets](mtlbarrierscope/rendertargets.md): The barrier affects any render targets.
- [textures](mtlbarrierscope/textures.md): The barrier affects textures.

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
- [MTLRenderStages](mtlrenderstages.md): The stages in a render pass that triggers a synchronization command.
- [MTL4VisibilityOptions](mtl4visibilityoptions.md): Memory consistency options for synchronization commands.

# MTLBarrierScope (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Describes the types of resources that a barrier operates on.

## Declaration

```objectivec
enum MTLBarrierScope : NSUInteger;
```

## Topics

### Enumeration Cases

- [MTLBarrierScopeBuffers](mtlbarrierscope/buffers.md): The barrier affects any buffer objects.
- [MTLBarrierScopeRenderTargets](mtlbarrierscope/rendertargets.md): The barrier affects any render targets.
- [MTLBarrierScopeTextures](mtlbarrierscope/textures.md): The barrier affects textures.

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
- [MTLRenderStages](mtlrenderstages.md): The stages in a render pass that triggers a synchronization command.
- [MTL4VisibilityOptions](mtl4visibilityoptions.md): Memory consistency options for synchronization commands.
