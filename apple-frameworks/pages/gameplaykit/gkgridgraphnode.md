> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgridgraphnode](https://developer.apple.com/documentation/gameplaykit/gkgridgraphnode)

# GKGridGraphNode (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A node in a navigation graph, associated with a position on a discrete two-dimensional grid.

## Declaration

```swift
class GKGridGraphNode
```

<a id="overview"></a>

## Overview

Together, a network of nodes form a graph that describes the navigability of a game world. Use graph nodes with a [GKGridGraph](gkgridgraph.md) object (and methods of its superclass [GKGraph](gkgraph.md)) to perform actions that relate to the network of nodes as a whole, such as pathfinding to determine routes through the network.

To learn more about graphs and pathfinding, see [Pathfinding](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Pathfinding.html#//apple_ref/doc/uid/TP40015172-CH3) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating a Graph Node

- [init(gridPosition:)](gkgridgraphnode/init%28gridposition_%29.md): Initializes a graph node with the specified position on a grid.

### Inspecting a Node’s Position

- [gridPosition](gkgridgraphnode/gridposition.md): The position of the node on a discrete integer grid.

## Relationships

### Inherits From

- [GKGraphNode](gkgraphnode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Pathfinding

- [GKGraph](gkgraph.md): A collection of nodes that describes the navigability of a game world and provides *pathfinding* methods to search for routes through that space.
- [GKObstacleGraph](gkobstaclegraph.md): A navigation graph for 2D game worlds that creates a minimal network for precise pathfinding around obstacles.
- [GKMeshGraph](gkmeshgraph.md): A navigation graph for 2D game worlds that creates a space-filling network for smooth pathfinding around obstacles.
- [GKGridGraph](gkgridgraph.md): A navigation graph for 2D game worlds where movement is constrained to an integer grid.
- [GKGraphNode](gkgraphnode.md): A single node in a navigation graph for use in pathfinding.
- [GKGraphNode2D](gkgraphnode2d.md): A node in a navigation graph, associated with a point in continuous 2D space.
- [GKGraphNode3D](gkgraphnode3d.md): A node in a navigation graph, associated with a point in continuous 3D space.

# GKGridGraphNode (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A node in a navigation graph, associated with a position on a discrete two-dimensional grid.

## Declaration

```objectivec
@interface GKGridGraphNode : GKGraphNode
```

<a id="overview"></a>

## Overview

Together, a network of nodes form a graph that describes the navigability of a game world. Use graph nodes with a [GKGridGraph](gkgridgraph.md) object (and methods of its superclass [GKGraph](gkgraph.md)) to perform actions that relate to the network of nodes as a whole, such as pathfinding to determine routes through the network.

To learn more about graphs and pathfinding, see [Pathfinding](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Pathfinding.html#//apple_ref/doc/uid/TP40015172-CH3) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating a Graph Node

- [initWithGridPosition:](gkgridgraphnode/init%28gridposition_%29.md): Initializes a graph node with the specified position on a grid.
- [nodeWithGridPosition:](gkgridgraphnode/nodewithgridposition_.md): Creates a graph node with the specified position on a grid.

### Inspecting a Node’s Position

- [gridPosition](gkgridgraphnode/gridposition.md): The position of the node on a discrete integer grid.

## Relationships

### Inherits From

- [GKGraphNode](gkgraphnode.md)

## See Also

### Pathfinding

- [GKGraph](gkgraph.md): A collection of nodes that describes the navigability of a game world and provides *pathfinding* methods to search for routes through that space.
- [GKObstacleGraph](gkobstaclegraph.md): A navigation graph for 2D game worlds that creates a minimal network for precise pathfinding around obstacles.
- [GKMeshGraph](gkmeshgraph.md): A navigation graph for 2D game worlds that creates a space-filling network for smooth pathfinding around obstacles.
- [GKGridGraph](gkgridgraph.md): A navigation graph for 2D game worlds where movement is constrained to an integer grid.
- [GKGraphNode](gkgraphnode.md): A single node in a navigation graph for use in pathfinding.
- [GKGraphNode2D](gkgraphnode2d.md): A node in a navigation graph, associated with a point in continuous 2D space.
- [GKGraphNode3D](gkgraphnode3d.md): A node in a navigation graph, associated with a point in continuous 3D space.
