> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_configuration_set_supports_mtl4

# cp_layer_renderer_configuration_set_supports_mtl4

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Set whether the layer can use Metal4 when drawing to the drawables.

## Declaration

```objectivec
void cp_layer_renderer_configuration_set_supports_mtl4(cp_layer_renderer_configuration_t configuration, bool supports_mtl4);
```

## Parameters

- `configuration`: The layer configuration type to modify. The system passes an instance of this type to the [makeConfiguration(capabilities:configuration:)](compositorlayerconfiguration/makeconfiguration%28capabilities_configuration_%29.md) method of your configuration provider.
- `supports_mtl4`: Whether the layer supports using Metal4, otherwise defaults to Metal3.
