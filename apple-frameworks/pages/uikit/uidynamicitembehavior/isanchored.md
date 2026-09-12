> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicitembehavior/isanchored](https://developer.apple.com/documentation/uikit/uidynamicitembehavior/isanchored)

# isAnchored (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value indicating whether the item is anchored to its current position.

## Declaration

```swift
var isAnchored: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

An anchored item participates in collisions but is not affected by those collisions. Instead, the item behaves like a collision boundary. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring a dynamic item behavior

- [addAngularVelocity(\_:for:)](addangularvelocity%28__for_%29.md): Adds a specified angular velocity to a dynamic item.
- [addLinearVelocity(\_:for:)](addlinearvelocity%28__for_%29.md): Adds a specified linear velocity to a dynamic item.
- [allowsRotation](allowsrotation.md): Specifies whether rotation is allowed for the behavior’s dynamic items.
- [angularResistance](angularresistance.md): The angular resistance for the behavior’s dynamic items.
- [angularVelocity(for:)](angularvelocity%28for_%29.md): Returns the angular velocity for a specified dynamic item.
- [linearVelocity(for:)](linearvelocity%28for_%29.md): Returns the linear velocity for a specified dynamic item.
- [density](density.md): The relative mass density of the behavior’s dynamic items.
- [elasticity](elasticity.md): The amount of elasticity applied to collisions for the behavior’s dynamic items.
- [friction](friction.md): The linear resistance for the behavior’s dynamic items when two slide against each other.
- [resistance](resistance.md): The linear resistance for the behavior’s dynamic items, which reduces their linear velocity over time.
- [charge](charge.md): The charge associated with the item.

# anchored (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value indicating whether the item is anchored to its current position.

## Declaration

```objectivec
@property (nonatomic, getter=isAnchored) BOOL anchored;
```

<a id="Discussion"></a>

## Discussion

An anchored item participates in collisions but is not affected by those collisions. Instead, the item behaves like a collision boundary. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring a dynamic item behavior

- [addAngularVelocity:forItem:](addangularvelocity%28__for_%29.md): Adds a specified angular velocity to a dynamic item.
- [addLinearVelocity:forItem:](addlinearvelocity%28__for_%29.md): Adds a specified linear velocity to a dynamic item.
- [allowsRotation](allowsrotation.md): Specifies whether rotation is allowed for the behavior’s dynamic items.
- [angularResistance](angularresistance.md): The angular resistance for the behavior’s dynamic items.
- [angularVelocityForItem:](angularvelocity%28for_%29.md): Returns the angular velocity for a specified dynamic item.
- [linearVelocityForItem:](linearvelocity%28for_%29.md): Returns the linear velocity for a specified dynamic item.
- [density](density.md): The relative mass density of the behavior’s dynamic items.
- [elasticity](elasticity.md): The amount of elasticity applied to collisions for the behavior’s dynamic items.
- [friction](friction.md): The linear resistance for the behavior’s dynamic items when two slide against each other.
- [resistance](resistance.md): The linear resistance for the behavior’s dynamic items, which reduces their linear velocity over time.
- [charge](charge.md): The charge associated with the item.
