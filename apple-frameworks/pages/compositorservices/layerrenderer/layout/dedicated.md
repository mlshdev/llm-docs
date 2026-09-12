> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/layout/dedicated](https://developer.apple.com/documentation/compositorservices/layerrenderer/layout/dedicated)

# LayerRenderer.Layout.dedicated (Swift)

**Framework:** Compositor Services  
**Kind:** Case  
**Availability:** macOS 26.0+ · visionOS 1.0+

A layout that assigns a separate texture to each rendered view.

## Declaration

```swift
case dedicated
```

## Mentioned In

- [Drawing fully immersive content using Metal](../../drawing-fully-immersive-content-using-metal.md)

<a id="discussion"></a>

## Discussion

Each view receives its own dedicated texture, and the type of each texture is [MTLTextureType.type2D](../../../metal/mtltexturetype/type2d.md). Because each texture is separate, when there are multiple textures, you must perform a separate render pass for each texture.

## See Also

### Getting the texture layouts

- [LayerRenderer.Layout.shared](shared.md): A layout that uses a single texture to store the content for all rendered views.
- [LayerRenderer.Layout.layered](layered.md): A layout that specifies each view’s content as a slice of a single texture.

# cp_layer_renderer_layout_dedicated (Objective-C)

**Framework:** Compositor Services  
**Kind:** Enumeration Case  
**Availability:** macOS 26.0+ · visionOS 1.0+

A layout that assigns a separate texture to each rendered view.

## Declaration

```objectivec
cp_layer_renderer_layout_dedicated
```

## Mentioned In

- [Drawing fully immersive content using Metal](../../drawing-fully-immersive-content-using-metal.md)

<a id="discussion"></a>

## Discussion

Each view receives its own dedicated texture, and the type of each texture is [MTLTextureType2D](../../../metal/mtltexturetype/type2d.md). Because each texture is separate, when there are multiple textures, you must perform a separate render pass for each texture.

## See Also

### Getting the texture layouts

- [cp_layer_renderer_layout_shared](shared.md): A layout that uses a single texture to store the content for all rendered views.
- [cp_layer_renderer_layout_layered](layered.md): A layout that specifies each view’s content as a slice of a single texture.
