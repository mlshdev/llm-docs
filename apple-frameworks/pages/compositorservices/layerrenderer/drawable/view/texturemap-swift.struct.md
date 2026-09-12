> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/view/texturemap-swift.struct](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/view/texturemap-swift.struct)

# LayerRenderer.Drawable.View.TextureMap

**Framework:** Compositor Services  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 1.0+

A type that provides details about the textures associated with a view.

## Declaration

```swift
struct TextureMap
```

<a id="overview"></a>

## Overview

A texture map helps you locate the content for a specific view within a texture. Texture maps are especially important when a layer uses a single texture to manage multiple views. For example, a head-mounted display might store the images for both the left and right eyes in a single texture. Pass this type to other functions to get specific details about the current texture, such as its view bounds or its index into a texture array.

## Topics

### Getting the viewport

- [viewport](texturemap-swift.struct/viewport.md): The portion of the texture that the view uses to draw its content.

### Getting the texture indices

- [sliceIndex](texturemap-swift.struct/sliceindex.md): The index of the view’s texture in an array-based texture type.
- [textureIndex](texturemap-swift.struct/textureindex.md): The index of the view’s textures in the drawable.

### Creating a texture map

- [init()](texturemap-swift.struct/init%28%29.md): Creates an uninitialized texture map.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Getting the view’s texture map

- [textureMap](texturemap-swift.property.md): The texture map for a view.
