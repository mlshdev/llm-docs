> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody/angularvelocity](https://developer.apple.com/documentation/spritekit/skphysicsbody/angularvelocity)

# angularVelocity (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The physics body’s angular speed.

## Declaration

```swift
var angularVelocity: CGFloat { get set }
```

## Mentioned In

- [Making Physics Bodies Move](../making-physics-bodies-move.md)

<a id="Discussion"></a>

## Discussion

The angular velocity is a pseudo vector around an axis vector of `(0.0,0.0,1.0)` measured in radians per second.

## See Also

### Inspecting a Physics Body’s Position and Velocity

- [velocity](velocity.md): The physics body’s velocity vector, measured in meters per second.
- [isResting](isresting.md): A Boolean property that indicates whether the object is at rest within the physics simulation.

# angularVelocity (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The physics body’s angular speed.

## Declaration

```objectivec
@property (nonatomic) CGFloat angularVelocity;
```

## Mentioned In

- [Making Physics Bodies Move](../making-physics-bodies-move.md)

<a id="Discussion"></a>

## Discussion

The angular velocity is a pseudo vector around an axis vector of `(0.0,0.0,1.0)` measured in radians per second.

## See Also

### Inspecting a Physics Body’s Position and Velocity

- [velocity](velocity.md): The physics body’s velocity vector, measured in meters per second.
- [resting](isresting.md): A Boolean property that indicates whether the object is at rest within the physics simulation.
