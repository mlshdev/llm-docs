> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgraph/add(_:)](https://developer.apple.com/documentation/gameplaykit/gkgraph/add(_:))

# add(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds the specified nodes to the graph.

## Declaration

```swift
func add(_ nodes: [GKGraphNode])
```

## Parameters

- `nodes`: An array of graph node objects—instances of [GKGraphNode](../gkgraphnode.md) or of one of its subclasses that adds geometry information.

<a id="Discussion"></a>

## Discussion

Calling this method does not connect the newly added nodes to others in the graph.

## See Also

### Working with Nodes in a Graph

- [connectToLowestCostNode(node:bidirectional:)](connecttolowestcostnode%28node_bidirectional_%29.md): Adds a node to the graph, connecting it to the node already in the graph for which the connection has the lowest cost.
- [remove(\_:)](remove%28__%29.md): Removes the specified nodes from the graph.
- [nodes](nodes.md): The list of nodes in the graph.

# addNodes: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds the specified nodes to the graph.

## Declaration

```objectivec
- (void) addNodes:(NSArray<GKGraphNode *> *) nodes;
```

## Parameters

- `nodes`: An array of graph node objects—instances of [GKGraphNode](../gkgraphnode.md) or of one of its subclasses that adds geometry information.

<a id="Discussion"></a>

## Discussion

Calling this method does not connect the newly added nodes to others in the graph.

## See Also

### Working with Nodes in a Graph

- [connectNodeToLowestCostNode:bidirectional:](connecttolowestcostnode%28node_bidirectional_%29.md): Adds a node to the graph, connecting it to the node already in the graph for which the connection has the lowest cost.
- [removeNodes:](remove%28__%29.md): Removes the specified nodes from the graph.
- [nodes](nodes.md): The list of nodes in the graph.
