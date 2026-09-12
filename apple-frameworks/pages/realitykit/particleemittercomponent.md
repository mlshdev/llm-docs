> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/particleemittercomponent](https://developer.apple.com/documentation/realitykit/particleemittercomponent)

# ParticleEmitterComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A component that emits particles.

## Declaration

```swift
struct ParticleEmitterComponent
```

## Mentioned In

- [Automatically animating RealityKit entities](automatically-animating-realitykit-entities.md)

<a id="overview"></a>

## Overview

To learn how to use `ParticleEmitterComponent` in your app, see [Simulating particles in your visionOS app](simulating-particles-in-your-visionos-app.md).

## Topics

### Structures

- [ParticleEmitterComponent.ParticleEmitter](particleemittercomponent/particleemitter.md)
- [ParticleEmitterComponent.Presets](particleemittercomponent/presets.md): Initial configurations that can be set when starting a new simulation.

### Initializers

- [init()](particleemittercomponent/init%28%29.md)

### Instance Properties

- [birthDirection](particleemittercomponent/birthdirection-swift.property.md): The possible initial directions for newly spawned particles, relative to the emitter shape.Defaults to normal.
- [birthLocation](particleemittercomponent/birthlocation-swift.property.md): The possible locations for newly spawned particles, relative to the emitter shape. Defaults to surface.
- [burstCount](particleemittercomponent/burstcount.md): Number of particles to emit in a single burst. Defaults to 100.
- [burstCountVariation](particleemittercomponent/burstcountvariation.md): Defines a plus/minus range from which a value is randomly selected to offset `burstCount`.
- [emissionDirection](particleemittercomponent/emissiondirection.md): The direction particles are emitted when birthDirection is set to World or Local. Defaults to (0.0, 1.0, 0.0).
- [emitterShape](particleemittercomponent/emittershape-swift.property.md): The shape of the region of space where the system spawns new particles. Defaults to plane.
- [emitterShapeSize](particleemittercomponent/emittershapesize.md): The emitter shape size in meters.
- [fieldSimulationSpace](particleemittercomponent/fieldsimulationspace.md): Field Simulation Space, either local or global
- [isEmitting](particleemittercomponent/isemitting.md): Disables/enables particle emission, independent of `simulationState`. Existing particles will not be affected.
- [mainEmitter](particleemittercomponent/mainemitter.md): Particle attributes affecting the main particles of the base simulation.
- [particlesInheritTransform](particleemittercomponent/particlesinherittransform.md): Determines if the entity’s transformation also affects the particles.
- [radialAmount](particleemittercomponent/radialamount.md): Radial sweep angle for sphere, cylinder, cone, and torus emitter shapes. Defaults to 2 \* pi.
- [simulationState](particleemittercomponent/simulationstate-swift.property.md): Controls particle simulation state: playing, paused or stopped. Defaults to `play`.
- [spawnInheritsParentColor](particleemittercomponent/spawninheritsparentcolor.md): Whether or not the spawnedEmitter’s color should be overriden by the mainEmitter’s color at the time of the spawning.
- [spawnOccasion](particleemittercomponent/spawnoccasion-swift.property.md): Determines when main particles emit spawn particles. Defaults to `onDeath`.
- [spawnSpreadFactor](particleemittercomponent/spawnspreadfactor.md): Amount a spawned particle spreads away from its parent particle, works in conjunction with the spawn particle’s `spreadingAngle`. Defaults to 0.
- [spawnSpreadFactorVariation](particleemittercomponent/spawnspreadfactorvariation.md): Defines a plus/minus range from which a value is randomly selected to offset Spawn Spread Factor.
- [spawnVelocityFactor](particleemittercomponent/spawnvelocityfactor.md): How much of the parent particle’s velocity to inherit. Defaults to 1.
- [spawnedEmitter](particleemittercomponent/spawnedemitter.md): Attributes affecting secondary particles spawned from the main simulation.
- [speed](particleemittercomponent/speed.md): The initial speed, in meters per second, for newly spawned particles. Defaults to 0.5.
- [speedVariation](particleemittercomponent/speedvariation.md): Defines a plus/minus range (in meters per second) from which a value is randomly selected to offset particle speed.
- [timing](particleemittercomponent/timing-swift.property.md): Defines the Emitter timing method.
- [torusInnerRadius](particleemittercomponent/torusinnerradius.md): Radius of the torus’ emitter shape tube. Defaults to 0.25.

### Instance Methods

- [burst()](particleemittercomponent/burst%28%29.md): Emits burstCount particles on the next update call.
- [restart()](particleemittercomponent/restart%28%29.md): Restarts the emission of particles. Requires the component to be re-assigned to the entity to take effect.

### Enumerations

- [ParticleEmitterComponent.BirthDirection](particleemittercomponent/birthdirection-swift.enum.md): Options for the initial direction of each emitted particle, used by the birthDirection property.
- [ParticleEmitterComponent.BirthLocation](particleemittercomponent/birthlocation-swift.enum.md): Options for the location on the shape of where particles are born, used by the birthLocation property.
- [ParticleEmitterComponent.EmitterShape](particleemittercomponent/emittershape-swift.enum.md): Options for the shape of an emitter, used by the emitterShape property.
- [ParticleEmitterComponent.SimulationSpace](particleemittercomponent/simulationspace.md): Options for particle simulation space
- [ParticleEmitterComponent.SimulationState](particleemittercomponent/simulationstate-swift.enum.md): Options for the particle simulation state, used by the `simulationState` property.
- [ParticleEmitterComponent.SpawnOccasion](particleemittercomponent/spawnoccasion-swift.enum.md): Options for when the spawned effect starts, used by the spawnOccasion property.
- [ParticleEmitterComponent.Timing](particleemittercomponent/timing-swift.enum.md): Options for specifying the duration of the particle effects, used by the timing property.

## Relationships

### Conforms To

- [Component](component.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Particle simulation

- [Simulating particles in your visionOS app](simulating-particles-in-your-visionos-app.md): Add a range of visual effects to a RealityKit view by attaching a particle emitter component to an entity.
- [ParticleEmitterComponent.ParticleEmitter](particleemittercomponent/particleemitter.md)
- [ParticleEmitterComponent.Presets](particleemittercomponent/presets.md): Initial configurations that can be set when starting a new simulation.
