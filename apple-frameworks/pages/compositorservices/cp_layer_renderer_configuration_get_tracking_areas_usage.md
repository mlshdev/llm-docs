> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_configuration_get_tracking_areas_usage](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_configuration_get_tracking_areas_usage)

# cp_layer_renderer_configuration_get_tracking_areas_usage

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns the texture usage value to apply to the layer’s tracking areas textures.

## Declaration

```objectivec
MTLTextureUsage cp_layer_renderer_configuration_get_tracking_areas_usage(cp_layer_renderer_configuration_t configuration);
```

## Parameters

- `configuration`: The layer configuration type that contains the information. The system passes an instance of this type to the [makeConfiguration(capabilities:configuration:)](compositorlayerconfiguration/makeconfiguration%28capabilities_configuration_%29.md) method of your configuration provider.

<a id="return-value"></a>

## Return Value

The Metal texture usage value to apply to the layer’s tracking areas textures.

<a id="discussion"></a>

## Discussion

Metal optimizes texture-related operations based on the texture’s usage value. The usage value can be a combination of options. For example, a texture might be readable and writable. For more information, see [MTLTextureUsage](../metal/mtltextureusage.md).
