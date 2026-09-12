> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkobstaclegraph/nodes(for:)](https://developer.apple.com/documentation/gameplaykit/gkobstaclegraph/nodes(for:))

# nodes(for:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the group of nodes corresponding to an obstacle in the graph.

## Declaration

```swift
func nodes(for obstacle: GKPolygonObstacle) -> [NodeType]
```

## Parameters

- `obstacle`: An obstacle in the graph.

<a id="return-value"></a>

## Return Value

An array of nodes representing the navigable points nearest to each of the obstacle’s vertices.

<a id="Discussion"></a>

## Discussion

Adding obstacles to a graph creates additional graph nodes corresponding to the navigable points nearest to each of the obstacle’s vertices. The [GKObstacleGraph](../gkobstaclegraph.md) class automatically creates, removes, or rearranges these nodes where necessary, and automatically connects or disconnects other nodes so that no path between nodes passes through an obstacle.

## See Also

### Working with Obstacles

- [obstacles](obstacles.md): The list of obstacle objects in the graph, each of which describes a polygon-shaped impassable area.
- [addObstacles(\_:)](addobstacles%28__%29.md): Adds new obstacles to the graph.
- [removeObstacles(\_:)](removeobstacles%28__%29.md): Removes the specified obstacle from the graph.
- [removeAllObstacles()](removeallobstacles%28%29.md): Removes all obstacles from the graph.

# nodesForObstacle: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the group of nodes corresponding to an obstacle in the graph.

## Declaration

```objectivec
- (NSArray<GKGraphNode2D *> *) nodesForObstacle:(GKPolygonObstacle *) obstacle;
```

## Parameters

- `obstacle`: An obstacle in the graph.

<a id="return-value"></a>

## Return Value

An array of nodes representing the navigable points nearest to each of the obstacle’s vertices.

<a id="Discussion"></a>

## Discussion

Adding obstacles to a graph creates additional graph nodes corresponding to the navigable points nearest to each of the obstacle’s vertices. The [GKObstacleGraph](../gkobstaclegraph.md) class automatically creates, removes, or rearranges these nodes where necessary, and automatically connects or disconnects other nodes so that no path between nodes passes through an obstacle.

## See Also

### Working with Obstacles

- [obstacles](obstacles.md): The list of obstacle objects in the graph, each of which describes a polygon-shaped impassable area.
- [addObstacles:](addobstacles%28__%29.md): Adds new obstacles to the graph.
- [removeObstacles:](removeobstacles%28__%29.md): Removes the specified obstacle from the graph.
- [removeAllObstacles](removeallobstacles%28%29.md): Removes all obstacles from the graph.
