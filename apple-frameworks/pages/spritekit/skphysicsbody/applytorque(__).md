> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody/applytorque(_:)](https://developer.apple.com/documentation/spritekit/skphysicsbody/applytorque(_:))

# applyTorque(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Applies torque to an object.

## Declaration

```swift
func applyTorque(_ torque: CGFloat)
```

## Parameters

- `torque`: The amount of torque, in Newton-meters.

<a id="Discussion"></a>

## Discussion

This method generates an angular acceleration on the body without causing any linear acceleration. The force is applied for a single simulation step (one frame).

## See Also

### Applying Forces and Impulses to a Physics Body

- [Making Physics Bodies Move](../making-physics-bodies-move.md): Move a body using various physics properties, like velocity, gravity or impulses.
- [applyForce(\_:)](applyforce%28__%29.md): Applies a force to the center of gravity of a physics body.
- [applyForce(\_:at:)](applyforce%28__at_%29.md): Applies a force to a specific point of a physics body.
- [applyImpulse(\_:)](applyimpulse%28__%29.md): Applies an impulse to the center of gravity of a physics body.
- [applyAngularImpulse(\_:)](applyangularimpulse%28__%29.md): Applies an impulse that imparts angular momentum to an object.
- [applyImpulse(\_:at:)](applyimpulse%28__at_%29.md): Applies an impulse to a specific point of a physics body.

# applyTorque: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Applies torque to an object.

## Declaration

```objectivec
- (void) applyTorque:(CGFloat) torque;
```

## Parameters

- `torque`: The amount of torque, in Newton-meters.

<a id="Discussion"></a>

## Discussion

This method generates an angular acceleration on the body without causing any linear acceleration. The force is applied for a single simulation step (one frame).

## See Also

### Applying Forces and Impulses to a Physics Body

- [Making Physics Bodies Move](../making-physics-bodies-move.md): Move a body using various physics properties, like velocity, gravity or impulses.
- [applyForce:](applyforce%28__%29.md): Applies a force to the center of gravity of a physics body.
- [applyForce:atPoint:](applyforce%28__at_%29.md): Applies a force to a specific point of a physics body.
- [applyImpulse:](applyimpulse%28__%29.md): Applies an impulse to the center of gravity of a physics body.
- [applyAngularImpulse:](applyangularimpulse%28__%29.md): Applies an impulse that imparts angular momentum to an object.
- [applyImpulse:atPoint:](applyimpulse%28__at_%29.md): Applies an impulse to a specific point of a physics body.
