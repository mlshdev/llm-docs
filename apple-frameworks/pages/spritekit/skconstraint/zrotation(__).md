> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skconstraint/zrotation(_:)](https://developer.apple.com/documentation/spritekit/skconstraint/zrotation(_:))

# zRotation(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a constraint that limits the orientation of a node.

## Declaration

```swift
class func zRotation(_ zRange: SKRange) -> Self
```

## Parameters

- `zRange`: A range value that specifies the minimum and maximum values of the node’s [zRotation](../sknode/zrotation.md) property.

<a id="return-value"></a>

## Return Value

A new constraint.

## Mentioned In

- [Creating a Look-At Constraint](../creating-a-look-at-constraint.md)

<a id="Discussion"></a>

## Discussion

Each time when constraints are applied, the node’s [zRotation](../sknode/zrotation.md) property is clamped so that it is within the specified range.

## See Also

### Creating Orientation Constraints

- [Creating a Look-At Constraint](../creating-a-look-at-constraint.md): Make a node automatically rotate itself based on the changing position of another node, by using orientation constraints.
- [orient(to:offset:)](orient%28to_offset_%29-1h1tw.md): Creates a constraint that forces a node to rotate to face another node.
- [orient(to:offset:)](orient%28to_offset_%29-9lq3h.md): Creates a constraint that forces a node to rotate to face a fixed point.
- [orient(to:in:offset:)](orient%28to_in_offset_%29.md): Creates a constraint that forces a node to rotate to face a point in another node’s coordinate system.

# zRotation: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a constraint that limits the orientation of a node.

## Declaration

```objectivec
+ (instancetype) zRotation:(SKRange *) zRange;
```

## Parameters

- `zRange`: A range value that specifies the minimum and maximum values of the node’s [zRotation](../sknode/zrotation.md) property.

<a id="return-value"></a>

## Return Value

A new constraint.

## Mentioned In

- [Creating a Look-At Constraint](../creating-a-look-at-constraint.md)

<a id="Discussion"></a>

## Discussion

Each time when constraints are applied, the node’s [zRotation](../sknode/zrotation.md) property is clamped so that it is within the specified range.

## See Also

### Creating Orientation Constraints

- [Creating a Look-At Constraint](../creating-a-look-at-constraint.md): Make a node automatically rotate itself based on the changing position of another node, by using orientation constraints.
- [orientToNode:offset:](orient%28to_offset_%29-1h1tw.md): Creates a constraint that forces a node to rotate to face another node.
- [orientToPoint:offset:](orient%28to_offset_%29-9lq3h.md): Creates a constraint that forces a node to rotate to face a fixed point.
- [orientToPoint:inNode:offset:](orient%28to_in_offset_%29.md): Creates a constraint that forces a node to rotate to face a point in another node’s coordinate system.
