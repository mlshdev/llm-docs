> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_get_properties](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_get_properties)

# cp_layer_renderer_get_properties

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Returns the configured properties of the specified layer.

## Declaration

```objectivec
cp_layer_renderer_properties_tcp_layer_renderer_get_properties(cp_layer_renderer_t layer_renderer);
```

## Parameters

- `layer_renderer`: The layer to query.

<a id="return-value"></a>

## Return Value

An opaque type you use to retrieve the property details.

<a id="discussion"></a>

## Discussion

The layer properties include details about the layer’s textures, such as their organization and the location of drawable views in those textures.

## See Also

### Getting a layer’s properties

- [cp_layer_renderer_properties_t](cp_layer_renderer_properties_t.md): A type that describes the organization of the layer’s textures and the relationships between those textures and the views you use for drawing.
