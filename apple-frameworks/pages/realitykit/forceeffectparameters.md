> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/forceeffectparameters](https://developer.apple.com/documentation/realitykit/forceeffectparameters)

# ForceEffectParameters

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The force effect input data to the effect’s update handler or closure.

## Declaration

```swift
struct ForceEffectParameters
```

## Topics

### Instance Properties

- [angularVelocities](forceeffectparameters/angularvelocities.md): The angular velocities of all rigid bodies under the influence of the effect, or nil if angular velocity information was not requested.
- [distances](forceeffectparameters/distances.md): The distance from the effect to each rigid body’s center of mass, or nil if distance information was not requested.
- [elapsedTime](forceeffectparameters/elapsedtime.md): The amount of time that has elapsed since the force effect was started.
- [entity](forceeffectparameters/entity.md): The entity containing the force effect.
- [fixedDeltaTime](forceeffectparameters/fixeddeltatime.md): The fixed delta time between simulation steps.
- [inertiaTensors](forceeffectparameters/inertiatensors.md): The inertia tensor based on the current rigid body’s orientation, or nil if inertia tensor information was not requested.
- [masses](forceeffectparameters/masses.md): The mass of each rigid body, or nil if mass information was not requested or force mode does not require it.
- [orientations](forceeffectparameters/orientations.md): The orientations of all rigid bodies under the influence of the effect, or nil if rotational information was not requested.
- [physicsBodyCount](forceeffectparameters/physicsbodycount.md): The number of physics bodies to be updated.
- [positions](forceeffectparameters/positions.md): The positions of all rigid bodies under the influence of the effect, or nil if positional information was not requested.
- [velocities](forceeffectparameters/velocities.md): The velocities of all rigid bodies under the influence of the effect, or nil if velocity information was not requested.

### Instance Methods

- [setForce(\_:index:)](forceeffectparameters/setforce%28__index_%29.md): Sets the force for each rigid body.
- [setTorque(\_:index:)](forceeffectparameters/settorque%28__index_%29.md): Sets the torque for each rigid body.

## See Also

### Custom forces

- [ForceEffectProtocol](forceeffectprotocol.md): A protocol that defines a custom force effect.
- [ForceMode](forcemode.md): The options that control how physics system applies the forces.
- [ForceEffectBase](forceeffectbase.md): The base protocol for the wrapping force effect structure containing common parameters for all force-effects.
