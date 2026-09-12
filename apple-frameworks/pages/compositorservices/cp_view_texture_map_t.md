> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_view_texture_map_t](https://developer.apple.com/documentation/compositorservices/cp_view_texture_map_t)

# cp_view_texture_map_t

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Type Alias  
**Availability:** macOS 26.0+ · visionOS 1.0+

A type that provides details about the textures associated with a view.

## Declaration

```objectivec
typedef struct cp_view_texture_map * cp_view_texture_map_t;
```

<a id="discussion"></a>

## Discussion

A texture map helps you locate the content for a specific view within a texture. Texture maps are especially important when a layer uses a single texture to manage multiple views. For example, a head-mounted display might store the images for both the left and right eyes in a single texture. Pass this type to other functions to get specific details about the current texture, such as its view bounds or its index into a texture array.

## Topics

### Getting the viewport

- [cp_view_texture_map_get_viewport](layerrenderer/drawable/view/texturemap-swift.struct/viewport.md): The portion of the texture that the view uses to draw its content.

### Getting the texture indices

- [cp_view_texture_map_get_slice_index](layerrenderer/drawable/view/texturemap-swift.struct/sliceindex.md): The index of the view’s texture in an array-based texture type.
- [cp_view_texture_map_get_texture_index](layerrenderer/drawable/view/texturemap-swift.struct/textureindex.md): The index of the view’s textures in the drawable.

## See Also

### Getting the view’s texture map

- [cp_view_get_view_texture_map](layerrenderer/drawable/view/texturemap-swift.property.md): The texture map for a view.
- [cp_view_texture_map_get_texture_index](layerrenderer/drawable/view/texturemap-swift.struct/textureindex.md): The index of the view’s textures in the drawable.
- [cp_view_texture_map_get_slice_index](layerrenderer/drawable/view/texturemap-swift.struct/sliceindex.md): The index of the view’s texture in an array-based texture type.
- [cp_view_texture_map_get_viewport](layerrenderer/drawable/view/texturemap-swift.struct/viewport.md): The portion of the texture that the view uses to draw its content.
