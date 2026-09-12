> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_configuration_get_supports_mtl4](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_configuration_get_supports_mtl4)

# cp_layer_renderer_configuration_get_supports_mtl4

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS · visionOS 26.0+

Get whether the layer can use Metal4 when drawing to the drawables.

## Declaration

```objectivec
bool cp_layer_renderer_configuration_get_supports_mtl4(cp_layer_renderer_configuration_t configuration);
```

## Parameters

- `configuration`: The layer configuration type to modify. The system passes an instance of this type to the [makeConfiguration(capabilities:configuration:)](compositorlayerconfiguration/makeconfiguration%28capabilities_configuration_%29.md) method of your configuration provider.

<a id="return-value"></a>

## Return Value

Whether the layer supports using Metal4, otherwise defaults to Metal3.
