> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/view](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/view)

# LayerRenderer.Drawable.View

**Framework:** Compositor Services  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 1.0+

A type that provides information on how to render content into the frame’s textures.

## Declaration

```swift
struct View
```

<a id="overview"></a>

## Overview

Compositor Services provides a view for each distinct render viewpoint. For example, a head-mounted display typically contains two views: one for each eye. Use the information in the views to set up your render pass descriptor, or to determine which part of a texture to fill with content.

## Topics

### Getting the view’s texture map

- [textureMap](view/texturemap-swift.property.md): The texture map for a view.
- [LayerRenderer.Drawable.View.TextureMap](view/texturemap-swift.struct.md): A type that provides details about the textures associated with a view.

### Getting the transformations

- [transform](view/transform.md): The transformation matrix that converts between the device’s coordinate space to the position of the view in that space.
- [tangents](view/tangents.md): Deprecated. The tangent values for the angles you use to determine the planes of the viewing frustum.

### Creating a view

- [init()](view/init%28%29.md): Creates a view type.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Drawing environment

- [LayerRenderer.Drawable](../drawable.md): A type that provides the textures and information you need to draw a frame of content.
