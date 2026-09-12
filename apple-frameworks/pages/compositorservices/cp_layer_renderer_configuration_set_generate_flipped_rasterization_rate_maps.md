> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_configuration_set_generate_flipped_rasterization_rate_maps](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_configuration_set_generate_flipped_rasterization_rate_maps)

# cp_layer_renderer_configuration_set_generate_flipped_rasterization_rate_maps

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Changes the layer renderer setting that provides rasterization rate maps flipped around the y-axis.

## Declaration

```objectivec
void cp_layer_renderer_configuration_set_generate_flipped_rasterization_rate_maps(cp_layer_renderer_configuration_t configuration, bool generate_flipped_rasterization_rate_maps);
```

## Parameters

- `configuration`: The layer configuration details.
- `generate_flipped_rasterization_rate_maps`: `true` if you want the layer renderer to generate nonflipped rasterization rate maps. Specify `false` to generate only nonflipped rasterization rate maps.

<a id="discussion"></a>

## Discussion

If foveation is disabled, the layer renderer doesn’t generate any rasterization rate maps, regardless of the value you pass to this function.

To generate flipped rasterization rate maps, the system must perform extra computational work during your app’s render loop. Enable this support only if your drawing engine requires these extra rate maps and you can afford the extra cost.

## See Also

### Configuring the foveation setting

- [cp_layer_renderer_configuration_get_foveation_enabled](cp_layer_renderer_configuration_get_foveation_enabled.md): Returns a Boolean value that indicates whether the layer supports variable rasterization rates.
- [cp_layer_renderer_configuration_set_foveation_enabled](cp_layer_renderer_configuration_set_foveation_enabled.md): Changes the setting that indicates whether the layer supports variable rasterization rates.
- [cp_layer_renderer_configuration_get_generate_flipped_rasterization_rate_maps](cp_layer_renderer_configuration_get_generate_flipped_rasterization_rate_maps.md): Returns a Boolean value that indicates whether the layer renderer provides rasterization rate maps flipped around the y-axis.
