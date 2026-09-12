> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4commandencoder/waitforfence(_:beforeencoderstages:)](https://developer.apple.com/documentation/metal/mtl4commandencoder/waitforfence(_:beforeencoderstages:))

# waitForFence(\_:beforeEncoderStages:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command that instructs the GPU to pause before starting one or more stages of the pass until a pass updates a fence.

## Declaration

```swift
func waitForFence(_ fence: any MTLFence, beforeEncoderStages: MTLStages)
```

## Parameters

- `fence`: A fence that the pass waits for before running the stages you pass to `beforeEncoderStages`.
- `beforeEncoderStages`: The encoder stages that need to wait for another pass to update `fence` before they run.

## Mentioned In

- [Synchronizing passes with a fence](../synchronizing-passes-with-a-fence.md)
- [Synchronizing stages within a pass](../synchronizing-stages-within-a-pass.md)

<a id="discussion"></a>

## Discussion

You can synchronize memory operations of a pass that access resources with an [MTLFence](../mtlfence.md). This method instructs the GPU to wait until another pass updates `fence` before running the stages you pass to the `beforeEncoderStages` parameter. The fence indicates when the pass can access those resources without a race condition.

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

# waitForFence:beforeEncoderStages: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command that instructs the GPU to pause before starting one or more stages of the pass until a pass updates a fence.

## Declaration

```objectivec
- (void) waitForFence:(id<MTLFence>) fence beforeEncoderStages:(MTLStages) beforeEncoderStages;
```

## Parameters

- `fence`: A fence that the pass waits for before running the stages you pass to `beforeEncoderStages`.
- `beforeEncoderStages`: The encoder stages that need to wait for another pass to update `fence` before they run.

## Mentioned In

- [Synchronizing passes with a fence](../synchronizing-passes-with-a-fence.md)
- [Synchronizing stages within a pass](../synchronizing-stages-within-a-pass.md)

<a id="discussion"></a>

## Discussion

You can synchronize memory operations of a pass that access resources with an [MTLFence](../mtlfence.md). This method instructs the GPU to wait until another pass updates `fence` before running the stages you pass to the `beforeEncoderStages` parameter. The fence indicates when the pass can access those resources without a race condition.

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
