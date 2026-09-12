> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkobstaclegraph/init(obstacles:bufferradius:)](https://developer.apple.com/documentation/gameplaykit/gkobstaclegraph/init(obstacles:bufferradius:))

# init(obstacles:bufferRadius:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a graph with the specified list of obstacles.

## Declaration

```swift
init(obstacles: [GKPolygonObstacle], bufferRadius: Float)
```

## Parameters

- `obstacles`: An array of obstacle objects, each of which describes a polygon-shaped impassable area.
- `bufferRadius`: The distance from obstacle edges that should also be considered impassable.

<a id="return-value"></a>

## Return Value

A new obstacle graph.

<a id="Discussion"></a>

## Discussion

This method generates a graph that can be traversed in all directions, except into the areas occupied by obstacles.

Use the `bufferRadius` parameter to take the size of potential travelers into account when determining navigability. For example, if a game character that will use pathfinding has a radius of 20 units (in the same coordinate space you use to define obstacles), specify a buffer radius of 20. As a result, the graph will consider any points within 20 units of an obstacle non-navigable—that is, pathfinding in the graph will not result in any positions that lie inside this buffer region, so you can safely set the character’s center point to the location of a node returned from the [findPath(from:to:)](../gkgraph/findpath%28from_to_%29.md) method without the character overlapping any obstacles.

This initializer is equivalent to the [init(obstacles:bufferRadius:nodeClass:)](init%28obstacles_bufferradius_nodeclass_%29.md) initializer, but uses the default [GKGraphNode2D](../gkgraphnode2d.md) node class.

## See Also

### Creating a Graph

- [init(obstacles:bufferRadius:nodeClass:)](init%28obstacles_bufferradius_nodeclass_%29.md): Initializes a graph with the specified list of obstacles, using the specified node class.

# initWithObstacles:bufferRadius: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a graph with the specified list of obstacles.

## Declaration

```objectivec
- (instancetype) initWithObstacles:(NSArray<GKPolygonObstacle *> *) obstacles bufferRadius:(float) bufferRadius;
```

## Parameters

- `obstacles`: An array of obstacle objects, each of which describes a polygon-shaped impassable area.
- `bufferRadius`: The distance from obstacle edges that should also be considered impassable.

<a id="return-value"></a>

## Return Value

A new obstacle graph.

<a id="Discussion"></a>

## Discussion

This method generates a graph that can be traversed in all directions, except into the areas occupied by obstacles.

Use the `bufferRadius` parameter to take the size of potential travelers into account when determining navigability. For example, if a game character that will use pathfinding has a radius of 20 units (in the same coordinate space you use to define obstacles), specify a buffer radius of 20. As a result, the graph will consider any points within 20 units of an obstacle non-navigable—that is, pathfinding in the graph will not result in any positions that lie inside this buffer region, so you can safely set the character’s center point to the location of a node returned from the [findPathFromNode:toNode:](../gkgraph/findpath%28from_to_%29.md) method without the character overlapping any obstacles.

This initializer is equivalent to the [initWithObstacles:bufferRadius:nodeClass:](init%28obstacles_bufferradius_nodeclass_%29.md) initializer, but uses the default [GKGraphNode2D](../gkgraphnode2d.md) node class.

## See Also

### Creating a Graph

- [initWithObstacles:bufferRadius:nodeClass:](init%28obstacles_bufferradius_nodeclass_%29.md): Initializes a graph with the specified list of obstacles, using the specified node class.
- [graphWithObstacles:bufferRadius:nodeClass:](graphwithobstacles_bufferradius_nodeclass_.md): Creates a graph with the specified list of obstacles, using the specified node class.
- [graphWithObstacles:bufferRadius:](graphwithobstacles_bufferradius_.md): Creates a graph with the specified list of obstacles.
