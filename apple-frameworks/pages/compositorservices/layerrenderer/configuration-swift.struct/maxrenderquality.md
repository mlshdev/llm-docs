> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/configuration-swift.struct/maxrenderquality](https://developer.apple.com/documentation/compositorservices/layerrenderer/configuration-swift.struct/maxrenderquality)

# maxRenderQuality

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 26.0+

The max render quality the layer can use when drawing to the drawables.

## Declaration

```swift
var maxRenderQuality: LayerRenderer.RenderQuality { get set }
```

## Mentioned In

- [Defining layer renderer quality](../../defining-layer-renderer-quality.md)

<a id="discussion"></a>

## Discussion

The max render quality is a value between \[0, 1\]. This determines the max render quality at which drawing can happen.

Setting a higher max render quality will impact the resolution that is allocated for the drawable textures. This memory will count against the app’s memory limit so should only be specified as high as renderer can reasonably achieve frame rate at. During runtime, the render quality can be changed on the layer renderer but will not impact memory usage, see `LayerRenderer.renderQuality`.

## See Also

### Defining quality level

- [renderQuality](../renderquality-swift.property.md): Get the render quality to be used by the drawables.
- [defaultRenderQuality](../capabilities/defaultrenderquality.md): The default render quality used on this platform.
- [Defining layer renderer quality](../../defining-layer-renderer-quality.md): Declare the render quality of your textures to enable high-quality rendering.
