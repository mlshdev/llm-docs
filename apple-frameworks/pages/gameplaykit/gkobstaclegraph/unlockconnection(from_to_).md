> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkobstaclegraph/unlockconnection(from:to:)](https://developer.apple.com/documentation/gameplaykit/gkobstaclegraph/unlockconnection(from:to:))

# unlockConnection(from:to:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Allows the specified nodes to be disconnected due to the addition of obstacles.

## Declaration

```swift
func unlockConnection(from startNode: NodeType, to endNode: NodeType)
```

## Parameters

- `startNode`: A node in the graph.
- `endNode`: Another node in the graph to which the node `startNode` is directly connected.

<a id="Discussion"></a>

## Discussion

By default, adding obstacles with the [addObstacles(\_:)](addobstacles%28__%29.md) method disconnects pairs of nodes if the direct path between them intersects an obstacle. This behavior ensures that using the findPathBetweenNodes:toNode: method does not result in a path through the graph that crosses obstacles.

With certain nodes, such as those you add with the [connectUsingObstacles(node:)](connectusingobstacles%28node_%29.md) method to represent the position of a game character or objective, this behavior might not be desirable. For example, if you add an obstacle that overlaps a character’s current position, the character should be able to find a path that exits the obstacle. In this case, use the [lockConnection(from:to:)](lockconnection%28from_to_%29.md) method to protect the connection between the character’s node and a neighboring node from being automatically destroyed. If you later rearrange nodes so that such protection is no longer necessary, use the [unlockConnection(from:to:)](unlockconnection%28from_to_%29.md) method to remove it.

## See Also

### Locking Node Connections

- [lockConnection(from:to:)](lockconnection%28from_to_%29.md): Prevents the specified nodes from being disconnected due to the addition of obstacles.
- [isConnectionLocked(from:to:)](isconnectionlocked%28from_to_%29.md): Returns a Boolean value indicating whether the specified nodes are protected from disconnection due to the addition of obstacles.

# unlockConnectionFromNode:toNode: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Allows the specified nodes to be disconnected due to the addition of obstacles.

## Declaration

```objectivec
- (void) unlockConnectionFromNode:(NodeType) startNode toNode:(NodeType) endNode;
```

## Parameters

- `startNode`: A node in the graph.
- `endNode`: Another node in the graph to which the node `startNode` is directly connected.

<a id="Discussion"></a>

## Discussion

By default, adding obstacles with the [addObstacles:](addobstacles%28__%29.md) method disconnects pairs of nodes if the direct path between them intersects an obstacle. This behavior ensures that using the findPathBetweenNodes:toNode: method does not result in a path through the graph that crosses obstacles.

With certain nodes, such as those you add with the [connectNodeUsingObstacles:](connectusingobstacles%28node_%29.md) method to represent the position of a game character or objective, this behavior might not be desirable. For example, if you add an obstacle that overlaps a character’s current position, the character should be able to find a path that exits the obstacle. In this case, use the [lockConnectionFromNode:toNode:](lockconnection%28from_to_%29.md) method to protect the connection between the character’s node and a neighboring node from being automatically destroyed. If you later rearrange nodes so that such protection is no longer necessary, use the [unlockConnectionFromNode:toNode:](unlockconnection%28from_to_%29.md) method to remove it.

## See Also

### Locking Node Connections

- [lockConnectionFromNode:toNode:](lockconnection%28from_to_%29.md): Prevents the specified nodes from being disconnected due to the addition of obstacles.
- [isConnectionLockedFromNode:toNode:](isconnectionlocked%28from_to_%29.md): Returns a Boolean value indicating whether the specified nodes are protected from disconnection due to the addition of obstacles.
