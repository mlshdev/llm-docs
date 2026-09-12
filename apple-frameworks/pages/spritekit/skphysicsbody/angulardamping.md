> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody/angulardamping](https://developer.apple.com/documentation/spritekit/skphysicsbody/angulardamping)

# angularDamping (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A property that reduces the body’s rotational velocity.

## Declaration

```swift
var angularDamping: CGFloat { get set }
```

## Mentioned In

- [Pinning and Rotating Physics Bodies](../pinning-and-rotating-physics-bodies.md)

<a id="Discussion"></a>

## Discussion

This property is used to simulate fluid or air friction forces on the body. The property must be a value between `0.0` and `1.0`. The default value is `0.1`. If the value is `0.0`, no angular damping is applied to the object.

## See Also

### Defining a Physics Body’s Physical Properties

- [Configuring a Physics Body](../configuring-a-physics-body.md): Move a physics body, and make it collide with other objects, by setting its physical properties once or changing them dynamically.
- [mass](mass.md): The mass of the body, in kilograms.
- [density](density.md): The density of the object, in kilograms per square meter.
- [area](area.md): The area covered by the body.
- [friction](friction.md): The roughness of the surface of the physics body.
- [restitution](restitution.md): The bounciness of the physics body.
- [linearDamping](lineardamping.md): A property that reduces the body’s linear velocity.

# angularDamping (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A property that reduces the body’s rotational velocity.

## Declaration

```objectivec
@property (nonatomic, assign) CGFloat angularDamping;
```

## Mentioned In

- [Pinning and Rotating Physics Bodies](../pinning-and-rotating-physics-bodies.md)

<a id="Discussion"></a>

## Discussion

This property is used to simulate fluid or air friction forces on the body. The property must be a value between `0.0` and `1.0`. The default value is `0.1`. If the value is `0.0`, no angular damping is applied to the object.

## See Also

### Defining a Physics Body’s Physical Properties

- [Configuring a Physics Body](../configuring-a-physics-body.md): Move a physics body, and make it collide with other objects, by setting its physical properties once or changing them dynamically.
- [mass](mass.md): The mass of the body, in kilograms.
- [density](density.md): The density of the object, in kilograms per square meter.
- [area](area.md): The area covered by the body.
- [friction](friction.md): The roughness of the surface of the physics body.
- [restitution](restitution.md): The bounciness of the physics body.
- [linearDamping](lineardamping.md): A property that reduces the body’s linear velocity.
