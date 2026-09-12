> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkmeshgraph/init(bufferradius:mincoordinate:maxcoordinate:)](https://developer.apple.com/documentation/gameplaykit/gkmeshgraph/init(bufferradius:mincoordinate:maxcoordinate:))

# init(bufferRadius:minCoordinate:maxCoordinate:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Initializes a graph to cover the specified area.

## Declaration

```swift
init(bufferRadius: Float, minCoordinate min: vector_float2, maxCoordinate max: vector_float2)
```

## Parameters

- `bufferRadius`: The distance from obstacle edges that should also be considered impassable.
- `min`: The minimum coordinate of the space to be covered by the graph.
- `max`: The maximum coordinate of the space to be covered by the graph.

<a id="return-value"></a>

## Return Value

A new mesh graph.

<a id="Discussion"></a>

## Discussion

A newly created graph contains no obstacles and no graph nodes. First, use the [addObstacles(\_:)](addobstacles%28__%29.md) method to add obstacles. Next, use the [triangulate()](triangulate%28%29.md) method to fill the open space between obstacles with a web of graph nodes, allowing pathfinding operations to result in smooth paths around obstacles.

Use the `bufferRadius` parameter to take the size of potential travelers into account when determining navigability. For example, if a game character that will use pathfinding has a radius of 20 units (in the same coordinate space you use to define obstacles), specify a buffer radius of 20. As a result, the graph will consider any points within 20 units of an obstacle non-navigable—that is, pathfinding in the graph will not result in any positions that lie inside this buffer region, so you can safely set the character’s center point to the location of a node returned from the [findPath(from:to:)](../gkgraph/findpath%28from_to_%29.md) method without the character overlapping any obstacles.

## See Also

### Creating a Graph

- [init(bufferRadius:minCoordinate:maxCoordinate:nodeClass:)](init%28bufferradius_mincoordinate_maxcoordinate_nodeclass_%29.md): Initializes a graph to cover the specified area, using the specified node class.

# initWithBufferRadius:minCoordinate:maxCoordinate: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Initializes a graph to cover the specified area.

## Declaration

```objectivec
- (instancetype) initWithBufferRadius:(float) bufferRadius minCoordinate:(vector_float2) min maxCoordinate:(vector_float2) max;
```

## Parameters

- `bufferRadius`: The distance from obstacle edges that should also be considered impassable.
- `min`: The minimum coordinate of the space to be covered by the graph.
- `max`: The maximum coordinate of the space to be covered by the graph.

<a id="return-value"></a>

## Return Value

A new mesh graph.

<a id="Discussion"></a>

## Discussion

A newly created graph contains no obstacles and no graph nodes. First, use the [addObstacles:](addobstacles%28__%29.md) method to add obstacles. Next, use the [triangulate](triangulate%28%29.md) method to fill the open space between obstacles with a web of graph nodes, allowing pathfinding operations to result in smooth paths around obstacles.

Use the `bufferRadius` parameter to take the size of potential travelers into account when determining navigability. For example, if a game character that will use pathfinding has a radius of 20 units (in the same coordinate space you use to define obstacles), specify a buffer radius of 20. As a result, the graph will consider any points within 20 units of an obstacle non-navigable—that is, pathfinding in the graph will not result in any positions that lie inside this buffer region, so you can safely set the character’s center point to the location of a node returned from the [findPathFromNode:toNode:](../gkgraph/findpath%28from_to_%29.md) method without the character overlapping any obstacles.

## See Also

### Creating a Graph

- [initWithBufferRadius:minCoordinate:maxCoordinate:nodeClass:](init%28bufferradius_mincoordinate_maxcoordinate_nodeclass_%29.md): Initializes a graph to cover the specified area, using the specified node class.
- [graphWithBufferRadius:minCoordinate:maxCoordinate:nodeClass:](graphwithbufferradius_mincoordinate_maxcoordinate_nodeclass_.md): Creates a graph to cover the specified area, using the specified node class.
- [graphWithBufferRadius:minCoordinate:maxCoordinate:](graphwithbufferradius_mincoordinate_maxcoordinate_.md): Creates a graph to cover the specified area.
