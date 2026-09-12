> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkmeshgraph/connectusingobstacles(node:)](https://developer.apple.com/documentation/gameplaykit/gkmeshgraph/connectusingobstacles(node:))

# connectUsingObstacles(node:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Adds the specified node to the graph, connecting it to its nearest neighbors without creating connections that pass through obstacles or their buffer regions.

## Declaration

```swift
func connectUsingObstacles(node: NodeType)
```

## Parameters

- `node`: A graph node object containing 2D coordinate information.

<a id="Discussion"></a>

## Discussion

The [GKMeshGraph](../gkmeshgraph.md) class maintains a network of nodes that describes the navigable areas around its collection of obstacles. Adding a new node to the graph connects it to these nodes, such that the resulting network can be used to find paths around the obstacles to the position of the new node. GameplayKit adds new connections only if those connections do not represent a path through any obstacles (or through the buffer region around them, as specified by the [bufferRadius](bufferradius.md) property.)

## See Also

### Working with Nodes

- [bufferRadius](bufferradius.md): The distance from obstacle edges that should also be considered impassable.

# connectNodeUsingObstacles: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Adds the specified node to the graph, connecting it to its nearest neighbors without creating connections that pass through obstacles or their buffer regions.

## Declaration

```objectivec
- (void) connectNodeUsingObstacles:(NodeType) node;
```

## Parameters

- `node`: A graph node object containing 2D coordinate information.

<a id="Discussion"></a>

## Discussion

The [GKMeshGraph](../gkmeshgraph.md) class maintains a network of nodes that describes the navigable areas around its collection of obstacles. Adding a new node to the graph connects it to these nodes, such that the resulting network can be used to find paths around the obstacles to the position of the new node. GameplayKit adds new connections only if those connections do not represent a path through any obstacles (or through the buffer region around them, as specified by the [bufferRadius](bufferradius.md) property.)

## See Also

### Working with Nodes

- [bufferRadius](bufferradius.md): The distance from obstacle edges that should also be considered impassable.
