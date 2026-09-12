> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/nodes(at:)](https://developer.apple.com/documentation/spritekit/sknode/nodes(at:))

# nodes(at:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array of all visible descendants that intersect a point.

## Declaration

```swift
func nodes(at p: CGPoint) -> [SKNode]
```

## Parameters

- `p`: A point in the node’s coordinate system.

<a id="return-value"></a>

## Return Value

An array of all `SKNode` objects in the subtree that intersect the point. Only nodes that have an [isHidden](ishidden.md) of `false` and an [alpha](alpha.md) greater that zero are included in the returned array. If no nodes intersect the point, an empty array is returned.

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
- [atPoint(\_:)](atpoint%28__%29.md): Returns the deepest visible descendant that intersects a point.

# nodesAtPoint: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array of all visible descendants that intersect a point.

## Declaration

```objectivec
- (NSArray<SKNode *> *) nodesAtPoint:(CGPoint) p;
```

## Parameters

- `p`: A point in the node’s coordinate system.

<a id="return-value"></a>

## Return Value

An array of all `SKNode` objects in the subtree that intersect the point. Only nodes that have an [hidden](ishidden.md) of `false` and an [alpha](alpha.md) greater that zero are included in the returned array. If no nodes intersect the point, an empty array is returned.

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
- [nodeAtPoint:](atpoint%28__%29.md): Returns the deepest visible descendant that intersects a point.
