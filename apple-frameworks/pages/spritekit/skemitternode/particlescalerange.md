> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skemitternode/particlescalerange](https://developer.apple.com/documentation/spritekit/skemitternode/particlescalerange)

# particleScaleRange (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The range of allowed random values for a particle’s initial scale.

## Declaration

```swift
var particleScaleRange: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`. If non-zero, the initial scale of each particle is randomly determined and may vary by plus or minus half of the range value.

## See Also

### Scaling Particles by a Factor

- [particleScale](particlescale.md): The average initial scale factor of a particle.
- [particleScaleSpeed](particlescalespeed.md): The rate at which a particle’s scale factor changes per second.
- [particleScaleSequence](particlescalesequence.md): The sequence used to specify the scale factor of a particle over its lifetime.

# particleScaleRange (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The range of allowed random values for a particle’s initial scale.

## Declaration

```objectivec
@property (nonatomic) CGFloat particleScaleRange;
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`. If non-zero, the initial scale of each particle is randomly determined and may vary by plus or minus half of the range value.

## See Also

### Scaling Particles by a Factor

- [particleScale](particlescale.md): The average initial scale factor of a particle.
- [particleScaleSpeed](particlescalespeed.md): The rate at which a particle’s scale factor changes per second.
- [particleScaleSequence](particlescalesequence.md): The sequence used to specify the scale factor of a particle over its lifetime.
