> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skemitternode/particlepositionrange](https://developer.apple.com/documentation/spritekit/skemitternode/particlepositionrange)

# particlePositionRange (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The range of allowed random values for a particle’s position.

## Declaration

```swift
var particlePositionRange: CGVector { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `(0.0,0.0)`. If a component is non-zero, the same component of a particle’s position is randomly determined and may vary by plus or minus half of the range value.

## See Also

### Controlling Particle Position

- [particlePosition](particleposition.md): The average starting position for a particle.
- [particleZPosition](particlezposition.md): The average starting depth of a particle.
- [particleZPositionRange](particlezpositionrange.md): Deprecated. The range of allowed random values for a particle’s depth.

# particlePositionRange (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The range of allowed random values for a particle’s position.

## Declaration

```objectivec
@property (nonatomic) CGVector particlePositionRange;
```

<a id="Discussion"></a>

## Discussion

The default value is `(0.0,0.0)`. If a component is non-zero, the same component of a particle’s position is randomly determined and may vary by plus or minus half of the range value.

## See Also

### Controlling Particle Position

- [particlePosition](particleposition.md): The average starting position for a particle.
- [particleZPosition](particlezposition.md): The average starting depth of a particle.
- [particleZPositionRange](particlezpositionrange.md): Deprecated. The range of allowed random values for a particle’s depth.
