> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skemitternode/particlealpha](https://developer.apple.com/documentation/spritekit/skemitternode/particlealpha)

# particleAlpha (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The average starting alpha value for a particle.

## Declaration

```swift
var particleAlpha: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The particle alpha value is equivalent to the [alpha](../sknode/alpha.md) property of the [SKNode](../sknode.md) class. The alpha component of the color that results from the texture and color blending state is multiplied by a particle’s alpha value. The resulting particle color is then blended with the parent’s framebuffer. The default value is `1.0`.

## See Also

### Blending Particles with the Framebuffer

- [particleBlendMode](particleblendmode.md): The blending mode used to blend particles into the framebuffer.
- [particleAlphaSequence](particlealphasequence.md): The sequence used to specify the alpha value of a particle over its lifetime.
- [particleAlphaRange](particlealpharange.md): The range of allowed random values for a particle’s starting alpha value.
- [particleAlphaSpeed](particlealphaspeed.md): The rate at which the alpha value of a particle changes per second.

# particleAlpha (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The average starting alpha value for a particle.

## Declaration

```objectivec
@property (nonatomic) CGFloat particleAlpha;
```

<a id="Discussion"></a>

## Discussion

The particle alpha value is equivalent to the [alpha](../sknode/alpha.md) property of the [SKNode](../sknode.md) class. The alpha component of the color that results from the texture and color blending state is multiplied by a particle’s alpha value. The resulting particle color is then blended with the parent’s framebuffer. The default value is `1.0`.

## See Also

### Blending Particles with the Framebuffer

- [particleBlendMode](particleblendmode.md): The blending mode used to blend particles into the framebuffer.
- [particleAlphaSequence](particlealphasequence.md): The sequence used to specify the alpha value of a particle over its lifetime.
- [particleAlphaRange](particlealpharange.md): The range of allowed random values for a particle’s starting alpha value.
- [particleAlphaSpeed](particlealphaspeed.md): The rate at which the alpha value of a particle changes per second.
