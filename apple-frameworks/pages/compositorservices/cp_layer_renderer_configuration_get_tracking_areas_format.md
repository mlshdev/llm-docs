> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_configuration_get_tracking_areas_format](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_configuration_get_tracking_areas_format)

# cp_layer_renderer_configuration_get_tracking_areas_format

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns the pixel format to apply to the layer’s tracking areas textures.

## Declaration

```objectivec
MTLPixelFormat cp_layer_renderer_configuration_get_tracking_areas_format(cp_layer_renderer_configuration_t configuration);
```

## Parameters

- `configuration`: The layer configuration type that contains the information. The system passes an instance of this type to the [makeConfiguration(capabilities:configuration:)](compositorlayerconfiguration/makeconfiguration%28capabilities_configuration_%29.md) method of your configuration provider.

<a id="return-value"></a>

## Return Value

The pixel format to apply to the layer’s tracking areas textures.

<a id="discussion"></a>

## Discussion

The compositor creates the tracking areas textures using the pixel format information you provide.
