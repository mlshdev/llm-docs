> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_configuration_set_tracking_areas_usage

# cp_layer_renderer_configuration_set_tracking_areas_usage

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Sets the texture usage for the layer’s tracking areas textures to the specified value.

## Declaration

```objectivec
void cp_layer_renderer_configuration_set_tracking_areas_usage(cp_layer_renderer_configuration_t configuration, MTLTextureUsage tracking_areas_usage);
```

## Parameters

- `configuration`: The layer configuration type to modify. The system passes an instance of this type to the [makeConfiguration(capabilities:configuration:)](compositorlayerconfiguration/makeconfiguration%28capabilities_configuration_%29.md) method of your configuration provider.
- `tracking_areas_usage`: The usage value to apply to the layer’s tracking areas textures.

<a id="discussion"></a>

## Discussion

Use this function to modify the configuration details for your layer.
