> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/configuration-swift.struct/drawablerendercontextstencilformat](https://developer.apple.com/documentation/compositorservices/layerrenderer/configuration-swift.struct/drawablerendercontextstencilformat)

# drawableRenderContextStencilFormat

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 26.0+

The metal pixel format matching that of the stencil texture used in the layer renderer drawable’s render context.

## Declaration

```swift
var drawableRenderContextStencilFormat: MTLPixelFormat { get set }
```

<a id="discussion"></a>

## Discussion

This value corresponds to the pixel format of the stencil texture you attach to your Metal pipeline.

> **Note**

> For more information, see [MTLRenderPassAttachmentDescriptor](../../../metal/mtlrenderpassattachmentdescriptor.md).

## See Also

### Configurating the render context

- [drawableRenderContextRasterSampleCount](drawablerendercontextrastersamplecount.md): The multisample antialiasing sample count used for rendering.
