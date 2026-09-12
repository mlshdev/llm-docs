> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/configuration-swift.struct/depthformat](https://developer.apple.com/documentation/compositorservices/layerrenderer/configuration-swift.struct/depthformat)

# depthFormat

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The pixel format to use for the layer’s depth textures.

## Declaration

```swift
var depthFormat: MTLPixelFormat { get set }
```

<a id="discussion"></a>

## Discussion

Use this value to determine the pixel format for depth textures in a frame. At configuration time, set the value to specify which pixel format you want.

## See Also

### Configuring the depth information

- [depthUsage](depthusage.md): The texture usage value to apply to the layer’s depth textures.
- [defaultDepthRange](defaultdepthrange.md): The distances to the far and near clipping planes that define the bounds of your content.
