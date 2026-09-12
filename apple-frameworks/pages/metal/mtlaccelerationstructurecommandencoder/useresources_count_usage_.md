> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructurecommandencoder/useresources:count:usage:](https://developer.apple.com/documentation/metal/mtlaccelerationstructurecommandencoder/useresources:count:usage:)

# useResources:count:usage:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Specifies that an array of resources in an argument buffer can be safely used by the acceleration structure pass.

## Declaration

```objectivec
- (void) useResources:(id<MTLResource> const[]) resources count:(NSUInteger) count usage:(MTLResourceUsage) usage;
```

## Parameters

- `resources`: An array of resources within an argument buffer.
- `count`: The number of resource elements in `resources`.
- `usage`: Options that indicate how a GPU function accesses each resource in `resources`.

<a id="discussion"></a>

## Discussion

This method makes the array of resources resident for the duration of a compute pass and ensures that it’s in a format compatible with the compute function.

Call this method before issuing any dispatch calls that may access the array of resources. Calling this method again, or calling [useHeap:](../mtlcomputecommandencoder/useheap%28__%29.md), overwrites any previously specified usage options for future dispatch calls within the same compute command encoder.

> **Note**

>  You can track resource access and dependency hazards with [MTLFence](../mtlfence.md) instances.

## See Also

### Making indirect resources resident

- [useHeap:](useheap%28__%29.md): Makes the resources contained in the specified heap available to the acceleration structure pass.
- [useHeaps:count:](useheaps_count_.md): Specifies that an array of heaps containing resources in an argument buffer can be safely used by the acceleration structure pass.
- [useResource:usage:](useresource%28__usage_%29.md): Makes a resource available to the acceleration structure pass.
- [MTLResourceUsage](../mtlresourceusage.md): Options that describe how a graphics or compute function uses an argument buffer’s resource.
