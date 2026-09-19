> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelrenderer/output-swift.struct/viewports

# viewports

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Per-camera viewport rectangles within the render target.

## Declaration

```swift
var viewports: [MTLViewport]? { get set }
```

<a id="discussion"></a>

## Discussion

Each entry corresponds to a camera’s `viewportArrayIndex`. Corresponds to `MTLRenderCommandEncoder.setViewports(_:)`.

## See Also

### Setting the viewport

- [scissorRects](scissorrects.md): Per-camera scissor rectangles within the render target.
- [rasterizationRateMap](rasterizationratemap.md): The rasterization rate map to use when rendering.
