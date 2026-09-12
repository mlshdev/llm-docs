> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physics-force-effects](https://developer.apple.com/documentation/realitykit/physics-force-effects)

# Force effects

**Framework:** RealityKit  
**Kind:** API Collection

Control the movement of virtual objects with forces.

<a id="Overview"></a>

## Overview

Create various types of force effects, such as vortex, drag, and turbulence. Add a force effect to a scene by creating a structure that adopts [ForceEffectProtocol](forceeffectprotocol.md), and attaching it to an entity with a [ForceEffectComponent](forceeffectcomponent.md).

## Topics

### Force effect components

- [ForceEffectComponent](forceeffectcomponent.md): A component that defines the forces that affect an entity, including custom forces that you define.
- [ForceEffect](forceeffect.md): Defines a force effect’s system, and type specific properties.

### Built-in force effect types

- [ConstantForceEffect](constantforceeffect.md): A force effect that exerts a constant force in a direction relative to the effect’s transform.
- [ConstantRadialForceEffect](constantradialforceeffect.md): A force effect that pulls objects toward its center with a constant strength.
- [DragForceEffect](dragforceeffect.md): A force effect that slows bodies within its area of effect with a force proportional to the body’s velocity.
- [RadialForceEffect](radialforceeffect.md): A force effect that pulls objects toward its center with a spring-like (distance dependent) force.
- [TurbulenceForceEffect](turbulenceforceeffect.md): A force effect that applies random forces with magnitudes proportional to each body’s velocity.
- [VortexForceEffect](vortexforceeffect.md): A force effect whose forces circulate around an axis centered at the origin of the effect.

### Force effect constraints

- [ForceEffectBounds](forceeffectbounds.md): The boundary options for a force effect.
- [SpatialForceFalloff](spatialforcefalloff.md): A type that modulates the force strength based on the distance of rigid bodies.
- [TimedForceFalloff](timedforcefalloff.md): A type that modulates the force strength based on how long the force effect has run.

### Custom forces

- [ForceEffectProtocol](forceeffectprotocol.md): A protocol that defines a custom force effect.
- [ForceMode](forcemode.md): The options that control how physics system applies the forces.
- [ForceEffectParameters](forceeffectparameters.md): The force effect input data to the effect’s update handler or closure.
- [ForceEffectBase](forceeffectbase.md): The base protocol for the wrapping force effect structure containing common parameters for all force-effects.

## See Also

### Physics simulation

- [Collision detection](physics-collision-detection.md): Determine when entities collide with each other or the environment.
- [Simulations and motion](physics-simulations-and-motion.md): Simulate physical interactions between entities or systems.
- [Physics joints and pins](physics-joints-and-pins.md): Simulate joint physics that connect virtual objects.
- [Cloth simulation](physics-cloth-simulation.md): Add fabric, soft surfaces, and draping materials that bend, fold, and respond to forces and contact in your 3D scenes.
