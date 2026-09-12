> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgraphnode/removeconnections(to:bidirectional:)](https://developer.apple.com/documentation/gameplaykit/gkgraphnode/removeconnections(to:bidirectional:))

# removeConnections(to:bidirectional:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Removes the connections from this node to the specified nodes.

## Declaration

```swift
func removeConnections(to nodes: [GKGraphNode], bidirectional: Bool)
```

## Parameters

- `nodes`: The nodes connected to this node whose connections are to be removed.
- `bidirectional`: [true](https://developer.apple.com/documentation/swift/true) to remove connections in both directions if they exist; [false](https://developer.apple.com/documentation/swift/false) to remove only connections from this node to each of the specified nodes.

<a id="Discussion"></a>

## Discussion

In GameplayKit, the connections between nodes in a graph are directional. For example, if the [connectedNodes](connectednodes.md) list of Node A contains Node B, then a traveler on the graph can move directly from Node A to Node B. For the reverse to also be true, the [connectedNodes](connectednodes.md) list of Node B must contain Node A. When calling this method to remove a connection from one node to another, use the `bidirectional` parameter to choose whether to automatically remove the reverse connection as well.

## See Also

### Working with Connections

- [connectedNodes](connectednodes.md): The list of other nodes connected to this node.
- [addConnections(to:bidirectional:)](addconnections%28to_bidirectional_%29.md): Connects this node to all nodes in the specified list.

# removeConnectionsToNodes:bidirectional: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Removes the connections from this node to the specified nodes.

## Declaration

```objectivec
- (void) removeConnectionsToNodes:(NSArray<GKGraphNode *> *) nodes bidirectional:(BOOL) bidirectional;
```

## Parameters

- `nodes`: The nodes connected to this node whose connections are to be removed.
- `bidirectional`: [true](https://developer.apple.com/documentation/swift/true) to remove connections in both directions if they exist; [false](https://developer.apple.com/documentation/swift/false) to remove only connections from this node to each of the specified nodes.

<a id="Discussion"></a>

## Discussion

In GameplayKit, the connections between nodes in a graph are directional. For example, if the [connectedNodes](connectednodes.md) list of Node A contains Node B, then a traveler on the graph can move directly from Node A to Node B. For the reverse to also be true, the [connectedNodes](connectednodes.md) list of Node B must contain Node A. When calling this method to remove a connection from one node to another, use the `bidirectional` parameter to choose whether to automatically remove the reverse connection as well.

## See Also

### Working with Connections

- [connectedNodes](connectednodes.md): The list of other nodes connected to this node.
- [addConnectionsToNodes:bidirectional:](addconnections%28to_bidirectional_%29.md): Connects this node to all nodes in the specified list.
