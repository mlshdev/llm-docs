> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkobstaclegraph/addobstacles(_:)](https://developer.apple.com/documentation/gameplaykit/gkobstaclegraph/addobstacles(_:))

# addObstacles(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds new obstacles to the graph.

## Declaration

```swift
func addObstacles(_ obstacles: [GKPolygonObstacle])
```

## Parameters

- `obstacles`: An array of obstacle objects to be added to the graph.

<a id="Discussion"></a>

## Discussion

Adding a new obstacle to the graph has the same effect as if that obstacle were present when creating the graph—that is, the [GKObstacleGraph](../gkobstaclegraph.md) class automatically creates new nodes and edges where necessary to describe the navigable area around the complete collection of obstacles.

## See Also

### Working with Obstacles

- [obstacles](obstacles.md): The list of obstacle objects in the graph, each of which describes a polygon-shaped impassable area.
- [removeObstacles(\_:)](removeobstacles%28__%29.md): Removes the specified obstacle from the graph.
- [removeAllObstacles()](removeallobstacles%28%29.md): Removes all obstacles from the graph.
- [nodes(for:)](nodes%28for_%29.md): Returns the group of nodes corresponding to an obstacle in the graph.

# addObstacles: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds new obstacles to the graph.

## Declaration

```objectivec
- (void) addObstacles:(NSArray<GKPolygonObstacle *> *) obstacles;
```

## Parameters

- `obstacles`: An array of obstacle objects to be added to the graph.

<a id="Discussion"></a>

## Discussion

Adding a new obstacle to the graph has the same effect as if that obstacle were present when creating the graph—that is, the [GKObstacleGraph](../gkobstaclegraph.md) class automatically creates new nodes and edges where necessary to describe the navigable area around the complete collection of obstacles.

## See Also

### Working with Obstacles

- [obstacles](obstacles.md): The list of obstacle objects in the graph, each of which describes a polygon-shaped impassable area.
- [removeObstacles:](removeobstacles%28__%29.md): Removes the specified obstacle from the graph.
- [removeAllObstacles](removeallobstacles%28%29.md): Removes all obstacles from the graph.
- [nodesForObstacle:](nodes%28for_%29.md): Returns the group of nodes corresponding to an obstacle in the graph.
