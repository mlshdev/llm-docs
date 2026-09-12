> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/rendercontext/drawmaskonstencilattachment(commandencoder:value:)-7npim](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/rendercontext/drawmaskonstencilattachment(commandencoder:value:)-7npim)

# drawMaskOnStencilAttachment(commandEncoder:value:) (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 26.0+

Store the value parameter in the stencil texture in the pixels that the Compositor displays onscreen.

## Declaration

```swift
func drawMaskOnStencilAttachment(commandEncoder command_encoder: any MTL4RenderCommandEncoder, value: UInt8)
```

## Parameters

- `value`: The value to use when updating the stencil texture in the [MTLRenderCommandEncoder](../../../../metal/mtlrendercommandencoder.md).

<a id="discussion"></a>

## Discussion

In full and mixed immersion styles, [drawMaskOnStencilAttachment(commandEncoder:value:)](drawmaskonstencilattachment%28commandencoder_value_%29-65i67.md) stores the full texture. The command encoder used in the render context has the following constraints:

- The stencil texture has the same pixel format as [cp_layer_renderer_configuration_get_drawable_render_context_stencil_format](../../../cp_layer_renderer_configuration_get_drawable_render_context_stencil_format.md).
- The [renderTargetArrayLength](../../../../metal/mtlrenderpassdescriptor/rendertargetarraylength.md) is the same as the number of views in the layer renderer drawable.
- The [rasterizationRateMap](../../../../metal/mtlrenderpassdescriptor/rasterizationratemap.md) matches the one provided by the layer renderer drawable.
- The API doesn’t support dedicated or shared layouts.

If the render encoder has multiple color attachments, set [supportColorAttachmentMapping](../../../../metal/mtl4renderpassdescriptor/supportcolorattachmentmapping.md) to `true` to avoid Metal API validation errors.

For testing performance of this method, always test your app on-device rather than in Simulator. However, if you need to iterate on your code in development, you can disable API validation in Xcode, or separate the rendering into multiple render encoders for other color attachments.

This function modifies the depth stencil state, viewports, vertex amplification count, and some of the texture bindings in the render command encoder passed to the function. Make sure to set those values again to those expected in your app.

## See Also

### Rendering with Metal 4

- [endEncoding(commandEncoder:)](endencoding%28commandencoder_%29-2l6lk.md): Finish encoding the render context.

# cp_drawable_render_context_mtl4_draw_mask_on_stencil_attachment (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Store the value parameter in the stencil texture in the pixels that the Compositor displays onscreen.

## Declaration

```objectivec
void cp_drawable_render_context_mtl4_draw_mask_on_stencil_attachment(cp_drawable_render_context_t render_context, id<MTL4RenderCommandEncoder>command_encoder, uint8_t value);
```

## Parameters

- `render_context`: The render context to use to present the `LayerRenderer.Drawable`.
- `value`: The value to use when updating the stencil texture in the [MTLRenderCommandEncoder](../../../../metal/mtlrendercommandencoder.md).

<a id="discussion"></a>

## Discussion

In full and mixed immersion styles, [cp_drawable_render_context_draw_mask_on_stencil_attachment](drawmaskonstencilattachment%28commandencoder_value_%29-65i67.md) stores the full texture. The command encoder used in the render context has the following constraints:

- The stencil texture has the same pixel format as [cp_layer_renderer_configuration_get_drawable_render_context_stencil_format](../../../cp_layer_renderer_configuration_get_drawable_render_context_stencil_format.md).
- The [renderTargetArrayLength](../../../../metal/mtlrenderpassdescriptor/rendertargetarraylength.md) is the same as the number of views in the layer renderer drawable.
- The [rasterizationRateMap](../../../../metal/mtlrenderpassdescriptor/rasterizationratemap.md) matches the one provided by the layer renderer drawable.
- The API doesn’t support dedicated or shared layouts.

If the render encoder has multiple color attachments, set [supportColorAttachmentMapping](../../../../metal/mtl4renderpassdescriptor/supportcolorattachmentmapping.md) to `true` to avoid Metal API validation errors.

For testing performance of this method, always test your app on-device rather than in Simulator. However, if you need to iterate on your code in development, you can disable API validation in Xcode, or separate the rendering into multiple render encoders for other color attachments.

This function modifies the depth stencil state, viewports, vertex amplification count, and some of the texture bindings in the render command encoder passed to the function. Make sure to set those values again to those expected in your app.

## See Also

### Rendering with Metal 4

- [cp_drawable_render_context_mtl4_end_encoding](endencoding%28commandencoder_%29-2l6lk.md): Finish encoding the render context.
