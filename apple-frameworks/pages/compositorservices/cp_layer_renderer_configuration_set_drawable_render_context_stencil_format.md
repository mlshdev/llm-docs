> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_configuration_set_drawable_render_context_stencil_format

# cp_layer_renderer_configuration_set_drawable_render_context_stencil_format

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Sets the pixel format for the drawable’s render context stencil textures to the specified value.

## Declaration

```objectivec
void cp_layer_renderer_configuration_set_drawable_render_context_stencil_format(cp_layer_renderer_configuration_t configuration, MTLPixelFormat stencil_format);
```

## Parameters

- `configuration`: The layer configuration type to modify. The system passes an instance of this type to the [makeConfiguration(capabilities:configuration:)](compositorlayerconfiguration/makeconfiguration%28capabilities_configuration_%29.md) method of your configuration provider.
- `stencil_format`: The pixel format to apply to the drawable’s render context stencil textures.
