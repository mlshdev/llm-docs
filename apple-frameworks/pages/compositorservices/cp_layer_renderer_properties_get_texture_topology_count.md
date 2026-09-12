> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_properties_get_texture_topology_count](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_properties_get_texture_topology_count)

# cp_layer_renderer_properties_get_texture_topology_count

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Returns the number of texture topologies available for you to inspect.

## Declaration

```objectivec
size_t cp_layer_renderer_properties_get_texture_topology_count(cp_layer_renderer_properties_t layer_properties);
```

## Parameters

- `layer_properties`: The layer properties to query.

<a id="return-value"></a>

## Return Value

The number of texture topologies the layer supports.

<a id="discussion"></a>

## Discussion

The layer’s configuration determines the total number of available topologies, and each topology contains details about one texture you use for rendering. Fetch the topology details using the [cp_layer_renderer_properties_get_texture_topology](cp_layer_renderer_properties_get_texture_topology.md) function.

## See Also

### Getting the layer’s texture topology

- [cp_layer_renderer_properties_get_texture_topology](cp_layer_renderer_properties_get_texture_topology.md): Retrieves the texture topology at the specified index in the layer’s properties.
- [cp_texture_topology_get_array_length](texturetopology/arraylength.md): The number of items in the texture array.
- [cp_texture_topology_get_texture_type](texturetopology/texturetype.md): The texture type value that specifies how the underlying texture organizes its views.
- [cp_texture_topology_t](cp_texture_topology_t.md): A type that specifies the organization of one of the drawable’s textures.
