> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_configuration_get_default_depth_range](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_configuration_get_default_depth_range)

# cp_layer_renderer_configuration_get_default_depth_range

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Returns the distances for the far and near clipping planes you use during drawing.

## Declaration

```objectivec
simd_float2 cp_layer_renderer_configuration_get_default_depth_range(cp_layer_renderer_configuration_t configuration);
```

## Parameters

- `configuration`: The layer configuration details.

<a id="return-value"></a>

## Return Value

The distances to the far and near planes in meters. Compositor Services returns values in reverse-z ordering, with the value for the far plane in the vector’s `x` property and the value for the near plane in the vector’s `y` property.

<a id="discussion"></a>

## Discussion

The near and far planes reflect the distances from the person viewing the content. Compositor Services uses these values to compute the perspective projection matrix and to clip content that is between the camera and the near plane, or located beyond the far plane.

## See Also

### Configuring the depth information

- [cp_layer_renderer_configuration_get_depth_format](cp_layer_renderer_configuration_get_depth_format.md): Returns the pixel format to use for the layer’s depth textures.
- [cp_layer_renderer_configuration_set_depth_format](cp_layer_renderer_configuration_set_depth_format.md): Sets the pixel format for the layer’s depth textures to the specified value.
- [cp_layer_renderer_configuration_get_depth_usage](cp_layer_renderer_configuration_get_depth_usage.md): Returns the texture usage value to apply to the layer’s depth textures.
- [cp_layer_renderer_configuration_set_depth_usage](cp_layer_renderer_configuration_set_depth_usage.md): Sets the texture usage for the layer’s depth textures to the specified value.
- [cp_layer_renderer_configuration_set_default_depth_range](cp_layer_renderer_configuration_set_default_depth_range.md): Sets the default distances to the far and near clipping planes you use during drawing.
