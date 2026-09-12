> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkpath/pathwithpoints:count:radius:cyclical:](https://developer.apple.com/documentation/gameplaykit/gkpath/pathwithpoints:count:radius:cyclical:)

# pathWithPoints:count:radius:cyclical:

**Interface language:** Objective-C

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a path with the specified array of 2D points.

## Declaration

```objectivec
+ (instancetype) pathWithPoints:(vector_float2 *) points count:(size_t) count radius:(float) radius cyclical:(BOOL) cyclical;
```

## Parameters

- `points`: An array of points representing the vertices in the path. The order of points in this array determines the order in which an agent follows the path.
- `count`: The number of elements in the `points`array.
- `radius`: The radius of the path.
- `cyclical`: [true](https://developer.apple.com/documentation/swift/true) if the path’s end point (the last element of the `points` array) should connect to its start point (the first element in the `points` array); otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

A new path object.

<a id="Discussion"></a>

## Discussion

The `radius` parameter defines the space occupied by the path—think of this space as the area created by sweeping a circle of the specified radius along the path from vertex to vertex. Agents with path-related goals will attempt to move to or stay within this area.

The `cyclical` parameter determines whether the path loops around on itself. If the path is cyclical, an agent with a follow-path goal will proceed around the path indefinitely. If the path is not cyclical, an agent following the path will stop at the last point in the path.

To use the newly created path to constrain an agent’s behavior, create a goal with the [goalToStayOnPath:maxPredictionTime:](../gkgoal/init%28tostayon_maxpredictiontime_%29.md) or [goalToFollowPath:maxPredictionTime:forward:](../gkgoal/init%28tofollow_maxpredictiontime_forward_%29.md) method.

## See Also

### Creating a Path

- [initWithPoints:count:radius:cyclical:](initwithpoints_count_radius_cyclical_.md): Initializes a path with the specified array of 2D points.
- [initWithFloat3Points:count:radius:cyclical:](initwithfloat3points_count_radius_cyclical_.md): Initializes a path with the specified array of 3D points.
- [pathWithFloat3Points:count:radius:cyclical:](pathwithfloat3points_count_radius_cyclical_.md): Creates a path with the specified array of 3D points.
- [initWithGraphNodes:radius:](init%28graphnodes_radius_%29.md): Initializes a path using the positions of the specified graph nodes.
- [pathWithGraphNodes:radius:](pathwithgraphnodes_radius_.md): Creates a path using the positions of the specified graph nodes.
