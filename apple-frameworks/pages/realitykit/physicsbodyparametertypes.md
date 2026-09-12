> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicsbodyparametertypes](https://developer.apple.com/documentation/realitykit/physicsbodyparametertypes)

# PhysicsBodyParameterTypes

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Defines which rigid body inputs are required by a force effect’s update handler.

## Declaration

```swift
struct PhysicsBodyParameterTypes
```

## Topics

### Initializers

- [init(rawValue:)](physicsbodyparametertypes/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](physicsbodyparametertypes/rawvalue.md): The backing storage for force effect inputs.

### Type Properties

- [angularVelocity](physicsbodyparametertypes/angularvelocity.md): The angular velocity of each rigid body.
- [distance](physicsbodyparametertypes/distance.md): The distance of each rigid body from the effect origin.
- [inertiaTensor](physicsbodyparametertypes/inertiatensor.md): The inertia tensor of each rigid body.
- [mass](physicsbodyparametertypes/mass.md): The mass of each rigid body,
- [orientation](physicsbodyparametertypes/orientation.md): The orientation of each rigid body relative to the effect orientation.
- [position](physicsbodyparametertypes/position.md): The center of mass of each rigid body relative to the effect origin.
- [velocity](physicsbodyparametertypes/velocity.md): The linear velocity of each rigid body.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Updating effects

- [update(parameters:)](forceeffectprotocol/update%28parameters_%29.md): Defines how the custom force effect computes forces at each physics simulation step.
- [register(\_:)](forceeffectprotocol/register%28__%29-1zt9t.md): Registers the custom effect.
- [ForceEffectParameters](forceeffectparameters.md): The force effect input data to the effect’s update handler or closure.
- [ForceEffectEvent](forceeffectevent.md): A struct that defines the arguments to the custom force effect update closure.
- [UnsafeForceEffectBuffer](unsafeforceeffectbuffer.md): Provides access to physics body parameters from the effect’s update function or event handler.
