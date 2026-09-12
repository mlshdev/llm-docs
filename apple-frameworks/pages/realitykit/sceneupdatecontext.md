> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/sceneupdatecontext](https://developer.apple.com/documentation/realitykit/sceneupdatecontext)

# SceneUpdateContext

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An object that contains information about the scene to update.

## Declaration

```swift
struct SceneUpdateContext
```

## Mentioned In

- [Passing Metal command objects around your application](passing-metal-command-objects-around-your-application.md)

<a id="overview"></a>

## Overview

RealityKit uses a [SceneUpdateContext](sceneupdatecontext.md) to pass information to a [System](system.md) about the scene it’s currently updating.

## Topics

### Updating a scene

- [scene](sceneupdatecontext/scene.md): The updating scene.
- [deltaTime](sceneupdatecontext/deltatime.md): The number of seconds elapsed since the last update.

### Instance Methods

- [entities(matching:updatingSystemWhen:)](sceneupdatecontext/entities%28matching_updatingsystemwhen_%29.md): Returns all entities which pass the query predicate of the query.

## See Also

### System configuration

- [Implementing systems for entities in a scene](implementing-systems-for-entities-in-a-scene.md): Apply behaviors and physical effects to the objects and characters in a RealityKit scene with the Entity Component System (ECS).
- [Animating entity rotation with a system](animated-rotation-with-a-system.md): Rotate an entity around an axis using a Component and a System.
- [System](system.md): An object that affects multiple entities in every update of a RealityKit scene.
- [SystemUpdateCondition](systemupdatecondition.md): A condition which causes a system to update.
