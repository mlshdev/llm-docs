> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/compositorservices/layerrendererconfigurationerror/unsupportedtrackingareasusage

# LayerRendererConfigurationError.unsupportedTrackingAreasUsage

**Framework:** Compositor Services  
**Kind:** Case  
**Availability:** macOS 26.0+ · visionOS 26.0+

An error that indicates the layer doesn’t support the current texture usage for tracking areas textures.

## Declaration

```swift
case unsupportedTrackingAreasUsage
```

<a id="discussion"></a>

## Discussion

Compare the value the [cp_layer_renderer_configuration_get_tracking_areas_usage](../cp_layer_renderer_configuration_get_tracking_areas_usage.md) function returns and make sure it has at least `MTLTextureUsageShaderRead` and does not contain `MTLTextureUsageShaderAtomic`
