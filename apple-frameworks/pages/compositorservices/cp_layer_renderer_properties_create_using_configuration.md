> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_properties_create_using_configuration](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_properties_create_using_configuration)

# cp_layer_renderer_properties_create_using_configuration

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Creates a new opaque type to store layer-related properties.

## Declaration

```objectivec
cp_layer_renderer_properties_tcp_layer_renderer_properties_create_using_configuration(cp_layer_renderer_configuration_t configuration, CFErrorRef*error);
```

## Parameters

- `configuration`: The configuration details for your layer. Compositor Services uses this information to configure the properties an equivalent layer would use.
- `error`: A pointer to an error object. On success, the function sets this value to `nil`. If an error occurs, the function sets the value of the pointer to an error object with details about what happened.

<a id="return-value"></a>

## Return Value

A new layer properties type with details about how the layer configures its topologies and texture maps. The function returns `nil` if an error occurs.

<a id="discussion"></a>

## Discussion

Call this function to create a set of layer properties when you don’t yet have a [CP_OBJECT_cp_layer_renderer](layerrenderer.md) type. This function generates an equivalent set of properties for the configuration you provide. You can use those properties to configure other parts of your app before the layer becomes available. For example, you might use the information to configure portions of your app’s render pipeline.
