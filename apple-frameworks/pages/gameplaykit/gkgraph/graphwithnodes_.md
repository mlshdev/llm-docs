> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgraph/graphwithnodes:](https://developer.apple.com/documentation/gameplaykit/gkgraph/graphwithnodes:)

# graphWithNodes:

**Interface language:** Objective-C

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a graph with the specified list of nodes.

## Declaration

```objectivec
+ (instancetype) graphWithNodes:(NSArray<GKGraphNode *> *) nodes;
```

## Parameters

- `nodes`: An array of graph node objects—instances of [GKGraphNode](../gkgraphnode.md) or of one of its subclasses that adds geometry information.

<a id="return-value"></a>

## Return Value

A new graph object.

<a id="Discussion"></a>

## Discussion

The nodes in the array need not already be connected—you can connect nodes after adding them to the graph using the [connectNodeToLowestCostNode:bidirectional:](connecttolowestcostnode%28node_bidirectional_%29.md) method on the graph itself or the addConnection:bidirectional: method on individual nodes. Using the [findPathFromNode:toNode:](findpath%28from_to_%29.md) method requires connections between nodes.

## See Also

### Creating a Graph

- [initWithNodes:](init%28__%29.md): Initializes a graph with the specified list of nodes.
