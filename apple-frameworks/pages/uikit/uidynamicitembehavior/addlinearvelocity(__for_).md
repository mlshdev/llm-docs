> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicitembehavior/addlinearvelocity(_:for:)](https://developer.apple.com/documentation/uikit/uidynamicitembehavior/addlinearvelocity(_:for:))

# addLinearVelocity(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adds a specified linear velocity to a dynamic item.

## Declaration

```swift
func addLinearVelocity(_ velocity: CGPoint, for item: any UIDynamicItem)
```

## Parameters

- `velocity`: The linear velocity, expressed in points per second, that you want to add to the specified dynamic item. Default value is `0`. Applying a negative value reduces the linear velocity by the specified amount.
- `item`: The dynamic item whose linear velocity you want to increase (or decrease).

## See Also

### Configuring a dynamic item behavior

- [addAngularVelocity(\_:for:)](addangularvelocity%28__for_%29.md): Adds a specified angular velocity to a dynamic item.
- [allowsRotation](allowsrotation.md): Specifies whether rotation is allowed for the behavior’s dynamic items.
- [angularResistance](angularresistance.md): The angular resistance for the behavior’s dynamic items.
- [angularVelocity(for:)](angularvelocity%28for_%29.md): Returns the angular velocity for a specified dynamic item.
- [linearVelocity(for:)](linearvelocity%28for_%29.md): Returns the linear velocity for a specified dynamic item.
- [density](density.md): The relative mass density of the behavior’s dynamic items.
- [elasticity](elasticity.md): The amount of elasticity applied to collisions for the behavior’s dynamic items.
- [friction](friction.md): The linear resistance for the behavior’s dynamic items when two slide against each other.
- [resistance](resistance.md): The linear resistance for the behavior’s dynamic items, which reduces their linear velocity over time.
- [charge](charge.md): The charge associated with the item.
- [isAnchored](isanchored.md): A Boolean value indicating whether the item is anchored to its current position.

# addLinearVelocity:forItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adds a specified linear velocity to a dynamic item.

## Declaration

```objectivec
- (void) addLinearVelocity:(CGPoint) velocity forItem:(id<UIDynamicItem>) item;
```

## Parameters

- `velocity`: The linear velocity, expressed in points per second, that you want to add to the specified dynamic item. Default value is `0`. Applying a negative value reduces the linear velocity by the specified amount.
- `item`: The dynamic item whose linear velocity you want to increase (or decrease).

## See Also

### Configuring a dynamic item behavior

- [addAngularVelocity:forItem:](addangularvelocity%28__for_%29.md): Adds a specified angular velocity to a dynamic item.
- [allowsRotation](allowsrotation.md): Specifies whether rotation is allowed for the behavior’s dynamic items.
- [angularResistance](angularresistance.md): The angular resistance for the behavior’s dynamic items.
- [angularVelocityForItem:](angularvelocity%28for_%29.md): Returns the angular velocity for a specified dynamic item.
- [linearVelocityForItem:](linearvelocity%28for_%29.md): Returns the linear velocity for a specified dynamic item.
- [density](density.md): The relative mass density of the behavior’s dynamic items.
- [elasticity](elasticity.md): The amount of elasticity applied to collisions for the behavior’s dynamic items.
- [friction](friction.md): The linear resistance for the behavior’s dynamic items when two slide against each other.
- [resistance](resistance.md): The linear resistance for the behavior’s dynamic items, which reduces their linear velocity over time.
- [charge](charge.md): The charge associated with the item.
- [anchored](isanchored.md): A Boolean value indicating whether the item is anchored to its current position.
