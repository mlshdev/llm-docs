> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/environment-swift.struct](https://developer.apple.com/documentation/realitykit/arview/environment-swift.struct)

# ARView.Environment

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+

A description of background, lighting, and acoustic properties for a view’s content.

## Declaration

```swift
struct Environment
```

## Topics

### Creating an environment

- [init(background:lighting:reverb:)](environment-swift.struct/init%28background_lighting_reverb_%29.md): Creates a new environment description with the given elements.

### Setting a background

- [background](environment-swift.struct/background-swift.property.md): The background for the environment.
- [ARView.Environment.Background](environment-swift.struct/background-swift.struct.md): Content that appears as the background of the scene.

### Lighting the environment

- [lighting](environment-swift.struct/lighting.md): The lighting used in the environment of a particular scene.
- [ARView.Environment.ImageBasedLight](environment-swift.struct/imagebasedlight.md): Lighting properties of an environment.

### Defining acoustic properties

- [reverb](environment-swift.struct/reverb-swift.property.md): The amount of reverb in the scene.
- [ARView.Environment.Reverb](environment-swift.struct/reverb-swift.enum.md): Reverb characteristics of an environment.

### Structures

- [ARView.Environment.SceneUnderstanding](environment-swift.struct/sceneunderstanding-swift.struct.md): An object that holds scene-understanding options for the view.

### Instance Properties

- [sceneUnderstanding](environment-swift.struct/sceneunderstanding-swift.property.md): The scene-understanding options for the view.

### Type Aliases

- [ARView.Environment.Color](environment-swift.struct/color.md): An alias for the color type that’s appropriate for the current platform.

## See Also

### Visual environment adjustments

- [RealityViewEnvironment](../realityviewenvironment.md): A struct that determines the background and default lighting properties for a reality view.
- [RealityViewRenderingEffects](../realityviewrenderingeffects.md): A struct for enabling and disabling rendering effects for RealityKit content.
- [RealityViewRenderingEffectMode](../realityviewrenderingeffectmode.md): A mode that determines whether a rendering effect is enabled or disabled.
- [RealityViewDynamicRange](../realityviewdynamicrange.md): Options that determine the state of high dynamic range rendering for virtual content.
- [AntialiasingMode](../antialiasingmode.md): The rendering technique used to smooth edges of virtual content.
- [RealityViewPostProcessEffect](../realityviewpostprocesseffect.md): A struct for enabling or disabling post processing effects for all content a reality view contains.
- [PostProcessEffectContext](../postprocesseffectcontext.md): An object RealityKit passes data to a post process effect method.
- [ARView.RenderOptions](renderoptions-swift.struct.md): The available rendering options that you use to selectively disable certain rendering effects.
