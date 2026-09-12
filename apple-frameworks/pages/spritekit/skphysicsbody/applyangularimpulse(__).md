> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody/applyangularimpulse(_:)](https://developer.apple.com/documentation/spritekit/skphysicsbody/applyangularimpulse(_:))

# applyAngularImpulse(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Applies an impulse that imparts angular momentum to an object.

## Declaration

```swift
func applyAngularImpulse(_ impulse: CGFloat)
```

## Parameters

- `impulse`: The magnitude of the impulse. The impulse is measured in Newton-seconds.

<a id="Discussion"></a>

## Discussion

This method affects the body’s angular velocity without changing the body’s linear velocity.

## See Also

### Applying Forces and Impulses to a Physics Body

- [Making Physics Bodies Move](../making-physics-bodies-move.md): Move a body using various physics properties, like velocity, gravity or impulses.
- [applyForce(\_:)](applyforce%28__%29.md): Applies a force to the center of gravity of a physics body.
- [applyTorque(\_:)](applytorque%28__%29.md): Applies torque to an object.
- [applyForce(\_:at:)](applyforce%28__at_%29.md): Applies a force to a specific point of a physics body.
- [applyImpulse(\_:)](applyimpulse%28__%29.md): Applies an impulse to the center of gravity of a physics body.
- [applyImpulse(\_:at:)](applyimpulse%28__at_%29.md): Applies an impulse to a specific point of a physics body.

# applyAngularImpulse: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Applies an impulse that imparts angular momentum to an object.

## Declaration

```objectivec
- (void) applyAngularImpulse:(CGFloat) impulse;
```

## Parameters

- `impulse`: The magnitude of the impulse. The impulse is measured in Newton-seconds.

<a id="Discussion"></a>

## Discussion

This method affects the body’s angular velocity without changing the body’s linear velocity.

## See Also

### Applying Forces and Impulses to a Physics Body

- [Making Physics Bodies Move](../making-physics-bodies-move.md): Move a body using various physics properties, like velocity, gravity or impulses.
- [applyForce:](applyforce%28__%29.md): Applies a force to the center of gravity of a physics body.
- [applyTorque:](applytorque%28__%29.md): Applies torque to an object.
- [applyForce:atPoint:](applyforce%28__at_%29.md): Applies a force to a specific point of a physics body.
- [applyImpulse:](applyimpulse%28__%29.md): Applies an impulse to the center of gravity of a physics body.
- [applyImpulse:atPoint:](applyimpulse%28__at_%29.md): Applies an impulse to a specific point of a physics body.
