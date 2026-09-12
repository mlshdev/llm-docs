> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/memorybarrier(scope:after:before:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/memorybarrier(scope:after:before:))

# memoryBarrier(scope:after:before:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a memory barrier that enforces the order of write and read operations for specific resource types.

## Declaration

```swift
func memoryBarrier(scope: MTLBarrierScope, after: MTLRenderStages, before: MTLRenderStages)
```

## Parameters

- `scope`: An [MTLBarrierScope](../mtlbarrierscope.md) instance that represents the resource types the barrier synchronizes operations on.
- `after`: The render stages of previous draw commands that modify resources of the types that `scope` defines.
- `before`: The render stages of subsequent draw commands that read or modify resources of the types that `scope` defines.

<a id="discussion"></a>

## Discussion

Memory barriers ensure the relevant stages of prior draw commands finish updating resources before starting the stages of subsequent commands that depend on those resources.

To determine whether a GPU supports memory barriers, see the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf).

## See Also

### Preventing resource access conflicts

- [waitForFence(\_:before:)](waitforfence%28__before_%29.md): Encodes a command that instructs the GPU to pause before starting one or more stages of the render pass until a pass updates a fence.
- [updateFence(\_:after:)](updatefence%28__after_%29.md): Encodes a command that instructs the GPU to update a fence after one or more stages, which can unblock other passes waiting for the fence.
- [memoryBarrier(resources:after:before:)](memorybarrier%28resources_after_before_%29.md): Creates a memory barrier that enforces the order of write and read operations for specific resources.

# memoryBarrierWithScope:afterStages:beforeStages: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a memory barrier that enforces the order of write and read operations for specific resource types.

## Declaration

```objectivec
- (void) memoryBarrierWithScope:(MTLBarrierScope) scope afterStages:(MTLRenderStages) after beforeStages:(MTLRenderStages) before;
```

## Parameters

- `scope`: An [MTLBarrierScope](../mtlbarrierscope.md) instance that represents the resource types the barrier synchronizes operations on.
- `after`: The render stages of previous draw commands that modify resources of the types that `scope` defines.
- `before`: The render stages of subsequent draw commands that read or modify resources of the types that `scope` defines.

<a id="discussion"></a>

## Discussion

Memory barriers ensure the relevant stages of prior draw commands finish updating resources before starting the stages of subsequent commands that depend on those resources.

To determine whether a GPU supports memory barriers, see the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf).

## See Also

### Preventing resource access conflicts

- [waitForFence:beforeStages:](waitforfence%28__before_%29.md): Encodes a command that instructs the GPU to pause before starting one or more stages of the render pass until a pass updates a fence.
- [updateFence:afterStages:](updatefence%28__after_%29.md): Encodes a command that instructs the GPU to update a fence after one or more stages, which can unblock other passes waiting for the fence.
- [memoryBarrierWithResources:count:afterStages:beforeStages:](memorybarrierwithresources_count_afterstages_beforestages_.md): Creates a memory barrier that enforces the order of write and read operations for specific resources.
