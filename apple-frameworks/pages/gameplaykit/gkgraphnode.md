> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgraphnode](https://developer.apple.com/documentation/gameplaykit/gkgraphnode)

# GKGraphNode (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A single node in a navigation graph for use in pathfinding.

## Declaration

```swift
class GKGraphNode
```

<a id="overview"></a>

## Overview

A set of connected nodes form a graph that describes the navigability of a game world. Use graph nodes together with a [GKGraph](gkgraph.md) object (or one of its subclasses) to perform actions that relate to the network of nodes as a whole, such as pathfinding to determine routes through the network.

This class describes the general features of graph nodes, but does not contain geometry information that relates the graph to a game world. You can construct a graph with this class or any of its subclasses:

- On its own, the [GKGraphNode](gkgraphnode.md) class is useful for worlds such as board games, where the connections between nodes are important but their spatial position has no effect on gameplay.
- Create [GKGridGraphNode](gkgridgraphnode.md) objects (for use with the [GKGridGraph](gkgridgraph.md) class) to model worlds where movement is constrained to a two-dimensional integer grid.
- Create [GKGraphNode2D](gkgraphnode2d.md) objects to model worlds that allow full freedom of movement in a two-dimensional plane. Use these nodes together with the [GKObstacleGraph](gkobstaclegraph.md) or [GKMeshGraph](gkmeshgraph.md) class to create graphs that route around impassable obstacles.
- Create [GKGraphNode3D](gkgraphnode3d.md) objects to model worlds that allow full freedom of movement in three-dimensional space.

To learn more about graphs and pathfinding, see [Pathfinding](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Pathfinding.html#//apple_ref/doc/uid/TP40015172-CH3) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Working with Connections

- [connectedNodes](gkgraphnode/connectednodes.md): The list of other nodes connected to this node.
- [addConnections(to:bidirectional:)](gkgraphnode/addconnections%28to_bidirectional_%29.md): Connects this node to all nodes in the specified list.
- [removeConnections(to:bidirectional:)](gkgraphnode/removeconnections%28to_bidirectional_%29.md): Removes the connections from this node to the specified nodes.

### Computing Traversal Costs

- [cost(to:)](gkgraphnode/cost%28to_%29.md): Returns the cost to travel from this node to the specified, directly connected, node.
- [estimatedCost(to:)](gkgraphnode/estimatedcost%28to_%29.md): Returns an underestimate of the cost of travel from this node to the specified node.

### Finding Paths

- [findPath(to:)](gkgraphnode/findpath%28to_%29.md): Computes and returns a sequence of nodes that represents the lowest-cost graph traversal from this node to the specified node.
- [findPath(from:)](gkgraphnode/findpath%28from_%29.md): Computes and returns a sequence of nodes that represents the lowest-cost graph traversal from the specified node to this node.

### Initializers

- [init(coder:)](gkgraphnode/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [GKGraphNode2D](gkgraphnode2d.md)
- [GKGraphNode3D](gkgraphnode3d.md)
- [GKGridGraphNode](gkgridgraphnode.md)

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
- [GKGraphNode2D](gkgraphnode2d.md): A node in a navigation graph, associated with a point in continuous 2D space.
- [GKGraphNode3D](gkgraphnode3d.md): A node in a navigation graph, associated with a point in continuous 3D space.
- [GKGridGraphNode](gkgridgraphnode.md): A node in a navigation graph, associated with a position on a discrete two-dimensional grid.

# GKGraphNode (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A single node in a navigation graph for use in pathfinding.

## Declaration

```objectivec
@interface GKGraphNode : NSObject
```

<a id="overview"></a>

## Overview

A set of connected nodes form a graph that describes the navigability of a game world. Use graph nodes together with a [GKGraph](gkgraph.md) object (or one of its subclasses) to perform actions that relate to the network of nodes as a whole, such as pathfinding to determine routes through the network.

This class describes the general features of graph nodes, but does not contain geometry information that relates the graph to a game world. You can construct a graph with this class or any of its subclasses:

- On its own, the [GKGraphNode](gkgraphnode.md) class is useful for worlds such as board games, where the connections between nodes are important but their spatial position has no effect on gameplay.
- Create [GKGridGraphNode](gkgridgraphnode.md) objects (for use with the [GKGridGraph](gkgridgraph.md) class) to model worlds where movement is constrained to a two-dimensional integer grid.
- Create [GKGraphNode2D](gkgraphnode2d.md) objects to model worlds that allow full freedom of movement in a two-dimensional plane. Use these nodes together with the [GKObstacleGraph](gkobstaclegraph.md) or [GKMeshGraph](gkmeshgraph.md) class to create graphs that route around impassable obstacles.
- Create [GKGraphNode3D](gkgraphnode3d.md) objects to model worlds that allow full freedom of movement in three-dimensional space.

To learn more about graphs and pathfinding, see [Pathfinding](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Pathfinding.html#//apple_ref/doc/uid/TP40015172-CH3) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Working with Connections

- [connectedNodes](gkgraphnode/connectednodes.md): The list of other nodes connected to this node.
- [addConnectionsToNodes:bidirectional:](gkgraphnode/addconnections%28to_bidirectional_%29.md): Connects this node to all nodes in the specified list.
- [removeConnectionsToNodes:bidirectional:](gkgraphnode/removeconnections%28to_bidirectional_%29.md): Removes the connections from this node to the specified nodes.

### Computing Traversal Costs

- [costToNode:](gkgraphnode/cost%28to_%29.md): Returns the cost to travel from this node to the specified, directly connected, node.
- [estimatedCostToNode:](gkgraphnode/estimatedcost%28to_%29.md): Returns an underestimate of the cost of travel from this node to the specified node.

### Finding Paths

- [findPathToNode:](gkgraphnode/findpath%28to_%29.md): Computes and returns a sequence of nodes that represents the lowest-cost graph traversal from this node to the specified node.
- [findPathFromNode:](gkgraphnode/findpath%28from_%29.md): Computes and returns a sequence of nodes that represents the lowest-cost graph traversal from the specified node to this node.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [GKGraphNode2D](gkgraphnode2d.md)
- [GKGraphNode3D](gkgraphnode3d.md)
- [GKGridGraphNode](gkgridgraphnode.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Pathfinding

- [GKGraph](gkgraph.md): A collection of nodes that describes the navigability of a game world and provides *pathfinding* methods to search for routes through that space.
- [GKObstacleGraph](gkobstaclegraph.md): A navigation graph for 2D game worlds that creates a minimal network for precise pathfinding around obstacles.
- [GKMeshGraph](gkmeshgraph.md): A navigation graph for 2D game worlds that creates a space-filling network for smooth pathfinding around obstacles.
- [GKGridGraph](gkgridgraph.md): A navigation graph for 2D game worlds where movement is constrained to an integer grid.
- [GKGraphNode2D](gkgraphnode2d.md): A node in a navigation graph, associated with a point in continuous 2D space.
- [GKGraphNode3D](gkgraphnode3d.md): A node in a navigation graph, associated with a point in continuous 3D space.
- [GKGridGraphNode](gkgridgraphnode.md): A node in a navigation graph, associated with a position on a discrete two-dimensional grid.
