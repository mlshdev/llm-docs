> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_configuration_get_layout](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_configuration_get_layout)

# cp_layer_renderer_configuration_get_layout

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Returns the texture configuration for the drawable views in the layer.

## Declaration

```objectivec
cp_layer_renderer_layout cp_layer_renderer_configuration_get_layout(cp_layer_renderer_configuration_t configuration);
```

## Parameters

- `configuration`: The layer configuration details.

<a id="return-value"></a>

## Return Value

The layout of the textures in the layer.

<a id="discussion"></a>

## Discussion

Layouts define how Compositor Services creates the color and depth textures it passes to your app. A layout might use separate textures for each view, or combine the content from multiple views into a single texture. The layout type also determines which Metal texture type the compositor creates for you. For more information about the supported layouts, see `cp_layer_renderer_layout`.

## See Also

### Configuring the texture layout

- [cp_layer_renderer_configuration_set_layout](cp_layer_renderer_configuration_set_layout.md): Changes the layout configuration for the drawable views in the layer.
- [cp_layer_renderer_layout](layerrenderer/layout.md): Constants that specify the organization of the textures you use for drawing.
