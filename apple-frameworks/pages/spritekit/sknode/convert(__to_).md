> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/convert(_:to:)](https://developer.apple.com/documentation/spritekit/sknode/convert(_:to:))

# convert(\_:to:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Converts a point in this node’s coordinate system to the coordinate system of another node in the node tree.

## Declaration

```swift
func convert(_ point: CGPoint, to node: SKNode) -> CGPoint
```

## Parameters

- `point`: A point in this node’s coordinate system.
- `node`: Another node in the same node tree as this node.

<a id="return-value"></a>

## Return Value

The same point converted to the other node’s coordinate system.

## Mentioned In

- [Connecting Bodies with Joints](../connecting-bodies-with-joints.md)
- [Converting Coordinate Spaces](../converting-coordinate-spaces.md)

## See Also

### Converting Between Coordinate Systems of Different Nodes

- [Converting Coordinate Spaces](../converting-coordinate-spaces.md): Convert positions across the various coordinate spaces in a scene.
- [convert(\_:from:)](convert%28__from_%29.md): Converts a point from the coordinate system of another node in the node tree to the coordinate system of this node.

# convertPoint:toNode: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Converts a point in this node’s coordinate system to the coordinate system of another node in the node tree.

## Declaration

```objectivec
- (CGPoint) convertPoint:(CGPoint) point toNode:(SKNode *) node;
```

## Parameters

- `point`: A point in this node’s coordinate system.
- `node`: Another node in the same node tree as this node.

<a id="return-value"></a>

## Return Value

The same point converted to the other node’s coordinate system.

## Mentioned In

- [Connecting Bodies with Joints](../connecting-bodies-with-joints.md)
- [Converting Coordinate Spaces](../converting-coordinate-spaces.md)

## See Also

### Converting Between Coordinate Systems of Different Nodes

- [Converting Coordinate Spaces](../converting-coordinate-spaces.md): Convert positions across the various coordinate spaces in a scene.
- [convertPoint:fromNode:](convert%28__from_%29.md): Converts a point from the coordinate system of another node in the node tree to the coordinate system of this node.
