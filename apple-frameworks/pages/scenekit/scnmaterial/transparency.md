> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial/transparency](https://developer.apple.com/documentation/scenekit/scnmaterial/transparency)

# transparency (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The uniform transparency of the material. Animatable.

## Declaration

```swift
var transparency: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

SceneKit determines the total opacity of each rendered pixel in a surface by multiplying the color from the material’s [transparent](transparent.md) property by the value of this property. Then, the material’s [transparencyMode](transparencymode.md) property determines how pixels from the material are blended into the scene.

You can also uniformly adjust the opacity of all content attached to a node using its [opacity](../scnnode/opacity.md) property.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Opacity and Blending

- [transparencyMode](transparencymode.md): The mode SceneKit uses to calculate transparency for the material.
- [SCNTransparencyMode](../scntransparencymode.md): The modes SceneKit uses to calculate the opacity of pixels rendered with a material, used by the [transparencyMode](transparencymode.md) property.
- [blendMode](blendmode.md): The mode that determines how pixel colors rendered using this material blend with other pixel colors in the rendering target.
- [SCNBlendMode](../scnblendmode.md): Modes that describe how SceneKit blends source colors rendered using a material with destination colors already in a rendering target, used by the [blendMode](blendmode.md) property.

# transparency (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The uniform transparency of the material. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat transparency;
```

<a id="Discussion"></a>

## Discussion

SceneKit determines the total opacity of each rendered pixel in a surface by multiplying the color from the material’s [transparent](transparent.md) property by the value of this property. Then, the material’s [transparencyMode](transparencymode.md) property determines how pixels from the material are blended into the scene.

You can also uniformly adjust the opacity of all content attached to a node using its [opacity](../scnnode/opacity.md) property.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Opacity and Blending

- [transparencyMode](transparencymode.md): The mode SceneKit uses to calculate transparency for the material.
- [SCNTransparencyMode](../scntransparencymode.md): The modes SceneKit uses to calculate the opacity of pixels rendered with a material, used by the [transparencyMode](transparencymode.md) property.
- [blendMode](blendmode.md): The mode that determines how pixel colors rendered using this material blend with other pixel colors in the rendering target.
- [SCNBlendMode](../scnblendmode.md): Modes that describe how SceneKit blends source colors rendered using a material with destination colors already in a rendering target, used by the [blendMode](blendmode.md) property.
