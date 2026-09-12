> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntransparencymode](https://developer.apple.com/documentation/scenekit/scntransparencymode)

# SCNTransparencyMode (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The modes SceneKit uses to calculate the opacity of pixels rendered with a material, used by the [transparencyMode](scnmaterial/transparencymode.md) property.

## Declaration

```swift
enum SCNTransparencyMode
```

## Topics

### Constants

- [SCNTransparencyMode.aOne](scntransparencymode/aone.md): SceneKit derives transparency information from the alpha channel of colors. The value `1.0` is opaque.
- [SCNTransparencyMode.rgbZero](scntransparencymode/rgbzero.md): SceneKit derives transparency information from the luminance of colors. The value `0.0` is opaque.

### Enumeration Cases

- [SCNTransparencyMode.dualLayer](scntransparencymode/duallayer.md)
- [SCNTransparencyMode.singleLayer](scntransparencymode/singlelayer.md)

### Initializers

- [init(rawValue:)](scntransparencymode/init%28rawvalue_%29.md)

### Type Properties

- [default](scntransparencymode/default.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Opacity and Blending

- [transparency](scnmaterial/transparency.md): The uniform transparency of the material. Animatable.
- [transparencyMode](scnmaterial/transparencymode.md): The mode SceneKit uses to calculate transparency for the material.
- [blendMode](scnmaterial/blendmode.md): The mode that determines how pixel colors rendered using this material blend with other pixel colors in the rendering target.
- [SCNBlendMode](scnblendmode.md): Modes that describe how SceneKit blends source colors rendered using a material with destination colors already in a rendering target, used by the [blendMode](scnmaterial/blendmode.md) property.

# SCNTransparencyMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The modes SceneKit uses to calculate the opacity of pixels rendered with a material, used by the [transparencyMode](scnmaterial/transparencymode.md) property.

## Declaration

```objectivec
enum SCNTransparencyMode : NSInteger;
```

## Topics

### Constants

- [SCNTransparencyModeAOne](scntransparencymode/aone.md): SceneKit derives transparency information from the alpha channel of colors. The value `1.0` is opaque.
- [SCNTransparencyModeRGBZero](scntransparencymode/rgbzero.md): SceneKit derives transparency information from the luminance of colors. The value `0.0` is opaque.

### Enumeration Cases

- [SCNTransparencyModeDefault](scntransparencymode/default.md)
- [SCNTransparencyModeDualLayer](scntransparencymode/duallayer.md)
- [SCNTransparencyModeSingleLayer](scntransparencymode/singlelayer.md)

## See Also

### Managing Opacity and Blending

- [transparency](scnmaterial/transparency.md): The uniform transparency of the material. Animatable.
- [transparencyMode](scnmaterial/transparencymode.md): The mode SceneKit uses to calculate transparency for the material.
- [blendMode](scnmaterial/blendmode.md): The mode that determines how pixel colors rendered using this material blend with other pixel colors in the rendering target.
- [SCNBlendMode](scnblendmode.md): Modes that describe how SceneKit blends source colors rendered using a material with destination colors already in a rendering target, used by the [blendMode](scnmaterial/blendmode.md) property.
