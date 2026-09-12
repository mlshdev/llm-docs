> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/configuration-swift.struct/defaultdepthrange](https://developer.apple.com/documentation/compositorservices/layerrenderer/configuration-swift.struct/defaultdepthrange)

# defaultDepthRange

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The distances to the far and near clipping planes that define the bounds of your content.

## Declaration

```swift
var defaultDepthRange: SIMD2<Float> { get set }
```

<a id="discussion"></a>

## Discussion

The near and far planes reflect the distances from the person viewing the content. Compositor Services uses these values to compute the perspective projection matrix and to clip content that is between the camera and the near plane, or located beyond the far plane.

The distances in this property are in meters. The values are in reverse-z ordering, with the value for the far plane in the vector’s `x` property and the value for the near plane in the vector’s `y` property.

## See Also

### Configuring the depth information

- [depthFormat](depthformat.md): The pixel format to use for the layer’s depth textures.
- [depthUsage](depthusage.md): The texture usage value to apply to the layer’s depth textures.
