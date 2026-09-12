> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/memorybarrier(scope:)](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/memorybarrier(scope:))

# memoryBarrier(scope:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Creates a memory barrier that enforces the order of write and read operations for specific resource types.

## Declaration

```swift
func memoryBarrier(scope: MTLBarrierScope)
```

## Parameters

- `scope`: An [MTLBarrierScope](../mtlbarrierscope.md) instance that represents the resource types the barrier synchronizes operations on.

<a id="discussion"></a>

## Discussion

Memory barriers ensure the relevant passes finish updating resources before starting the stages of subsequent commands that depend on those resources.

To determine whether a GPU supports memory barriers, see the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf).

## See Also

### Preventing resource access conflicts

- [waitForFence(\_:)](waitforfence%28__%29.md): Encodes a command that instructs the GPU to pause the compute pass until another pass updates a fence.
- [updateFence(\_:)](updatefence%28__%29.md): Encodes a command that instructs the GPU to update a fence after the compute pass completes.
- [memoryBarrier(resources:)](memorybarrier%28resources_%29.md): Creates a memory barrier that enforces the order of write and read operations for specific resources.

# memoryBarrierWithScope: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Creates a memory barrier that enforces the order of write and read operations for specific resource types.

## Declaration

```objectivec
- (void) memoryBarrierWithScope:(MTLBarrierScope) scope;
```

## Parameters

- `scope`: An [MTLBarrierScope](../mtlbarrierscope.md) instance that represents the resource types the barrier synchronizes operations on.

<a id="discussion"></a>

## Discussion

Memory barriers ensure the relevant passes finish updating resources before starting the stages of subsequent commands that depend on those resources.

To determine whether a GPU supports memory barriers, see the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf).

## See Also

### Preventing resource access conflicts

- [waitForFence:](waitforfence%28__%29.md): Encodes a command that instructs the GPU to pause the compute pass until another pass updates a fence.
- [updateFence:](updatefence%28__%29.md): Encodes a command that instructs the GPU to update a fence after the compute pass completes.
- [memoryBarrierWithResources:count:](memorybarrierwithresources_count_.md): Creates a memory barrier that enforces the order of write and read operations for specific resources.
