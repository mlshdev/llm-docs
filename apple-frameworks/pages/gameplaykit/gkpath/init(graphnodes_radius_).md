> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkpath/init(graphnodes:radius:)](https://developer.apple.com/documentation/gameplaykit/gkpath/init(graphnodes:radius:))

# init(graphNodes:radius:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a path using the positions of the specified graph nodes.

## Declaration

```swift
init(graphNodes: [GKGraphNode], radius: Float)
```

## Parameters

- `graphNodes`: An array of graph node objects containing 2D points.
- `radius`: The radius of the path.

<a id="return-value"></a>

## Return Value

A new path object.

<a id="Discussion"></a>

## Discussion

Use this initializer to turn a list of nodes from a navigation graph (as returned by the [GKGraph](../gkgraph.md) [findPath(from:to:)](../gkgraph/findpath%28from_to_%29.md) method) into a path-following goal for an agent. If the nodes are [GKGraphNode2D](../gkgraphnode2d.md) objects, this initializer creates a 2D path; if the nodes are [GKGraphNode3D](../gkgraphnode3d.md) objects, this initializer creates a 3D path.

The `radius` parameter defines the space occupied by the path—think of this space as the area created by sweeping a circle (or sphere, for 3D paths) of the specified radius along the path from vertex to vertex. Agents with path-related goals will attempt to move to or stay within this area.

To use the newly created path to constrain an agent’s behavior, create a goal with the [init(toStayOn:maxPredictionTime:)](../gkgoal/init%28tostayon_maxpredictiontime_%29.md) or [init(toFollow:maxPredictionTime:forward:)](../gkgoal/init%28tofollow_maxpredictiontime_forward_%29.md) method.

# initWithGraphNodes:radius: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a path using the positions of the specified graph nodes.

## Declaration

```objectivec
- (instancetype) initWithGraphNodes:(NSArray<GKGraphNode *> *) graphNodes radius:(float) radius;
```

## Parameters

- `graphNodes`: An array of graph node objects containing 2D points.
- `radius`: The radius of the path.

<a id="return-value"></a>

## Return Value

A new path object.

<a id="Discussion"></a>

## Discussion

Use this initializer to turn a list of nodes from a navigation graph (as returned by the [GKGraph](../gkgraph.md) [findPathFromNode:toNode:](../gkgraph/findpath%28from_to_%29.md) method) into a path-following goal for an agent. If the nodes are [GKGraphNode2D](../gkgraphnode2d.md) objects, this initializer creates a 2D path; if the nodes are [GKGraphNode3D](../gkgraphnode3d.md) objects, this initializer creates a 3D path.

The `radius` parameter defines the space occupied by the path—think of this space as the area created by sweeping a circle (or sphere, for 3D paths) of the specified radius along the path from vertex to vertex. Agents with path-related goals will attempt to move to or stay within this area.

To use the newly created path to constrain an agent’s behavior, create a goal with the [goalToStayOnPath:maxPredictionTime:](../gkgoal/init%28tostayon_maxpredictiontime_%29.md) or [goalToFollowPath:maxPredictionTime:forward:](../gkgoal/init%28tofollow_maxpredictiontime_forward_%29.md) method.

## See Also

### Creating a Path

- [initWithPoints:count:radius:cyclical:](initwithpoints_count_radius_cyclical_.md): Initializes a path with the specified array of 2D points.
- [pathWithPoints:count:radius:cyclical:](pathwithpoints_count_radius_cyclical_.md): Creates a path with the specified array of 2D points.
- [initWithFloat3Points:count:radius:cyclical:](initwithfloat3points_count_radius_cyclical_.md): Initializes a path with the specified array of 3D points.
- [pathWithFloat3Points:count:radius:cyclical:](pathwithfloat3points_count_radius_cyclical_.md): Creates a path with the specified array of 3D points.
- [pathWithGraphNodes:radius:](pathwithgraphnodes_radius_.md): Creates a path using the positions of the specified graph nodes.
