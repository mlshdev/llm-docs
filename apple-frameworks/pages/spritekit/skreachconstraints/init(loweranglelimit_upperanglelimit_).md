> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skreachconstraints/init(loweranglelimit:upperanglelimit:)](https://developer.apple.com/documentation/spritekit/skreachconstraints/init(loweranglelimit:upperanglelimit:))

# init(lowerAngleLimit:upperAngleLimit:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Initializes a new reach constraint object.

## Declaration

```swift
init(lowerAngleLimit: CGFloat, upperAngleLimit: CGFloat)
```

## Parameters

- `lowerAngleLimit`: The minimum angle that the node can have when it is rotated by a reach event.
- `upperAngleLimit`: The maximum angle that the node can have when it is rotated by a reach event.

<a id="return-value"></a>

## Return Value

A newly initialized reach constraint.

<a id="Discussion"></a>

## Discussion

When a reach action is executed, a node’s [zRotation](../sknode/zrotation.md) property may be changed by the action to satisfy the reach action. Any value calculated by the reach action for a node is always inside the range specified by the reach constraint attached to the node’s [reachConstraints](../sknode/reachconstraints.md) property.

## See Also

### Working with Reach Constraints

- [lowerAngleLimit](loweranglelimit.md): The minimum angle that the node can have after it is rotated by a reach event.
- [upperAngleLimit](upperanglelimit.md): The maximum angle that the node can have after it is rotated by a reach event.

# initWithLowerAngleLimit:upperAngleLimit: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Initializes a new reach constraint object.

## Declaration

```objectivec
- (instancetype) initWithLowerAngleLimit:(CGFloat) lowerAngleLimit upperAngleLimit:(CGFloat) upperAngleLimit;
```

## Parameters

- `lowerAngleLimit`: The minimum angle that the node can have when it is rotated by a reach event.
- `upperAngleLimit`: The maximum angle that the node can have when it is rotated by a reach event.

<a id="return-value"></a>

## Return Value

A newly initialized reach constraint.

<a id="Discussion"></a>

## Discussion

When a reach action is executed, a node’s [zRotation](../sknode/zrotation.md) property may be changed by the action to satisfy the reach action. Any value calculated by the reach action for a node is always inside the range specified by the reach constraint attached to the node’s [reachConstraints](../sknode/reachconstraints.md) property.

## See Also

### Working with Reach Constraints

- [lowerAngleLimit](loweranglelimit.md): The minimum angle that the node can have after it is rotated by a reach event.
- [upperAngleLimit](upperanglelimit.md): The maximum angle that the node can have after it is rotated by a reach event.
