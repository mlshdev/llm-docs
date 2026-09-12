> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_configuration_get_generate_flipped_rasterization_rate_maps](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_configuration_get_generate_flipped_rasterization_rate_maps)

# cp_layer_renderer_configuration_get_generate_flipped_rasterization_rate_maps

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the layer renderer provides rasterization rate maps flipped around the y-axis.

## Declaration

```objectivec
bool cp_layer_renderer_configuration_get_generate_flipped_rasterization_rate_maps(cp_layer_renderer_configuration_t configuration);
```

## Parameters

- `configuration`: The layer configuration details.

<a id="return-value"></a>

## Return Value

`true` if the layer renderer generates both flipped and nonflipped rasterization rate maps, or `false` if it generates only nonflipped rasterization rate maps.

<a id="discussion"></a>

## Discussion

If foveation is disabled, the layer renderer doesn’t generate any rasterization rate maps, regardless of this function’s return value.

## See Also

### Configuring the foveation setting

- [cp_layer_renderer_configuration_get_foveation_enabled](cp_layer_renderer_configuration_get_foveation_enabled.md): Returns a Boolean value that indicates whether the layer supports variable rasterization rates.
- [cp_layer_renderer_configuration_set_foveation_enabled](cp_layer_renderer_configuration_set_foveation_enabled.md): Changes the setting that indicates whether the layer supports variable rasterization rates.
- [cp_layer_renderer_configuration_set_generate_flipped_rasterization_rate_maps](cp_layer_renderer_configuration_set_generate_flipped_rasterization_rate_maps.md): Changes the layer renderer setting that provides rasterization rate maps flipped around the y-axis.
