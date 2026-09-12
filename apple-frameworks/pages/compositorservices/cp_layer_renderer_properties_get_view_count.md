> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_properties_get_view_count](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_properties_get_view_count)

# cp_layer_renderer_properties_get_view_count

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Returns the number of views that you must fill with content.

## Declaration

```objectivec
size_t cp_layer_renderer_properties_get_view_count(cp_layer_renderer_properties_t layer_properties);
```

## Parameters

- `layer_properties`: The layer properties to query.

<a id="return-value"></a>

## Return Value

The number of views to fill with content. Fetch the views from the drawable of each frame.

<a id="discussion"></a>

## Discussion

This method tells you how many views you’re responsible for filling with your content. For example, this function returns `1` for a monoscopic display and `2` for a stereoscopic display.

## See Also

### Getting view port information

- [cp_view_texture_map_get_viewport](layerrenderer/drawable/view/texturemap-swift.struct/viewport.md): The portion of the texture that the view uses to draw its content.
