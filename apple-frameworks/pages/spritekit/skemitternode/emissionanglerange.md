> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skemitternode/emissionanglerange](https://developer.apple.com/documentation/spritekit/skemitternode/emissionanglerange)

# emissionAngleRange (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The range of allowed random values for a particle’s initial direction, expressed as an angle in radians.

## Declaration

```swift
var emissionAngleRange: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`. If non-zero, the emission angle of each particle is randomly determined and may vary by plus or minus half of the range value.

## See Also

### Controlling Particle Velocity and Acceleration

- [particleSpeed](particlespeed.md): The average initial speed of a new particle, in points per second.
- [particleSpeedRange](particlespeedrange.md): The range of allowed random values for a particle’s initial speed.
- [emissionAngle](emissionangle.md): The average initial direction of a particle, expressed as an angle in radians.
- [xAcceleration](xacceleration.md): The acceleration to apply to a particle’s horizontal velocity.
- [yAcceleration](yacceleration.md): The acceleration to apply to a particle’s vertical velocity.
- [particleZPositionSpeed](particlezpositionspeed.md): Deprecated. The speed at which the particle’s depth changes.

# emissionAngleRange (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The range of allowed random values for a particle’s initial direction, expressed as an angle in radians.

## Declaration

```objectivec
@property (nonatomic) CGFloat emissionAngleRange;
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`. If non-zero, the emission angle of each particle is randomly determined and may vary by plus or minus half of the range value.

## See Also

### Controlling Particle Velocity and Acceleration

- [particleSpeed](particlespeed.md): The average initial speed of a new particle, in points per second.
- [particleSpeedRange](particlespeedrange.md): The range of allowed random values for a particle’s initial speed.
- [emissionAngle](emissionangle.md): The average initial direction of a particle, expressed as an angle in radians.
- [xAcceleration](xacceleration.md): The acceleration to apply to a particle’s horizontal velocity.
- [yAcceleration](yacceleration.md): The acceleration to apply to a particle’s vertical velocity.
- [particleZPositionSpeed](particlezpositionspeed.md): Deprecated. The speed at which the particle’s depth changes.
