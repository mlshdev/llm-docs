> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gameplaykit/gkgraph/remove(_:)

# remove(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Removes the specified nodes from the graph.

## Declaration

```swift
func remove(_ nodes: [GKGraphNode])
```

## Parameters

- `nodes`: A node in the graph.

<a id="Discussion"></a>

## Discussion

This method has no effect on nodes in the array that are not in the graph.

## See Also

### Working with Nodes in a Graph

- [add(\_:)](add%28__%29.md): Adds the specified nodes to the graph.
- [connectToLowestCostNode(node:bidirectional:)](connecttolowestcostnode%28node_bidirectional_%29.md): Adds a node to the graph, connecting it to the node already in the graph for which the connection has the lowest cost.
- [nodes](nodes.md): The list of nodes in the graph.

# removeNodes: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Removes the specified nodes from the graph.

## Declaration

```objectivec
- (void) removeNodes:(NSArray<GKGraphNode *> *) nodes;
```

## Parameters

- `nodes`: A node in the graph.

<a id="Discussion"></a>

## Discussion

This method has no effect on nodes in the array that are not in the graph.

## See Also

### Working with Nodes in a Graph

- [addNodes:](add%28__%29.md): Adds the specified nodes to the graph.
- [connectNodeToLowestCostNode:bidirectional:](connecttolowestcostnode%28node_bidirectional_%29.md): Adds a node to the graph, connecting it to the node already in the graph for which the connection has the lowest cost.
- [nodes](nodes.md): The list of nodes in the graph.
