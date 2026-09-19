> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/compositorservices/layerrenderer/configuration-swift.struct/drawablerendercontextrastersamplecount

# drawableRenderContextRasterSampleCount

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 26.0+

The multisample antialiasing sample count used for rendering.

## Declaration

```swift
var drawableRenderContextRasterSampleCount: Int { get set }
```

<a id="discussion"></a>

## Discussion

If you’re using multisample antialiasing, set the same value you attach to your Metal pipeline. [LayerRenderer](../../layerrenderer.md) sets the value to 1 by default.

> **Note**

> For more information, see doc:com.apple.documentation/metal/improving-edge-rendering-quality-with-multisample-antialiasing-msaa.

## See Also

### Configurating the render context

- [drawableRenderContextStencilFormat](drawablerendercontextstencilformat.md): The metal pixel format matching that of the stencil texture used in the layer renderer drawable’s render context.
