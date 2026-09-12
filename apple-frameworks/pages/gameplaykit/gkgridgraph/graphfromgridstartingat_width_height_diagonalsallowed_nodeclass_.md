> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgridgraph/graphfromgridstartingat:width:height:diagonalsallowed:nodeclass:](https://developer.apple.com/documentation/gameplaykit/gkgridgraph/graphfromgridstartingat:width:height:diagonalsallowed:nodeclass:)

# graphFromGridStartingAt:width:height:diagonalsAllowed:nodeClass:

**Interface language:** Objective-C

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a graph that describes an integer grid with the specified dimensions, using the specified node class.

## Declaration

```objectivec
+ (instancetype) graphFromGridStartingAt:(vector_int2) position width:(int) width height:(int) height diagonalsAllowed:(BOOL) diagonalsAllowed nodeClass:(Class) nodeClass;
```

## Parameters

- `position`: The lowest x- and y-coordinates to appear in the grid.
- `width`: The number of possible x-coordinates in the grid.
- `height`: The number of possible y-coordinates in the grid.
- `diagonalsAllowed`: [true](https://developer.apple.com/documentation/swift/true) to connect nodes in the grid to their diagonal neighbors; [false](https://developer.apple.com/documentation/swift/false) to connect nodes only to their horizontal and vertical neighbors.
- `nodeClass`: The [GKGridGraphNode](../gkgridgraphnode.md) subclass to use for nodes in the graph.

<a id="return-value"></a>

## Return Value

A new grid graph.

<a id="Discussion"></a>

## Discussion

Use the `nodeClass` parameter to create a graph using a custom subclass of [GKGridGraphNode](../gkgridgraphnode.md). For example, your custom node class might override the [costToNode:](../gkgraphnode/cost%28to_%29.md) method so that some nodes are more costly than others to travel through. Pathfinding in such a graph would favor indirect routes when a direct route has a higher cost.

All connections created through this method are bidirectional.

## See Also

### Creating a Graph

- [initFromGridStartingAt:width:height:diagonalsAllowed:nodeClass:](init%28fromgridstartingat_width_height_diagonalsallowed_nodeclass_%29.md): Initializes a graph that describes an integer grid with the specified dimensions, using the specified node class.
- [initFromGridStartingAt:width:height:diagonalsAllowed:](init%28fromgridstartingat_width_height_diagonalsallowed_%29.md): Initializes a graph that describes an integer grid with the specified dimensions.
- [graphFromGridStartingAt:width:height:diagonalsAllowed:](graphfromgridstartingat_width_height_diagonalsallowed_.md): Creates a graph that describes an integer grid with the specified dimensions.
