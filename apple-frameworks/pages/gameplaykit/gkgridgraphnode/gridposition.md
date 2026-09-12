> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgridgraphnode/gridposition](https://developer.apple.com/documentation/gameplaykit/gkgridgraphnode/gridposition)

# gridPosition (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The position of the node on a discrete integer grid.

## Declaration

```swift
var gridPosition: vector_int2 { get }
```

<a id="Discussion"></a>

## Discussion

You specify the position only when creating a node.

When working with an array of nodes returned by the [GKGraph](../gkgraph.md) [findPath(from:to:)](../gkgraph/findpath%28from_to_%29.md) method, read the position from each node to determine the path for an entity in your game scene to follow.

# gridPosition (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The position of the node on a discrete integer grid.

## Declaration

```objectivec
@property (nonatomic, readonly) vector_int2 gridPosition;
```

<a id="Discussion"></a>

## Discussion

You specify the position only when creating a node.

When working with an array of nodes returned by the [GKGraph](../gkgraph.md) [findPathFromNode:toNode:](../gkgraph/findpath%28from_to_%29.md) method, read the position from each node to determine the path for an entity in your game scene to follow.
