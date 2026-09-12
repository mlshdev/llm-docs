> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgraph/init(_:)](https://developer.apple.com/documentation/gameplaykit/gkgraph/init(_:))

# init(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a graph with the specified list of nodes.

## Declaration

```swift
init(_ nodes: [GKGraphNode])
```

## Parameters

- `nodes`: An array of graph node objects—instances of [GKGraphNode](../gkgraphnode.md) or of one of its subclasses containing geometry information.

<a id="return-value"></a>

## Return Value

A new graph object.

<a id="Discussion"></a>

## Discussion

The nodes in the array need not already be connected—you can connect nodes after adding them to the graph using the [connectToLowestCostNode(node:bidirectional:)](connecttolowestcostnode%28node_bidirectional_%29.md) method on the graph itself or the addConnection:bidirectional: method on individual nodes. Using the [findPath(from:to:)](findpath%28from_to_%29.md) method requires connections between nodes.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

# initWithNodes: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a graph with the specified list of nodes.

## Declaration

```objectivec
- (instancetype) initWithNodes:(NSArray<GKGraphNode *> *) nodes;
```

## Parameters

- `nodes`: An array of graph node objects—instances of [GKGraphNode](../gkgraphnode.md) or of one of its subclasses containing geometry information.

<a id="return-value"></a>

## Return Value

A new graph object.

<a id="Discussion"></a>

## Discussion

The nodes in the array need not already be connected—you can connect nodes after adding them to the graph using the [connectNodeToLowestCostNode:bidirectional:](connecttolowestcostnode%28node_bidirectional_%29.md) method on the graph itself or the addConnection:bidirectional: method on individual nodes. Using the [findPathFromNode:toNode:](findpath%28from_to_%29.md) method requires connections between nodes.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Creating a Graph

- [graphWithNodes:](graphwithnodes_.md): Creates a graph with the specified list of nodes.
