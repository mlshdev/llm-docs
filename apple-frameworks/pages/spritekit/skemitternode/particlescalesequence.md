> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skemitternode/particlescalesequence](https://developer.apple.com/documentation/spritekit/skemitternode/particlescalesequence)

# particleScaleSequence (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The sequence used to specify the scale factor of a particle over its lifetime.

## Declaration

```swift
var particleScaleSequence: SKKeyframeSequence? { get set }
```

## Mentioned In

- [Animating Particle Properties Across Disparate Values](../animating-particle-properties-across-disparate-values.md)
- [Using Keyframe Sequence to effect Custom Interpolation](../using-keyframe-sequence-to-effect-custom-interpolation.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`. If a non-`nil` value is specified, then the [particleScale](particlescale.md), [particleScaleRange](particlescalerange.md), and [particleScaleSpeed](particlescalespeed.md) properties are ignored. Instead, the sequence is used to specify the scale factor.

## See Also

### Scaling Particles by a Factor

- [particleScale](particlescale.md): The average initial scale factor of a particle.
- [particleScaleRange](particlescalerange.md): The range of allowed random values for a particle’s initial scale.
- [particleScaleSpeed](particlescalespeed.md): The rate at which a particle’s scale factor changes per second.

# particleScaleSequence (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The sequence used to specify the scale factor of a particle over its lifetime.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SKKeyframeSequence * particleScaleSequence;
```

## Mentioned In

- [Animating Particle Properties Across Disparate Values](../animating-particle-properties-across-disparate-values.md)
- [Using Keyframe Sequence to effect Custom Interpolation](../using-keyframe-sequence-to-effect-custom-interpolation.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`. If a non-`nil` value is specified, then the [particleScale](particlescale.md), [particleScaleRange](particlescalerange.md), and [particleScaleSpeed](particlescalespeed.md) properties are ignored. Instead, the sequence is used to specify the scale factor.

## See Also

### Scaling Particles by a Factor

- [particleScale](particlescale.md): The average initial scale factor of a particle.
- [particleScaleRange](particlescalerange.md): The range of allowed random values for a particle’s initial scale.
- [particleScaleSpeed](particlescalespeed.md): The rate at which a particle’s scale factor changes per second.
