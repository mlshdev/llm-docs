> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/waitforfence(_:)](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/waitforfence(_:))

# waitForFence(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Encodes a command that instructs the GPU to pause the compute pass until another pass updates a fence.

## Declaration

```swift
func waitForFence(_ fence: any MTLFence)
```

## Parameters

- `fence`: A fence that the pass waits for before it runs any of its commands.

<a id="discussion"></a>

## Discussion

You can synchronize memory operations of a compute pass that access resources with an [MTLFence](../mtlfence.md). This method instructs the GPU to wait until another pass updates `fence` before running the compute pass. The fence indicates when the pass can access those resources without a race condition.

For more information about synchronization with fences, see:

- [Resource synchronization](../resource-synchronization.md)
- [Synchronizing passes with a fence](../synchronizing-passes-with-a-fence.md)

<a id="Reuse-a-fence-by-waiting-first-and-updating-second"></a>

### Reuse a fence by waiting first and updating second

When encoding a compute pass that reuses a fence, wait for other passes to update the fence before repurposing that fence to notify subsequent passes with an update:

1. Call the [waitForFence(\_:)](waitforfence%28__%29.md) method before encoding commands that need to wait for other passes.
2. Call the [updateFence(\_:)](updatefence%28__%29.md) method after encoding commands that later passes depend on.

The GPU driver evaluates the fences that apply to the pass and the commands that depend on those fences when your app commits the enclosing [MTLCommandBuffer](../mtlcommandbuffer.md).

> **Warning**

>  Don’t update a fence and then wait for the same fence within a pass because it can create a GPU deadlock.

## See Also

### Preventing resource access conflicts

- [updateFence(\_:)](updatefence%28__%29.md): Encodes a command that instructs the GPU to update a fence after the compute pass completes.
- [memoryBarrier(scope:)](memorybarrier%28scope_%29.md): Creates a memory barrier that enforces the order of write and read operations for specific resource types.
- [memoryBarrier(resources:)](memorybarrier%28resources_%29.md): Creates a memory barrier that enforces the order of write and read operations for specific resources.

# waitForFence: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Encodes a command that instructs the GPU to pause the compute pass until another pass updates a fence.

## Declaration

```objectivec
- (void) waitForFence:(id<MTLFence>) fence;
```

## Parameters

- `fence`: A fence that the pass waits for before it runs any of its commands.

<a id="discussion"></a>

## Discussion

You can synchronize memory operations of a compute pass that access resources with an [MTLFence](../mtlfence.md). This method instructs the GPU to wait until another pass updates `fence` before running the compute pass. The fence indicates when the pass can access those resources without a race condition.

For more information about synchronization with fences, see:

- [Resource synchronization](../resource-synchronization.md)
- [Synchronizing passes with a fence](../synchronizing-passes-with-a-fence.md)

<a id="Reuse-a-fence-by-waiting-first-and-updating-second"></a>

### Reuse a fence by waiting first and updating second

When encoding a compute pass that reuses a fence, wait for other passes to update the fence before repurposing that fence to notify subsequent passes with an update:

1. Call the [waitForFence:](waitforfence%28__%29.md) method before encoding commands that need to wait for other passes.
2. Call the [updateFence:](updatefence%28__%29.md) method after encoding commands that later passes depend on.

The GPU driver evaluates the fences that apply to the pass and the commands that depend on those fences when your app commits the enclosing [MTLCommandBuffer](../mtlcommandbuffer.md).

> **Warning**

>  Don’t update a fence and then wait for the same fence within a pass because it can create a GPU deadlock.

## See Also

### Preventing resource access conflicts

- [updateFence:](updatefence%28__%29.md): Encodes a command that instructs the GPU to update a fence after the compute pass completes.
- [memoryBarrierWithScope:](memorybarrier%28scope_%29.md): Creates a memory barrier that enforces the order of write and read operations for specific resource types.
- [memoryBarrierWithResources:count:](memorybarrierwithresources_count_.md): Creates a memory barrier that enforces the order of write and read operations for specific resources.
