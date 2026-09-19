> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelrenderer/camera/rendertargetarrayindex

# renderTargetArrayIndex

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The index into the render target texture array slice for this camera.

## Declaration

```swift
var renderTargetArrayIndex: Int { get set }
```

<a id="discussion"></a>

## Discussion

Corresponds to `MTLRenderPassDescriptor.renderTargetArrayLength` slices.

## See Also

### Specifying render targets

- [viewportArrayIndex](viewportarrayindex.md): The index into the output viewports and scissor rects arrays for this camera.
