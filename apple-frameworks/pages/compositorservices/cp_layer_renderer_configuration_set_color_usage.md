> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_configuration_set_color_usage](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_configuration_set_color_usage)

# cp_layer_renderer_configuration_set_color_usage

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Sets the texture usage for the layer’s color textures to the specified value.

## Declaration

```objectivec
void cp_layer_renderer_configuration_set_color_usage(cp_layer_renderer_configuration_t configuration, MTLTextureUsage color_usage);
```

## Parameters

- `configuration`: The layer configuration details.
- `color_usage`: The Metal texture usage value to apply to the layer’s color textures.

<a id="discussion"></a>

## Discussion

Use this function to modify the configuration details for your layer. Metal optimizes texture-related operations based on the texture’s usage value. The usage value can be a combination of options. For more information, see [MTLTextureUsage](../metal/mtltextureusage.md).

## See Also

### Configuring the color textures

- [cp_layer_renderer_configuration_get_color_format](cp_layer_renderer_configuration_get_color_format.md): Returns the pixel format to use for the layer’s color textures.
- [cp_layer_renderer_configuration_set_color_format](cp_layer_renderer_configuration_set_color_format.md): Sets the pixel format for the layer’s color textures to the specified value.
- [cp_layer_renderer_configuration_get_color_usage](cp_layer_renderer_configuration_get_color_usage.md): Returns the texture usage value to apply to the layer’s color textures.
