> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_configuration_set_drawable_render_context_raster_sample_count](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_configuration_set_drawable_render_context_raster_sample_count)

# cp_layer_renderer_configuration_set_drawable_render_context_raster_sample_count

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Sets the raster sample count for the drawable’s render context to the specified value.

## Declaration

```objectivec
void cp_layer_renderer_configuration_set_drawable_render_context_raster_sample_count(cp_layer_renderer_configuration_t configuration, int raster_sample_count);
```

## Parameters

- `configuration`: The layer configuration type to modify. The system passes an instance of this type to the [makeConfiguration(capabilities:configuration:)](compositorlayerconfiguration/makeconfiguration%28capabilities_configuration_%29.md) method of your configuration provider.
- `raster_sample_count`: The raster sample count to apply to the drawable’s render context.
