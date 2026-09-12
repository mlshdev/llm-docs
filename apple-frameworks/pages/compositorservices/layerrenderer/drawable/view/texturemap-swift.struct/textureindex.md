> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/view/texturemap-swift.struct/textureindex](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/view/texturemap-swift.struct/textureindex)

# textureIndex (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The index of the view’s textures in the drawable.

## Declaration

```swift
var textureIndex: Int { get }
```

<a id="discussion"></a>

## Discussion

Compositor Services places the color and depth textures for this view at same index number in the drawable. Use the returned index to the [colorTextures](../../colortextures.md) or [depthTextures](../../depthtextures.md) properties to retrieve the appropriate texture.

Compositor Services places the color and depth textures for this view at same index number in the drawable. In Swift, the index applies to the [colorTextures](../../colortextures.md)and [depthTextures](../../depthtextures.md) properties. In ObjectiveC, the index applies to the [cp_drawable_get_color_texture](../../../../cp_drawable_get_color_texture.md) and [cp_drawable_get_depth_texture](../../../../cp_drawable_get_depth_texture.md) functions.

> **Note**

>  If you draw with array-based textures, retrieve and apply the index from [sliceIndex](sliceindex.md) instead.

## See Also

### Getting the view’s texture map

- [textureMap](../texturemap-swift.property.md): The texture map for a view.
- [sliceIndex](sliceindex.md): The index of the view’s texture in an array-based texture type.
- [viewport](viewport.md): The portion of the texture that the view uses to draw its content.

# cp_view_texture_map_get_texture_index (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

The index of the view’s textures in the drawable.

## Declaration

```objectivec
size_t cp_view_texture_map_get_texture_index(cp_view_texture_map_t view_texture_map);
```

## Parameters

- `view_texture_map`: The texture map for the view.

<a id="return-value"></a>

## Return Value

The index of the color or depth texture in the drawable.

<a id="discussion"></a>

## Discussion

Compositor Services places the color and depth textures for this view at same index number in the drawable. Use the returned index to the [colorTextures](../../colortextures.md) or [depthTextures](../../depthtextures.md) properties to retrieve the appropriate texture.

Compositor Services places the color and depth textures for this view at same index number in the drawable. In Swift, the index applies to the [colorTextures](../../colortextures.md)and [depthTextures](../../depthtextures.md) properties. In ObjectiveC, the index applies to the [cp_drawable_get_color_texture](../../../../cp_drawable_get_color_texture.md) and [cp_drawable_get_depth_texture](../../../../cp_drawable_get_depth_texture.md) functions.

> **Note**

>  If you draw with array-based textures, retrieve and apply the index from [cp_view_texture_map_get_slice_index](sliceindex.md) instead.

## See Also

### Getting the view’s texture map

- [cp_view_get_view_texture_map](../texturemap-swift.property.md): The texture map for a view.
- [cp_view_texture_map_get_slice_index](sliceindex.md): The index of the view’s texture in an array-based texture type.
- [cp_view_texture_map_get_viewport](viewport.md): The portion of the texture that the view uses to draw its content.
- [cp_view_texture_map_t](../../../../cp_view_texture_map_t.md): A type that provides details about the textures associated with a view.
