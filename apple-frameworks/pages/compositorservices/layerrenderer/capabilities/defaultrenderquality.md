> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/capabilities/defaultrenderquality](https://developer.apple.com/documentation/compositorservices/layerrenderer/capabilities/defaultrenderquality)

# defaultRenderQuality

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 26.0+

The default render quality used on this platform.

## Declaration

```swift
var defaultRenderQuality: LayerRenderer.RenderQuality { get }
```

## Mentioned In

- [Defining layer renderer quality](../../defining-layer-renderer-quality.md)

<a id="discussion"></a>

## Discussion

This should be used as the base render quality value for the platform.

Use it to decide your maximum render quality, see `LayerRenderer.Configuration.maxRenderQuality`.

## See Also

### Defining quality level

- [renderQuality](../renderquality-swift.property.md): Get the render quality to be used by the drawables.
- [maxRenderQuality](../configuration-swift.struct/maxrenderquality.md): The max render quality the layer can use when drawing to the drawables.
- [Defining layer renderer quality](../../defining-layer-renderer-quality.md): Declare the render quality of your textures to enable high-quality rendering.
