> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial/blendmode](https://developer.apple.com/documentation/scenekit/scnmaterial/blendmode)

# blendMode (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The mode that determines how pixel colors rendered using this material blend with other pixel colors in the rendering target.

## Declaration

```swift
var blendMode: SCNBlendMode { get set }
```

<a id="Discussion"></a>

## Discussion

With the default blend mode of [SCNBlendMode.alpha](../scnblendmode/alpha.md), materials blend according to their alpha (opacity) values—a pixel rendered with a higher alpha value appears more opaque than one with a lower alpha value. Change this property to create special effects. For example, the [SCNBlendMode.add](../scnblendmode/add.md) mode can make objects appear to glow.

## See Also

### Managing Opacity and Blending

- [transparency](transparency.md): The uniform transparency of the material. Animatable.
- [transparencyMode](transparencymode.md): The mode SceneKit uses to calculate transparency for the material.
- [SCNTransparencyMode](../scntransparencymode.md): The modes SceneKit uses to calculate the opacity of pixels rendered with a material, used by the [transparencyMode](transparencymode.md) property.
- [SCNBlendMode](../scnblendmode.md): Modes that describe how SceneKit blends source colors rendered using a material with destination colors already in a rendering target, used by the [blendMode](blendmode.md) property.

# blendMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The mode that determines how pixel colors rendered using this material blend with other pixel colors in the rendering target.

## Declaration

```objectivec
@property (nonatomic) SCNBlendMode blendMode;
```

<a id="Discussion"></a>

## Discussion

With the default blend mode of [SCNBlendModeAlpha](../scnblendmode/alpha.md), materials blend according to their alpha (opacity) values—a pixel rendered with a higher alpha value appears more opaque than one with a lower alpha value. Change this property to create special effects. For example, the [SCNBlendModeAdd](../scnblendmode/add.md) mode can make objects appear to glow.

## See Also

### Managing Opacity and Blending

- [transparency](transparency.md): The uniform transparency of the material. Animatable.
- [transparencyMode](transparencymode.md): The mode SceneKit uses to calculate transparency for the material.
- [SCNTransparencyMode](../scntransparencymode.md): The modes SceneKit uses to calculate the opacity of pixels rendered with a material, used by the [transparencyMode](transparencymode.md) property.
- [SCNBlendMode](../scnblendmode.md): Modes that describe how SceneKit blends source colors rendered using a material with destination colors already in a rendering target, used by the [blendMode](blendmode.md) property.
