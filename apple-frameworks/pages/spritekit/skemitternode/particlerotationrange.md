> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skemitternode/particlerotationrange](https://developer.apple.com/documentation/spritekit/skemitternode/particlerotationrange)

# particleRotationRange (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The range of allowed random values for a particle’s initial rotation, expressed as an angle in radians.

## Declaration

```swift
var particleRotationRange: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`. If non-zero, the initial rotation of each particle is randomly determined and may vary by plus or minus half of the range value.

## See Also

### Adjusting a Particle’s Rotation

- [particleRotation](particlerotation.md): The average initial rotation of a particle, expressed as an angle in radians.
- [particleRotationSpeed](particlerotationspeed.md): The speed at which a particle rotates, expressed in radians per second.

# particleRotationRange (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The range of allowed random values for a particle’s initial rotation, expressed as an angle in radians.

## Declaration

```objectivec
@property (nonatomic) CGFloat particleRotationRange;
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`. If non-zero, the initial rotation of each particle is randomly determined and may vary by plus or minus half of the range value.

## See Also

### Adjusting a Particle’s Rotation

- [particleRotation](particlerotation.md): The average initial rotation of a particle, expressed as an angle in radians.
- [particleRotationSpeed](particlerotationspeed.md): The speed at which a particle rotates, expressed in radians per second.
