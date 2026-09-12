> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/memorybarrierwithresources:count:](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/memorybarrierwithresources:count:)

# memoryBarrierWithResources:count:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Creates a memory barrier that enforces the order of write and read operations for specific resources.

## Declaration

```objectivec
- (void) memoryBarrierWithResources:(id<MTLResource> const[]) resources count:(NSUInteger) count;
```

## Parameters

- `resources`: A C array of [MTLResource](../mtlresource.md) instances the barrier applies to.
- `count`: The number of resources in the array.

<a id="discussion"></a>

## Discussion

Memory barriers ensure the relevant passes finish updating resources before starting the stages of subsequent commands that depend on those resources.

To determine whether a GPU supports memory barriers, see the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf).

## See Also

### Preventing resource access conflicts

- [waitForFence:](waitforfence%28__%29.md): Encodes a command that instructs the GPU to pause the compute pass until another pass updates a fence.
- [updateFence:](updatefence%28__%29.md): Encodes a command that instructs the GPU to update a fence after the compute pass completes.
- [memoryBarrierWithScope:](memorybarrier%28scope_%29.md): Creates a memory barrier that enforces the order of write and read operations for specific resource types.
