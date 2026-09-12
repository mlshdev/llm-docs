> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/texturebarrier()](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/texturebarrier())

# textureBarrier() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** macOS 10.11+ (deprecated in 10.14)

Adds a barrier, which forces any texture read operations to wait until write operations to the same texture finish.

> Call [memoryBarrier(scope:after:before:)](memorybarrier%28scope_after_before_%29.md) instead.

## Declaration

```swift
func textureBarrier()
```

<a id="discussion"></a>

## Discussion

Use a barrier if you use the same texture for both an input to a shader and as a rendering destination for the render pass.

A barrier let’s your app safely write to and then correctly read from the same texture. The barrier ensures that the draw calls before the barrier finish their write operations before any draw calls after the barrier read from the texture.

## See Also

### Deprecated methods

- [useResource(\_:usage:)](useresource%28__usage_%29.md): Deprecated. Ensures the shaders in the render pass’s subsequent draw commands have access to a resource.
- [use(\_:usage:stages:)](use%28__usage_stages_%29.md): Deprecated. Ensures the shaders in the render pass’s subsequent draw commands have access to a resource.
- [useResources(\_:usage:)](useresources%28__usage_%29.md): Deprecated. Ensures the shaders in the render pass’s subsequent draw commands have access to multiple resources.
- [use(\_:count:usage:stages:)](use%28__count_usage_stages_%29.md): Deprecated. Ensures the shaders in the render pass’s subsequent draw commands have access to multiple resources.
- [useHeap(\_:)](useheap%28__%29.md): Deprecated. Ensures the shaders in the render pass’s subsequent draw commands have access to the resources you allocate from a heap.
- [use(\_:stages:)](use%28__stages_%29.md): Deprecated. Ensures the shaders in the render pass’s subsequent draw commands have access to the resources you allocate from a heap.
- [useHeaps(\_:)](useheaps%28__%29.md): Deprecated. Ensures the shaders in the render pass’s subsequent draw commands have access to the resources you allocate from multiple heaps.
- [use(\_:count:stages:)](use%28__count_stages_%29.md): Deprecated. Ensures the shaders in the render pass’s subsequent draw commands have access to the resources you allocate from multiple heaps.

# textureBarrier (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** macOS 10.11+ (deprecated in 10.14)

Adds a barrier, which forces any texture read operations to wait until write operations to the same texture finish.

> Call [memoryBarrierWithScope:afterStages:beforeStages:](memorybarrier%28scope_after_before_%29.md) instead.

## Declaration

```objectivec
- (void) textureBarrier;
```

<a id="discussion"></a>

## Discussion

Use a barrier if you use the same texture for both an input to a shader and as a rendering destination for the render pass.

A barrier let’s your app safely write to and then correctly read from the same texture. The barrier ensures that the draw calls before the barrier finish their write operations before any draw calls after the barrier read from the texture.

## See Also

### Deprecated methods

- [useResource:usage:](useresource%28__usage_%29.md): Deprecated. Ensures the shaders in the render pass’s subsequent draw commands have access to a resource.
- [useResources:count:usage:](useresources_count_usage_.md): Deprecated. Ensures the shaders in the render pass’s subsequent draw commands have access to multiple resources.
- [useHeap:](useheap%28__%29.md): Deprecated. Ensures the shaders in the render pass’s subsequent draw commands have access to the resources you allocate from a heap.
- [useHeaps:count:](useheaps_count_.md): Deprecated. Ensures the shaders in the render pass’s subsequent draw commands have access to the resources you allocate from multiple heaps.
