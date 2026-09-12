> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skconstraint/orient(to:offset:)-9lq3h](https://developer.apple.com/documentation/spritekit/skconstraint/orient(to:offset:)-9lq3h)

# orient(to:offset:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a constraint that forces a node to rotate to face a fixed point.

## Declaration

```swift
class func orient(to point: CGPoint, offset radians: SKRange) -> Self
```

## Parameters

- `point`: A point in the node’s parent’s coordinate system.
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
- [orient(to:in:offset:)](orient%28to_in_offset_%29.md): Creates a constraint that forces a node to rotate to face a point in another node’s coordinate system.
- [zRotation(\_:)](zrotation%28__%29.md): Creates a constraint that limits the orientation of a node.

# orientToPoint:offset: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a constraint that forces a node to rotate to face a fixed point.

## Declaration

```objectivec
+ (instancetype) orientToPoint:(CGPoint) point offset:(SKRange *) radians;
```

## Parameters

- `point`: A point in the node’s parent’s coordinate system.
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
- [orientToPoint:inNode:offset:](orient%28to_in_offset_%29.md): Creates a constraint that forces a node to rotate to face a point in another node’s coordinate system.
- [zRotation:](zrotation%28__%29.md): Creates a constraint that limits the orientation of a node.
