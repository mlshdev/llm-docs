> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4visibilityoptions](https://developer.apple.com/documentation/metal/mtl4visibilityoptions)

# MTL4VisibilityOptions (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Memory consistency options for synchronization commands.

## Declaration

```swift
struct MTL4VisibilityOptions
```

## Topics

### Initializers

- [init(rawValue:)](mtl4visibilityoptions/init%28rawvalue_%29.md)

### Type Properties

- [device](mtl4visibilityoptions/device.md): Flushes caches to the GPU (device) memory coherence point.
- [resourceAlias](mtl4visibilityoptions/resourcealias.md): Flushes caches to ensure that aliased virtual addresses are memory consistent.

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
- [MTLBarrierScope](mtlbarrierscope.md): Describes the types of resources that a barrier operates on.

# MTL4VisibilityOptions (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Memory consistency options for synchronization commands.

## Declaration

```objectivec
enum MTL4VisibilityOptions : NSUInteger;
```

## Topics

### Enumeration Cases

- [MTL4VisibilityOptionNone](mtl4visibilityoptions/mtl4visibilityoptionnone.md): Don’t flush caches. When you use this option on a barrier, it turns it into an execution barrier.
- [MTL4VisibilityOptionDevice](mtl4visibilityoptions/device.md): Flushes caches to the GPU (device) memory coherence point.
- [MTL4VisibilityOptionResourceAlias](mtl4visibilityoptions/resourcealias.md): Flushes caches to ensure that aliased virtual addresses are memory consistent.

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
- [MTLBarrierScope](mtlbarrierscope.md): Describes the types of resources that a barrier operates on.
