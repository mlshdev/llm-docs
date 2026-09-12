> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_configuration_error_code/cp_layer_renderer_configuration_error_code_unsupported_tracking_areas_usage](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_configuration_error_code/cp_layer_renderer_configuration_error_code_unsupported_tracking_areas_usage)

# cp_layer_renderer_configuration_error_code_unsupported_tracking_areas_usage

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Enumeration Case  
**Availability:** macOS 26.0+ · visionOS 26.0+

An error that indicates the layer doesn’t support the current texture usage for tracking areas textures.

## Declaration

```objectivec
cp_layer_renderer_configuration_error_code_unsupported_tracking_areas_usage
```

<a id="discussion"></a>

## Discussion

Compare the value the [cp_layer_renderer_configuration_get_tracking_areas_usage](../cp_layer_renderer_configuration_get_tracking_areas_usage.md) function returns and make sure it has at least `MTLTextureUsageShaderRead` and does not contain `MTLTextureUsageShaderAtomic`
