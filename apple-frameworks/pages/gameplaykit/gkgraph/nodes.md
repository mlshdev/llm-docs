> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgraph/nodes](https://developer.apple.com/documentation/gameplaykit/gkgraph/nodes)

# nodes (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The list of nodes in the graph.

## Declaration

```swift
var nodes: [GKGraphNode]? { get }
```

<a id="Discussion"></a>

## Discussion

This array can contain nodes that are not connected to other nodes in the graph.

## See Also

### Working with Nodes in a Graph

- [add(\_:)](add%28__%29.md): Adds the specified nodes to the graph.
- [connectToLowestCostNode(node:bidirectional:)](connecttolowestcostnode%28node_bidirectional_%29.md): Adds a node to the graph, connecting it to the node already in the graph for which the connection has the lowest cost.
- [remove(\_:)](remove%28__%29.md): Removes the specified nodes from the graph.

# nodes (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The list of nodes in the graph.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<GKGraphNode *> * nodes;
```

<a id="Discussion"></a>

## Discussion

This array can contain nodes that are not connected to other nodes in the graph.

## See Also

### Working with Nodes in a Graph

- [addNodes:](add%28__%29.md): Adds the specified nodes to the graph.
- [connectNodeToLowestCostNode:bidirectional:](connecttolowestcostnode%28node_bidirectional_%29.md): Adds a node to the graph, connecting it to the node already in the graph for which the connection has the lowest cost.
- [removeNodes:](remove%28__%29.md): Removes the specified nodes from the graph.
