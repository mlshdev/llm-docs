> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkobstaclegraph/removeallobstacles()](https://developer.apple.com/documentation/gameplaykit/gkobstaclegraph/removeallobstacles())

# removeAllObstacles() (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Removes all obstacles from the graph.

## Declaration

```swift
func removeAllObstacles()
```

<a id="Discussion"></a>

## Discussion

After removing obstacles, the [GKObstacleGraph](../gkobstaclegraph.md) class automatically creates, removes, or rearranges nodes and edges where necessary to describe the navigable area around the remaining nodes.

## See Also

### Working with Obstacles

- [obstacles](obstacles.md): The list of obstacle objects in the graph, each of which describes a polygon-shaped impassable area.
- [addObstacles(\_:)](addobstacles%28__%29.md): Adds new obstacles to the graph.
- [removeObstacles(\_:)](removeobstacles%28__%29.md): Removes the specified obstacle from the graph.
- [nodes(for:)](nodes%28for_%29.md): Returns the group of nodes corresponding to an obstacle in the graph.

# removeAllObstacles (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Removes all obstacles from the graph.

## Declaration

```objectivec
- (void) removeAllObstacles;
```

<a id="Discussion"></a>

## Discussion

After removing obstacles, the [GKObstacleGraph](../gkobstaclegraph.md) class automatically creates, removes, or rearranges nodes and edges where necessary to describe the navigable area around the remaining nodes.

## See Also

### Working with Obstacles

- [obstacles](obstacles.md): The list of obstacle objects in the graph, each of which describes a polygon-shaped impassable area.
- [addObstacles:](addobstacles%28__%29.md): Adds new obstacles to the graph.
- [removeObstacles:](removeobstacles%28__%29.md): Removes the specified obstacle from the graph.
- [nodesForObstacle:](nodes%28for_%29.md): Returns the group of nodes corresponding to an obstacle in the graph.
