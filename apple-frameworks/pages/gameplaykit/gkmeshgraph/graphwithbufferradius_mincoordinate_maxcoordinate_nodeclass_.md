> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkmeshgraph/graphwithbufferradius:mincoordinate:maxcoordinate:nodeclass:](https://developer.apple.com/documentation/gameplaykit/gkmeshgraph/graphwithbufferradius:mincoordinate:maxcoordinate:nodeclass:)

# graphWithBufferRadius:minCoordinate:maxCoordinate:nodeClass:

**Interface language:** Objective-C

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a graph to cover the specified area, using the specified node class.

## Declaration

```objectivec
+ (instancetype) graphWithBufferRadius:(float) bufferRadius minCoordinate:(vector_float2) min maxCoordinate:(vector_float2) max nodeClass:(Class) nodeClass;
```

## Parameters

- `bufferRadius`: The distance from obstacle edges that should also be considered impassable.
- `min`: The minimum coordinate of the space to be covered by the graph.
- `max`: The maximum coordinate of the space to be covered by the graph.
- `nodeClass`: The [GKGraphNode2D](../gkgraphnode2d.md) subclass to use for nodes in the graph.

<a id="return-value"></a>

## Return Value

A new mesh graph.

<a id="Discussion"></a>

## Discussion

A newly created graph contains no obstacles and no graph nodes. First, use the [addObstacles:](addobstacles%28__%29.md) method to add obstacles. Next, use the [triangulate](triangulate%28%29.md) method to fill the open space between obstacles with a web of graph nodes, allowing pathfinding operations to result in smooth paths around obstacles.

Use the `bufferRadius` parameter to take the size of potential travelers into account when determining navigability. For example, if a game character that will use pathfinding has a radius of 20 units (in the same coordinate space you use to define obstacles), specify a buffer radius of 20. As a result, the graph will consider any points within 20 units of an obstacle non-navigable—that is, pathfinding in the graph will not result in any positions that lie inside this buffer region, so you can safely set the character’s center point to the location of a node returned from the [findPathFromNode:toNode:](../gkgraph/findpath%28from_to_%29.md) method without the character overlapping any obstacles.

Use the `nodeClass` parameter to create a graph using a custom subclass of [GKGraphNode2D](../gkgraphnode2d.md). For example, your custom node class might override the [costToNode:](../gkgraphnode/cost%28to_%29.md) method so that some nodes are more costly than others to travel through. Pathfinding in such a graph would favor indirect routes when a direct route has a higher cost.

## See Also

### Creating a Graph

- [initWithBufferRadius:minCoordinate:maxCoordinate:nodeClass:](init%28bufferradius_mincoordinate_maxcoordinate_nodeclass_%29.md): Initializes a graph to cover the specified area, using the specified node class.
- [initWithBufferRadius:minCoordinate:maxCoordinate:](init%28bufferradius_mincoordinate_maxcoordinate_%29.md): Initializes a graph to cover the specified area.
- [graphWithBufferRadius:minCoordinate:maxCoordinate:](graphwithbufferradius_mincoordinate_maxcoordinate_.md): Creates a graph to cover the specified area.
