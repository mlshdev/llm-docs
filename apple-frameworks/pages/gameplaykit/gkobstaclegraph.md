> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkobstaclegraph](https://developer.apple.com/documentation/gameplaykit/gkobstaclegraph)

# GKObstacleGraph (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A navigation graph for 2D game worlds that creates a minimal network for precise pathfinding around obstacles.

## Declaration

```swift
class GKObstacleGraph<NodeType> where NodeType : GKGraphNode2D
```

<a id="overview"></a>

## Overview

You create an obstacle graph with a collection of [GKObstacle](gkobstacle.md) objects. To use the graph for pathfinding, you add [GKGraphNode2D](gkgraphnode2d.md) objects representing points of interest (such as the current position of a game character and the location it needs to find a route to). Then use methods of the superclass [GKGraph](gkgraph.md) to find routes through the graph.

Unlike the related [GKMeshGraph](gkmeshgraph.md) class, an obstacle graph creates a minimal network of graph nodes, resulting in paths that are efficient but not smooth.

To learn more about graphs and pathfinding, see [Pathfinding](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Pathfinding.html#//apple_ref/doc/uid/TP40015172-CH3) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating a Graph

- [init(obstacles:bufferRadius:nodeClass:)](gkobstaclegraph/init%28obstacles_bufferradius_nodeclass_%29.md): Initializes a graph with the specified list of obstacles, using the specified node class.
- [init(obstacles:bufferRadius:)](gkobstaclegraph/init%28obstacles_bufferradius_%29.md): Initializes a graph with the specified list of obstacles.

### Working with Obstacles

- [obstacles](gkobstaclegraph/obstacles.md): The list of obstacle objects in the graph, each of which describes a polygon-shaped impassable area.
- [addObstacles(\_:)](gkobstaclegraph/addobstacles%28__%29.md): Adds new obstacles to the graph.
- [removeObstacles(\_:)](gkobstaclegraph/removeobstacles%28__%29.md): Removes the specified obstacle from the graph.
- [removeAllObstacles()](gkobstaclegraph/removeallobstacles%28%29.md): Removes all obstacles from the graph.
- [nodes(for:)](gkobstaclegraph/nodes%28for_%29.md): Returns the group of nodes corresponding to an obstacle in the graph.

### Working with Nodes

- [connectUsingObstacles(node:)](gkobstaclegraph/connectusingobstacles%28node_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors without creating connections that pass through obstacles or their buffer regions.
- [connectUsingObstacles(node:ignoring:)](gkobstaclegraph/connectusingobstacles%28node_ignoring_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors while ignoring the area occupied by the specified obstacles.
- [connectUsingObstacles(node:ignoringBufferRadiusOf:)](gkobstaclegraph/connectusingobstacles%28node_ignoringbufferradiusof_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors while ignoring the buffer regions around the specified obstacles.
- [bufferRadius](gkobstaclegraph/bufferradius.md): The distance from obstacle edges that should also be considered impassable.

### Locking Node Connections

- [lockConnection(from:to:)](gkobstaclegraph/lockconnection%28from_to_%29.md): Prevents the specified nodes from being disconnected due to the addition of obstacles.
- [unlockConnection(from:to:)](gkobstaclegraph/unlockconnection%28from_to_%29.md): Allows the specified nodes to be disconnected due to the addition of obstacles.
- [isConnectionLocked(from:to:)](gkobstaclegraph/isconnectionlocked%28from_to_%29.md): Returns a Boolean value indicating whether the specified nodes are protected from disconnection due to the addition of obstacles.

### Instance Methods

- [classForGenericArgument(at:)](gkobstaclegraph/classforgenericargument%28at_%29.md)

### Initializers

- [init(nodes:)](gkobstaclegraph/init%28nodes_%29.md)

## Relationships

### Inherits From

- [GKGraph](gkgraph.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Pathfinding

- [GKGraph](gkgraph.md): A collection of nodes that describes the navigability of a game world and provides *pathfinding* methods to search for routes through that space.
- [GKMeshGraph](gkmeshgraph.md): A navigation graph for 2D game worlds that creates a space-filling network for smooth pathfinding around obstacles.
- [GKGridGraph](gkgridgraph.md): A navigation graph for 2D game worlds where movement is constrained to an integer grid.
- [GKGraphNode](gkgraphnode.md): A single node in a navigation graph for use in pathfinding.
- [GKGraphNode2D](gkgraphnode2d.md): A node in a navigation graph, associated with a point in continuous 2D space.
- [GKGraphNode3D](gkgraphnode3d.md): A node in a navigation graph, associated with a point in continuous 3D space.
- [GKGridGraphNode](gkgridgraphnode.md): A node in a navigation graph, associated with a position on a discrete two-dimensional grid.

# GKObstacleGraph (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A navigation graph for 2D game worlds that creates a minimal network for precise pathfinding around obstacles.

## Declaration

```objectivec
@interface GKObstacleGraph : GKGraph
```

<a id="overview"></a>

## Overview

You create an obstacle graph with a collection of [GKObstacle](gkobstacle.md) objects. To use the graph for pathfinding, you add [GKGraphNode2D](gkgraphnode2d.md) objects representing points of interest (such as the current position of a game character and the location it needs to find a route to). Then use methods of the superclass [GKGraph](gkgraph.md) to find routes through the graph.

Unlike the related [GKMeshGraph](gkmeshgraph.md) class, an obstacle graph creates a minimal network of graph nodes, resulting in paths that are efficient but not smooth.

To learn more about graphs and pathfinding, see [Pathfinding](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Pathfinding.html#//apple_ref/doc/uid/TP40015172-CH3) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating a Graph

- [initWithObstacles:bufferRadius:nodeClass:](gkobstaclegraph/init%28obstacles_bufferradius_nodeclass_%29.md): Initializes a graph with the specified list of obstacles, using the specified node class.
- [graphWithObstacles:bufferRadius:nodeClass:](gkobstaclegraph/graphwithobstacles_bufferradius_nodeclass_.md): Creates a graph with the specified list of obstacles, using the specified node class.
- [initWithObstacles:bufferRadius:](gkobstaclegraph/init%28obstacles_bufferradius_%29.md): Initializes a graph with the specified list of obstacles.
- [graphWithObstacles:bufferRadius:](gkobstaclegraph/graphwithobstacles_bufferradius_.md): Creates a graph with the specified list of obstacles.

### Working with Obstacles

- [obstacles](gkobstaclegraph/obstacles.md): The list of obstacle objects in the graph, each of which describes a polygon-shaped impassable area.
- [addObstacles:](gkobstaclegraph/addobstacles%28__%29.md): Adds new obstacles to the graph.
- [removeObstacles:](gkobstaclegraph/removeobstacles%28__%29.md): Removes the specified obstacle from the graph.
- [removeAllObstacles](gkobstaclegraph/removeallobstacles%28%29.md): Removes all obstacles from the graph.
- [nodesForObstacle:](gkobstaclegraph/nodes%28for_%29.md): Returns the group of nodes corresponding to an obstacle in the graph.

### Working with Nodes

- [connectNodeUsingObstacles:](gkobstaclegraph/connectusingobstacles%28node_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors without creating connections that pass through obstacles or their buffer regions.
- [connectNodeUsingObstacles:ignoringObstacles:](gkobstaclegraph/connectusingobstacles%28node_ignoring_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors while ignoring the area occupied by the specified obstacles.
- [connectNodeUsingObstacles:ignoringBufferRadiusOfObstacles:](gkobstaclegraph/connectusingobstacles%28node_ignoringbufferradiusof_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors while ignoring the buffer regions around the specified obstacles.
- [bufferRadius](gkobstaclegraph/bufferradius.md): The distance from obstacle edges that should also be considered impassable.

### Locking Node Connections

- [lockConnectionFromNode:toNode:](gkobstaclegraph/lockconnection%28from_to_%29.md): Prevents the specified nodes from being disconnected due to the addition of obstacles.
- [unlockConnectionFromNode:toNode:](gkobstaclegraph/unlockconnection%28from_to_%29.md): Allows the specified nodes to be disconnected due to the addition of obstacles.
- [isConnectionLockedFromNode:toNode:](gkobstaclegraph/isconnectionlocked%28from_to_%29.md): Returns a Boolean value indicating whether the specified nodes are protected from disconnection due to the addition of obstacles.

### Instance Methods

- [classForGenericArgumentAtIndex:](gkobstaclegraph/classforgenericargument%28at_%29.md)

## Relationships

### Inherits From

- [GKGraph](gkgraph.md)

## See Also

### Pathfinding

- [GKGraph](gkgraph.md): A collection of nodes that describes the navigability of a game world and provides *pathfinding* methods to search for routes through that space.
- [GKMeshGraph](gkmeshgraph.md): A navigation graph for 2D game worlds that creates a space-filling network for smooth pathfinding around obstacles.
- [GKGridGraph](gkgridgraph.md): A navigation graph for 2D game worlds where movement is constrained to an integer grid.
- [GKGraphNode](gkgraphnode.md): A single node in a navigation graph for use in pathfinding.
- [GKGraphNode2D](gkgraphnode2d.md): A node in a navigation graph, associated with a point in continuous 2D space.
- [GKGraphNode3D](gkgraphnode3d.md): A node in a navigation graph, associated with a point in continuous 3D space.
- [GKGridGraphNode](gkgridgraphnode.md): A node in a navigation graph, associated with a position on a discrete two-dimensional grid.
