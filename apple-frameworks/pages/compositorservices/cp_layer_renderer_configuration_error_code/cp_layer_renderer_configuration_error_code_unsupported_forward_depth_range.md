> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_configuration_error_code/cp_layer_renderer_configuration_error_code_unsupported_forward_depth_range](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_configuration_error_code/cp_layer_renderer_configuration_error_code_unsupported_forward_depth_range)

# cp_layer_renderer_configuration_error_code_unsupported_forward_depth_range

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Enumeration Case  
**Availability:** macOS 26.0+ · visionOS 1.0+

An error that indicates the depth range values aren’t in reverse-z order.

## Declaration

```objectivec
cp_layer_renderer_configuration_error_code_unsupported_forward_depth_range
```

<a id="discussion"></a>

## Discussion

When you call [cp_drawable_set_depth_range](../cp_drawable_set_depth_range.md), make sure the first value in your `depth_range` vector contains the value for the far plane. In addition, make sure the distance to the far plane is greater than the distance to the near plane.

## See Also

### Getting the configuration errors

- [cp_layer_renderer_configuration_error_code_layout_not_supported](cp_layer_renderer_configuration_error_code_layout_not_supported.md): An error that indicates the configuration’s current layout value is invalid.
- [cp_layer_renderer_configuration_error_code_missing_configuration](cp_layer_renderer_configuration_error_code_missing_configuration.md): An error that indicates the system didn’t find a default layer configuration.
- [cp_layer_renderer_configuration_error_code_not_enough_frames_requested](cp_layer_renderer_configuration_error_code_not_enough_frames_requested.md): An error that indicates not enough frames are available for rendering.
- [cp_layer_renderer_configuration_error_code_temporal_anti_aliasing_not_supported](cp_layer_renderer_configuration_error_code_temporal_anti_aliasing_not_supported.md): An error that occurs when you try to enable temporal anti-aliasing but the current configuration parameters don’t support it.
- [cp_layer_renderer_configuration_error_code_too_many_frames_requested](cp_layer_renderer_configuration_error_code_too_many_frames_requested.md): An error that indicates your app requested too many frames for rendering.
- [cp_layer_renderer_configuration_error_code_unsupported_near_plane_distance](cp_layer_renderer_configuration_error_code_unsupported_near_plane_distance.md): An error that indicates the near plane of the client is closer than the minimum supported distance.
- [cp_layer_renderer_configuration_error_code_variable_rasterization_rate_is_not_supported](cp_layer_renderer_configuration_error_code_variable_rasterization_rate_is_not_supported.md): An error that indicates foveation is enabled but not supported.
- [cp_layer_renderer_configuration_error_code_unsupported_color_format](cp_layer_renderer_configuration_error_code_unsupported_color_format.md): An error that indicates the system doesn’t support the specified color format choice.
- [cp_layer_renderer_configuration_error_code_unsupported_color_usage](cp_layer_renderer_configuration_error_code_unsupported_color_usage.md): An error that indicates the system doesn’t support the specified color usage option.
- [cp_layer_renderer_configuration_error_code_unsupported_depth_format](cp_layer_renderer_configuration_error_code_unsupported_depth_format.md): An error that indicates the system doesn’t support the specified depth format choice.
- [cp_layer_renderer_configuration_error_code_unsupported_depth_usage](cp_layer_renderer_configuration_error_code_unsupported_depth_usage.md): An error that indicates the system doesn’t support the specified depth usage choice.
