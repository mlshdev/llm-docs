> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkobstaclegraph/isconnectionlocked(from:to:)](https://developer.apple.com/documentation/gameplaykit/gkobstaclegraph/isconnectionlocked(from:to:))

# isConnectionLocked(from:to:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value indicating whether the specified nodes are protected from disconnection due to the addition of obstacles.

## Declaration

```swift
func isConnectionLocked(from startNode: NodeType, to endNode: NodeType) -> Bool
```

## Parameters

- `startNode`: A node in the graph.
- `endNode`: Another node in the graph to which the node `startNode` is directly connected.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the connection between the specified nodes has been locked with the [lockConnection(from:to:)](lockconnection%28from_to_%29.md) method; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

By default, adding obstacles with the [addObstacles(\_:)](addobstacles%28__%29.md) method disconnects pairs of nodes if the direct path between them intersects an obstacle. This behavior ensures that using the findPathBetweenNodes:toNode: method does not result in a path through the graph that crosses obstacles. With certain nodes, this behavior might not be desirable—use the [lockConnection(from:to:)](lockconnection%28from_to_%29.md) method to protect a connection between nodes from being automatically destroyed and the [unlockConnection(from:to:)](unlockconnection%28from_to_%29.md) method to remove such protection.

## See Also

### Locking Node Connections

- [lockConnection(from:to:)](lockconnection%28from_to_%29.md): Prevents the specified nodes from being disconnected due to the addition of obstacles.
- [unlockConnection(from:to:)](unlockconnection%28from_to_%29.md): Allows the specified nodes to be disconnected due to the addition of obstacles.

# isConnectionLockedFromNode:toNode: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value indicating whether the specified nodes are protected from disconnection due to the addition of obstacles.

## Declaration

```objectivec
- (BOOL) isConnectionLockedFromNode:(NodeType) startNode toNode:(NodeType) endNode;
```

## Parameters

- `startNode`: A node in the graph.
- `endNode`: Another node in the graph to which the node `startNode` is directly connected.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the connection between the specified nodes has been locked with the [lockConnectionFromNode:toNode:](lockconnection%28from_to_%29.md) method; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

By default, adding obstacles with the [addObstacles:](addobstacles%28__%29.md) method disconnects pairs of nodes if the direct path between them intersects an obstacle. This behavior ensures that using the findPathBetweenNodes:toNode: method does not result in a path through the graph that crosses obstacles. With certain nodes, this behavior might not be desirable—use the [lockConnectionFromNode:toNode:](lockconnection%28from_to_%29.md) method to protect a connection between nodes from being automatically destroyed and the [unlockConnectionFromNode:toNode:](unlockconnection%28from_to_%29.md) method to remove such protection.

## See Also

### Locking Node Connections

- [lockConnectionFromNode:toNode:](lockconnection%28from_to_%29.md): Prevents the specified nodes from being disconnected due to the addition of obstacles.
- [unlockConnectionFromNode:toNode:](unlockconnection%28from_to_%29.md): Allows the specified nodes to be disconnected due to the addition of obstacles.
