> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgraphnode3d/position](https://developer.apple.com/documentation/gameplaykit/gkgraphnode3d/position)

# position (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The position of the node in continuous 2D space.

## Declaration

```swift
var position: vector_float3 { get set }
```

<a id="Discussion"></a>

## Discussion

You specify a position when creating a node, but you can also change a node’s position after initialization.

When working with an array of nodes returned by the [GKGraph](../gkgraph.md) [findPath(from:to:)](../gkgraph/findpath%28from_to_%29.md) method, read the position from each node to determine the path for an entity in your game scene to follow.

# position (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The position of the node in continuous 2D space.

## Declaration

```objectivec
@property (nonatomic) vector_float3 position;
```

<a id="Discussion"></a>

## Discussion

You specify a position when creating a node, but you can also change a node’s position after initialization.

When working with an array of nodes returned by the [GKGraph](../gkgraph.md) [findPathFromNode:toNode:](../gkgraph/findpath%28from_to_%29.md) method, read the position from each node to determine the path for an entity in your game scene to follow.
