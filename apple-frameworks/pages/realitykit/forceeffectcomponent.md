> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/forceeffectcomponent](https://developer.apple.com/documentation/realitykit/forceeffectcomponent)

# ForceEffectComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A component that defines the forces that affect an entity, including custom forces that you define.

## Declaration

```swift
struct ForceEffectComponent
```

<a id="overview"></a>

## Overview

After you assign a `ForceEffectComponent` to an entity, the force effects in the component apply each physics update for as long as the component and force effects exist. Each [ForceEffect](forceeffect.md) updates sequentially while the physics system accumulates its forces. The center frame of each [ForceEffect](forceeffect.md) coincides with and moves alongside the entity’s position and orientation. To offset this center frame, set the position and orientation.

> **Note**

> You can set the [simulationState](forceeffectcomponent/simulationstate-swift.property.md) parameter to [ForceEffectComponent.SimulationState.pause](forceeffectcomponent/simulationstate-swift.enum/pause.md) if you want to apply forces later.

<a id="Create-forces"></a>

### Create forces

Use [ConstantForceEffect](constantforceeffect.md) to apply a constant force in a direction:

```swift
let constantForceEffect = ForceEffect(effect: ConstantForceEffect(strength: 1, direction: [1, 0, 0]))
```

RealityKit provides a set of useful forces you can use with `ForceEffectComponent`:

- [ConstantForceEffect](constantforceeffect.md)
- [ConstantRadialForceEffect](constantradialforceeffect.md)
- [DragForceEffect](dragforceeffect.md)
- [RadialForceEffect](radialforceeffect.md)
- [TurbulenceForceEffect](turbulenceforceeffect.md)
- [VortexForceEffect](vortexforceeffect.md)

<a id="Create-custom-forces"></a>

### Create custom forces

To create a custom force effect, define a structure that implements [ForceEffectProtocol](forceeffectprotocol.md), then create an instance of [ForceEffectBase](forceeffectbase.md) with your custom `ForceEffectProtocol` implementation:

```swift
// CustomForce implements ForceEffectProtocol, and has a custom parameter, thrustersActive, that determines how the system applies your force to a physics body.
let thrusterForce = CustomForce(thrustersActive: true)
// Create an instance of ForceEffectBase using your custom force.
let thursterForceEffect = ForceEffect(effect: thrusterForce)
```

> **Note**

> To apply force to a physics body with a custom `ForceEffectProtocol`, you must implement and apply forces in [update(parameters:)](forceeffectprotocol/update%28parameters_%29.md).

<a id="Apply-forces"></a>

### Apply forces

You can apply multiple forces to your entity at once by including them in `ForceEffectComponent`:

```swift
let forceEffectComponent = ForceEffectComponent(effects: [constantForceEffect, thrusterForceEffect])
entity.components.set(forceEffectComponent)
```

## Topics

### Initializers

- [init(effect:)](forceeffectcomponent/init%28effect_%29.md): Creates a force effect component with a single force effect, and automatically plays it.
- [init(effects:simulationState:)](forceeffectcomponent/init%28effects_simulationstate_%29.md): Creates a force effect component.

### Instance Properties

- [effects](forceeffectcomponent/effects.md): One or more effects used to simulate forces.
- [simulationState](forceeffectcomponent/simulationstate-swift.property.md): The desired state of the simulation.

### Enumerations

- [ForceEffectComponent.SimulationState](forceeffectcomponent/simulationstate-swift.enum.md): The simulation runtime states.

## Relationships

### Conforms To

- [Component](component.md)

## See Also

### Force effect components

- [ForceEffect](forceeffect.md): Defines a force effect’s system, and type specific properties.
