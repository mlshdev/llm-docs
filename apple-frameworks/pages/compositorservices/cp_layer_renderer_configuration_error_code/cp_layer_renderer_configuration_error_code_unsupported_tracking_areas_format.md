> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_configuration_error_code/cp_layer_renderer_configuration_error_code_unsupported_tracking_areas_format

# cp_layer_renderer_configuration_error_code_unsupported_tracking_areas_format

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Enumeration Case  
**Availability:** macOS 26.0+ · visionOS 26.0+

An error that indicates the layer doesn’t support the current pixel format for tracking areas textures.

## Declaration

```objectivec
cp_layer_renderer_configuration_error_code_unsupported_tracking_areas_format
```

<a id="discussion"></a>

## Discussion

Compare the value the [cp_layer_renderer_configuration_get_tracking_areas_format](../cp_layer_renderer_configuration_get_tracking_areas_format.md) function returns and make sure it matches one of the values the [cp_layer_renderer_capabilities_supported_tracking_areas_format](../cp_layer_renderer_capabilities_supported_tracking_areas_format.md) function returns.
