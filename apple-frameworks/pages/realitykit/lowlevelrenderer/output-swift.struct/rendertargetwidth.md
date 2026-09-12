> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/output-swift.struct/rendertargetwidth](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/output-swift.struct/rendertargetwidth)

# renderTargetWidth

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The width of the render target, in pixels.

## Declaration

```swift
var renderTargetWidth: Int { get set }
```

<a id="discussion"></a>

## Discussion

Corresponds to `MTLRenderPassDescriptor.renderTargetWidth`.

## See Also

### Configuring render targets

- [renderTargetHeight](rendertargetheight.md): The height of the render target, in pixels.
- [renderTargetArrayLength](rendertargetarraylength.md): The number of active array slices in the render target textures.
- [threadgroupMemoryLength](threadgroupmemorylength.md): The per-tile size, in bytes, of the persistent threadgroup memory allocation, used when rendering.
