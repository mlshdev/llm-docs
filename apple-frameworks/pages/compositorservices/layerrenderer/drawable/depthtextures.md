> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/depthtextures](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/depthtextures)

# depthTextures

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

An array of depth textures to use to render the current frame.

## Declaration

```swift
var depthTextures: [any MTLTexture] { get }
```

<a id="discussion"></a>

## Discussion

The layer’s texture topology determines the total number of textures in the array, and the layout and content for each texture. Use the drawable’s views to map your content into specific portions of the textures.

## See Also

### Getting the render textures

- [colorTextures](colortextures.md): An array of color textures to use to render the current frame.
