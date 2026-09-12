> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/rendercontext/endencoding(commandencoder:)-2l6lk](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/rendercontext/endencoding(commandencoder:)-2l6lk)

# endEncoding(commandEncoder:) (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 26.0+

Finish encoding the render context.

## Declaration

```swift
func endEncoding(commandEncoder command_encoder: any MTL4RenderCommandEncoder)
```

<a id="discussion"></a>

## Discussion

`endEncoding(commandEncoder:)` passes the ownership of the command encoder to the drawable render context and calls [endEncoding()](../../../../metal/mtlcommandencoder/endencoding%28%29.md) on the command encoder. The command encoder used in the render context has the following constraints:

- The `colorAttachment[0]` contains the color texture provided by the layer renderer drawable.
- The [depthAttachment](../../../../metal/mtlrenderpassdescriptor/depthattachment.md) contains the depth texture provided by the layer renderer drawable.
- The [renderTargetArrayLength](../../../../metal/mtlrenderpassdescriptor/rendertargetarraylength.md) is the same as the number of views in the layer renderer drawable.
- The [rasterizationRateMap](../../../../metal/mtlrenderpassdescriptor/rasterizationratemap.md) matches the one provided by the layer renderer drawable.
- The API doesn’t support dedicated and shared layouts.

If the render encoder has multiple color attachments, set [supportColorAttachmentMapping](../../../../metal/mtl4renderpassdescriptor/supportcolorattachmentmapping.md) to `true` to avoid Metal API validation errors.

For testing performance of this method, always test your app on-device rather than in Simulator. However, if you need to iterate on your code in development, you can disable API validation in Xcode, or separate the rendering into multiple render encoders for other color attachments.

## See Also

### Rendering with Metal 4

- [drawMaskOnStencilAttachment(commandEncoder:value:)](drawmaskonstencilattachment%28commandencoder_value_%29-7npim.md): Store the value parameter in the stencil texture in the pixels that the Compositor displays onscreen.

# cp_drawable_render_context_mtl4_end_encoding (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Finish encoding the render context.

## Declaration

```objectivec
void cp_drawable_render_context_mtl4_end_encoding(cp_drawable_render_context_t render_context, id<MTL4RenderCommandEncoder>command_encoder);
```

## Parameters

- `render_context`: The render context to use to present the `LayerRenderer.Drawable`.

<a id="discussion"></a>

## Discussion

`endEncoding(commandEncoder:)` passes the ownership of the command encoder to the drawable render context and calls [endEncoding](../../../../metal/mtlcommandencoder/endencoding%28%29.md) on the command encoder. The command encoder used in the render context has the following constraints:

- The `colorAttachment[0]` contains the color texture provided by the layer renderer drawable.
- The [depthAttachment](../../../../metal/mtlrenderpassdescriptor/depthattachment.md) contains the depth texture provided by the layer renderer drawable.
- The [renderTargetArrayLength](../../../../metal/mtlrenderpassdescriptor/rendertargetarraylength.md) is the same as the number of views in the layer renderer drawable.
- The [rasterizationRateMap](../../../../metal/mtlrenderpassdescriptor/rasterizationratemap.md) matches the one provided by the layer renderer drawable.
- The API doesn’t support dedicated and shared layouts.

If the render encoder has multiple color attachments, set [supportColorAttachmentMapping](../../../../metal/mtl4renderpassdescriptor/supportcolorattachmentmapping.md) to `true` to avoid Metal API validation errors.

For testing performance of this method, always test your app on-device rather than in Simulator. However, if you need to iterate on your code in development, you can disable API validation in Xcode, or separate the rendering into multiple render encoders for other color attachments.

## See Also

### Rendering with Metal 4

- [cp_drawable_render_context_mtl4_draw_mask_on_stencil_attachment](drawmaskonstencilattachment%28commandencoder_value_%29-7npim.md): Store the value parameter in the stencil texture in the pixels that the Compositor displays onscreen.
