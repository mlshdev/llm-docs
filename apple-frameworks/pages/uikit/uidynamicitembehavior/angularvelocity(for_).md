> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicitembehavior/angularvelocity(for:)](https://developer.apple.com/documentation/uikit/uidynamicitembehavior/angularvelocity(for:))

# angularVelocity(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the angular velocity for a specified dynamic item.

## Declaration

```swift
func angularVelocity(for item: any UIDynamicItem) -> CGFloat
```

## Parameters

- `item`: The dynamic item whose angular velocity you want to get.

<a id="return-value"></a>

## Return Value

The angular velocity of the specified dynamic item, in radians per second.

## See Also

### Configuring a dynamic item behavior

- [addAngularVelocity(\_:for:)](addangularvelocity%28__for_%29.md): Adds a specified angular velocity to a dynamic item.
- [addLinearVelocity(\_:for:)](addlinearvelocity%28__for_%29.md): Adds a specified linear velocity to a dynamic item.
- [allowsRotation](allowsrotation.md): Specifies whether rotation is allowed for the behavior’s dynamic items.
- [angularResistance](angularresistance.md): The angular resistance for the behavior’s dynamic items.
- [linearVelocity(for:)](linearvelocity%28for_%29.md): Returns the linear velocity for a specified dynamic item.
- [density](density.md): The relative mass density of the behavior’s dynamic items.
- [elasticity](elasticity.md): The amount of elasticity applied to collisions for the behavior’s dynamic items.
- [friction](friction.md): The linear resistance for the behavior’s dynamic items when two slide against each other.
- [resistance](resistance.md): The linear resistance for the behavior’s dynamic items, which reduces their linear velocity over time.
- [charge](charge.md): The charge associated with the item.
- [isAnchored](isanchored.md): A Boolean value indicating whether the item is anchored to its current position.

# angularVelocityForItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the angular velocity for a specified dynamic item.

## Declaration

```objectivec
- (CGFloat) angularVelocityForItem:(id<UIDynamicItem>) item;
```

## Parameters

- `item`: The dynamic item whose angular velocity you want to get.

<a id="return-value"></a>

## Return Value

The angular velocity of the specified dynamic item, in radians per second.

## See Also

### Configuring a dynamic item behavior

- [addAngularVelocity:forItem:](addangularvelocity%28__for_%29.md): Adds a specified angular velocity to a dynamic item.
- [addLinearVelocity:forItem:](addlinearvelocity%28__for_%29.md): Adds a specified linear velocity to a dynamic item.
- [allowsRotation](allowsrotation.md): Specifies whether rotation is allowed for the behavior’s dynamic items.
- [angularResistance](angularresistance.md): The angular resistance for the behavior’s dynamic items.
- [linearVelocityForItem:](linearvelocity%28for_%29.md): Returns the linear velocity for a specified dynamic item.
- [density](density.md): The relative mass density of the behavior’s dynamic items.
- [elasticity](elasticity.md): The amount of elasticity applied to collisions for the behavior’s dynamic items.
- [friction](friction.md): The linear resistance for the behavior’s dynamic items when two slide against each other.
- [resistance](resistance.md): The linear resistance for the behavior’s dynamic items, which reduces their linear velocity over time.
- [charge](charge.md): The charge associated with the item.
- [anchored](isanchored.md): A Boolean value indicating whether the item is anchored to its current position.
