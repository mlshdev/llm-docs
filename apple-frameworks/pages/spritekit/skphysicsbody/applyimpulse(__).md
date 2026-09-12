> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody/applyimpulse(_:)](https://developer.apple.com/documentation/spritekit/skphysicsbody/applyimpulse(_:))

# applyImpulse(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Applies an impulse to the center of gravity of a physics body.

## Declaration

```swift
func applyImpulse(_ impulse: CGVector)
```

## Parameters

- `impulse`: A vector that describes how much momentum was imparted in each dimension. The impulse is measured in Newton-seconds.

<a id="Discussion"></a>

## Discussion

This method affects the body’s linear velocity without changing the body’s angular velocity.

## See Also

### Applying Forces and Impulses to a Physics Body

- [Making Physics Bodies Move](../making-physics-bodies-move.md): Move a body using various physics properties, like velocity, gravity or impulses.
- [applyForce(\_:)](applyforce%28__%29.md): Applies a force to the center of gravity of a physics body.
- [applyTorque(\_:)](applytorque%28__%29.md): Applies torque to an object.
- [applyForce(\_:at:)](applyforce%28__at_%29.md): Applies a force to a specific point of a physics body.
- [applyAngularImpulse(\_:)](applyangularimpulse%28__%29.md): Applies an impulse that imparts angular momentum to an object.
- [applyImpulse(\_:at:)](applyimpulse%28__at_%29.md): Applies an impulse to a specific point of a physics body.

# applyImpulse: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Applies an impulse to the center of gravity of a physics body.

## Declaration

```objectivec
- (void) applyImpulse:(CGVector) impulse;
```

## Parameters

- `impulse`: A vector that describes how much momentum was imparted in each dimension. The impulse is measured in Newton-seconds.

<a id="Discussion"></a>

## Discussion

This method affects the body’s linear velocity without changing the body’s angular velocity.

## See Also

### Applying Forces and Impulses to a Physics Body

- [Making Physics Bodies Move](../making-physics-bodies-move.md): Move a body using various physics properties, like velocity, gravity or impulses.
- [applyForce:](applyforce%28__%29.md): Applies a force to the center of gravity of a physics body.
- [applyTorque:](applytorque%28__%29.md): Applies torque to an object.
- [applyForce:atPoint:](applyforce%28__at_%29.md): Applies a force to a specific point of a physics body.
- [applyAngularImpulse:](applyangularimpulse%28__%29.md): Applies an impulse that imparts angular momentum to an object.
- [applyImpulse:atPoint:](applyimpulse%28__at_%29.md): Applies an impulse to a specific point of a physics body.
