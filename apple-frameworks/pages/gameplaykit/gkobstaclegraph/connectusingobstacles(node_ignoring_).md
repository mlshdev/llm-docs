> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkobstaclegraph/connectusingobstacles(node:ignoring:)](https://developer.apple.com/documentation/gameplaykit/gkobstaclegraph/connectusingobstacles(node:ignoring:))

# connectUsingObstacles(node:ignoring:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds the specified node to the graph, connecting it to its nearest neighbors while ignoring the area occupied by the specified obstacles.

## Declaration

```swift
func connectUsingObstacles(node: NodeType, ignoring obstaclesToIgnore: [GKPolygonObstacle])
```

## Parameters

- `node`: A graph node object containing 2D coordinate information.
- `obstaclesToIgnore`: An array of obstacles to be ignored when adding the node to the graph.

<a id="Discussion"></a>

## Discussion

The [GKObstacleGraph](../gkobstaclegraph.md) class automatically maintains a network of nodes that describes the navigable areas around its collection of obstacles. Adding a new node to the graph connects it to these nodes, such that the resulting network can be used to find paths around the obstacles to the position of the new node. GameplayKit adds new connections only if those connections do not represent a path through any obstacles (or through the buffer region around them, as specified by the [bufferRadius](bufferradius.md) property.)

Call this method when you need to to connect a node to the graph without taking certain obstacles into account. For example, you might add a node representing the destination for a game character to move toward, but place that node inside an existing obstacle, so that the resulting path gets the character as near to that obstacle as possible.

## See Also

### Working with Nodes

- [connectUsingObstacles(node:)](connectusingobstacles%28node_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors without creating connections that pass through obstacles or their buffer regions.
- [connectUsingObstacles(node:ignoringBufferRadiusOf:)](connectusingobstacles%28node_ignoringbufferradiusof_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors while ignoring the buffer regions around the specified obstacles.
- [bufferRadius](bufferradius.md): The distance from obstacle edges that should also be considered impassable.

# connectNodeUsingObstacles:ignoringObstacles: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds the specified node to the graph, connecting it to its nearest neighbors while ignoring the area occupied by the specified obstacles.

## Declaration

```objectivec
- (void) connectNodeUsingObstacles:(NodeType) node ignoringObstacles:(NSArray<GKPolygonObstacle *> *) obstaclesToIgnore;
```

## Parameters

- `node`: A graph node object containing 2D coordinate information.
- `obstaclesToIgnore`: An array of obstacles to be ignored when adding the node to the graph.

<a id="Discussion"></a>

## Discussion

The [GKObstacleGraph](../gkobstaclegraph.md) class automatically maintains a network of nodes that describes the navigable areas around its collection of obstacles. Adding a new node to the graph connects it to these nodes, such that the resulting network can be used to find paths around the obstacles to the position of the new node. GameplayKit adds new connections only if those connections do not represent a path through any obstacles (or through the buffer region around them, as specified by the [bufferRadius](bufferradius.md) property.)

Call this method when you need to to connect a node to the graph without taking certain obstacles into account. For example, you might add a node representing the destination for a game character to move toward, but place that node inside an existing obstacle, so that the resulting path gets the character as near to that obstacle as possible.

## See Also

### Working with Nodes

- [connectNodeUsingObstacles:](connectusingobstacles%28node_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors without creating connections that pass through obstacles or their buffer regions.
- [connectNodeUsingObstacles:ignoringBufferRadiusOfObstacles:](connectusingobstacles%28node_ignoringbufferradiusof_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors while ignoring the buffer regions around the specified obstacles.
- [bufferRadius](bufferradius.md): The distance from obstacle edges that should also be considered impassable.
