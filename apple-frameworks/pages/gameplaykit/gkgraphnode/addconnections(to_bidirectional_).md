> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgraphnode/addconnections(to:bidirectional:)](https://developer.apple.com/documentation/gameplaykit/gkgraphnode/addconnections(to:bidirectional:))

# addConnections(to:bidirectional:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Connects this node to all nodes in the specified list.

## Declaration

```swift
func addConnections(to nodes: [GKGraphNode], bidirectional: Bool)
```

## Parameters

- `nodes`: The list of nodes to which to form connections.
- `bidirectional`: [true](https://developer.apple.com/documentation/swift/true) to create a connection in both directions; [false](https://developer.apple.com/documentation/swift/false) to create only connections from this node to each of the specified nodes.

<a id="Discussion"></a>

## Discussion

In GameplayKit, the connections between nodes in a graph are directional. For example, if the [connectedNodes](connectednodes.md) list of Node A contains Node B, then a traveler on the graph can move directly from Node A to Node B. For the reverse to also be true, the [connectedNodes](connectednodes.md) list of Node B must contain Node A. Use the `bidirectional` parameter to choose whether to automatically create connections in both directions or create only one-way connections.

## See Also

### Working with Connections

- [connectedNodes](connectednodes.md): The list of other nodes connected to this node.
- [removeConnections(to:bidirectional:)](removeconnections%28to_bidirectional_%29.md): Removes the connections from this node to the specified nodes.

# addConnectionsToNodes:bidirectional: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Connects this node to all nodes in the specified list.

## Declaration

```objectivec
- (void) addConnectionsToNodes:(NSArray<GKGraphNode *> *) nodes bidirectional:(BOOL) bidirectional;
```

## Parameters

- `nodes`: The list of nodes to which to form connections.
- `bidirectional`: [true](https://developer.apple.com/documentation/swift/true) to create a connection in both directions; [false](https://developer.apple.com/documentation/swift/false) to create only connections from this node to each of the specified nodes.

<a id="Discussion"></a>

## Discussion

In GameplayKit, the connections between nodes in a graph are directional. For example, if the [connectedNodes](connectednodes.md) list of Node A contains Node B, then a traveler on the graph can move directly from Node A to Node B. For the reverse to also be true, the [connectedNodes](connectednodes.md) list of Node B must contain Node A. Use the `bidirectional` parameter to choose whether to automatically create connections in both directions or create only one-way connections.

## See Also

### Working with Connections

- [connectedNodes](connectednodes.md): The list of other nodes connected to this node.
- [removeConnectionsToNodes:bidirectional:](removeconnections%28to_bidirectional_%29.md): Removes the connections from this node to the specified nodes.
