> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realityviewpostprocesseffect](https://developer.apple.com/documentation/realitykit/realityviewpostprocesseffect)

# RealityViewPostProcessEffect

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A struct for enabling or disabling post processing effects for all content a reality view contains.

## Declaration

```swift
struct RealityViewPostProcessEffect
```

## Topics

### Type Properties

- [none](realityviewpostprocesseffect/none.md): A mode that does not apply post processing effects.

### Type Methods

- [effect(\_:)](realityviewpostprocesseffect/effect%28__%29.md): A post processing effect mode that accepts a conforming type for post processing.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Visual environment adjustments

- [RealityViewEnvironment](realityviewenvironment.md): A struct that determines the background and default lighting properties for a reality view.
- [RealityViewRenderingEffects](realityviewrenderingeffects.md): A struct for enabling and disabling rendering effects for RealityKit content.
- [RealityViewRenderingEffectMode](realityviewrenderingeffectmode.md): A mode that determines whether a rendering effect is enabled or disabled.
- [RealityViewDynamicRange](realityviewdynamicrange.md): Options that determine the state of high dynamic range rendering for virtual content.
- [AntialiasingMode](antialiasingmode.md): The rendering technique used to smooth edges of virtual content.
- [PostProcessEffectContext](postprocesseffectcontext.md): An object RealityKit passes data to a post process effect method.
- [ARView.Environment](arview/environment-swift.struct.md): A description of background, lighting, and acoustic properties for a view’s content.
- [ARView.RenderOptions](arview/renderoptions-swift.struct.md): The available rendering options that you use to selectively disable certain rendering effects.
