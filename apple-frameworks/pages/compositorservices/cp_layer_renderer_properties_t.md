> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_properties_t](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_properties_t)

# cp_layer_renderer_properties_t

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Type Alias  
**Availability:** macOS 26.0+ · visionOS 1.0+

A type that describes the organization of the layer’s textures and the relationships between those textures and the views you use for drawing.

## Declaration

```objectivec
typedef CP_OBJECT_cp_layer_renderer_properties * cp_layer_renderer_properties_t;
```

<a id="discussion"></a>

## Discussion

Use the layer’s properties to configure other parts of your app. For example, use them to configure your app’s render pipeline.

You can obtain layer properties directly from your layer. If you don’t yet have the [CP_OBJECT_cp_layer_renderer](layerrenderer.md) type, you can create an equivalent set of properties using the initializer for this type.

## See Also

### Getting a layer’s properties

- [cp_layer_renderer_get_properties](cp_layer_renderer_get_properties.md): Returns the configured properties of the specified layer.
