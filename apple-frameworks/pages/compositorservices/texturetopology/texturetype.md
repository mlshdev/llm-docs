> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/texturetopology/texturetype](https://developer.apple.com/documentation/compositorservices/texturetopology/texturetype)

# textureType (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The texture type value that specifies how the underlying texture organizes its views.

## Declaration

```swift
var textureType: MTLTextureType { get }
```

<a id="discussion"></a>

## Discussion

A texture might store the content of one view or multiple views. For example, a single texture might store one or both views for the left and right eyes of a head-mounted display. The texture type indicates this content organization strategy.

## See Also

### Getting the layer’s texture topology

- [arrayLength](arraylength.md): The number of items in the texture array.

# cp_texture_topology_get_texture_type (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

The texture type value that specifies how the underlying texture organizes its views.

## Declaration

```objectivec
MTLTextureType cp_texture_topology_get_texture_type(cp_texture_topology_t texture_topology);
```

## Parameters

- `texture_topology`: A texture configuration you obtain from the layer’s properties. Fetch this value using the [cp_layer_renderer_properties_get_texture_topology](../cp_layer_renderer_properties_get_texture_topology.md) function.

<a id="return-value"></a>

## Return Value

A value that indicates the arrangement of views within the texture.

<a id="discussion"></a>

## Discussion

A texture might store the content of one view or multiple views. For example, a single texture might store one or both views for the left and right eyes of a head-mounted display. The texture type indicates this content organization strategy.

## See Also

### Getting the layer’s texture topology

- [cp_layer_renderer_properties_get_texture_topology_count](../cp_layer_renderer_properties_get_texture_topology_count.md): Returns the number of texture topologies available for you to inspect.
- [cp_layer_renderer_properties_get_texture_topology](../cp_layer_renderer_properties_get_texture_topology.md): Retrieves the texture topology at the specified index in the layer’s properties.
- [cp_texture_topology_get_array_length](arraylength.md): The number of items in the texture array.
- [cp_texture_topology_t](../cp_texture_topology_t.md): A type that specifies the organization of one of the drawable’s textures.
