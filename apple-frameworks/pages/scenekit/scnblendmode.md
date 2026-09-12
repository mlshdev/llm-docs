> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnblendmode](https://developer.apple.com/documentation/scenekit/scnblendmode)

# SCNBlendMode (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Modes that describe how SceneKit blends source colors rendered using a material with destination colors already in a rendering target, used by the [blendMode](scnmaterial/blendmode.md) property.

## Declaration

```swift
enum SCNBlendMode
```

## Topics

### Constants

- [SCNBlendMode.alpha](scnblendmode/alpha.md): Blend by multiplying source and destination color values by their corresponding alpha values.
- [SCNBlendMode.add](scnblendmode/add.md): Blend by adding the source color to the destination color.
- [SCNBlendMode.subtract](scnblendmode/subtract.md): Blend by subtracting the source color from the destination color.
- [SCNBlendMode.multiply](scnblendmode/multiply.md): Blend by multiplying the source color with the background color.
- [SCNBlendMode.screen](scnblendmode/screen.md): Blend by multiplying the inverse of the source color with the inverse of the destination color.
- [SCNBlendMode.replace](scnblendmode/replace.md): Blend by replacing the destination color with the source color, ignoring alpha.

### Enumeration Cases

- [SCNBlendMode.max](scnblendmode/max.md)

### Initializers

- [init(rawValue:)](scnblendmode/init%28rawvalue_%29.md)

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
- [SCNTransparencyMode](scntransparencymode.md): The modes SceneKit uses to calculate the opacity of pixels rendered with a material, used by the [transparencyMode](scnmaterial/transparencymode.md) property.
- [blendMode](scnmaterial/blendmode.md): The mode that determines how pixel colors rendered using this material blend with other pixel colors in the rendering target.

# SCNBlendMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Modes that describe how SceneKit blends source colors rendered using a material with destination colors already in a rendering target, used by the [blendMode](scnmaterial/blendmode.md) property.

## Declaration

```objectivec
enum SCNBlendMode : NSInteger;
```

## Topics

### Constants

- [SCNBlendModeAlpha](scnblendmode/alpha.md): Blend by multiplying source and destination color values by their corresponding alpha values.
- [SCNBlendModeAdd](scnblendmode/add.md): Blend by adding the source color to the destination color.
- [SCNBlendModeSubtract](scnblendmode/subtract.md): Blend by subtracting the source color from the destination color.
- [SCNBlendModeMultiply](scnblendmode/multiply.md): Blend by multiplying the source color with the background color.
- [SCNBlendModeScreen](scnblendmode/screen.md): Blend by multiplying the inverse of the source color with the inverse of the destination color.
- [SCNBlendModeReplace](scnblendmode/replace.md): Blend by replacing the destination color with the source color, ignoring alpha.

### Enumeration Cases

- [SCNBlendModeMax](scnblendmode/max.md)

## See Also

### Managing Opacity and Blending

- [transparency](scnmaterial/transparency.md): The uniform transparency of the material. Animatable.
- [transparencyMode](scnmaterial/transparencymode.md): The mode SceneKit uses to calculate transparency for the material.
- [SCNTransparencyMode](scntransparencymode.md): The modes SceneKit uses to calculate the opacity of pixels rendered with a material, used by the [transparencyMode](scnmaterial/transparencymode.md) property.
- [blendMode](scnmaterial/blendmode.md): The mode that determines how pixel colors rendered using this material blend with other pixel colors in the rendering target.
