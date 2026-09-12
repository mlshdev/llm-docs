> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skconstraint/orient(to:offset:)-1h1tw](https://developer.apple.com/documentation/spritekit/skconstraint/orient(to:offset:)-1h1tw)

# orient(to:offset:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a constraint that forces a node to rotate to face another node.

## Declaration

```swift
class func orient(to node: SKNode, offset radians: SKRange) -> Self
```

## Parameters

- `node`: The node that should be used to orient the node that this constraint is attached to.
- `radians`: An offset that is added to the [zRotation](../sknode/zrotation.md) value after it is calculated.

<a id="return-value"></a>

## Return Value

A new constraint.

<a id="Discussion"></a>

## Discussion

Each time when constraints are applied, a new angle is calculated so that a line projected at this angle would point at the other node’s origin. This angle is added to the values specified in the `radians` property to create a new range. Finally, the node’s [zRotation](../sknode/zrotation.md) value is clamped to fit inside this range.

## See Also

### Creating Orientation Constraints

- [Creating a Look-At Constraint](../creating-a-look-at-constraint.md): Make a node automatically rotate itself based on the changing position of another node, by using orientation constraints.
- [orient(to:offset:)](orient%28to_offset_%29-9lq3h.md): Creates a constraint that forces a node to rotate to face a fixed point.
- [orient(to:in:offset:)](orient%28to_in_offset_%29.md): Creates a constraint that forces a node to rotate to face a point in another node’s coordinate system.
- [zRotation(\_:)](zrotation%28__%29.md): Creates a constraint that limits the orientation of a node.

# orientToNode:offset: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a constraint that forces a node to rotate to face another node.

## Declaration

```objectivec
+ (instancetype) orientToNode:(SKNode *) node offset:(SKRange *) radians;
```

## Parameters

- `node`: The node that should be used to orient the node that this constraint is attached to.
- `radians`: An offset that is added to the [zRotation](../sknode/zrotation.md) value after it is calculated.

<a id="return-value"></a>

## Return Value

A new constraint.

<a id="Discussion"></a>

## Discussion

Each time when constraints are applied, a new angle is calculated so that a line projected at this angle would point at the other node’s origin. This angle is added to the values specified in the `radians` property to create a new range. Finally, the node’s [zRotation](../sknode/zrotation.md) value is clamped to fit inside this range.

## See Also

### Creating Orientation Constraints

- [Creating a Look-At Constraint](../creating-a-look-at-constraint.md): Make a node automatically rotate itself based on the changing position of another node, by using orientation constraints.
- [orientToPoint:offset:](orient%28to_offset_%29-9lq3h.md): Creates a constraint that forces a node to rotate to face a fixed point.
- [orientToPoint:inNode:offset:](orient%28to_in_offset_%29.md): Creates a constraint that forces a node to rotate to face a point in another node’s coordinate system.
- [zRotation:](zrotation%28__%29.md): Creates a constraint that limits the orientation of a node.
