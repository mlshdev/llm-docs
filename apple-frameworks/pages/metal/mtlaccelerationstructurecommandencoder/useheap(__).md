> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructurecommandencoder/useheap(_:)](https://developer.apple.com/documentation/metal/mtlaccelerationstructurecommandencoder/useheap(_:))

# useHeap(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Makes the resources contained in the specified heap available to the acceleration structure pass.

## Declaration

```swift
func useHeap(_ heap: any MTLHeap)
```

## Parameters

- `heap`: A heap that contains resources within an argument buffer.

<a id="discussion"></a>

## Discussion

This method makes all the resources in the heap resident for the duration of a compute pass and ensures that they’re in a format compatible with the compute function.

Call this method before issuing any dispatch calls that may access the resources in the heap.

You can only read or sample resources in the specified heap. This method ignores render targets (textures that specify a [renderTarget](../mtltextureusage/rendertarget.md) usage option) and writable textures (textures that specify a [shaderWrite](../mtltextureusage/shaderwrite.md) usage option) within the heap. To use these resources, you need to call the [useResource(\_:usage:)](../mtlcomputecommandencoder/useresource%28__usage_%29.md) method instead.

> **Note**

>  You can synchronize memory operations to address dependency hazards with [MTLFence](../mtlfence.md) instances.

## See Also

### Making indirect resources resident

- [useHeaps(\_:)](useheaps%28__%29.md): Makes the resources contained in the specified heaps available to the acceleration structure pass.
- [useResource(\_:usage:)](useresource%28__usage_%29.md): Makes a resource available to the acceleration structure pass.
- [useResources(\_:usage:)](useresources%28__usage_%29.md): Makes multiple resources available to the acceleration structure pass.
- [MTLResourceUsage](../mtlresourceusage.md): Options that describe how a graphics or compute function uses an argument buffer’s resource.

# useHeap: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Makes the resources contained in the specified heap available to the acceleration structure pass.

## Declaration

```objectivec
- (void) useHeap:(id<MTLHeap>) heap;
```

## Parameters

- `heap`: A heap that contains resources within an argument buffer.

<a id="discussion"></a>

## Discussion

This method makes all the resources in the heap resident for the duration of a compute pass and ensures that they’re in a format compatible with the compute function.

Call this method before issuing any dispatch calls that may access the resources in the heap.

You can only read or sample resources in the specified heap. This method ignores render targets (textures that specify a [MTLTextureUsageRenderTarget](../mtltextureusage/rendertarget.md) usage option) and writable textures (textures that specify a [MTLTextureUsageShaderWrite](../mtltextureusage/shaderwrite.md) usage option) within the heap. To use these resources, you need to call the [useResource:usage:](../mtlcomputecommandencoder/useresource%28__usage_%29.md) method instead.

> **Note**

>  You can synchronize memory operations to address dependency hazards with [MTLFence](../mtlfence.md) instances.

## See Also

### Making indirect resources resident

- [useHeaps:count:](useheaps_count_.md): Specifies that an array of heaps containing resources in an argument buffer can be safely used by the acceleration structure pass.
- [useResource:usage:](useresource%28__usage_%29.md): Makes a resource available to the acceleration structure pass.
- [useResources:count:usage:](useresources_count_usage_.md): Specifies that an array of resources in an argument buffer can be safely used by the acceleration structure pass.
- [MTLResourceUsage](../mtlresourceusage.md): Options that describe how a graphics or compute function uses an argument buffer’s resource.
