> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/antialiasingmode](https://developer.apple.com/documentation/realitykit/antialiasingmode)

# AntialiasingMode

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The rendering technique used to smooth edges of virtual content.

## Declaration

```swift
enum AntialiasingMode
```

## Topics

### Setting the antialiasing mode

- [AntialiasingMode.multisample4X](antialiasingmode/multisample4x.md): Multisampling renders each pixel multiple times and combines the results, creating a higher quality image at a performance cost proportional to the number of samples used.
- [AntialiasingMode.none](antialiasingmode/none.md): Do not apply any technique to smooth jagged edges.

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
- [RealityViewRenderingEffectMode](realityviewrenderingeffectmode.md): A mode that determines whether a rendering effect is enabled or disabled.
- [RealityViewDynamicRange](realityviewdynamicrange.md): Options that determine the state of high dynamic range rendering for virtual content.
- [RealityViewPostProcessEffect](realityviewpostprocesseffect.md): A struct for enabling or disabling post processing effects for all content a reality view contains.
- [PostProcessEffectContext](postprocesseffectcontext.md): An object RealityKit passes data to a post process effect method.
- [ARView.Environment](arview/environment-swift.struct.md): A description of background, lighting, and acoustic properties for a view’s content.
- [ARView.RenderOptions](arview/renderoptions-swift.struct.md): The available rendering options that you use to selectively disable certain rendering effects.
