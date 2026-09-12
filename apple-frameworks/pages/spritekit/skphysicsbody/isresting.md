> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody/isresting](https://developer.apple.com/documentation/spritekit/skphysicsbody/isresting)

# isResting (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean property that indicates whether the object is at rest within the physics simulation.

## Declaration

```swift
var isResting: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property is automatically set to [true](https://developer.apple.com/documentation/swift/true) by the physics simulation when it determines that the body is at rest. This means that the body is at rest on another body in the system. Resting bodies do not participate in the physics simulation until an impulse is applied to the object or another object collides with it. This improves the performance of the physics simulation. If all bodies in the world are resting, the entire simulation is at rest, reducing the number of calculations that are performed by the physics world.

## See Also

### Inspecting a Physics Body’s Position and Velocity

- [velocity](velocity.md): The physics body’s velocity vector, measured in meters per second.
- [angularVelocity](angularvelocity.md): The physics body’s angular speed.

# resting (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean property that indicates whether the object is at rest within the physics simulation.

## Declaration

```objectivec
@property (nonatomic, getter=isResting) BOOL resting;
```

<a id="Discussion"></a>

## Discussion

This property is automatically set to [true](https://developer.apple.com/documentation/swift/true) by the physics simulation when it determines that the body is at rest. This means that the body is at rest on another body in the system. Resting bodies do not participate in the physics simulation until an impulse is applied to the object or another object collides with it. This improves the performance of the physics simulation. If all bodies in the world are resting, the entire simulation is at rest, reducing the number of calculations that are performed by the physics world.

## See Also

### Inspecting a Physics Body’s Position and Velocity

- [velocity](velocity.md): The physics body’s velocity vector, measured in meters per second.
- [angularVelocity](angularvelocity.md): The physics body’s angular speed.
