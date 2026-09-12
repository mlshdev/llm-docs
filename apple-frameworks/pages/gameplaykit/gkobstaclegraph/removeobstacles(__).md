> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkobstaclegraph/removeobstacles(_:)](https://developer.apple.com/documentation/gameplaykit/gkobstaclegraph/removeobstacles(_:))

# removeObstacles(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Removes the specified obstacle from the graph.

## Declaration

```swift
func removeObstacles(_ obstacles: [GKPolygonObstacle])
```

## Parameters

- `obstacles`: An array of obstacle objects to be removed from the graph.

<a id="Discussion"></a>

## Discussion

After removing obstacles, the [GKObstacleGraph](../gkobstaclegraph.md) class automatically creates, removes, or rearranges nodes and edges where necessary to describe the navigable area around the complete collection of obstacles.

## See Also

### Working with Obstacles

- [obstacles](obstacles.md): The list of obstacle objects in the graph, each of which describes a polygon-shaped impassable area.
- [addObstacles(\_:)](addobstacles%28__%29.md): Adds new obstacles to the graph.
- [removeAllObstacles()](removeallobstacles%28%29.md): Removes all obstacles from the graph.
- [nodes(for:)](nodes%28for_%29.md): Returns the group of nodes corresponding to an obstacle in the graph.

# removeObstacles: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Removes the specified obstacle from the graph.

## Declaration

```objectivec
- (void) removeObstacles:(NSArray<GKPolygonObstacle *> *) obstacles;
```

## Parameters

- `obstacles`: An array of obstacle objects to be removed from the graph.

<a id="Discussion"></a>

## Discussion

After removing obstacles, the [GKObstacleGraph](../gkobstaclegraph.md) class automatically creates, removes, or rearranges nodes and edges where necessary to describe the navigable area around the complete collection of obstacles.

## See Also

### Working with Obstacles

- [obstacles](obstacles.md): The list of obstacle objects in the graph, each of which describes a polygon-shaped impassable area.
- [addObstacles:](addobstacles%28__%29.md): Adds new obstacles to the graph.
- [removeAllObstacles](removeallobstacles%28%29.md): Removes all obstacles from the graph.
- [nodesForObstacle:](nodes%28for_%29.md): Returns the group of nodes corresponding to an obstacle in the graph.
