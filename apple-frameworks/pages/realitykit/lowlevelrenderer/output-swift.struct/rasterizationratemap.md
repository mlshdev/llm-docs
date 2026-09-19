> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelrenderer/output-swift.struct/rasterizationratemap

# rasterizationRateMap

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The rasterization rate map to use when rendering.

## Declaration

```swift
var rasterizationRateMap: (any MTLRasterizationRateMap)? { get set }
```

<a id="discussion"></a>

## Discussion

Corresponds to `MTLRenderPassDescriptor.rasterizationRateMap`.

## See Also

### Setting the viewport

- [viewports](viewports.md): Per-camera viewport rectangles within the render target.
- [scissorRects](scissorrects.md): Per-camera scissor rectangles within the render target.
