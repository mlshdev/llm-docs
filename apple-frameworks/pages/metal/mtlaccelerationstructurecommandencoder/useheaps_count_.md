> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructurecommandencoder/useheaps:count:](https://developer.apple.com/documentation/metal/mtlaccelerationstructurecommandencoder/useheaps:count:)

# useHeaps:count:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Specifies that an array of heaps containing resources in an argument buffer can be safely used by the acceleration structure pass.

## Declaration

```objectivec
- (void) useHeaps:(id<MTLHeap> const[]) heaps count:(NSUInteger) count;
```

## Parameters

- `heaps`: An array of heaps that contains resources within an argument buffer.
- `count`: The number of heaps in the array.

<a id="discussion"></a>

## Discussion

This method makes all the resources in the array of heaps resident for the duration of a compute pass and ensures that they’re in a format compatible with the compute function.

Call this method before issuing any dispatch calls that may access the resources in the array of heaps.

Resources within the specified array of heaps can only be read or sampled from. This method ignores render targets (textures that specify a [MTLTextureUsageRenderTarget](../mtltextureusage/rendertarget.md) usage option) and writable textures (textures that specify a [MTLTextureUsageShaderWrite](../mtltextureusage/shaderwrite.md) usage option) within the array of heaps. To use these resources, you need to call the [useResource:usage:](../mtlcomputecommandencoder/useresource%28__usage_%29.md) method instead.

> **Note**

>  You can synchronize memory operations to address dependency hazards with [MTLFence](../mtlfence.md) instances.

## See Also

### Making indirect resources resident

- [useHeap:](useheap%28__%29.md): Makes the resources contained in the specified heap available to the acceleration structure pass.
- [useResource:usage:](useresource%28__usage_%29.md): Makes a resource available to the acceleration structure pass.
- [useResources:count:usage:](useresources_count_usage_.md): Specifies that an array of resources in an argument buffer can be safely used by the acceleration structure pass.
- [MTLResourceUsage](../mtlresourceusage.md): Options that describe how a graphics or compute function uses an argument buffer’s resource.
