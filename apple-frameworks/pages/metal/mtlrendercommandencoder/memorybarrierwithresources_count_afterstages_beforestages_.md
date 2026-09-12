> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/memorybarrierwithresources:count:afterstages:beforestages:](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/memorybarrierwithresources:count:afterstages:beforestages:)

# memoryBarrierWithResources:count:afterStages:beforeStages:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a memory barrier that enforces the order of write and read operations for specific resources.

## Declaration

```objectivec
- (void) memoryBarrierWithResources:(id<MTLResource> const[]) resources count:(NSUInteger) count afterStages:(MTLRenderStages) after beforeStages:(MTLRenderStages) before;
```

## Parameters

- `resources`: A C array of [MTLResource](../mtlresource.md) instances the barrier applies to.
- `count`: The number of elements in the resources array.
- `after`: The render stages of previous draw commands that modify `resources`.
- `before`: The render stages of subsequent draw commands that read or modify `resources`.

<a id="discussion"></a>

## Discussion

Memory barriers ensure the relevant stages of prior draw commands finish modifying resources before starting the stages of subsequent commands that depend on those resources.

To determine whether a GPU supports memory barriers, see the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf).

## See Also

### Preventing resource access conflicts

- [waitForFence:beforeStages:](waitforfence%28__before_%29.md): Encodes a command that instructs the GPU to pause before starting one or more stages of the render pass until a pass updates a fence.
- [updateFence:afterStages:](updatefence%28__after_%29.md): Encodes a command that instructs the GPU to update a fence after one or more stages, which can unblock other passes waiting for the fence.
- [memoryBarrierWithScope:afterStages:beforeStages:](memorybarrier%28scope_after_before_%29.md): Creates a memory barrier that enforces the order of write and read operations for specific resource types.
