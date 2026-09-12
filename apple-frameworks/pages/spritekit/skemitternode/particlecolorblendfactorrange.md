> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skemitternode/particlecolorblendfactorrange](https://developer.apple.com/documentation/spritekit/skemitternode/particlecolorblendfactorrange)

# particleColorBlendFactorRange (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The range of allowed random values for a particle’s starting color blend factor.

## Declaration

```swift
var particleColorBlendFactorRange: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`. If non-zero, the initial color blend factor of each particle is randomly determined and may vary by plus or minus half of the range value.

## See Also

### Controlling How the Texture is Blended with Particle Color

- [particleColorBlendFactorSequence](particlecolorblendfactorsequence.md): The sequence used to specify the color blend factor of a particle over its lifetime.
- [particleColorBlendFactor](particlecolorblendfactor.md): The average starting value for the color blend factor.
- [particleColorBlendFactorSpeed](particlecolorblendfactorspeed.md): The rate at which the color blend factor changes per second.

# particleColorBlendFactorRange (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The range of allowed random values for a particle’s starting color blend factor.

## Declaration

```objectivec
@property (nonatomic) CGFloat particleColorBlendFactorRange;
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`. If non-zero, the initial color blend factor of each particle is randomly determined and may vary by plus or minus half of the range value.

## See Also

### Controlling How the Texture is Blended with Particle Color

- [particleColorBlendFactorSequence](particlecolorblendfactorsequence.md): The sequence used to specify the color blend factor of a particle over its lifetime.
- [particleColorBlendFactor](particlecolorblendfactor.md): The average starting value for the color blend factor.
- [particleColorBlendFactorSpeed](particlecolorblendfactorspeed.md): The rate at which the color blend factor changes per second.
