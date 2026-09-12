> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody/restitution](https://developer.apple.com/documentation/spritekit/skphysicsbody/restitution)

# restitution (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The bounciness of the physics body.

## Declaration

```swift
var restitution: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This property is used to determine how much energy the physics body loses when it bounces off another object. The property must be a value between `0.0` and `1.0`. The default value is `0.2`.

## See Also

### Defining a Physics Body’s Physical Properties

- [Configuring a Physics Body](../configuring-a-physics-body.md): Move a physics body, and make it collide with other objects, by setting its physical properties once or changing them dynamically.
- [mass](mass.md): The mass of the body, in kilograms.
- [density](density.md): The density of the object, in kilograms per square meter.
- [area](area.md): The area covered by the body.
- [friction](friction.md): The roughness of the surface of the physics body.
- [linearDamping](lineardamping.md): A property that reduces the body’s linear velocity.
- [angularDamping](angulardamping.md): A property that reduces the body’s rotational velocity.

# restitution (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The bounciness of the physics body.

## Declaration

```objectivec
@property (nonatomic) CGFloat restitution;
```

<a id="Discussion"></a>

## Discussion

This property is used to determine how much energy the physics body loses when it bounces off another object. The property must be a value between `0.0` and `1.0`. The default value is `0.2`.

## See Also

### Defining a Physics Body’s Physical Properties

- [Configuring a Physics Body](../configuring-a-physics-body.md): Move a physics body, and make it collide with other objects, by setting its physical properties once or changing them dynamically.
- [mass](mass.md): The mass of the body, in kilograms.
- [density](density.md): The density of the object, in kilograms per square meter.
- [area](area.md): The area covered by the body.
- [friction](friction.md): The roughness of the surface of the physics body.
- [linearDamping](lineardamping.md): A property that reduces the body’s linear velocity.
- [angularDamping](angulardamping.md): A property that reduces the body’s rotational velocity.
