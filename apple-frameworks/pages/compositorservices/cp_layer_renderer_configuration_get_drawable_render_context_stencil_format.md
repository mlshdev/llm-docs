> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_configuration_get_drawable_render_context_stencil_format](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_configuration_get_drawable_render_context_stencil_format)

# cp_layer_renderer_configuration_get_drawable_render_context_stencil_format

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns the pixel format to use for the stencil texture in drawable’s render context.

## Declaration

```objectivec
MTLPixelFormat cp_layer_renderer_configuration_get_drawable_render_context_stencil_format(cp_layer_renderer_configuration_t configuration);
```

## Parameters

- `configuration`: The layer configuration type that contains the information. The system passes an instance of this type to the [makeConfiguration(capabilities:configuration:)](compositorlayerconfiguration/makeconfiguration%28capabilities_configuration_%29.md) method of your configuration provider.

<a id="return-value"></a>

## Return Value

The pixel format to use for the drawable’s render context stencil textures.
