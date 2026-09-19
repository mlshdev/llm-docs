> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelrenderer/output-swift.struct/threadgroupmemorylength

# threadgroupMemoryLength

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The per-tile size, in bytes, of the persistent threadgroup memory allocation, used when rendering.

## Declaration

```swift
var threadgroupMemoryLength: Int { get set }
```

<a id="discussion"></a>

## Discussion

Corresponds to `MTLRenderCommandEncoder.threadgroupMemoryLength`.

## See Also

### Configuring render targets

- [renderTargetWidth](rendertargetwidth.md): The width of the render target, in pixels.
- [renderTargetHeight](rendertargetheight.md): The height of the render target, in pixels.
- [renderTargetArrayLength](rendertargetarraylength.md): The number of active array slices in the render target textures.
