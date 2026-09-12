> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/view/texturemap-swift.struct/sliceindex](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/view/texturemap-swift.struct/sliceindex)

# sliceIndex (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The index of the view’s texture in an array-based texture type.

## Declaration

```swift
var sliceIndex: Int { get }
```

<a id="discussion"></a>

## Discussion

Use the returned index to retrieve the view’s texture when the texture type is [MTLTextureType.type2DArray](../../../../../metal/mtltexturetype/type2darray.md). When configuring your render pass descriptor, specify the index in the [slice](../../../../../metal/mtlrenderpassattachmentdescriptor/slice.md) property of the descriptor’s color and depth attachments.

If you don’t use array-based textures for drawing, fetch the index using [textureIndex](textureindex.md) instead.

## See Also

### Getting the view’s texture map

- [textureMap](../texturemap-swift.property.md): The texture map for a view.
- [textureIndex](textureindex.md): The index of the view’s textures in the drawable.
- [viewport](viewport.md): The portion of the texture that the view uses to draw its content.

# cp_view_texture_map_get_slice_index (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

The index of the view’s texture in an array-based texture type.

## Declaration

```objectivec
size_t cp_view_texture_map_get_slice_index(cp_view_texture_map_t view_texture_map);
```

## Parameters

- `view_texture_map`: The texture map for the view.

<a id="return-value"></a>

## Return Value

The index of the color or depth texture in an array-based texture type.

<a id="discussion"></a>

## Discussion

Use the returned index to retrieve the view’s texture when the texture type is [MTLTextureType2DArray](../../../../../metal/mtltexturetype/type2darray.md). When configuring your render pass descriptor, specify the index in the [slice](../../../../../metal/mtlrenderpassattachmentdescriptor/slice.md) property of the descriptor’s color and depth attachments.

If you don’t use array-based textures for drawing, fetch the index using [cp_view_texture_map_get_texture_index](textureindex.md) instead.

## See Also

### Getting the view’s texture map

- [cp_view_get_view_texture_map](../texturemap-swift.property.md): The texture map for a view.
- [cp_view_texture_map_get_texture_index](textureindex.md): The index of the view’s textures in the drawable.
- [cp_view_texture_map_get_viewport](viewport.md): The portion of the texture that the view uses to draw its content.
- [cp_view_texture_map_t](../../../../cp_view_texture_map_t.md): A type that provides details about the textures associated with a view.
