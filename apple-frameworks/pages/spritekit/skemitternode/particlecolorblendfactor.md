> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skemitternode/particlecolorblendfactor](https://developer.apple.com/documentation/spritekit/skemitternode/particlecolorblendfactor)

# particleColorBlendFactor (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The average starting value for the color blend factor.

## Declaration

```swift
var particleColorBlendFactor: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`, which means that the texture is used as is, ignoring the particle’s color. Otherwise, the texture is blended with the color. The maximum value is `1.0`, which means the particle renders with a full-tint color.

## See Also

### Controlling How the Texture is Blended with Particle Color

- [particleColorBlendFactorSequence](particlecolorblendfactorsequence.md): The sequence used to specify the color blend factor of a particle over its lifetime.
- [particleColorBlendFactorRange](particlecolorblendfactorrange.md): The range of allowed random values for a particle’s starting color blend factor.
- [particleColorBlendFactorSpeed](particlecolorblendfactorspeed.md): The rate at which the color blend factor changes per second.

# particleColorBlendFactor (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The average starting value for the color blend factor.

## Declaration

```objectivec
@property (nonatomic) CGFloat particleColorBlendFactor;
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`, which means that the texture is used as is, ignoring the particle’s color. Otherwise, the texture is blended with the color. The maximum value is `1.0`, which means the particle renders with a full-tint color.

## See Also

### Controlling How the Texture is Blended with Particle Color

- [particleColorBlendFactorSequence](particlecolorblendfactorsequence.md): The sequence used to specify the color blend factor of a particle over its lifetime.
- [particleColorBlendFactorRange](particlecolorblendfactorrange.md): The range of allowed random values for a particle’s starting color blend factor.
- [particleColorBlendFactorSpeed](particlecolorblendfactorspeed.md): The rate at which the color blend factor changes per second.
