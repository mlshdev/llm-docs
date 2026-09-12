> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_texture_topology_t](https://developer.apple.com/documentation/compositorservices/cp_texture_topology_t)

# cp_texture_topology_t

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Type Alias  
**Availability:** macOS 26.0+ · visionOS 1.0+

A type that specifies the organization of one of the drawable’s textures.

## Declaration

```objectivec
typedef struct cp_texture_topology * cp_texture_topology_t;
```

<a id="discussion"></a>

## Discussion

Metal supports multiple organizations for the textures you use for drawing. Use this type to identify one of the organizations available to use in your app.

## Topics

### Getting the topology type

- [cp_texture_topology_get_texture_type](texturetopology/texturetype.md): The texture type value that specifies how the underlying texture organizes its views.

### Getting the array length

- [cp_texture_topology_get_array_length](texturetopology/arraylength.md): The number of items in the texture array.

## See Also

### Getting the layer’s texture topology

- [cp_layer_renderer_properties_get_texture_topology_count](cp_layer_renderer_properties_get_texture_topology_count.md): Returns the number of texture topologies available for you to inspect.
- [cp_layer_renderer_properties_get_texture_topology](cp_layer_renderer_properties_get_texture_topology.md): Retrieves the texture topology at the specified index in the layer’s properties.
- [cp_texture_topology_get_array_length](texturetopology/arraylength.md): The number of items in the texture array.
- [cp_texture_topology_get_texture_type](texturetopology/texturetype.md): The texture type value that specifies how the underlying texture organizes its views.
