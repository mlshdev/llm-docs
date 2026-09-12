> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4commandencoder/updatefence(_:afterencoderstages:)](https://developer.apple.com/documentation/metal/mtl4commandencoder/updatefence(_:afterencoderstages:))

# updateFence(\_:afterEncoderStages:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command that instructs the GPU to update a fence after one or more stages, which can unblock other passes waiting for the fence.

## Declaration

```swift
func updateFence(_ fence: any MTLFence, afterEncoderStages: MTLStages)
```

## Parameters

- `fence`: A fence the pass updates after the stages in `afterEncoderStages` complete.
- `afterEncoderStages`: The encoder stages that need to complete before the pass updates `fence`.

## Mentioned In

- [Synchronizing passes with a fence](../synchronizing-passes-with-a-fence.md)
- [Synchronizing stages within a pass](../synchronizing-stages-within-a-pass.md)

<a id="discussion"></a>

## Discussion

You can synchronize memory operations of a pass that access resources with an [MTLFence](../mtlfence.md). This method instructs the pass to update `fence` after the stages you pass to the `afterEncoderStages` run all their memory store operations to the resources it accesses. The fence indicates when other passes can access those resources without a race condition.

For more information about synchronization with fences, see:

- [Resource synchronization](../resource-synchronization.md)
- [Synchronizing passes with a fence](../synchronizing-passes-with-a-fence.md)

<a id="Reuse-a-fence-by-waiting-first-and-updating-second"></a>

### Reuse a fence by waiting first and updating second

When encoding a pass that reuses a fence, wait for other passes to update the fence before repurposing that fence to notify subsequent passes with an update:

1. Call the [waitForFence(\_:beforeEncoderStages:)](waitforfence%28__beforeencoderstages_%29.md) method before encoding commands that need to wait for other passes.
2. Call the [updateFence(\_:afterEncoderStages:)](updatefence%28__afterencoderstages_%29.md) method after encoding commands that later passes depend on.

The GPU driver evaluates the fences that apply to the pass and the commands that depend on those fences when your app commits the enclosing [MTLCommandBuffer](../mtlcommandbuffer.md).

> **Warning**

>  Don’t update a fence and then wait for the same fence within a pass because it can create a GPU deadlock.

To synchronize different stages within a single pass, create an *intrapass barrier* because a fence can only synchronize memory operations between different passes. For more information, see [Synchronizing stages within a pass](../synchronizing-stages-within-a-pass.md).

# updateFence:afterEncoderStages: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command that instructs the GPU to update a fence after one or more stages, which can unblock other passes waiting for the fence.

## Declaration

```objectivec
- (void) updateFence:(id<MTLFence>) fence afterEncoderStages:(MTLStages) afterEncoderStages;
```

## Parameters

- `fence`: A fence the pass updates after the stages in `afterEncoderStages` complete.
- `afterEncoderStages`: The encoder stages that need to complete before the pass updates `fence`.

## Mentioned In

- [Synchronizing passes with a fence](../synchronizing-passes-with-a-fence.md)
- [Synchronizing stages within a pass](../synchronizing-stages-within-a-pass.md)

<a id="discussion"></a>

## Discussion

You can synchronize memory operations of a pass that access resources with an [MTLFence](../mtlfence.md). This method instructs the pass to update `fence` after the stages you pass to the `afterEncoderStages` run all their memory store operations to the resources it accesses. The fence indicates when other passes can access those resources without a race condition.

For more information about synchronization with fences, see:

- [Resource synchronization](../resource-synchronization.md)
- [Synchronizing passes with a fence](../synchronizing-passes-with-a-fence.md)

<a id="Reuse-a-fence-by-waiting-first-and-updating-second"></a>

### Reuse a fence by waiting first and updating second

When encoding a pass that reuses a fence, wait for other passes to update the fence before repurposing that fence to notify subsequent passes with an update:

1. Call the [waitForFence:beforeEncoderStages:](waitforfence%28__beforeencoderstages_%29.md) method before encoding commands that need to wait for other passes.
2. Call the [updateFence:afterEncoderStages:](updatefence%28__afterencoderstages_%29.md) method after encoding commands that later passes depend on.

The GPU driver evaluates the fences that apply to the pass and the commands that depend on those fences when your app commits the enclosing [MTLCommandBuffer](../mtlcommandbuffer.md).

> **Warning**

>  Don’t update a fence and then wait for the same fence within a pass because it can create a GPU deadlock.

To synchronize different stages within a single pass, create an *intrapass barrier* because a fence can only synchronize memory operations between different passes. For more information, see [Synchronizing stages within a pass](../synchronizing-stages-within-a-pass.md).
