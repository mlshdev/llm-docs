> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_configuration_error_code/cp_layer_renderer_configuration_error_code_unsupported_render_quality](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_configuration_error_code/cp_layer_renderer_configuration_error_code_unsupported_render_quality)

# cp_layer_renderer_configuration_error_code_unsupported_render_quality

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Enumeration Case  
**Availability:** macOS 26.0+ · visionOS 26.0+

An error that indicates the configuration’s render quality is unsupported. This could be because foveation is disabled or the quality is outside of the valid range of \[0, 1\], the error `userInfo` will contain additional information.

## Declaration

```objectivec
cp_layer_renderer_configuration_error_code_unsupported_render_quality
```
