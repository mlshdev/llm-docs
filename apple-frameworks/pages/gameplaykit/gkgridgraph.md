> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgridgraph](https://developer.apple.com/documentation/gameplaykit/gkgridgraph)

# GKGridGraph (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A navigation graph for 2D game worlds where movement is constrained to an integer grid.

## Declaration

```swift
class GKGridGraph<NodeType> where NodeType : GKGridGraphNode
```

<a id="overview"></a>

## Overview

Use this class to generate a graph containing [GKGridGraphNode](gkgridgraphnode.md) objects representing a specified grid. Then use methods of the superclass [GKGraph](gkgraph.md) to find routes through the graph.

To learn more about graphs and pathfinding, see [Pathfinding](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Pathfinding.html#//apple_ref/doc/uid/TP40015172-CH3) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating a Graph

- [init(fromGridStartingAt:width:height:diagonalsAllowed:nodeClass:)](gkgridgraph/init%28fromgridstartingat_width_height_diagonalsallowed_nodeclass_%29.md): Initializes a graph that describes an integer grid with the specified dimensions, using the specified node class.
- [init(fromGridStartingAt:width:height:diagonalsAllowed:)](gkgridgraph/init%28fromgridstartingat_width_height_diagonalsallowed_%29.md): Initializes a graph that describes an integer grid with the specified dimensions.

### Working with Nodes

- [node(atGridPosition:)](gkgridgraph/node%28atgridposition_%29.md): Returns the node in the graph at the specified grid coordinates.
- [connectToAdjacentNodes(node:)](gkgridgraph/connecttoadjacentnodes%28node_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors in the grid.

### Inspecting a Graph

- [diagonalsAllowed](gkgridgraph/diagonalsallowed.md): A Boolean value that indicates whether nodes in the grid are connected to their diagonal neighbors.
- [gridOrigin](gkgridgraph/gridorigin.md): The lowest x- and y-coordinates that appear in the grid.
- [gridWidth](gkgridgraph/gridwidth.md): The number of possible x-coordinates in the grid.
- [gridHeight](gkgridgraph/gridheight.md): The number of possible y-coordinates in the grid.

### Instance Methods

- [classForGenericArgument(at:)](gkgridgraph/classforgenericargument%28at_%29.md)

### Initializers

- [init(nodes:)](gkgridgraph/init%28nodes_%29.md)

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
- [GKObstacleGraph](gkobstaclegraph.md): A navigation graph for 2D game worlds that creates a minimal network for precise pathfinding around obstacles.
- [GKMeshGraph](gkmeshgraph.md): A navigation graph for 2D game worlds that creates a space-filling network for smooth pathfinding around obstacles.
- [GKGraphNode](gkgraphnode.md): A single node in a navigation graph for use in pathfinding.
- [GKGraphNode2D](gkgraphnode2d.md): A node in a navigation graph, associated with a point in continuous 2D space.
- [GKGraphNode3D](gkgraphnode3d.md): A node in a navigation graph, associated with a point in continuous 3D space.
- [GKGridGraphNode](gkgridgraphnode.md): A node in a navigation graph, associated with a position on a discrete two-dimensional grid.

# GKGridGraph (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A navigation graph for 2D game worlds where movement is constrained to an integer grid.

## Declaration

```objectivec
@interface GKGridGraph : GKGraph
```

<a id="overview"></a>

## Overview

Use this class to generate a graph containing [GKGridGraphNode](gkgridgraphnode.md) objects representing a specified grid. Then use methods of the superclass [GKGraph](gkgraph.md) to find routes through the graph.

To learn more about graphs and pathfinding, see [Pathfinding](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Pathfinding.html#//apple_ref/doc/uid/TP40015172-CH3) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating a Graph

- [initFromGridStartingAt:width:height:diagonalsAllowed:nodeClass:](gkgridgraph/init%28fromgridstartingat_width_height_diagonalsallowed_nodeclass_%29.md): Initializes a graph that describes an integer grid with the specified dimensions, using the specified node class.
- [graphFromGridStartingAt:width:height:diagonalsAllowed:nodeClass:](gkgridgraph/graphfromgridstartingat_width_height_diagonalsallowed_nodeclass_.md): Creates a graph that describes an integer grid with the specified dimensions, using the specified node class.
- [initFromGridStartingAt:width:height:diagonalsAllowed:](gkgridgraph/init%28fromgridstartingat_width_height_diagonalsallowed_%29.md): Initializes a graph that describes an integer grid with the specified dimensions.
- [graphFromGridStartingAt:width:height:diagonalsAllowed:](gkgridgraph/graphfromgridstartingat_width_height_diagonalsallowed_.md): Creates a graph that describes an integer grid with the specified dimensions.

### Working with Nodes

- [nodeAtGridPosition:](gkgridgraph/node%28atgridposition_%29.md): Returns the node in the graph at the specified grid coordinates.
- [connectNodeToAdjacentNodes:](gkgridgraph/connecttoadjacentnodes%28node_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors in the grid.

### Inspecting a Graph

- [diagonalsAllowed](gkgridgraph/diagonalsallowed.md): A Boolean value that indicates whether nodes in the grid are connected to their diagonal neighbors.
- [gridOrigin](gkgridgraph/gridorigin.md): The lowest x- and y-coordinates that appear in the grid.
- [gridWidth](gkgridgraph/gridwidth.md): The number of possible x-coordinates in the grid.
- [gridHeight](gkgridgraph/gridheight.md): The number of possible y-coordinates in the grid.

### Instance Methods

- [classForGenericArgumentAtIndex:](gkgridgraph/classforgenericargument%28at_%29.md)

## Relationships

### Inherits From

- [GKGraph](gkgraph.md)

## See Also

### Pathfinding

- [GKGraph](gkgraph.md): A collection of nodes that describes the navigability of a game world and provides *pathfinding* methods to search for routes through that space.
- [GKObstacleGraph](gkobstaclegraph.md): A navigation graph for 2D game worlds that creates a minimal network for precise pathfinding around obstacles.
- [GKMeshGraph](gkmeshgraph.md): A navigation graph for 2D game worlds that creates a space-filling network for smooth pathfinding around obstacles.
- [GKGraphNode](gkgraphnode.md): A single node in a navigation graph for use in pathfinding.
- [GKGraphNode2D](gkgraphnode2d.md): A node in a navigation graph, associated with a point in continuous 2D space.
- [GKGraphNode3D](gkgraphnode3d.md): A node in a navigation graph, associated with a point in continuous 3D space.
- [GKGridGraphNode](gkgridgraphnode.md): A node in a navigation graph, associated with a position on a discrete two-dimensional grid.
