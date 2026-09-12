> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgraphnode/connectednodes](https://developer.apple.com/documentation/gameplaykit/gkgraphnode/connectednodes)

# connectedNodes (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The list of other nodes connected to this node.

## Declaration

```swift
var connectedNodes: [GKGraphNode] { get }
```

<a id="Discussion"></a>

## Discussion

In GameplayKit, the connections between nodes in a graph are directional. For example, if the [connectedNodes](connectednodes.md) list of Node A contains Node B, then a traveler on the graph can move directly from Node A to Node B. For the reverse to also be true, the [connectedNodes](connectednodes.md) list of Node B must contain Node A. To conveniently create connections in both directions, use the `bidirectional` parameter of the [addConnections(to:bidirectional:)](addconnections%28to_bidirectional_%29.md) method.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Working with Connections

- [addConnections(to:bidirectional:)](addconnections%28to_bidirectional_%29.md): Connects this node to all nodes in the specified list.
- [removeConnections(to:bidirectional:)](removeconnections%28to_bidirectional_%29.md): Removes the connections from this node to the specified nodes.

# connectedNodes (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The list of other nodes connected to this node.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<GKGraphNode *> * connectedNodes;
```

<a id="Discussion"></a>

## Discussion

In GameplayKit, the connections between nodes in a graph are directional. For example, if the [connectedNodes](connectednodes.md) list of Node A contains Node B, then a traveler on the graph can move directly from Node A to Node B. For the reverse to also be true, the [connectedNodes](connectednodes.md) list of Node B must contain Node A. To conveniently create connections in both directions, use the `bidirectional` parameter of the [addConnectionsToNodes:bidirectional:](addconnections%28to_bidirectional_%29.md) method.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Working with Connections

- [addConnectionsToNodes:bidirectional:](addconnections%28to_bidirectional_%29.md): Connects this node to all nodes in the specified list.
- [removeConnectionsToNodes:bidirectional:](removeconnections%28to_bidirectional_%29.md): Removes the connections from this node to the specified nodes.
