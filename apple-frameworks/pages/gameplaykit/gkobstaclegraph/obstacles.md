> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkobstaclegraph/obstacles](https://developer.apple.com/documentation/gameplaykit/gkobstaclegraph/obstacles)

# obstacles (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The list of obstacle objects in the graph, each of which describes a polygon-shaped impassable area.

## Declaration

```swift
var obstacles: [GKPolygonObstacle] { get }
```

## See Also

### Working with Obstacles

- [addObstacles(\_:)](addobstacles%28__%29.md): Adds new obstacles to the graph.
- [removeObstacles(\_:)](removeobstacles%28__%29.md): Removes the specified obstacle from the graph.
- [removeAllObstacles()](removeallobstacles%28%29.md): Removes all obstacles from the graph.
- [nodes(for:)](nodes%28for_%29.md): Returns the group of nodes corresponding to an obstacle in the graph.

# obstacles (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The list of obstacle objects in the graph, each of which describes a polygon-shaped impassable area.

## Declaration

```objectivec
@property (nonatomic, readonly, nonnull) NSArray<GKPolygonObstacle *> * obstacles;
```

## See Also

### Working with Obstacles

- [addObstacles:](addobstacles%28__%29.md): Adds new obstacles to the graph.
- [removeObstacles:](removeobstacles%28__%29.md): Removes the specified obstacle from the graph.
- [removeAllObstacles](removeallobstacles%28%29.md): Removes all obstacles from the graph.
- [nodesForObstacle:](nodes%28for_%29.md): Returns the group of nodes corresponding to an obstacle in the graph.
