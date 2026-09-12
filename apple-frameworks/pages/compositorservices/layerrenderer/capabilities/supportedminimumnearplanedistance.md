> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/capabilities/supportedminimumnearplanedistance](https://developer.apple.com/documentation/compositorservices/layerrenderer/capabilities/supportedminimumnearplanedistance)

# supportedMinimumNearPlaneDistance

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The minimum distance in meters to the layer’s near projection plane.

## Declaration

```swift
var supportedMinimumNearPlaneDistance: Float { get }
```

<a id="discussion"></a>

## Discussion

Compositor Services uses the near and far projection planes to compute the perspective projection matrix and to clip content that’s too close to the camera, or too far from it. This property stores the minimum distance to the near plane that the layer allows. When you configure your layer, you can specify a different near-plane distance, but that value must be greater than or equal to the minimum distance.
