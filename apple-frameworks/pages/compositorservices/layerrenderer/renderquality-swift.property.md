> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/renderquality-swift.property](https://developer.apple.com/documentation/compositorservices/layerrenderer/renderquality-swift.property)

# renderQuality (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 26.0+

Get the render quality to be used by the drawables.

## Declaration

```swift
var renderQuality: LayerRenderer.RenderQuality { get set }
```

## Mentioned In

- [Defining layer renderer quality](../defining-layer-renderer-quality.md)

<a id="discussion"></a>

## Discussion

The render quality will increase the resolution at which rendering happens. This value cannot exceed the quality specified on the layer renderer configuration see [cp_layer_renderer_configuration_set_max_render_quality](../cp_layer_renderer_configuration_set_max_render_quality.md). The quality will be changed to the target render quality over a set duration to hide the transition of quality from the user.

The renderer should monitor its frame rate to determine whether its making the frames on time. If it is unable to maintain proper frame rate, the app should reduce the render quality, reduce the scene complexity, or increase the frame repeat count see [cp_layer_renderer_set_minimum_frame_repeat_count](../cp_layer_renderer_set_minimum_frame_repeat_count.md). It is generally preferable to reduce anything else before increasing the frame repeat count.

## See Also

### Defining quality level

- [defaultRenderQuality](capabilities/defaultrenderquality.md): The default render quality used on this platform.
- [maxRenderQuality](configuration-swift.struct/maxrenderquality.md): The max render quality the layer can use when drawing to the drawables.
- [Defining layer renderer quality](../defining-layer-renderer-quality.md): Declare the render quality of your textures to enable high-quality rendering.

# cp_layer_renderer_get_render_quality (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Get the render quality to be used by the drawables.

## Declaration

```objectivec
cp_render_quality_t cp_layer_renderer_get_render_quality(cp_layer_renderer_t layer_renderer);
```

## Parameters

- `layer_renderer`: The layer on which you’re drawing.

## Mentioned In

- [Defining layer renderer quality](../defining-layer-renderer-quality.md)

<a id="discussion"></a>

## Discussion

The render quality will increase the resolution at which rendering happens. This value cannot exceed the quality specified on the layer renderer configuration see [cp_layer_renderer_configuration_set_max_render_quality](../cp_layer_renderer_configuration_set_max_render_quality.md). The quality will be changed to the target render quality over a set duration to hide the transition of quality from the user.

The renderer should monitor its frame rate to determine whether its making the frames on time. If it is unable to maintain proper frame rate, the app should reduce the render quality, reduce the scene complexity, or increase the frame repeat count see [cp_layer_renderer_set_minimum_frame_repeat_count](../cp_layer_renderer_set_minimum_frame_repeat_count.md). It is generally preferable to reduce anything else before increasing the frame repeat count.

## See Also

### Defining quality level

- [Defining layer renderer quality](../defining-layer-renderer-quality.md): Declare the render quality of your textures to enable high-quality rendering.
