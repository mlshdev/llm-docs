> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/view/texturemap-swift.struct/viewport](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/view/texturemap-swift.struct/viewport)

# viewport (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The portion of the texture that the view uses to draw its content.

## Declaration

```swift
var viewport: MTLViewport { get }
```

<a id="discussion"></a>

## Discussion

This retrieves the size of the view and its location within the texture. If the layer dedicates a separate texture to each view, the texture bounds and view bounds match. However, if the layer uses a shared or layered texture, the view’s location or other slice index might differ.

## See Also

### Getting the view’s texture map

- [textureMap](../texturemap-swift.property.md): The texture map for a view.
- [textureIndex](textureindex.md): The index of the view’s textures in the drawable.
- [sliceIndex](sliceindex.md): The index of the view’s texture in an array-based texture type.

# cp_view_texture_map_get_viewport (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

The portion of the texture that the view uses to draw its content.

## Declaration

```objectivec
MTLViewport cp_view_texture_map_get_viewport(cp_view_texture_map_t view_texture_map);
```

## Parameters

- `view_texture_map`: The texture map for a view. Get this by calling the [cp_view_get_view_texture_map](../texturemap-swift.property.md) function.

<a id="return-value"></a>

## Return Value

A Metal viewport that specifies the view’s size and location in the texture.

<a id="discussion"></a>

## Discussion

This retrieves the size of the view and its location within the texture. If the layer dedicates a separate texture to each view, the texture bounds and view bounds match. However, if the layer uses a shared or layered texture, the view’s location or other slice index might differ.

## See Also

### Getting the view’s texture map

- [cp_view_get_view_texture_map](../texturemap-swift.property.md): The texture map for a view.
- [cp_view_texture_map_get_texture_index](textureindex.md): The index of the view’s textures in the drawable.
- [cp_view_texture_map_get_slice_index](sliceindex.md): The index of the view’s texture in an array-based texture type.
- [cp_view_texture_map_t](../../../../cp_view_texture_map_t.md): A type that provides details about the textures associated with a view.
