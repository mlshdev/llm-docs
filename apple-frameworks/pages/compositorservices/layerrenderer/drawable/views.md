> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/views](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/views)

# views

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

An array of viewports that tell you how to draw to the drawable’s textures

## Declaration

```swift
var views: [LayerRenderer.Drawable.View] { get }
```

<a id="discussion"></a>

## Discussion

The drawable provides one view for each distinct image you need to render. For example, a stereoscopic display contains a separate view for each eye.

## See Also

### Getting the views

- [LayerRenderer.Drawable.View](view.md): A type that provides information on how to render content into the frame’s textures.
