> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicitembehavior/allowsrotation](https://developer.apple.com/documentation/uikit/uidynamicitembehavior/allowsrotation)

# allowsRotation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Specifies whether rotation is allowed for the behavior’s dynamic items.

## Declaration

```swift
var allowsRotation: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Default value is [true](https://developer.apple.com/documentation/swift/true). To disable rotation, set this property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring a dynamic item behavior

- [addAngularVelocity(\_:for:)](addangularvelocity%28__for_%29.md): Adds a specified angular velocity to a dynamic item.
- [addLinearVelocity(\_:for:)](addlinearvelocity%28__for_%29.md): Adds a specified linear velocity to a dynamic item.
- [angularResistance](angularresistance.md): The angular resistance for the behavior’s dynamic items.
- [angularVelocity(for:)](angularvelocity%28for_%29.md): Returns the angular velocity for a specified dynamic item.
- [linearVelocity(for:)](linearvelocity%28for_%29.md): Returns the linear velocity for a specified dynamic item.
- [density](density.md): The relative mass density of the behavior’s dynamic items.
- [elasticity](elasticity.md): The amount of elasticity applied to collisions for the behavior’s dynamic items.
- [friction](friction.md): The linear resistance for the behavior’s dynamic items when two slide against each other.
- [resistance](resistance.md): The linear resistance for the behavior’s dynamic items, which reduces their linear velocity over time.
- [charge](charge.md): The charge associated with the item.
- [isAnchored](isanchored.md): A Boolean value indicating whether the item is anchored to its current position.

# allowsRotation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Specifies whether rotation is allowed for the behavior’s dynamic items.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL allowsRotation;
```

<a id="Discussion"></a>

## Discussion

Default value is [true](https://developer.apple.com/documentation/swift/true). To disable rotation, set this property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring a dynamic item behavior

- [addAngularVelocity:forItem:](addangularvelocity%28__for_%29.md): Adds a specified angular velocity to a dynamic item.
- [addLinearVelocity:forItem:](addlinearvelocity%28__for_%29.md): Adds a specified linear velocity to a dynamic item.
- [angularResistance](angularresistance.md): The angular resistance for the behavior’s dynamic items.
- [angularVelocityForItem:](angularvelocity%28for_%29.md): Returns the angular velocity for a specified dynamic item.
- [linearVelocityForItem:](linearvelocity%28for_%29.md): Returns the linear velocity for a specified dynamic item.
- [density](density.md): The relative mass density of the behavior’s dynamic items.
- [elasticity](elasticity.md): The amount of elasticity applied to collisions for the behavior’s dynamic items.
- [friction](friction.md): The linear resistance for the behavior’s dynamic items when two slide against each other.
- [resistance](resistance.md): The linear resistance for the behavior’s dynamic items, which reduces their linear velocity over time.
- [charge](charge.md): The charge associated with the item.
- [anchored](isanchored.md): A Boolean value indicating whether the item is anchored to its current position.
