> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physics-simulations-and-motion](https://developer.apple.com/documentation/realitykit/physics-simulations-and-motion)

# Simulations and motion

**Framework:** RealityKit  
**Kind:** API Collection

Simulate physical interactions between entities or systems.

<a id="Overview"></a>

## Overview

RealityKit simulates physical interactions between virtual objects in your scene, as well as between virtual objects and detected surfaces in the real world, such as floors, walls, or tabletops. On devices with a LiDAR Scanner, RealityKit can even simulate interactions between virtual objects and scanned real-world geometry.

## Topics

### Simulation setup

- [Designing scene hierarchies for efficient physics simulation](designing-scene-hierarchies-for-efficient-physics-simulation.md): Configure your RealityKit scenes to avoid performance bottlenecks.
- [Handling different-sized objects in physics simulations](handling-different-sized-objects-in-physics-simulations.md): Set up a scene hierarchy for accurate physics simulations.
- [PhysicsSimulationComponent](physicssimulationcomponent.md): A component that controls localized physics simulations.

### Simulation-related notifications

- [PhysicsSimulationEvents](physicssimulationevents.md): Types of events that fire during physics simulations

### Physical properties

- [PhysicsBodyComponent](physicsbodycomponent.md): A component that defines an entity’s behavior in physics body simulations.
- [PhysicsMaterialResource](physicsmaterialresource.md): Material properties, like friction, of a physically simulated object.
- [PhysicsBodyMode](physicsbodymode.md): The ways that a physics body can move in response to physical forces.
- [PhysicsMassProperties](physicsmassproperties.md): Mass properties of a physics body.

### Physics motion

- [PhysicsMotionComponent](physicsmotioncomponent.md): A component that controls the motion of the body in physics simulations.
- [ImpulseAction](impulseaction.md): An action that applies an impulse to the physics body at its center of mass when played as an animation.

### Particle simulation

- [Simulating particles in your visionOS app](simulating-particles-in-your-visionos-app.md): Add a range of visual effects to a RealityKit view by attaching a particle emitter component to an entity.
- [ParticleEmitterComponent](particleemittercomponent.md): A component that emits particles.
- [ParticleEmitterComponent.ParticleEmitter](particleemittercomponent/particleemitter.md)
- [ParticleEmitterComponent.Presets](particleemittercomponent/presets.md): Initial configurations that can be set when starting a new simulation.

### Entity compliance

- [HasPhysicsBody](hasphysicsbody.md): An interface that enables physics simulations based on the rules of Newtonian mechanics.
- [HasPhysicsMotion](hasphysicsmotion.md): An interface that provides velocity properties for physics simulations.
- [HasPhysics](hasphysics.md): An interface that combines the physics body and physics motion interfaces.

## See Also

### Physics simulation

- [Collision detection](physics-collision-detection.md): Determine when entities collide with each other or the environment.
- [Force effects](physics-force-effects.md): Control the movement of virtual objects with forces.
- [Physics joints and pins](physics-joints-and-pins.md): Simulate joint physics that connect virtual objects.
- [Cloth simulation](physics-cloth-simulation.md): Add fabric, soft surfaces, and draping materials that bend, fold, and respond to forces and contact in your 3D scenes.
