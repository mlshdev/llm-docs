> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/output-swift.struct/rendertargetarraylength](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/output-swift.struct/rendertargetarraylength)

# renderTargetArrayLength

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The number of active array slices in the render target textures.

## Declaration

```swift
var renderTargetArrayLength: Int { get set }
```

<a id="discussion"></a>

## Discussion

Corresponds to `MTLRenderPassDescriptor.renderTargetArrayLength`. Set this to the size of the texture array when using multi-viewport rendering into texture slices.

## See Also

### Configuring render targets

- [renderTargetWidth](rendertargetwidth.md): The width of the render target, in pixels.
- [renderTargetHeight](rendertargetheight.md): The height of the render target, in pixels.
- [threadgroupMemoryLength](threadgroupmemorylength.md): The per-tile size, in bytes, of the persistent threadgroup memory allocation, used when rendering.
