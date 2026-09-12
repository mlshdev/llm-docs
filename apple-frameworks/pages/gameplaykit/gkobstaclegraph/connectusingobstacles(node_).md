> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkobstaclegraph/connectusingobstacles(node:)](https://developer.apple.com/documentation/gameplaykit/gkobstaclegraph/connectusingobstacles(node:))

# connectUsingObstacles(node:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds the specified node to the graph, connecting it to its nearest neighbors without creating connections that pass through obstacles or their buffer regions.

## Declaration

```swift
func connectUsingObstacles(node: NodeType)
```

## Parameters

- `node`: A graph node object containing 2D coordinate information.

<a id="Discussion"></a>

## Discussion

The [GKObstacleGraph](../gkobstaclegraph.md) class automatically maintains a network of nodes that describes the navigable areas around its collection of obstacles. Adding a new node to the graph connects it to these nodes, such that the resulting network can be used to find paths around the obstacles to the position of the new node. GameplayKit adds new connections only if those connections do not represent a path through any obstacles (or through the buffer region around them, as specified by the [bufferRadius](bufferradius.md) property.)

Calling this method is equivalent to calling the [connectUsingObstacles(node:ignoring:)](connectusingobstacles%28node_ignoring_%29.md) and passing an empty array for the `obstaclesToIgnore` parameter.

## See Also

### Working with Nodes

- [connectUsingObstacles(node:ignoring:)](connectusingobstacles%28node_ignoring_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors while ignoring the area occupied by the specified obstacles.
- [connectUsingObstacles(node:ignoringBufferRadiusOf:)](connectusingobstacles%28node_ignoringbufferradiusof_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors while ignoring the buffer regions around the specified obstacles.
- [bufferRadius](bufferradius.md): The distance from obstacle edges that should also be considered impassable.

# connectNodeUsingObstacles: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds the specified node to the graph, connecting it to its nearest neighbors without creating connections that pass through obstacles or their buffer regions.

## Declaration

```objectivec
- (void) connectNodeUsingObstacles:(NodeType) node;
```

## Parameters

- `node`: A graph node object containing 2D coordinate information.

<a id="Discussion"></a>

## Discussion

The [GKObstacleGraph](../gkobstaclegraph.md) class automatically maintains a network of nodes that describes the navigable areas around its collection of obstacles. Adding a new node to the graph connects it to these nodes, such that the resulting network can be used to find paths around the obstacles to the position of the new node. GameplayKit adds new connections only if those connections do not represent a path through any obstacles (or through the buffer region around them, as specified by the [bufferRadius](bufferradius.md) property.)

Calling this method is equivalent to calling the [connectNodeUsingObstacles:ignoringObstacles:](connectusingobstacles%28node_ignoring_%29.md) and passing an empty array for the `obstaclesToIgnore` parameter.

## See Also

### Working with Nodes

- [connectNodeUsingObstacles:ignoringObstacles:](connectusingobstacles%28node_ignoring_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors while ignoring the area occupied by the specified obstacles.
- [connectNodeUsingObstacles:ignoringBufferRadiusOfObstacles:](connectusingobstacles%28node_ignoringbufferradiusof_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors while ignoring the buffer regions around the specified obstacles.
- [bufferRadius](bufferradius.md): The distance from obstacle edges that should also be considered impassable.
