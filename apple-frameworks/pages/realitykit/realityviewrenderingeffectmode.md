> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realityviewrenderingeffectmode](https://developer.apple.com/documentation/realitykit/realityviewrenderingeffectmode)

# RealityViewRenderingEffectMode

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+

A mode that determines whether a rendering effect is enabled or disabled.

## Declaration

```swift
struct RealityViewRenderingEffectMode
```

## Topics

### Setting the rendering effect mode

- [default](realityviewrenderingeffectmode/default.md): The default rendering effect mode.
- [enabled](realityviewrenderingeffectmode/enabled.md): The enabled rendering effect mode.
- [disabled](realityviewrenderingeffectmode/disabled.md): The disabled rendering effect mode.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Visual environment adjustments

- [RealityViewEnvironment](realityviewenvironment.md): A struct that determines the background and default lighting properties for a reality view.
- [RealityViewRenderingEffects](realityviewrenderingeffects.md): A struct for enabling and disabling rendering effects for RealityKit content.
- [RealityViewDynamicRange](realityviewdynamicrange.md): Options that determine the state of high dynamic range rendering for virtual content.
- [AntialiasingMode](antialiasingmode.md): The rendering technique used to smooth edges of virtual content.
- [RealityViewPostProcessEffect](realityviewpostprocesseffect.md): A struct for enabling or disabling post processing effects for all content a reality view contains.
- [PostProcessEffectContext](postprocesseffectcontext.md): An object RealityKit passes data to a post process effect method.
- [ARView.Environment](arview/environment-swift.struct.md): A description of background, lighting, and acoustic properties for a view’s content.
- [ARView.RenderOptions](arview/renderoptions-swift.struct.md): The available rendering options that you use to selectively disable certain rendering effects.
