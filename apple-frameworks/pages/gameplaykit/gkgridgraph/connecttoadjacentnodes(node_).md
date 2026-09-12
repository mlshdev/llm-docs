> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgridgraph/connecttoadjacentnodes(node:)](https://developer.apple.com/documentation/gameplaykit/gkgridgraph/connecttoadjacentnodes(node:))

# connectToAdjacentNodes(node:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds the specified node to the graph, connecting it to its nearest neighbors in the grid.

## Declaration

```swift
func connectToAdjacentNodes(node: GKGridGraphNode)
```

## Parameters

- `node`: A graph node object containing integer grid coordinate information.

<a id="Discussion"></a>

## Discussion

Nodes attached through this method do not become part of the grid itself, but instead can represent positions of game entities in the grid. Use nodes connected in this way to find paths between such positions.

## See Also

### Working with Nodes

- [node(atGridPosition:)](node%28atgridposition_%29.md): Returns the node in the graph at the specified grid coordinates.

# connectNodeToAdjacentNodes: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds the specified node to the graph, connecting it to its nearest neighbors in the grid.

## Declaration

```objectivec
- (void) connectNodeToAdjacentNodes:(GKGridGraphNode *) node;
```

## Parameters

- `node`: A graph node object containing integer grid coordinate information.

<a id="Discussion"></a>

## Discussion

Nodes attached through this method do not become part of the grid itself, but instead can represent positions of game entities in the grid. Use nodes connected in this way to find paths between such positions.

## See Also

### Working with Nodes

- [nodeAtGridPosition:](node%28atgridposition_%29.md): Returns the node in the graph at the specified grid coordinates.
