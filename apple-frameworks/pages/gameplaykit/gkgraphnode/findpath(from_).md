> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgraphnode/findpath(from:)](https://developer.apple.com/documentation/gameplaykit/gkgraphnode/findpath(from:))

# findPath(from:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Computes and returns a sequence of nodes that represents the lowest-cost graph traversal from the specified node to this node.

## Declaration

```swift
func findPath(from startNode: GKGraphNode) -> [GKGraphNode]
```

## Parameters

- `startNode`: The origin node from which to attempt traversal of the graph.

<a id="return-value"></a>

## Return Value

An array of nodes representing a path through the graph in start to end order, or an empty array if no path exists between the specified nodes.

<a id="Discussion"></a>

## Discussion

This method is equivalent to the [findPath(to:)](findpath%28to_%29.md) method, but finds a path from the specified node to this node, rather than the other way around. Connections in a graph are directional—that is, a connection from Node A to Node B indicates only that travel is possible from A to B, and indicating that travel from B to A is also possible requires a separate connection. Therefore, calling the [findPath(to:)](findpath%28to_%29.md) and [findPath(from:)](findpath%28from_%29.md) methods with the same pair of nodes might not always return the same paths.

## See Also

### Finding Paths

- [findPath(to:)](findpath%28to_%29.md): Computes and returns a sequence of nodes that represents the lowest-cost graph traversal from this node to the specified node.

# findPathFromNode: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Computes and returns a sequence of nodes that represents the lowest-cost graph traversal from the specified node to this node.

## Declaration

```objectivec
- (NSArray<__kindof GKGraphNode *> *) findPathFromNode:(GKGraphNode *) startNode;
```

## Parameters

- `startNode`: The origin node from which to attempt traversal of the graph.

<a id="return-value"></a>

## Return Value

An array of nodes representing a path through the graph in start to end order, or an empty array if no path exists between the specified nodes.

<a id="Discussion"></a>

## Discussion

This method is equivalent to the [findPathToNode:](findpath%28to_%29.md) method, but finds a path from the specified node to this node, rather than the other way around. Connections in a graph are directional—that is, a connection from Node A to Node B indicates only that travel is possible from A to B, and indicating that travel from B to A is also possible requires a separate connection. Therefore, calling the [findPathToNode:](findpath%28to_%29.md) and [findPathFromNode:](findpath%28from_%29.md) methods with the same pair of nodes might not always return the same paths.

## See Also

### Finding Paths

- [findPathToNode:](findpath%28to_%29.md): Computes and returns a sequence of nodes that represents the lowest-cost graph traversal from this node to the specified node.
