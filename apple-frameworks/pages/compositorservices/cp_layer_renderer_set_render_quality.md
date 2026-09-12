> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_set_render_quality](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_set_render_quality)

# cp_layer_renderer_set_render_quality

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Set the render quality to be used by the drawables.

## Declaration

```objectivec
void cp_layer_renderer_set_render_quality(cp_layer_renderer_t layer_renderer, cp_render_quality_t render_quality);
```

## Parameters

- `layer_renderer`: The layer on which you’re drawing.
- `render_quality`: The value of quality \[0, 1\]. With 0 being the minimum quality that is supported on the device, and 1 being the highest quality that is supported on the device.

<a id="discussion"></a>

## Discussion

The render quality will increase the resolution at which rendering happens. This value cannot exceed the quality specified on the layer renderer configuration see [cp_layer_renderer_configuration_set_max_render_quality](cp_layer_renderer_configuration_set_max_render_quality.md). The quality will be changed to the target render quality over a set duration to hide the transition of quality from the user.

The renderer should monitor its frame rate to determine whether its making the frames on time. If it is unable to maintain proper frame rate, the app should reduce the render quality, reduce the scene complexity, or increase the frame repeat count see [cp_layer_renderer_set_minimum_frame_repeat_count](cp_layer_renderer_set_minimum_frame_repeat_count.md). It is generally preferable to reduce anything else before increasing the frame repeat count.
