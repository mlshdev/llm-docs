> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgraph/connecttolowestcostnode(node:bidirectional:)](https://developer.apple.com/documentation/gameplaykit/gkgraph/connecttolowestcostnode(node:bidirectional:))

# connectToLowestCostNode(node:bidirectional:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds a node to the graph, connecting it to the node already in the graph for which the connection has the lowest cost.

## Declaration

```swift
func connectToLowestCostNode(node: GKGraphNode, bidirectional: Bool)
```

## Parameters

- `node`: A graph node object.
- `bidirectional`: [true](https://developer.apple.com/documentation/swift/true) to create connections in both directions; [false](https://developer.apple.com/documentation/swift/false) to create just a single connection from the nearest node to the newly added node.

<a id="Discussion"></a>

## Discussion

This method uses the [cost(to:)](../gkgraphnode/cost%28to_%29.md) method of the specified node to find the node already in the graph that is most easily reached from the new node. For nodes that contain geometry information ([GKGraphNode2D](../gkgraphnode2d.md) or [GKGridGraphNode](../gkgridgraphnode.md) objects), cost is by default based on distance, so this method connects the new node to the geometrically closest node already in the graph. If you create a custom [GKGraphNode](../gkgraphnode.md) subclass, this method selects the “closest” node according to whatever algorithm you implement in your [cost(to:)](../gkgraphnode/cost%28to_%29.md) method.

Using this method with an instance of the [GKGraphNode](../gkgraphnode.md) base class is not recommended.

## See Also

### Working with Nodes in a Graph

- [add(\_:)](add%28__%29.md): Adds the specified nodes to the graph.
- [remove(\_:)](remove%28__%29.md): Removes the specified nodes from the graph.
- [nodes](nodes.md): The list of nodes in the graph.

# connectNodeToLowestCostNode:bidirectional: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds a node to the graph, connecting it to the node already in the graph for which the connection has the lowest cost.

## Declaration

```objectivec
- (void) connectNodeToLowestCostNode:(GKGraphNode *) node bidirectional:(BOOL) bidirectional;
```

## Parameters

- `node`: A graph node object.
- `bidirectional`: [true](https://developer.apple.com/documentation/swift/true) to create connections in both directions; [false](https://developer.apple.com/documentation/swift/false) to create just a single connection from the nearest node to the newly added node.

<a id="Discussion"></a>

## Discussion

This method uses the [costToNode:](../gkgraphnode/cost%28to_%29.md) method of the specified node to find the node already in the graph that is most easily reached from the new node. For nodes that contain geometry information ([GKGraphNode2D](../gkgraphnode2d.md) or [GKGridGraphNode](../gkgridgraphnode.md) objects), cost is by default based on distance, so this method connects the new node to the geometrically closest node already in the graph. If you create a custom [GKGraphNode](../gkgraphnode.md) subclass, this method selects the “closest” node according to whatever algorithm you implement in your [costToNode:](../gkgraphnode/cost%28to_%29.md) method.

Using this method with an instance of the [GKGraphNode](../gkgraphnode.md) base class is not recommended.

## See Also

### Working with Nodes in a Graph

- [addNodes:](add%28__%29.md): Adds the specified nodes to the graph.
- [removeNodes:](remove%28__%29.md): Removes the specified nodes from the graph.
- [nodes](nodes.md): The list of nodes in the graph.
