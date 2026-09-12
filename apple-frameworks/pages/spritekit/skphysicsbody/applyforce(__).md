> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody/applyforce(_:)](https://developer.apple.com/documentation/spritekit/skphysicsbody/applyforce(_:))

# applyForce(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Applies a force to the center of gravity of a physics body.

## Declaration

```swift
func applyForce(_ force: CGVector)
```

## Parameters

- `force`: A vector that describes how much force was applied in each dimension. The force is measured in Newtons.

<a id="Discussion"></a>

## Discussion

This method accelerates the body without imparting any angular acceleration to it. The acceleration is applied for a single simulation step (one frame).

## See Also

### Applying Forces and Impulses to a Physics Body

- [Making Physics Bodies Move](../making-physics-bodies-move.md): Move a body using various physics properties, like velocity, gravity or impulses.
- [applyTorque(\_:)](applytorque%28__%29.md): Applies torque to an object.
- [applyForce(\_:at:)](applyforce%28__at_%29.md): Applies a force to a specific point of a physics body.
- [applyImpulse(\_:)](applyimpulse%28__%29.md): Applies an impulse to the center of gravity of a physics body.
- [applyAngularImpulse(\_:)](applyangularimpulse%28__%29.md): Applies an impulse that imparts angular momentum to an object.
- [applyImpulse(\_:at:)](applyimpulse%28__at_%29.md): Applies an impulse to a specific point of a physics body.

# applyForce: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Applies a force to the center of gravity of a physics body.

## Declaration

```objectivec
- (void) applyForce:(CGVector) force;
```

## Parameters

- `force`: A vector that describes how much force was applied in each dimension. The force is measured in Newtons.

<a id="Discussion"></a>

## Discussion

This method accelerates the body without imparting any angular acceleration to it. The acceleration is applied for a single simulation step (one frame).

## See Also

### Applying Forces and Impulses to a Physics Body

- [Making Physics Bodies Move](../making-physics-bodies-move.md): Move a body using various physics properties, like velocity, gravity or impulses.
- [applyTorque:](applytorque%28__%29.md): Applies torque to an object.
- [applyForce:atPoint:](applyforce%28__at_%29.md): Applies a force to a specific point of a physics body.
- [applyImpulse:](applyimpulse%28__%29.md): Applies an impulse to the center of gravity of a physics body.
- [applyAngularImpulse:](applyangularimpulse%28__%29.md): Applies an impulse that imparts angular momentum to an object.
- [applyImpulse:atPoint:](applyimpulse%28__at_%29.md): Applies an impulse to a specific point of a physics body.
