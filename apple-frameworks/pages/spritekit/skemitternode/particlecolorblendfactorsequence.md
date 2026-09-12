> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skemitternode/particlecolorblendfactorsequence](https://developer.apple.com/documentation/spritekit/skemitternode/particlecolorblendfactorsequence)

# particleColorBlendFactorSequence (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The sequence used to specify the color blend factor of a particle over its lifetime.

## Declaration

```swift
var particleColorBlendFactorSequence: SKKeyframeSequence? { get set }
```

## Mentioned In

- [Animating Particle Properties Across Disparate Values](../animating-particle-properties-across-disparate-values.md)
- [Using Keyframe Sequence to effect Custom Interpolation](../using-keyframe-sequence-to-effect-custom-interpolation.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`. If a non-`nil` value is specified, then the [particleColorBlendFactor](particlecolorblendfactor.md), [particleColorBlendFactorRange](particlecolorblendfactorrange.md), and [particleColorBlendFactorSpeed](particlecolorblendfactorspeed.md) properties are ignored. Instead, the sequence is used to specify the color blend factor.

## See Also

### Controlling How the Texture is Blended with Particle Color

- [particleColorBlendFactor](particlecolorblendfactor.md): The average starting value for the color blend factor.
- [particleColorBlendFactorRange](particlecolorblendfactorrange.md): The range of allowed random values for a particle’s starting color blend factor.
- [particleColorBlendFactorSpeed](particlecolorblendfactorspeed.md): The rate at which the color blend factor changes per second.

# particleColorBlendFactorSequence (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The sequence used to specify the color blend factor of a particle over its lifetime.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SKKeyframeSequence * particleColorBlendFactorSequence;
```

## Mentioned In

- [Animating Particle Properties Across Disparate Values](../animating-particle-properties-across-disparate-values.md)
- [Using Keyframe Sequence to effect Custom Interpolation](../using-keyframe-sequence-to-effect-custom-interpolation.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`. If a non-`nil` value is specified, then the [particleColorBlendFactor](particlecolorblendfactor.md), [particleColorBlendFactorRange](particlecolorblendfactorrange.md), and [particleColorBlendFactorSpeed](particlecolorblendfactorspeed.md) properties are ignored. Instead, the sequence is used to specify the color blend factor.

## See Also

### Controlling How the Texture is Blended with Particle Color

- [particleColorBlendFactor](particlecolorblendfactor.md): The average starting value for the color blend factor.
- [particleColorBlendFactorRange](particlecolorblendfactorrange.md): The range of allowed random values for a particle’s starting color blend factor.
- [particleColorBlendFactorSpeed](particlecolorblendfactorspeed.md): The rate at which the color blend factor changes per second.
