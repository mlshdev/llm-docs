> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skconstraint/orient(to:in:offset:)](https://developer.apple.com/documentation/spritekit/skconstraint/orient(to:in:offset:))

# orient(to:in:offset:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a constraint that forces a node to rotate to face a point in another node’s coordinate system.

## Declaration

```swift
class func orient(to point: CGPoint, in node: SKNode, offset radians: SKRange) -> Self
```

## Parameters

- `point`: A point in the `node` parameter’s coordinate system.
- `node`: The node whose coordinate system the point is specified in.
- `radians`: An offset that is added to the [zRotation](../sknode/zrotation.md) value after it is calculated.

<a id="return-value"></a>

## Return Value

A new constraint.

<a id="Discussion"></a>

## Discussion

Each time when constraints are applied, a new angle is calculated so that a line projected at this angle would point at the target point. This angle is added to the values specified in the `radians` property to create a new range. Finally, the node’s [zRotation](../sknode/zrotation.md) value is clamped to fit inside this range.

## See Also

### Creating Orientation Constraints

- [Creating a Look-At Constraint](../creating-a-look-at-constraint.md): Make a node automatically rotate itself based on the changing position of another node, by using orientation constraints.
- [orient(to:offset:)](orient%28to_offset_%29-1h1tw.md): Creates a constraint that forces a node to rotate to face another node.
- [orient(to:offset:)](orient%28to_offset_%29-9lq3h.md): Creates a constraint that forces a node to rotate to face a fixed point.
- [zRotation(\_:)](zrotation%28__%29.md): Creates a constraint that limits the orientation of a node.

# orientToPoint:inNode:offset: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a constraint that forces a node to rotate to face a point in another node’s coordinate system.

## Declaration

```objectivec
+ (instancetype) orientToPoint:(CGPoint) point inNode:(SKNode *) node offset:(SKRange *) radians;
```

## Parameters

- `point`: A point in the `node` parameter’s coordinate system.
- `node`: The node whose coordinate system the point is specified in.
- `radians`: An offset that is added to the [zRotation](../sknode/zrotation.md) value after it is calculated.

<a id="return-value"></a>

## Return Value

A new constraint.

<a id="Discussion"></a>

## Discussion

Each time when constraints are applied, a new angle is calculated so that a line projected at this angle would point at the target point. This angle is added to the values specified in the `radians` property to create a new range. Finally, the node’s [zRotation](../sknode/zrotation.md) value is clamped to fit inside this range.

## See Also

### Creating Orientation Constraints

- [Creating a Look-At Constraint](../creating-a-look-at-constraint.md): Make a node automatically rotate itself based on the changing position of another node, by using orientation constraints.
- [orientToNode:offset:](orient%28to_offset_%29-1h1tw.md): Creates a constraint that forces a node to rotate to face another node.
- [orientToPoint:offset:](orient%28to_offset_%29-9lq3h.md): Creates a constraint that forces a node to rotate to face a fixed point.
- [zRotation:](zrotation%28__%29.md): Creates a constraint that limits the orientation of a node.
