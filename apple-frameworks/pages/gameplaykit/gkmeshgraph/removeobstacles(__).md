> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkmeshgraph/removeobstacles(_:)](https://developer.apple.com/documentation/gameplaykit/gkmeshgraph/removeobstacles(_:))

# removeObstacles(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Removes the specified obstacle from the graph.

## Declaration

```swift
func removeObstacles(_ obstacles: [GKPolygonObstacle])
```

## Parameters

- `obstacles`: An array of obstacle objects to be removed from the graph.

<a id="Discussion"></a>

## Discussion

Adding or removing obstacles does not update the graph. The [GKMeshGraph](../gkmeshgraph.md) class adds, removes, and arranges nodes to describe the navigable areas around obstacles *only* when you call the [triangulate()](triangulate%28%29.md) method. Typically, you add or remove several obstacles, then call the [triangulate()](triangulate%28%29.md) method to update the graph.

## See Also

### Working with Obstacles

- [obstacles](obstacles.md): The list of obstacle objects in the graph, each of which describes a polygon-shaped impassable area.
- [addObstacles(\_:)](addobstacles%28__%29.md): Adds new obstacles to the graph.

# removeObstacles: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Removes the specified obstacle from the graph.

## Declaration

```objectivec
- (void) removeObstacles:(NSArray<GKPolygonObstacle *> *) obstacles;
```

## Parameters

- `obstacles`: An array of obstacle objects to be removed from the graph.

<a id="Discussion"></a>

## Discussion

Adding or removing obstacles does not update the graph. The [GKMeshGraph](../gkmeshgraph.md) class adds, removes, and arranges nodes to describe the navigable areas around obstacles *only* when you call the [triangulate](triangulate%28%29.md) method. Typically, you add or remove several obstacles, then call the [triangulate](triangulate%28%29.md) method to update the graph.

## See Also

### Working with Obstacles

- [obstacles](obstacles.md): The list of obstacle objects in the graph, each of which describes a polygon-shaped impassable area.
- [addObstacles:](addobstacles%28__%29.md): Adds new obstacles to the graph.
