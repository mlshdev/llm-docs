> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/renderoptions-swift.struct](https://developer.apple.com/documentation/realitykit/arview/renderoptions-swift.struct)

# ARView.RenderOptions

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

The available rendering options that you use to selectively disable certain rendering effects.

## Declaration

```swift
struct RenderOptions
```

## Mentioned In

- [Reducing GPU Utilization in Your RealityKit App](../reducing-gpu-utilization-in-your-realitykit-app.md)

<a id="overview"></a>

## Overview

RealityKit applies effects to the render make the AR experience more immersive. You can selectively disable any of these effects by adding one or more options from the [ARView.RenderOptions](renderoptions-swift.struct.md) set to the view’s [renderOptions](renderoptions-swift.property.md) property.

When you initialize a new [ARView](../arview.md) instance, RealityKit automatically disables certain effects for you, depending on the device hardware. You can change the view’s [renderOptions](renderoptions-swift.property.md) to suit your app’s needs, but be sure to consider your app’s GPU utilization when doing so, as described in [Improving the Performance of a RealityKit App](../improving-the-performance-of-a-realitykit-app.md).

## Topics

### Disabling rendering effects

- [disableCameraGrain](renderoptions-swift.struct/disablecameragrain.md): Disable the image noise effect.
- [disableHDR](renderoptions-swift.struct/disablehdr.md): Disable the high dynamic range post-processing effect.
- [disableGroundingShadows](renderoptions-swift.struct/disablegroundingshadows.md): Disable rendering of ambient occlusion and shadows that ground objects in an AR scene.
- [disableMotionBlur](renderoptions-swift.struct/disablemotionblur.md): Disable the motion blur for all virtual content.
- [disableDepthOfField](renderoptions-swift.struct/disabledepthoffield.md): Disable the depth of field effect for all virtual content.
- [disableFaceMesh](renderoptions-swift.struct/disablefacemesh.md): Disable generation of the face entity with the default occlusion material.
- [disablePersonOcclusion](renderoptions-swift.struct/disablepersonocclusion.md): Disable person segmentation.
- [disableAREnvironmentLighting](renderoptions-swift.struct/disablearenvironmentlighting.md): Disable lighting from environment probes.
- [disableFaceOcclusions](renderoptions-swift.struct/disablefaceocclusions.md): Deprecated. Disable automatic face occlusion.
- [disableAutomaticLighting](renderoptions-swift.struct/disableautomaticlighting.md): Deprecated. Disable automatic updates of the scene lighting.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Visual environment adjustments

- [RealityViewEnvironment](../realityviewenvironment.md): A struct that determines the background and default lighting properties for a reality view.
- [RealityViewRenderingEffects](../realityviewrenderingeffects.md): A struct for enabling and disabling rendering effects for RealityKit content.
- [RealityViewRenderingEffectMode](../realityviewrenderingeffectmode.md): A mode that determines whether a rendering effect is enabled or disabled.
- [RealityViewDynamicRange](../realityviewdynamicrange.md): Options that determine the state of high dynamic range rendering for virtual content.
- [AntialiasingMode](../antialiasingmode.md): The rendering technique used to smooth edges of virtual content.
- [RealityViewPostProcessEffect](../realityviewpostprocesseffect.md): A struct for enabling or disabling post processing effects for all content a reality view contains.
- [PostProcessEffectContext](../postprocesseffectcontext.md): An object RealityKit passes data to a post process effect method.
- [ARView.Environment](environment-swift.struct.md): A description of background, lighting, and acoustic properties for a view’s content.
