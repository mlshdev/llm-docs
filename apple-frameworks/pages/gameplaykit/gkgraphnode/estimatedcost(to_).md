> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgraphnode/estimatedcost(to:)](https://developer.apple.com/documentation/gameplaykit/gkgraphnode/estimatedcost(to:))

# estimatedCost(to:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns an underestimate of the cost of travel from this node to the specified node.

## Declaration

```swift
func estimatedCost(to node: GKGraphNode) -> Float
```

## Parameters

- `node`: A node connected (directly or indirectly) to this node.

<a id="return-value"></a>

## Return Value

An underestimate of the travel cost to the specified node; higher values indicate higher cost.

<a id="Discussion"></a>

## Discussion

The [GKGraph](../gkgraph.md) class uses this method in pathfinding between nodes—the [findPath(from:to:)](../gkgraph/findpath%28from_to_%29.md) method finds the lowest-cost path between a specified pair of nodes. (See the [cost(to:)](cost%28to_%29.md) method for further discussion.) The pathfinding algorithm involves successive approximation using a heuristic in order to avoid processing too many nodes. The [estimatedCost(to:)](estimatedcost%28to_%29.md) method provides that heuristic—a quickly computed estimated cost of travel helps the algorithm choose which nodes to process in order to compute the real cost of travel.

The estimated cost must be an *underestimate* of the true cost—that is, in order for the pathfinding algorithm to produce correct results, the heuristic value must not exceed the true cost of travel between nodes. For example, in a 2D graph, the straight-line distance between two distant nodes is an admissible heuristic, because the actual path found will at best be along that line, but might be along a longer path. The subclasses [GKGraphNode2D](../gkgraphnode2d.md), [GKGraphNode3D](../gkgraphnode3d.md), and [GKGridGraphNode](../gkgridgraphnode.md) use this approach.

Custom subclasses can implement this method to add game-specific information that might improve the quality of an estimated cost.

## See Also

### Computing Traversal Costs

- [cost(to:)](cost%28to_%29.md): Returns the cost to travel from this node to the specified, directly connected, node.

# estimatedCostToNode: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns an underestimate of the cost of travel from this node to the specified node.

## Declaration

```objectivec
- (float) estimatedCostToNode:(GKGraphNode *) node;
```

## Parameters

- `node`: A node connected (directly or indirectly) to this node.

<a id="return-value"></a>

## Return Value

An underestimate of the travel cost to the specified node; higher values indicate higher cost.

<a id="Discussion"></a>

## Discussion

The [GKGraph](../gkgraph.md) class uses this method in pathfinding between nodes—the [findPathFromNode:toNode:](../gkgraph/findpath%28from_to_%29.md) method finds the lowest-cost path between a specified pair of nodes. (See the [costToNode:](cost%28to_%29.md) method for further discussion.) The pathfinding algorithm involves successive approximation using a heuristic in order to avoid processing too many nodes. The [estimatedCostToNode:](estimatedcost%28to_%29.md) method provides that heuristic—a quickly computed estimated cost of travel helps the algorithm choose which nodes to process in order to compute the real cost of travel.

The estimated cost must be an *underestimate* of the true cost—that is, in order for the pathfinding algorithm to produce correct results, the heuristic value must not exceed the true cost of travel between nodes. For example, in a 2D graph, the straight-line distance between two distant nodes is an admissible heuristic, because the actual path found will at best be along that line, but might be along a longer path. The subclasses [GKGraphNode2D](../gkgraphnode2d.md), [GKGraphNode3D](../gkgraphnode3d.md), and [GKGridGraphNode](../gkgridgraphnode.md) use this approach.

Custom subclasses can implement this method to add game-specific information that might improve the quality of an estimated cost.

## See Also

### Computing Traversal Costs

- [costToNode:](cost%28to_%29.md): Returns the cost to travel from this node to the specified, directly connected, node.
