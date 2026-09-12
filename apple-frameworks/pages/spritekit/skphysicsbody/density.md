> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody/density](https://developer.apple.com/documentation/spritekit/skphysicsbody/density)

# density (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The density of the object, in kilograms per square meter.

## Declaration

```swift
var density: CGFloat { get set }
```

## Mentioned In

- [Configuring a Physics Body](../configuring-a-physics-body.md)

<a id="Discussion"></a>

## Discussion

The actual unit is arbitrary as long as relative masses of objects are consistent throughout the game.

The [mass](mass.md) and [density](density.md) properties are interrelated. When you change the value of either property, the other property’s value is automatically recalculated to be consistent.

The default value is `1.0`.

## See Also

### Defining a Physics Body’s Physical Properties

- [Configuring a Physics Body](../configuring-a-physics-body.md): Move a physics body, and make it collide with other objects, by setting its physical properties once or changing them dynamically.
- [mass](mass.md): The mass of the body, in kilograms.
- [area](area.md): The area covered by the body.
- [friction](friction.md): The roughness of the surface of the physics body.
- [restitution](restitution.md): The bounciness of the physics body.
- [linearDamping](lineardamping.md): A property that reduces the body’s linear velocity.
- [angularDamping](angulardamping.md): A property that reduces the body’s rotational velocity.

# density (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The density of the object, in kilograms per square meter.

## Declaration

```objectivec
@property (nonatomic) CGFloat density;
```

## Mentioned In

- [Configuring a Physics Body](../configuring-a-physics-body.md)

<a id="Discussion"></a>

## Discussion

The actual unit is arbitrary as long as relative masses of objects are consistent throughout the game.

The [mass](mass.md) and [density](density.md) properties are interrelated. When you change the value of either property, the other property’s value is automatically recalculated to be consistent.

The default value is `1.0`.

## See Also

### Defining a Physics Body’s Physical Properties

- [Configuring a Physics Body](../configuring-a-physics-body.md): Move a physics body, and make it collide with other objects, by setting its physical properties once or changing them dynamically.
- [mass](mass.md): The mass of the body, in kilograms.
- [area](area.md): The area covered by the body.
- [friction](friction.md): The roughness of the surface of the physics body.
- [restitution](restitution.md): The bounciness of the physics body.
- [linearDamping](lineardamping.md): A property that reduces the body’s linear velocity.
- [angularDamping](angulardamping.md): A property that reduces the body’s rotational velocity.
