> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicitembehavior/density](https://developer.apple.com/documentation/uikit/uidynamicitembehavior/density)

# density (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The relative mass density of the behavior’s dynamic items.

## Declaration

```swift
var density: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

A dynamic item’s relative density, along with its size, determines its effective mass when it participates in UIKit Dynamics behaviors—including friction, collisions, pushes, and so on. For example, say you have two dynamic items with the same density but different sizes: item one is `100 x 100` points and item two is `100 x 200` points. In this example, item two has twice the effective mass of item one. In an elastic collision, these items exhibit a natural conservation of momentum according to their relative masses.

A `100 x 100` point dynamic item with a density of `1.0`, to which you apply a force (via a push behavior) of magnitude `1.0`, accelerates at `100` points per second².

## See Also

### Configuring a dynamic item behavior

- [addAngularVelocity(\_:for:)](addangularvelocity%28__for_%29.md): Adds a specified angular velocity to a dynamic item.
- [addLinearVelocity(\_:for:)](addlinearvelocity%28__for_%29.md): Adds a specified linear velocity to a dynamic item.
- [allowsRotation](allowsrotation.md): Specifies whether rotation is allowed for the behavior’s dynamic items.
- [angularResistance](angularresistance.md): The angular resistance for the behavior’s dynamic items.
- [angularVelocity(for:)](angularvelocity%28for_%29.md): Returns the angular velocity for a specified dynamic item.
- [linearVelocity(for:)](linearvelocity%28for_%29.md): Returns the linear velocity for a specified dynamic item.
- [elasticity](elasticity.md): The amount of elasticity applied to collisions for the behavior’s dynamic items.
- [friction](friction.md): The linear resistance for the behavior’s dynamic items when two slide against each other.
- [resistance](resistance.md): The linear resistance for the behavior’s dynamic items, which reduces their linear velocity over time.
- [charge](charge.md): The charge associated with the item.
- [isAnchored](isanchored.md): A Boolean value indicating whether the item is anchored to its current position.

# density (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The relative mass density of the behavior’s dynamic items.

## Declaration

```objectivec
@property (nonatomic, readwrite) CGFloat density;
```

<a id="Discussion"></a>

## Discussion

A dynamic item’s relative density, along with its size, determines its effective mass when it participates in UIKit Dynamics behaviors—including friction, collisions, pushes, and so on. For example, say you have two dynamic items with the same density but different sizes: item one is `100 x 100` points and item two is `100 x 200` points. In this example, item two has twice the effective mass of item one. In an elastic collision, these items exhibit a natural conservation of momentum according to their relative masses.

A `100 x 100` point dynamic item with a density of `1.0`, to which you apply a force (via a push behavior) of magnitude `1.0`, accelerates at `100` points per second².

## See Also

### Configuring a dynamic item behavior

- [addAngularVelocity:forItem:](addangularvelocity%28__for_%29.md): Adds a specified angular velocity to a dynamic item.
- [addLinearVelocity:forItem:](addlinearvelocity%28__for_%29.md): Adds a specified linear velocity to a dynamic item.
- [allowsRotation](allowsrotation.md): Specifies whether rotation is allowed for the behavior’s dynamic items.
- [angularResistance](angularresistance.md): The angular resistance for the behavior’s dynamic items.
- [angularVelocityForItem:](angularvelocity%28for_%29.md): Returns the angular velocity for a specified dynamic item.
- [linearVelocityForItem:](linearvelocity%28for_%29.md): Returns the linear velocity for a specified dynamic item.
- [elasticity](elasticity.md): The amount of elasticity applied to collisions for the behavior’s dynamic items.
- [friction](friction.md): The linear resistance for the behavior’s dynamic items when two slide against each other.
- [resistance](resistance.md): The linear resistance for the behavior’s dynamic items, which reduces their linear velocity over time.
- [charge](charge.md): The charge associated with the item.
- [anchored](isanchored.md): A Boolean value indicating whether the item is anchored to its current position.
