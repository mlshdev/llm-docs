> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/renderoptions-swift.struct/disablemotionblur](https://developer.apple.com/documentation/realitykit/arview/renderoptions-swift.struct/disablemotionblur)

# disableMotionBlur

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

Disable the motion blur for all virtual content.

## Declaration

```swift
static let disableMotionBlur: ARView.RenderOptions
```

## Mentioned In

- [Reducing GPU Utilization in Your RealityKit App](../../reducing-gpu-utilization-in-your-realitykit-app.md)

<a id="discussion"></a>

## Discussion

A video stream consists of a sequence of images. Each image in the sequence represents a short, but non-zero period of time. Fast-moving, real-world objects captured within a frame can experience a visual smearing, known as *motion blur*.

By default, virtual objects that appear in the scene don’t experience motion blur. Instead, they exist at exactly one point in the frame for any given image in the image sequence. RealityKit offers an effect that introduces motion blur for virtual objects, taking into account the relative motion of the camera and the object.

Because of its computational cost, motion blur is off by default on all but the latest hardware. To enable or disable the effect, you add or remove the [disableMotionBlur](disablemotionblur.md) option to or from the [renderOptions](../renderoptions-swift.property.md) set, respectively. If you do enable motion blur, be sure to measure your app’s CPU and GPU utilization to find out how it affects your app’s performance, as described in [Improving the Performance of a RealityKit App](../../improving-the-performance-of-a-realitykit-app.md).

## See Also

### Disabling rendering effects

- [disableCameraGrain](disablecameragrain.md): Disable the image noise effect.
- [disableHDR](disablehdr.md): Disable the high dynamic range post-processing effect.
- [disableGroundingShadows](disablegroundingshadows.md): Disable rendering of ambient occlusion and shadows that ground objects in an AR scene.
- [disableDepthOfField](disabledepthoffield.md): Disable the depth of field effect for all virtual content.
- [disableFaceMesh](disablefacemesh.md): Disable generation of the face entity with the default occlusion material.
- [disablePersonOcclusion](disablepersonocclusion.md): Disable person segmentation.
- [disableAREnvironmentLighting](disablearenvironmentlighting.md): Disable lighting from environment probes.
- [disableFaceOcclusions](disablefaceocclusions.md): Deprecated. Disable automatic face occlusion.
- [disableAutomaticLighting](disableautomaticlighting.md): Deprecated. Disable automatic updates of the scene lighting.
