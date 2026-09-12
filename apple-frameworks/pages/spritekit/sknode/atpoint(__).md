> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/atpoint(_:)](https://developer.apple.com/documentation/spritekit/sknode/atpoint(_:))

# atPoint(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the deepest visible descendant that intersects a point.

## Declaration

```swift
func atPoint(_ p: CGPoint) -> SKNode
```

## Parameters

- `p`: A point in the node’s coordinate system.

<a id="return-value"></a>

## Return Value

A descendant in the subtree that intersects the point, or the receiver if no nodes intersect the point. Only nodes that have an [isHidden](ishidden.md) of `false` and an [alpha](alpha.md) greater that zero are returned. If multiple descendants intersect the point, the deepest node in the tree is returned. If multiple nodes are at the same level, the intersecting node with the largest z position is returned.

## Mentioned In

- [Controlling User Interaction on Nodes](../controlling-user-interaction-on-nodes.md)
- [Understanding Hit-Testing](../understanding-hit-testing.md)

<a id="Discussion"></a>

## Discussion

A point is considered to be in a node if it lies inside the rectangle returned by the [calculateAccumulatedFrame()](calculateaccumulatedframe%28%29.md) method.

## See Also

### Hit Testing

- [Understanding Hit-Testing](../understanding-hit-testing.md): Learn how find child nodes at a given point by using hit-testing.
- [contains(\_:)](contains%28__%29.md): Returns a Boolean value that indicates whether a point lies inside the parent’s coordinate system.
- [nodes(at:)](nodes%28at_%29.md): Returns an array of all visible descendants that intersect a point.

# nodeAtPoint: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the deepest visible descendant that intersects a point.

## Declaration

```objectivec
- (SKNode *) nodeAtPoint:(CGPoint) p;
```

## Parameters

- `p`: A point in the node’s coordinate system.

<a id="return-value"></a>

## Return Value

A descendant in the subtree that intersects the point, or the receiver if no nodes intersect the point. Only nodes that have an [hidden](ishidden.md) of `false` and an [alpha](alpha.md) greater that zero are returned. If multiple descendants intersect the point, the deepest node in the tree is returned. If multiple nodes are at the same level, the intersecting node with the largest z position is returned.

## Mentioned In

- [Controlling User Interaction on Nodes](../controlling-user-interaction-on-nodes.md)
- [Understanding Hit-Testing](../understanding-hit-testing.md)

<a id="Discussion"></a>

## Discussion

A point is considered to be in a node if it lies inside the rectangle returned by the [calculateAccumulatedFrame](calculateaccumulatedframe%28%29.md) method.

## See Also

### Hit Testing

- [Understanding Hit-Testing](../understanding-hit-testing.md): Learn how find child nodes at a given point by using hit-testing.
- [containsPoint:](contains%28__%29.md): Returns a Boolean value that indicates whether a point lies inside the parent’s coordinate system.
- [nodesAtPoint:](nodes%28at_%29.md): Returns an array of all visible descendants that intersect a point.
