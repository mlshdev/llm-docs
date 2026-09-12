> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/radialforceeffect](https://developer.apple.com/documentation/realitykit/radialforceeffect)

# RadialForceEffect

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A force effect that pulls objects toward its center with a spring-like (distance dependent) force.

## Declaration

```swift
struct RadialForceEffect
```

## Topics

### Initializers

- [init(strength:restDistance:)](radialforceeffect/init%28strength_restdistance_%29.md): Creates a radial force effect.

### Instance Properties

- [forceMode](radialforceeffect/forcemode.md): The type of force this effect applies.
- [parameterTypes](radialforceeffect/parametertypes.md): The input rigid body parameters.
- [restDistance](radialforceeffect/restdistance.md): A distance at which the rigid bodies receive zero radial force.
- [strength](radialforceeffect/strength.md): The magnitude of the force.

### Instance Methods

- [update(parameters:)](radialforceeffect/update%28parameters_%29.md): Calculates the radial forces for rigid bodies from the force effect.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [ForceEffectProtocol](forceeffectprotocol.md)

## See Also

### Built-in force effect types

- [ConstantForceEffect](constantforceeffect.md): A force effect that exerts a constant force in a direction relative to the effect’s transform.
- [ConstantRadialForceEffect](constantradialforceeffect.md): A force effect that pulls objects toward its center with a constant strength.
- [DragForceEffect](dragforceeffect.md): A force effect that slows bodies within its area of effect with a force proportional to the body’s velocity.
- [TurbulenceForceEffect](turbulenceforceeffect.md): A force effect that applies random forces with magnitudes proportional to each body’s velocity.
- [VortexForceEffect](vortexforceeffect.md): A force effect whose forces circulate around an axis centered at the origin of the effect.
