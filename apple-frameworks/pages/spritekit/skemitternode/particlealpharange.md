> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skemitternode/particlealpharange](https://developer.apple.com/documentation/spritekit/skemitternode/particlealpharange)

# particleAlphaRange (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The range of allowed random values for a particle’s starting alpha value.

## Declaration

```swift
var particleAlphaRange: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`. If non-zero, the initial alpha value of each particle is randomly determined and may vary by plus or minus half of the range value.

## See Also

### Blending Particles with the Framebuffer

- [particleBlendMode](particleblendmode.md): The blending mode used to blend particles into the framebuffer.
- [particleAlphaSequence](particlealphasequence.md): The sequence used to specify the alpha value of a particle over its lifetime.
- [particleAlpha](particlealpha.md): The average starting alpha value for a particle.
- [particleAlphaSpeed](particlealphaspeed.md): The rate at which the alpha value of a particle changes per second.

# particleAlphaRange (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The range of allowed random values for a particle’s starting alpha value.

## Declaration

```objectivec
@property (nonatomic) CGFloat particleAlphaRange;
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`. If non-zero, the initial alpha value of each particle is randomly determined and may vary by plus or minus half of the range value.

## See Also

### Blending Particles with the Framebuffer

- [particleBlendMode](particleblendmode.md): The blending mode used to blend particles into the framebuffer.
- [particleAlphaSequence](particlealphasequence.md): The sequence used to specify the alpha value of a particle over its lifetime.
- [particleAlpha](particlealpha.md): The average starting alpha value for a particle.
- [particleAlphaSpeed](particlealphaspeed.md): The rate at which the alpha value of a particle changes per second.
