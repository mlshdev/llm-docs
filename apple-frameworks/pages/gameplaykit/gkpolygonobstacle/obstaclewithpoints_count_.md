> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkpolygonobstacle/obstaclewithpoints:count:](https://developer.apple.com/documentation/gameplaykit/gkpolygonobstacle/obstaclewithpoints:count:)

# obstacleWithPoints:count:

**Interface language:** Objective-C

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a polygon obstacle with the specified list of vertices.

## Declaration

```objectivec
+ (instancetype) obstacleWithPoints:(vector_float2 *) points count:(size_t) numPoints;
```

## Parameters

- `points`: An array of points describing a convex polygon in clockwise order.
- `numPoints`: The number of points in the array.

<a id="return-value"></a>

## Return Value

A new polygon obstacle object.

<a id="Discussion"></a>

## Discussion

The coordinate space you define obstacles in, whether used for pathfinding or with agents, is entirely arbitrary. However, it is often convenient to define pathfinding graphs and agent simulations in a coordinate space similar to the one your game uses for display—for example, in a SpriteKit game, define obstacles in the point coordinate system of your scene.

## See Also

### Creating a Polygon Obstacle

- [initWithPoints:count:](initwithpoints_count_.md): Initializes a polygon obstacle with the specified list of vertices.
