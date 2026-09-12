> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrendererconfigurationerror/unsupportedtrackingareasformat](https://developer.apple.com/documentation/compositorservices/layerrendererconfigurationerror/unsupportedtrackingareasformat)

# LayerRendererConfigurationError.unsupportedTrackingAreasFormat

**Framework:** Compositor Services  
**Kind:** Case  
**Availability:** macOS 26.0+ · visionOS 26.0+

An error that indicates the layer doesn’t support the current pixel format for tracking areas textures.

## Declaration

```swift
case unsupportedTrackingAreasFormat
```

<a id="discussion"></a>

## Discussion

Compare the value the [cp_layer_renderer_configuration_get_tracking_areas_format](../cp_layer_renderer_configuration_get_tracking_areas_format.md) function returns and make sure it matches one of the values the [cp_layer_renderer_capabilities_supported_tracking_areas_format](../cp_layer_renderer_capabilities_supported_tracking_areas_format.md) function returns.
