> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_configuration_set_depth_format](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_configuration_set_depth_format)

# cp_layer_renderer_configuration_set_depth_format

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Sets the pixel format for the layer’s depth textures to the specified value.

## Declaration

```objectivec
void cp_layer_renderer_configuration_set_depth_format(cp_layer_renderer_configuration_t configuration, MTLPixelFormat depth_format);
```

## Parameters

- `configuration`: The layer configuration details.
- `depth_format`: The pixel format to apply to your layer’s depth textures. The value you specify must be one of the values obtained from the [cp_layer_renderer_capabilities_supported_depth_format](cp_layer_renderer_capabilities_supported_depth_format.md) function.

<a id="discussion"></a>

## Discussion

Use this function to modify the configuration details for your layer. Fetch the layer’s supported pixel formats using the [cp_layer_renderer_capabilities_supported_depth_format](cp_layer_renderer_capabilities_supported_depth_format.md) function.

## See Also

### Configuring the depth information

- [cp_layer_renderer_configuration_get_depth_format](cp_layer_renderer_configuration_get_depth_format.md): Returns the pixel format to use for the layer’s depth textures.
- [cp_layer_renderer_configuration_get_depth_usage](cp_layer_renderer_configuration_get_depth_usage.md): Returns the texture usage value to apply to the layer’s depth textures.
- [cp_layer_renderer_configuration_set_depth_usage](cp_layer_renderer_configuration_set_depth_usage.md): Sets the texture usage for the layer’s depth textures to the specified value.
- [cp_layer_renderer_configuration_get_default_depth_range](cp_layer_renderer_configuration_get_default_depth_range.md): Returns the distances for the far and near clipping planes you use during drawing.
- [cp_layer_renderer_configuration_set_default_depth_range](cp_layer_renderer_configuration_set_default_depth_range.md): Sets the default distances to the far and near clipping planes you use during drawing.
