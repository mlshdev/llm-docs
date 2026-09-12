> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/navigationcomponent](https://developer.apple.com/documentation/realitykit/navigationcomponent)

# NavigationComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A component that defines which areas of a navigation mesh an entity can move through.

## Declaration

```swift
struct NavigationComponent
```

<a id="overview"></a>

## Overview

Add a navigation component to an entity to make it a navigation agent. Its [layer](navigationcomponent/layer.md) selects the navigation mesh the entity travels on, and its [filter](navigationcomponent/filter-swift.property.md) restricts which marked areas the entity can cross when a [NavigationController](navigationcontroller.md) finds a path.

## Topics

### Creating a component

- [init(layer:filter:)](navigationcomponent/init%28layer_filter_%29.md)

### Configuring navigation

- [layer](navigationcomponent/layer.md): The layer to use when searching for a NavigationMeshResource in a Scene. If not set, the first available NavigationMeshResource will be used.
- [filter](navigationcomponent/filter-swift.property.md): The filter to use when pathfinding.
- [NavigationComponent.Filter](navigationcomponent/filter-swift.struct.md): A struct that stores information about flags to ignore and include, and area costs for a pathfind.

## Relationships

### Conforms To

- [Component](component.md)

## See Also

### Game development

- [Gaming sample code projects](game-development-sample-code.md): Explore a collection of projects relating to game development.
- [Entity animations](game-development-entity-animations.md): Dynamically move, rotate, and scale entities at runtime.
- [Character control, skeletons, and inverse kinematics](game-development-character-skeletons.md): Direct the movements and animation of models.
- [NavigationMeshComponent](navigationmeshcomponent.md): A component that provides the navigation meshes an entity uses to find paths through a scene.
- [NavigationController](navigationcontroller.md): An interface for finding paths for an entity moving across a scene’s navigation mesh.
- [NavigationMeshResource](navigationmeshresource.md): A representation of a scene’s navigable surfaces that the system uses to compute paths.
