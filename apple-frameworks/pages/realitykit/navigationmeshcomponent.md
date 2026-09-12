> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/navigationmeshcomponent](https://developer.apple.com/documentation/realitykit/navigationmeshcomponent)

# NavigationMeshComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A component that provides the navigation meshes an entity uses to find paths through a scene.

## Declaration

```swift
struct NavigationMeshComponent
```

<a id="overview"></a>

## Overview

Attach a navigation mesh component to an entity to supply the walkable surfaces that pathfinding relies on. Each [NavigationMeshResource](navigationmeshresource.md) in [navigationMeshes](navigationmeshcomponent/navigationmeshes.md) represents a baked region of the scene that agents with a matching [NavigationComponent](navigationcomponent.md) can travel across.

## Topics

### Creating a navigation mesh component

- [init(navigationMeshes:)](navigationmeshcomponent/init%28navigationmeshes_%29.md)

### Accessing the navigation meshes

- [navigationMeshes](navigationmeshcomponent/navigationmeshes.md): The set of NavigationMeshResources.

## Relationships

### Conforms To

- [Component](component.md)

## See Also

### Game development

- [Gaming sample code projects](game-development-sample-code.md): Explore a collection of projects relating to game development.
- [Entity animations](game-development-entity-animations.md): Dynamically move, rotate, and scale entities at runtime.
- [Character control, skeletons, and inverse kinematics](game-development-character-skeletons.md): Direct the movements and animation of models.
- [NavigationComponent](navigationcomponent.md): A component that defines which areas of a navigation mesh an entity can move through.
- [NavigationController](navigationcontroller.md): An interface for finding paths for an entity moving across a scene’s navigation mesh.
- [NavigationMeshResource](navigationmeshresource.md): A representation of a scene’s navigable surfaces that the system uses to compute paths.
