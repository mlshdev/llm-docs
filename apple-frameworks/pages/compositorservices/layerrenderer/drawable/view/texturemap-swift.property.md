> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/view/texturemap-swift.property](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/view/texturemap-swift.property)

# textureMap (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The texture map for a view.

## Declaration

```swift
var textureMap: LayerRenderer.Drawable.View.TextureMap { get }
```

<a id="discussion"></a>

## Discussion

Use the texture map to fetch additional information you need to draw your content. For example, use it to fetch the rectangle that defines the view’s content area.

## See Also

### Getting the view’s texture map

- [LayerRenderer.Drawable.View.TextureMap](texturemap-swift.struct.md): A type that provides details about the textures associated with a view.

# cp_view_get_view_texture_map (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

The texture map for a view.

## Declaration

```objectivec
cp_view_texture_map_tcp_view_get_view_texture_map(cp_view_t view);
```

## Parameters

- `view`: A view associated with your drawable.

<a id="return-value"></a>

## Return Value

The texture map assigned to the specified view.

<a id="discussion"></a>

## Discussion

Use the texture map to fetch additional information you need to draw your content. For example, use it to fetch the rectangle that defines the view’s content area.
