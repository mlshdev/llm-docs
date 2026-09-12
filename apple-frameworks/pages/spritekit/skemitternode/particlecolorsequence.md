> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skemitternode/particlecolorsequence](https://developer.apple.com/documentation/spritekit/skemitternode/particlecolorsequence)

# particleColorSequence (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The sequence used to specify the color components of a particle over its lifetime.

## Declaration

```swift
var particleColorSequence: SKKeyframeSequence? { get set }
```

## Mentioned In

- [Animating Particle Properties Across Disparate Values](../animating-particle-properties-across-disparate-values.md)
- [Using Keyframe Sequence to effect Custom Interpolation](../using-keyframe-sequence-to-effect-custom-interpolation.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`. If a non-`nil` value is specified, then the [particleColor](particlecolor.md), [particleColorAlphaRange](particlecoloralpharange.md), [particleColorRedRange](particlecolorredrange.md), [particleColorGreenRange](particlecolorgreenrange.md), [particleColorBlueRange](particlecolorbluerange.md), [particleColorAlphaSpeed](particlecoloralphaspeed.md), [particleColorRedSpeed](particlecolorredspeed.md), [particleColorGreenSpeed](particlecolorgreenspeed.md), and [particleColorBlueSpeed](particlecolorbluespeed.md) properties are ignored. Instead, the sequence is used to specify the particle color.

> **Important**

>  If you create an [SKEmitterNode](../skemitternode.md) object using Xcode’s particle editor, it uses a color sequence to implement the color change.

## See Also

### Configuring Particle Color

- [particleColor](particlecolor.md): The average initial color for a particle.
- [particleColorAlphaRange](particlecoloralpharange.md): The range of allowed random values for the alpha component of a particle’s initial color.
- [particleColorBlueRange](particlecolorbluerange.md): The range of allowed random values for the blue component of a particle’s initial color.
- [particleColorGreenRange](particlecolorgreenrange.md): The range of allowed random values for the green component of a particle’s initial color.
- [particleColorRedRange](particlecolorredrange.md): The range of allowed random values for the red component of a particle’s initial color.
- [particleColorAlphaSpeed](particlecoloralphaspeed.md): The rate at which the alpha component of a particle’s color changes per second.
- [particleColorBlueSpeed](particlecolorbluespeed.md): The rate at which the blue component of a particle’s color changes per second.
- [particleColorGreenSpeed](particlecolorgreenspeed.md): The rate at which the green component of a particle’s color changes per second.
- [particleColorRedSpeed](particlecolorredspeed.md): The rate at which the red component of a particle’s color changes per second.

# particleColorSequence (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The sequence used to specify the color components of a particle over its lifetime.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SKKeyframeSequence * particleColorSequence;
```

## Mentioned In

- [Animating Particle Properties Across Disparate Values](../animating-particle-properties-across-disparate-values.md)
- [Using Keyframe Sequence to effect Custom Interpolation](../using-keyframe-sequence-to-effect-custom-interpolation.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`. If a non-`nil` value is specified, then the [particleColor](particlecolor.md), [particleColorAlphaRange](particlecoloralpharange.md), [particleColorRedRange](particlecolorredrange.md), [particleColorGreenRange](particlecolorgreenrange.md), [particleColorBlueRange](particlecolorbluerange.md), [particleColorAlphaSpeed](particlecoloralphaspeed.md), [particleColorRedSpeed](particlecolorredspeed.md), [particleColorGreenSpeed](particlecolorgreenspeed.md), and [particleColorBlueSpeed](particlecolorbluespeed.md) properties are ignored. Instead, the sequence is used to specify the particle color.

> **Important**

>  If you create an [SKEmitterNode](../skemitternode.md) object using Xcode’s particle editor, it uses a color sequence to implement the color change.

## See Also

### Configuring Particle Color

- [particleColor](particlecolor.md): The average initial color for a particle.
- [particleColorAlphaRange](particlecoloralpharange.md): The range of allowed random values for the alpha component of a particle’s initial color.
- [particleColorBlueRange](particlecolorbluerange.md): The range of allowed random values for the blue component of a particle’s initial color.
- [particleColorGreenRange](particlecolorgreenrange.md): The range of allowed random values for the green component of a particle’s initial color.
- [particleColorRedRange](particlecolorredrange.md): The range of allowed random values for the red component of a particle’s initial color.
- [particleColorAlphaSpeed](particlecoloralphaspeed.md): The rate at which the alpha component of a particle’s color changes per second.
- [particleColorBlueSpeed](particlecolorbluespeed.md): The rate at which the blue component of a particle’s color changes per second.
- [particleColorGreenSpeed](particlecolorgreenspeed.md): The rate at which the green component of a particle’s color changes per second.
- [particleColorRedSpeed](particlecolorredspeed.md): The rate at which the red component of a particle’s color changes per second.
