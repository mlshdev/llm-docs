> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realityviewenvironment](https://developer.apple.com/documentation/realitykit/realityviewenvironment)

# RealityViewEnvironment

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+

A struct that determines the background and default lighting properties for a reality view.

## Declaration

```swift
struct RealityViewEnvironment
```

## Topics

### Setting the environment background

- [default](realityviewenvironment/default.md): The view uses any background style you apply via the view’s background style.
- [skybox(\_:)](realityviewenvironment/skybox%28__%29.md): The view uses a skybox environment as the background.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Visual environment adjustments

- [RealityViewRenderingEffects](realityviewrenderingeffects.md): A struct for enabling and disabling rendering effects for RealityKit content.
- [RealityViewRenderingEffectMode](realityviewrenderingeffectmode.md): A mode that determines whether a rendering effect is enabled or disabled.
- [RealityViewDynamicRange](realityviewdynamicrange.md): Options that determine the state of high dynamic range rendering for virtual content.
- [AntialiasingMode](antialiasingmode.md): The rendering technique used to smooth edges of virtual content.
- [RealityViewPostProcessEffect](realityviewpostprocesseffect.md): A struct for enabling or disabling post processing effects for all content a reality view contains.
- [PostProcessEffectContext](postprocesseffectcontext.md): An object RealityKit passes data to a post process effect method.
- [ARView.Environment](arview/environment-swift.struct.md): A description of background, lighting, and acoustic properties for a view’s content.
- [ARView.RenderOptions](arview/renderoptions-swift.struct.md): The available rendering options that you use to selectively disable certain rendering effects.
