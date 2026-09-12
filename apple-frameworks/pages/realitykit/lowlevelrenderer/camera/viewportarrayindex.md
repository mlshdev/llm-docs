> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/camera/viewportarrayindex](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/camera/viewportarrayindex)

# viewportArrayIndex

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The index into the output viewports and scissor rects arrays for this camera.

## Declaration

```swift
var viewportArrayIndex: Int { get set }
```

<a id="discussion"></a>

## Discussion

Corresponds to the vertex amplification viewport array index in `MTLRenderCommandEncoder`.

## See Also

### Specifying render targets

- [renderTargetArrayIndex](rendertargetarrayindex.md): The index into the render target texture array slice for this camera.
