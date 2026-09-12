> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/renderoptions-swift.struct/disablecameragrain](https://developer.apple.com/documentation/realitykit/arview/renderoptions-swift.struct/disablecameragrain)

# disableCameraGrain

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

Disable the image noise effect.

## Declaration

```swift
static let disableCameraGrain: ARView.RenderOptions
```

<a id="discussion"></a>

## Discussion

Images from a camera may contain a small amount of noise, called *camera grain*, that increases as the available light decreases. Virtual objects rendered without noise and placed into an otherwise grainy image look out of place. You can use RealityKit to add noise to the rendered output to match noise in the camera feed.

| Without camera grain | With camera grain |
| --- | --- |
| ![A screenshot of a scene with a blue sphere on a white surface. The white surface has grain, but the blue sphere does not, which makes the sphere appear out of place.](https://developer.apple.com/images/com.apple.RealityKit/ARView-RenderOptions-swift-struct-disableCameraGrain-without.jpg) | ![A screenshot of a scene with a blue sphere on a white surface. The white surface and the sphere both have gain, which makes the sphere better blend into the surroundings.](https://developer.apple.com/images/com.apple.RealityKit/ARView-RenderOptions-swift-struct-disableCameraGrain-with.jpg) |

Applying this effect involves a low, constant GPU cost. If necessary, you can disable the effect by adding the [disableCameraGrain](disablecameragrain.md) option to the view’s [renderOptions](../renderoptions-swift.property.md) set. Disabling the effect is most useful for older devices, like those with an A9 processor or earlier.

When deciding whether to use any effect, be sure to consider your app’s CPU and GPU utilization, as described in [Improving the Performance of a RealityKit App](../../improving-the-performance-of-a-realitykit-app.md).

## See Also

### Disabling rendering effects

- [disableHDR](disablehdr.md): Disable the high dynamic range post-processing effect.
- [disableGroundingShadows](disablegroundingshadows.md): Disable rendering of ambient occlusion and shadows that ground objects in an AR scene.
- [disableMotionBlur](disablemotionblur.md): Disable the motion blur for all virtual content.
- [disableDepthOfField](disabledepthoffield.md): Disable the depth of field effect for all virtual content.
- [disableFaceMesh](disablefacemesh.md): Disable generation of the face entity with the default occlusion material.
- [disablePersonOcclusion](disablepersonocclusion.md): Disable person segmentation.
- [disableAREnvironmentLighting](disablearenvironmentlighting.md): Disable lighting from environment probes.
- [disableFaceOcclusions](disablefaceocclusions.md): Deprecated. Disable automatic face occlusion.
- [disableAutomaticLighting](disableautomaticlighting.md): Deprecated. Disable automatic updates of the scene lighting.
