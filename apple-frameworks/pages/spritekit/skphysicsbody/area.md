> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody/area](https://developer.apple.com/documentation/spritekit/skphysicsbody/area)

# area (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The area covered by the body.

## Declaration

```swift
var area: CGFloat { get }
```

## Mentioned In

- [Configuring a Physics Body](../configuring-a-physics-body.md)

<a id="Discussion"></a>

## Discussion

This property is used in conjunction with the [density](density.md) property to calculate the body’s mass.

The value returned for the area is measured in meters: if you need to convert it into points — as used by SpriteKit — multiply the values by 150². The following listing shows how to calculate the area of a box which is ten points square.

```objc
let bodySize = CGSize(width: 10, height: 10)
let physicsBody = SKPhysicsBody(rectangleOf: bodySize)
let areaInPoints = physicsBody.area * pow(150, 2) // areaInPoints = 100
```

## See Also

### Defining a Physics Body’s Physical Properties

- [Configuring a Physics Body](../configuring-a-physics-body.md): Move a physics body, and make it collide with other objects, by setting its physical properties once or changing them dynamically.
- [mass](mass.md): The mass of the body, in kilograms.
- [density](density.md): The density of the object, in kilograms per square meter.
- [friction](friction.md): The roughness of the surface of the physics body.
- [restitution](restitution.md): The bounciness of the physics body.
- [linearDamping](lineardamping.md): A property that reduces the body’s linear velocity.
- [angularDamping](angulardamping.md): A property that reduces the body’s rotational velocity.

# area (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The area covered by the body.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat area;
```

## Mentioned In

- [Configuring a Physics Body](../configuring-a-physics-body.md)

<a id="Discussion"></a>

## Discussion

This property is used in conjunction with the [density](density.md) property to calculate the body’s mass.

The value returned for the area is measured in meters: if you need to convert it into points — as used by SpriteKit — multiply the values by 150². The following listing shows how to calculate the area of a box which is ten points square.

```objc
let bodySize = CGSize(width: 10, height: 10)
let physicsBody = SKPhysicsBody(rectangleOf: bodySize)
let areaInPoints = physicsBody.area * pow(150, 2) // areaInPoints = 100
```

## See Also

### Defining a Physics Body’s Physical Properties

- [Configuring a Physics Body](../configuring-a-physics-body.md): Move a physics body, and make it collide with other objects, by setting its physical properties once or changing them dynamically.
- [mass](mass.md): The mass of the body, in kilograms.
- [density](density.md): The density of the object, in kilograms per square meter.
- [friction](friction.md): The roughness of the surface of the physics body.
- [restitution](restitution.md): The bounciness of the physics body.
- [linearDamping](lineardamping.md): A property that reduces the body’s linear velocity.
- [angularDamping](angulardamping.md): A property that reduces the body’s rotational velocity.
