> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/layout/shared](https://developer.apple.com/documentation/compositorservices/layerrenderer/layout/shared)

# LayerRenderer.Layout.shared (Swift)

**Framework:** Compositor Services  
**Kind:** Case  
**Availability:** macOS 26.0+ · visionOS 1.0+

A layout that uses a single texture to store the content for all rendered views.

## Declaration

```swift
case shared
```

## Mentioned In

- [Drawing fully immersive content using Metal](../../drawing-fully-immersive-content-using-metal.md)

<a id="discussion"></a>

## Discussion

When a layer contains multiple views, the texture stores the images for those views side-by-side. The texture map for each view contains a viewport that defines the boundaries of that view’s content. The type of each texture is [MTLTextureType.type2D](../../../metal/mtltexturetype/type2d.md).

## See Also

### Getting the texture layouts

- [LayerRenderer.Layout.dedicated](dedicated.md): A layout that assigns a separate texture to each rendered view.
- [LayerRenderer.Layout.layered](layered.md): A layout that specifies each view’s content as a slice of a single texture.

# cp_layer_renderer_layout_shared (Objective-C)

**Framework:** Compositor Services  
**Kind:** Enumeration Case  
**Availability:** macOS 26.0+ · visionOS 1.0+

A layout that uses a single texture to store the content for all rendered views.

## Declaration

```objectivec
cp_layer_renderer_layout_shared
```

## Mentioned In

- [Drawing fully immersive content using Metal](../../drawing-fully-immersive-content-using-metal.md)

<a id="discussion"></a>

## Discussion

When a layer contains multiple views, the texture stores the images for those views side-by-side. The texture map for each view contains a viewport that defines the boundaries of that view’s content. The type of each texture is [MTLTextureType2D](../../../metal/mtltexturetype/type2d.md).

## See Also

### Getting the texture layouts

- [cp_layer_renderer_layout_dedicated](dedicated.md): A layout that assigns a separate texture to each rendered view.
- [cp_layer_renderer_layout_layered](layered.md): A layout that specifies each view’s content as a slice of a single texture.
