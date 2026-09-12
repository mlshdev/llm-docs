> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/configuration-swift.struct/layout](https://developer.apple.com/documentation/compositorservices/layerrenderer/configuration-swift.struct/layout)

# layout

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The layout being used by the layer.

## Declaration

```swift
var layout: LayerRenderer.Layout { get set }
```

<a id="discussion"></a>

## Discussion

Layouts define how Compositor Services creates the color and depth textures it passes to your app. A layout might use separate textures for each view, or combine the content from multiple views into a single texture. The layout type also determines which Metal texture type to create. For more information about the supported layouts, see [LayerRenderer.Layout](../layout.md).

## See Also

### Configuring the texture layout

- [LayerRenderer.Layout](../layout.md): Constants that specify the organization of the textures you use for drawing.
