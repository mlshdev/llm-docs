> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_properties_get_texture_topology](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_properties_get_texture_topology)

# cp_layer_renderer_properties_get_texture_topology

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Retrieves the texture topology at the specified index in the layer’s properties.

## Declaration

```objectivec
cp_texture_topology_tcp_layer_renderer_properties_get_texture_topology(cp_layer_renderer_properties_t layer_properties, size_t index);
```

## Parameters

- `layer_properties`: The layer properties to query.
- `index`: A zero-based index into the list of supported texture topologies. This index must be less than the value returned by the [cp_layer_renderer_properties_get_texture_topology_count](cp_layer_renderer_properties_get_texture_topology_count.md) function.

<a id="return-value"></a>

## Return Value

The texture topology at the specified index.

<a id="discussion"></a>

## Discussion

Retrieve the topology type and use accessor functions to get details of that topology, including its type and array length. Use that information to allocate the resources you need to manage your Metal data structures.

## See Also

### Getting the layer’s texture topology

- [cp_layer_renderer_properties_get_texture_topology_count](cp_layer_renderer_properties_get_texture_topology_count.md): Returns the number of texture topologies available for you to inspect.
- [cp_texture_topology_get_array_length](texturetopology/arraylength.md): The number of items in the texture array.
- [cp_texture_topology_get_texture_type](texturetopology/texturetype.md): The texture type value that specifies how the underlying texture organizes its views.
- [cp_texture_topology_t](cp_texture_topology_t.md): A type that specifies the organization of one of the drawable’s textures.
