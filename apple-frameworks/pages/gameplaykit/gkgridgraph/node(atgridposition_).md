> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgridgraph/node(atgridposition:)](https://developer.apple.com/documentation/gameplaykit/gkgridgraph/node(atgridposition:))

# node(atGridPosition:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the node in the graph at the specified grid coordinates.

## Declaration

```swift
func node(atGridPosition position: vector_int2) -> NodeType?
```

## Parameters

- `position`: The grid location to query.

<a id="return-value"></a>

## Return Value

The grid node at the specified location, or `nil` if there is no node at that location.

<a id="Discussion"></a>

## Discussion

This method finds nodes that are part of the grid created by the graph. You can attach other nodes to the graph (for example, to represent the positions of game entities in the grid) with the [connectToAdjacentNodes(node:)](connecttoadjacentnodes%28node_%29.md) method, but such nodes are not part of the grid itself.

## See Also

### Working with Nodes

- [connectToAdjacentNodes(node:)](connecttoadjacentnodes%28node_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors in the grid.

# nodeAtGridPosition: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the node in the graph at the specified grid coordinates.

## Declaration

```objectivec
- (NodeType) nodeAtGridPosition:(vector_int2) position;
```

## Parameters

- `position`: The grid location to query.

<a id="return-value"></a>

## Return Value

The grid node at the specified location, or `nil` if there is no node at that location.

<a id="Discussion"></a>

## Discussion

This method finds nodes that are part of the grid created by the graph. You can attach other nodes to the graph (for example, to represent the positions of game entities in the grid) with the [connectNodeToAdjacentNodes:](connecttoadjacentnodes%28node_%29.md) method, but such nodes are not part of the grid itself.

## See Also

### Working with Nodes

- [connectNodeToAdjacentNodes:](connecttoadjacentnodes%28node_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors in the grid.
