> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skemitternode/particlealphasequence](https://developer.apple.com/documentation/spritekit/skemitternode/particlealphasequence)

# particleAlphaSequence (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The sequence used to specify the alpha value of a particle over its lifetime.

## Declaration

```swift
var particleAlphaSequence: SKKeyframeSequence? { get set }
```

## Mentioned In

- [Animating Particle Properties Across Disparate Values](../animating-particle-properties-across-disparate-values.md)
- [Using Keyframe Sequence to effect Custom Interpolation](../using-keyframe-sequence-to-effect-custom-interpolation.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`. If a non-`nil` value is specified, then the [particleAlpha](particlealpha.md), [particleAlphaRange](particlealpharange.md), and [particleAlphaSpeed](particlealphaspeed.md) properties are ignored. Instead, the sequence is used to specify the alpha value.

## See Also

### Blending Particles with the Framebuffer

- [particleBlendMode](particleblendmode.md): The blending mode used to blend particles into the framebuffer.
- [particleAlpha](particlealpha.md): The average starting alpha value for a particle.
- [particleAlphaRange](particlealpharange.md): The range of allowed random values for a particle’s starting alpha value.
- [particleAlphaSpeed](particlealphaspeed.md): The rate at which the alpha value of a particle changes per second.

# particleAlphaSequence (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The sequence used to specify the alpha value of a particle over its lifetime.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SKKeyframeSequence * particleAlphaSequence;
```

## Mentioned In

- [Animating Particle Properties Across Disparate Values](../animating-particle-properties-across-disparate-values.md)
- [Using Keyframe Sequence to effect Custom Interpolation](../using-keyframe-sequence-to-effect-custom-interpolation.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`. If a non-`nil` value is specified, then the [particleAlpha](particlealpha.md), [particleAlphaRange](particlealpharange.md), and [particleAlphaSpeed](particlealphaspeed.md) properties are ignored. Instead, the sequence is used to specify the alpha value.

## See Also

### Blending Particles with the Framebuffer

- [particleBlendMode](particleblendmode.md): The blending mode used to blend particles into the framebuffer.
- [particleAlpha](particlealpha.md): The average starting alpha value for a particle.
- [particleAlphaRange](particlealpharange.md): The range of allowed random values for a particle’s starting alpha value.
- [particleAlphaSpeed](particlealphaspeed.md): The rate at which the alpha value of a particle changes per second.
