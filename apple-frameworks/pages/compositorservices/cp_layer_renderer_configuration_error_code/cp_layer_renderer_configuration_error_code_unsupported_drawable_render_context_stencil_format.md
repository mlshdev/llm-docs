> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_configuration_error_code/cp_layer_renderer_configuration_error_code_unsupported_drawable_render_context_stencil_format](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_configuration_error_code/cp_layer_renderer_configuration_error_code_unsupported_drawable_render_context_stencil_format)

# cp_layer_renderer_configuration_error_code_unsupported_drawable_render_context_stencil_format

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Enumeration Case  
**Availability:** macOS 26.0+ · visionOS 26.0+

An error that indicates the layer doesn’t support the current pixel format for stencil texture.

## Declaration

```objectivec
cp_layer_renderer_configuration_error_code_unsupported_drawable_render_context_stencil_format
```

<a id="discussion"></a>

## Discussion

Compare the value the [cp_layer_renderer_configuration_get_drawable_render_context_stencil_format](../cp_layer_renderer_configuration_get_drawable_render_context_stencil_format.md) function returns and make sure it matches one of the values the [cp_layer_renderer_capabilities_drawable_render_context_supported_stencil_format](../cp_layer_renderer_capabilities_drawable_render_context_supported_stencil_format.md) function returns.
