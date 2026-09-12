> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/capabilities/drawablerendercontextsupportedstencilformats](https://developer.apple.com/documentation/compositorservices/layerrenderer/capabilities/drawablerendercontextsupportedstencilformats)

# drawableRenderContextSupportedStencilFormats

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 26.0+

An array of metal pixel formats the layer renderer drawable supports with its render context.

## Declaration

```swift
var drawableRenderContextSupportedStencilFormats: [MTLPixelFormat] { get }
```

<a id="discussion"></a>

## Discussion

The pixel formats in this property tell you which [MTLPixelFormat](../../../metal/mtlpixelformat.md) pixel arrangements and characteristics the layer supports for its stencil textures with the `RenderContext`.

> **Note**

> Pixel formats are further detailed in [Metal Feature Set Tables](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf).
