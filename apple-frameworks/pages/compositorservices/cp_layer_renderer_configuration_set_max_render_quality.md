> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_configuration_set_max_render_quality](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_configuration_set_max_render_quality)

# cp_layer_renderer_configuration_set_max_render_quality

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Set max render quality the layer can use when drawing to the drawables.

## Declaration

```objectivec
void cp_layer_renderer_configuration_set_max_render_quality(cp_layer_renderer_configuration_t configuration, cp_render_quality_t render_quality);
```

## Parameters

- `configuration`: The layer configuration type to modify. The system passes an instance of this type to the [makeConfiguration(capabilities:configuration:)](compositorlayerconfiguration/makeconfiguration%28capabilities_configuration_%29.md) method of your configuration provider.
- `render_quality`: A value between between \[0, 1\]. This determines the max render quality at which drawing can happen.

<a id="discussion"></a>

## Discussion

Setting a higher max render quality will impact the resolution that is allocated for the drawable textures. This memory will count against the app’s memory limit so should only be specified as high as renderer can reasonably achieve frame rate at. During runtime, the render quality can be changed on the layer renderer but will not impact memory usage, see [cp_layer_renderer_set_render_quality](cp_layer_renderer_set_render_quality.md).
