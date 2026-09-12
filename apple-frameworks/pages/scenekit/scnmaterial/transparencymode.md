> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial/transparencymode](https://developer.apple.com/documentation/scenekit/scnmaterial/transparencymode)

# transparencyMode (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The mode SceneKit uses to calculate transparency for the material.

## Declaration

```swift
var transparencyMode: SCNTransparencyMode { get set }
```

<a id="Discussion"></a>

## Discussion

The default transparency mode is [SCNTransparencyMode.aOne](../scntransparencymode/aone.md). See [SCNTransparencyMode](../scntransparencymode.md) for available values and their effects.

## See Also

### Managing Opacity and Blending

- [transparency](transparency.md): The uniform transparency of the material. Animatable.
- [SCNTransparencyMode](../scntransparencymode.md): The modes SceneKit uses to calculate the opacity of pixels rendered with a material, used by the [transparencyMode](transparencymode.md) property.
- [blendMode](blendmode.md): The mode that determines how pixel colors rendered using this material blend with other pixel colors in the rendering target.
- [SCNBlendMode](../scnblendmode.md): Modes that describe how SceneKit blends source colors rendered using a material with destination colors already in a rendering target, used by the [blendMode](blendmode.md) property.

# transparencyMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The mode SceneKit uses to calculate transparency for the material.

## Declaration

```objectivec
@property (nonatomic) SCNTransparencyMode transparencyMode;
```

<a id="Discussion"></a>

## Discussion

The default transparency mode is [SCNTransparencyModeAOne](../scntransparencymode/aone.md). See [SCNTransparencyMode](../scntransparencymode.md) for available values and their effects.

## See Also

### Managing Opacity and Blending

- [transparency](transparency.md): The uniform transparency of the material. Animatable.
- [SCNTransparencyMode](../scntransparencymode.md): The modes SceneKit uses to calculate the opacity of pixels rendered with a material, used by the [transparencyMode](transparencymode.md) property.
- [blendMode](blendmode.md): The mode that determines how pixel colors rendered using this material blend with other pixel colors in the rendering target.
- [SCNBlendMode](../scnblendmode.md): Modes that describe how SceneKit blends source colors rendered using a material with destination colors already in a rendering target, used by the [blendMode](blendmode.md) property.
