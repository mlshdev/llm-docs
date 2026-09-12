> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/navigationcontroller](https://developer.apple.com/documentation/realitykit/navigationcontroller)

# NavigationController

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An interface for finding paths for an entity moving across a scene’s navigation mesh.

## Declaration

```swift
struct NavigationController
```

<a id="overview"></a>

## Overview

Create a navigation controller for an entity, then call [requestPath(to:)](navigationcontroller/requestpath%28to_%29.md) to start an asynchronous pathfind or [computePath(to:)](navigationcontroller/computepath%28to_%29.md) to compute a path immediately. Track [pathfindStatus](navigationcontroller/pathfindstatus-swift.property.md) and read [currentPath](navigationcontroller/currentpath.md) to follow the result.

## Topics

### Creating a navigation controller

- [init(entity:)](navigationcontroller/init%28entity_%29.md): Creates a NavigationController from an Entity with a NavigationComponent.

### Requesting pathfinding

- [requestPath(to:)](navigationcontroller/requestpath%28to_%29.md): Requests a pathfind from the owning entity’s position to the target position.
- [requestPath(from:to:)](navigationcontroller/requestpath%28from_to_%29.md): Requests a pathfind from a given position to the target position.
- [stopPathfind()](navigationcontroller/stoppathfind%28%29.md): Cancels any in-progress pathfinds.

### Computing paths

- [computePath(to:)](navigationcontroller/computepath%28to_%29.md): Asynchronously requests a pathfind from the owning entity’s position to the target position and waits for the path or a failure. If the function returns an empty path, the pathfind succeeded with no nodes (for example, the start and end positions are in the same place). If the function returns nil, the pathfinding failed to find a path.
- [computePath(from:to:)](navigationcontroller/computepath%28from_to_%29.md): Asynchronously requests a pathfind from a given position to the target position and waits for the path or a failure. If the function returns an empty path, the pathfind succeeded with no nodes (for example, the start and end positions are in the same place). If the function returns nil, the pathfinding failed to find a path.

### Monitoring pathfinding status

- [pathfindStatus](navigationcontroller/pathfindstatus-swift.property.md): The current pathfind status.
- [NavigationController.PathfindStatus](navigationcontroller/pathfindstatus-swift.enum.md): The status of a pathfinding request.
- [currentPath](navigationcontroller/currentpath.md): The computed path to the target position found by requestPath(). If called before the pathfind completes, a partial path will be returned. This partial path may be suboptimal. If the pathfind failed or was not requested, the function will return an empty array.

## See Also

### Game development

- [Gaming sample code projects](game-development-sample-code.md): Explore a collection of projects relating to game development.
- [Entity animations](game-development-entity-animations.md): Dynamically move, rotate, and scale entities at runtime.
- [Character control, skeletons, and inverse kinematics](game-development-character-skeletons.md): Direct the movements and animation of models.
- [NavigationComponent](navigationcomponent.md): A component that defines which areas of a navigation mesh an entity can move through.
- [NavigationMeshComponent](navigationmeshcomponent.md): A component that provides the navigation meshes an entity uses to find paths through a scene.
- [NavigationMeshResource](navigationmeshresource.md): A representation of a scene’s navigable surfaces that the system uses to compute paths.
