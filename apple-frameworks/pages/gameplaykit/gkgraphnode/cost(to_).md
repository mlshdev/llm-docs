> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgraphnode/cost(to:)](https://developer.apple.com/documentation/gameplaykit/gkgraphnode/cost(to:))

# cost(to:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the cost to travel from this node to the specified, directly connected, node.

## Declaration

```swift
func cost(to node: GKGraphNode) -> Float
```

## Parameters

- `node`: A node from this node’s [connectedNodes](connectednodes.md) list.

<a id="return-value"></a>

## Return Value

The real cost of travel along the specified connection; higher values indicate higher cost.

<a id="Discussion"></a>

## Discussion

The [GKGraph](../gkgraph.md) class uses this method in pathfinding between nodes—the [findPath(from:to:)](../gkgraph/findpath%28from_to_%29.md) method finds the lowest-cost path between a specified pair of nodes. For the [GKGraphNode](../gkgraphnode.md) base class, the cost of travel along any connection is 1, so the [findPath(from:to:)](../gkgraph/findpath%28from_to_%29.md) method simply counts connections, finding the path that involves traveling through the fewest number of nodes. Because the subclasses [GKGraphNode2D](../gkgraphnode2d.md) and [GKGridGraphNode](../gkgridgraphnode.md) add geometry information to each node, those classes’ implementation of this method calculates the distance between nodes in 2D space, and the [findPath(from:to:)](../gkgraph/findpath%28from_to_%29.md) method finds the path with the minimum total distance traveled.

Subclasses can implement this method to add other information to the cost. For example, a game might use higher costs to represent travel through regions of a map that are difficult for a character to traverse.

## See Also

### Computing Traversal Costs

- [estimatedCost(to:)](estimatedcost%28to_%29.md): Returns an underestimate of the cost of travel from this node to the specified node.

# costToNode: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the cost to travel from this node to the specified, directly connected, node.

## Declaration

```objectivec
- (float) costToNode:(GKGraphNode *) node;
```

## Parameters

- `node`: A node from this node’s [connectedNodes](connectednodes.md) list.

<a id="return-value"></a>

## Return Value

The real cost of travel along the specified connection; higher values indicate higher cost.

<a id="Discussion"></a>

## Discussion

The [GKGraph](../gkgraph.md) class uses this method in pathfinding between nodes—the [findPathFromNode:toNode:](../gkgraph/findpath%28from_to_%29.md) method finds the lowest-cost path between a specified pair of nodes. For the [GKGraphNode](../gkgraphnode.md) base class, the cost of travel along any connection is 1, so the [findPathFromNode:toNode:](../gkgraph/findpath%28from_to_%29.md) method simply counts connections, finding the path that involves traveling through the fewest number of nodes. Because the subclasses [GKGraphNode2D](../gkgraphnode2d.md) and [GKGridGraphNode](../gkgridgraphnode.md) add geometry information to each node, those classes’ implementation of this method calculates the distance between nodes in 2D space, and the [findPathFromNode:toNode:](../gkgraph/findpath%28from_to_%29.md) method finds the path with the minimum total distance traveled.

Subclasses can implement this method to add other information to the cost. For example, a game might use higher costs to represent travel through regions of a map that are difficult for a character to traverse.

## See Also

### Computing Traversal Costs

- [estimatedCostToNode:](estimatedcost%28to_%29.md): Returns an underestimate of the cost of travel from this node to the specified node.
