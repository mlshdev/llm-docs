> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/layout/layered](https://developer.apple.com/documentation/compositorservices/layerrenderer/layout/layered)

# LayerRenderer.Layout.layered (Swift)

**Framework:** Compositor Services  
**Kind:** Case  
**Availability:** macOS 26.0+ · visionOS 1.0+

A layout that specifies each view’s content as a slice of a single texture.

## Declaration

```swift
case layered
```

## Mentioned In

- [Drawing fully immersive content using Metal](../../drawing-fully-immersive-content-using-metal.md)

<a id="discussion"></a>

## Discussion

The layout uses a single texture to store the content for all rendered views. The type of the texture is [MTLTextureType.type2DArray](../../../metal/mtltexturetype/type2darray.md). The texture map’s slice index indicates which array slot contains each view’s content.

## See Also

### Getting the texture layouts

- [LayerRenderer.Layout.dedicated](dedicated.md): A layout that assigns a separate texture to each rendered view.
- [LayerRenderer.Layout.shared](shared.md): A layout that uses a single texture to store the content for all rendered views.

# cp_layer_renderer_layout_layered (Objective-C)

**Framework:** Compositor Services  
**Kind:** Enumeration Case  
**Availability:** macOS 26.0+ · visionOS 1.0+

A layout that specifies each view’s content as a slice of a single texture.

## Declaration

```objectivec
cp_layer_renderer_layout_layered
```

## Mentioned In

- [Drawing fully immersive content using Metal](../../drawing-fully-immersive-content-using-metal.md)

<a id="discussion"></a>

## Discussion

The layout uses a single texture to store the content for all rendered views. The type of the texture is [MTLTextureType2DArray](../../../metal/mtltexturetype/type2darray.md). The texture map’s slice index indicates which array slot contains each view’s content.

## See Also

### Getting the texture layouts

- [cp_layer_renderer_layout_dedicated](dedicated.md): A layout that assigns a separate texture to each rendered view.
- [cp_layer_renderer_layout_shared](shared.md): A layout that uses a single texture to store the content for all rendered views.
