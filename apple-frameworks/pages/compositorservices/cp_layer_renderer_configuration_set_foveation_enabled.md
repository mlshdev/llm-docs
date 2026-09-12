> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_configuration_set_foveation_enabled](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_configuration_set_foveation_enabled)

# cp_layer_renderer_configuration_set_foveation_enabled

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Changes the setting that indicates whether the layer supports variable rasterization rates.

## Declaration

```objectivec
void cp_layer_renderer_configuration_set_foveation_enabled(cp_layer_renderer_configuration_t configuration, bool foveation_enabled);
```

## Parameters

- `configuration`: The layer configuration details.
- `foveation_enabled`: `true` to enable variable rasterization rates in the layer, or `false` to render everything at the same resolution.

<a id="discussion"></a>

## Discussion

Foveation support lets you reduce the amount of high-resolution drawing you do. If you enable foveation, the drawable resource for each frame reduces the size of the texture you use for rendering. The drawable also provides rasterization rate maps that specify the amount of rasterization to apply to different parts of the texture. When rendering your scene, the GPU generates fewer pixels in areas with low rasterization rates, and then scales up those areas before displaying them.

## See Also

### Configuring the foveation setting

- [cp_layer_renderer_configuration_get_foveation_enabled](cp_layer_renderer_configuration_get_foveation_enabled.md): Returns a Boolean value that indicates whether the layer supports variable rasterization rates.
- [cp_layer_renderer_configuration_get_generate_flipped_rasterization_rate_maps](cp_layer_renderer_configuration_get_generate_flipped_rasterization_rate_maps.md): Returns a Boolean value that indicates whether the layer renderer provides rasterization rate maps flipped around the y-axis.
- [cp_layer_renderer_configuration_set_generate_flipped_rasterization_rate_maps](cp_layer_renderer_configuration_set_generate_flipped_rasterization_rate_maps.md): Changes the layer renderer setting that provides rasterization rate maps flipped around the y-axis.
