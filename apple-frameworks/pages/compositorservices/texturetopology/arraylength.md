> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/texturetopology/arraylength](https://developer.apple.com/documentation/compositorservices/texturetopology/arraylength)

# arrayLength (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The number of items in the texture array.

## Declaration

```swift
var arrayLength: UInt64 { get }
```

<a id="discussion"></a>

## Discussion

Array-based texture types such as [MTLTextureType.type2DArray](../../metal/mtltexturetype/type2darray.md) manage one or more images of the same size. The array length represents the number of separate images the texture manages. Other array types store only one image.

## See Also

### Getting the layer’s texture topology

- [textureType](texturetype.md): The texture type value that specifies how the underlying texture organizes its views.

# cp_texture_topology_get_array_length (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

The number of items in the texture array.

## Declaration

```objectivec
uint64_t cp_texture_topology_get_array_length(cp_texture_topology_t texture_topology);
```

## Parameters

- `texture_topology`: A texture configuration you obtained from the layer’s properties. Fetch this value using the [cp_layer_renderer_properties_get_texture_topology](../cp_layer_renderer_properties_get_texture_topology.md) function.

<a id="return-value"></a>

## Return Value

The number of separate items in the texture array.

<a id="discussion"></a>

## Discussion

Array-based texture types such as [MTLTextureType2DArray](../../metal/mtltexturetype/type2darray.md) manage one or more images of the same size. The array length represents the number of separate images the texture manages. Other array types store only one image.

## See Also

### Getting the layer’s texture topology

- [cp_layer_renderer_properties_get_texture_topology_count](../cp_layer_renderer_properties_get_texture_topology_count.md): Returns the number of texture topologies available for you to inspect.
- [cp_layer_renderer_properties_get_texture_topology](../cp_layer_renderer_properties_get_texture_topology.md): Retrieves the texture topology at the specified index in the layer’s properties.
- [cp_texture_topology_get_texture_type](texturetype.md): The texture type value that specifies how the underlying texture organizes its views.
- [cp_texture_topology_t](../cp_texture_topology_t.md): A type that specifies the organization of one of the drawable’s textures.
