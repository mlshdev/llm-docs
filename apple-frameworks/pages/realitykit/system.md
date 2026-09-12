> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/system](https://developer.apple.com/documentation/realitykit/system)

# System

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An object that affects multiple entities in every update of a RealityKit scene.

## Declaration

```swift
protocol System
```

## Mentioned In

- [Implementing systems for entities in a scene](implementing-systems-for-entities-in-a-scene.md)
- [Passing Metal command objects around your application](passing-metal-command-objects-around-your-application.md)

<a id="overview"></a>

## Overview

In RealityKit’s Entity Component System (ECS), a *system* represents continuous behavior that affects multiple entities in the scene. Use systems to implement any behavior or logic that updates entities every scene update, such as different types of objects or characters. For example, a physics simulation system calculates and applies the affect of gravity, forces, and collisions for all entities. A system calls the [update(context:)](system/update%28context_%29.md) method as often as the `updatingSystemWhen` parameter of [entities(matching:updatingSystemWhen:)](sceneupdatecontext/entities%28matching_updatingsystemwhen_%29.md) defines.

Systems often work with components. You might, for example, create a system that calculates the hunger levels for entities in a game capable of feeling hunger. To identify which entities experience hunger, use a component that stores hunger-related state data and add it to the selected entities. The hunger system then iterates through all entities that contain a hunger component and updates their state based on relevant factors, such as when the entity last ate or how much energy it expends.

A complex game or experience may consist of many systems which need to be executed in a specific order. The [dependencies](system/dependencies.md) property  defines when the `update` method for each system is called each frame. Update order is defined between system types and not between individual system instances.

Systems and their dependencies form a directed acyclic graph (DAG). Custom systems are executed in dependency order. Systems without dependencies are updated in the order they were registered. If there are conflicting dependencies or cycles, then RealityKit ignores some conflicting dependencies and logs a warning. Each system instance is only run once per simulation step.

Properties of a system are never serialized to a file or synced over the network. Therefore, store data on entities using components, rather than as part of the system.

For more information, see [Implementing systems for entities in a scene](implementing-systems-for-entities-in-a-scene.md).

## Topics

### Registering a system

- [registerSystem()](system/registersystem%28%29.md): Registers a system with RealityKit.

### Specifying dependencies

- [dependencies](system/dependencies.md): An array of dependencies for this system.
- [SystemDependency](systemdependency.md): Defines update order relative to other systems. An object that specifies the update order between multiple systems.

### Creating a system

- [init(scene:)](system/init%28scene_%29.md): Creates a new system.

### Implementing system logic

- [update(context:)](system/update%28context_%29.md): Updates entities up to once every scene update.
- [SceneUpdateContext](sceneupdatecontext.md): An object that contains information about the scene to update.
- [EntityQuery](entityquery.md): An object that retrieves entities from a scene.
- [QueryPredicate](querypredicate.md): An object that defines the criteria for an entity query.
- [QueryResult](queryresult.md): An object that returns the results of an entity query.

## See Also

### System configuration

- [Implementing systems for entities in a scene](implementing-systems-for-entities-in-a-scene.md): Apply behaviors and physical effects to the objects and characters in a RealityKit scene with the Entity Component System (ECS).
- [Animating entity rotation with a system](animated-rotation-with-a-system.md): Rotate an entity around an axis using a Component and a System.
- [SystemUpdateCondition](systemupdatecondition.md): A condition which causes a system to update.
- [SceneUpdateContext](sceneupdatecontext.md): An object that contains information about the scene to update.
