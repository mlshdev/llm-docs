> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkmeshgraph](https://developer.apple.com/documentation/gameplaykit/gkmeshgraph)

# GKMeshGraph (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A navigation graph for 2D game worlds that creates a space-filling network for smooth pathfinding around obstacles.

## Declaration

```swift
class GKMeshGraph<NodeType> where NodeType : GKGraphNode2D
```

<a id="overview"></a>

## Overview

To use a mesh graph for pathfinding, add a collection of [GKObstacle](gkobstacle.md) objects representing impassable areas and [GKGraphNode2D](gkgraphnode2d.md) objects representing points of interest (such as the current position of a game character and the location it needs to find a route to). Then use methods of the superclass [GKGraph](gkgraph.md) to find routes through the graph.

Unlike the related [GKObstacleGraph](gkobstaclegraph.md) class, a mesh graph creates a space-filling network of graph nodes, resulting in paths that are smooth but not the most efficient.

To learn more about graphs and pathfinding, see [Pathfinding](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Pathfinding.html#//apple_ref/doc/uid/TP40015172-CH3) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating a Graph

- [init(bufferRadius:minCoordinate:maxCoordinate:nodeClass:)](gkmeshgraph/init%28bufferradius_mincoordinate_maxcoordinate_nodeclass_%29.md): Initializes a graph to cover the specified area, using the specified node class.
- [init(bufferRadius:minCoordinate:maxCoordinate:)](gkmeshgraph/init%28bufferradius_mincoordinate_maxcoordinate_%29.md): Initializes a graph to cover the specified area.

### Working with Obstacles

- [obstacles](gkmeshgraph/obstacles.md): The list of obstacle objects in the graph, each of which describes a polygon-shaped impassable area.
- [addObstacles(\_:)](gkmeshgraph/addobstacles%28__%29.md): Adds new obstacles to the graph.
- [removeObstacles(\_:)](gkmeshgraph/removeobstacles%28__%29.md): Removes the specified obstacle from the graph.

### Working with Nodes

- [connectUsingObstacles(node:)](gkmeshgraph/connectusingobstacles%28node_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors without creating connections that pass through obstacles or their buffer regions.
- [bufferRadius](gkmeshgraph/bufferradius.md): The distance from obstacle edges that should also be considered impassable.

### Managing the Mesh

- [triangulate()](gkmeshgraph/triangulate%28%29.md): Creates or updates the graph with a network of nodes that describes the open space around its obstacles.
- [triangulationMode](gkmeshgraph/triangulationmode.md): A set of options for how to place graph nodes when triangulating the graph.
- [triangle(at:)](gkmeshgraph/triangle%28at_%29.md): The triangle definition at the specified index.
- [triangleCount](gkmeshgraph/trianglecount.md): The number of triangles in the mesh.

### Constants

- [GKMeshGraphTriangulationMode](gkmeshgraphtriangulationmode.md): Options for how to place graph nodes when generating the graph, used by the [triangulationMode](gkmeshgraph/triangulationmode.md) property.
- [GKTriangle](gktriangle.md): The definition of a triangle in the mesh, available with the [triangle(at:)](gkmeshgraph/triangle%28at_%29.md) method.

### Instance Methods

- [classForGenericArgument(at:)](gkmeshgraph/classforgenericargument%28at_%29.md)

### Initializers

- [init(nodes:)](gkmeshgraph/init%28nodes_%29.md)

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
- [GKGridGraph](gkgridgraph.md): A navigation graph for 2D game worlds where movement is constrained to an integer grid.
- [GKGraphNode](gkgraphnode.md): A single node in a navigation graph for use in pathfinding.
- [GKGraphNode2D](gkgraphnode2d.md): A node in a navigation graph, associated with a point in continuous 2D space.
- [GKGraphNode3D](gkgraphnode3d.md): A node in a navigation graph, associated with a point in continuous 3D space.
- [GKGridGraphNode](gkgridgraphnode.md): A node in a navigation graph, associated with a position on a discrete two-dimensional grid.

# GKMeshGraph (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A navigation graph for 2D game worlds that creates a space-filling network for smooth pathfinding around obstacles.

## Declaration

```objectivec
@interface GKMeshGraph : GKGraph
```

<a id="overview"></a>

## Overview

To use a mesh graph for pathfinding, add a collection of [GKObstacle](gkobstacle.md) objects representing impassable areas and [GKGraphNode2D](gkgraphnode2d.md) objects representing points of interest (such as the current position of a game character and the location it needs to find a route to). Then use methods of the superclass [GKGraph](gkgraph.md) to find routes through the graph.

Unlike the related [GKObstacleGraph](gkobstaclegraph.md) class, a mesh graph creates a space-filling network of graph nodes, resulting in paths that are smooth but not the most efficient.

To learn more about graphs and pathfinding, see [Pathfinding](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Pathfinding.html#//apple_ref/doc/uid/TP40015172-CH3) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating a Graph

- [initWithBufferRadius:minCoordinate:maxCoordinate:nodeClass:](gkmeshgraph/init%28bufferradius_mincoordinate_maxcoordinate_nodeclass_%29.md): Initializes a graph to cover the specified area, using the specified node class.
- [graphWithBufferRadius:minCoordinate:maxCoordinate:nodeClass:](gkmeshgraph/graphwithbufferradius_mincoordinate_maxcoordinate_nodeclass_.md): Creates a graph to cover the specified area, using the specified node class.
- [initWithBufferRadius:minCoordinate:maxCoordinate:](gkmeshgraph/init%28bufferradius_mincoordinate_maxcoordinate_%29.md): Initializes a graph to cover the specified area.
- [graphWithBufferRadius:minCoordinate:maxCoordinate:](gkmeshgraph/graphwithbufferradius_mincoordinate_maxcoordinate_.md): Creates a graph to cover the specified area.

### Working with Obstacles

- [obstacles](gkmeshgraph/obstacles.md): The list of obstacle objects in the graph, each of which describes a polygon-shaped impassable area.
- [addObstacles:](gkmeshgraph/addobstacles%28__%29.md): Adds new obstacles to the graph.
- [removeObstacles:](gkmeshgraph/removeobstacles%28__%29.md): Removes the specified obstacle from the graph.

### Working with Nodes

- [connectNodeUsingObstacles:](gkmeshgraph/connectusingobstacles%28node_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors without creating connections that pass through obstacles or their buffer regions.
- [bufferRadius](gkmeshgraph/bufferradius.md): The distance from obstacle edges that should also be considered impassable.

### Managing the Mesh

- [triangulate](gkmeshgraph/triangulate%28%29.md): Creates or updates the graph with a network of nodes that describes the open space around its obstacles.
- [triangulationMode](gkmeshgraph/triangulationmode.md): A set of options for how to place graph nodes when triangulating the graph.
- [triangleAtIndex:](gkmeshgraph/triangle%28at_%29.md): The triangle definition at the specified index.
- [triangleCount](gkmeshgraph/trianglecount.md): The number of triangles in the mesh.

### Constants

- [GKMeshGraphTriangulationMode](gkmeshgraphtriangulationmode.md): Options for how to place graph nodes when generating the graph, used by the [triangulationMode](gkmeshgraph/triangulationmode.md) property.
- [GKTriangle](gktriangle.md): The definition of a triangle in the mesh, available with the [triangleAtIndex:](gkmeshgraph/triangle%28at_%29.md) method.

### Instance Methods

- [classForGenericArgumentAtIndex:](gkmeshgraph/classforgenericargument%28at_%29.md)

## Relationships

### Inherits From

- [GKGraph](gkgraph.md)

## See Also

### Pathfinding

- [GKGraph](gkgraph.md): A collection of nodes that describes the navigability of a game world and provides *pathfinding* methods to search for routes through that space.
- [GKObstacleGraph](gkobstaclegraph.md): A navigation graph for 2D game worlds that creates a minimal network for precise pathfinding around obstacles.
- [GKGridGraph](gkgridgraph.md): A navigation graph for 2D game worlds where movement is constrained to an integer grid.
- [GKGraphNode](gkgraphnode.md): A single node in a navigation graph for use in pathfinding.
- [GKGraphNode2D](gkgraphnode2d.md): A node in a navigation graph, associated with a point in continuous 2D space.
- [GKGraphNode3D](gkgraphnode3d.md): A node in a navigation graph, associated with a point in continuous 3D space.
- [GKGridGraphNode](gkgridgraphnode.md): A node in a navigation graph, associated with a position on a discrete two-dimensional grid.
