> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/applytorque(_:duration:)](https://developer.apple.com/documentation/spritekit/skaction/applytorque(_:duration:))

# applyTorque(\_:duration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an action that applies a torque to a node’s physics body.

## Declaration

```swift
class func applyTorque(_ torque: CGFloat, duration: TimeInterval) -> SKAction
```

## Parameters

- `torque`: The amount of torque, in Newton-meters.
- `duration`: The duration over which the torque is applied to the physics body.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the torque is applied continuously to the physics body for the duration of the action. This action generates an angular acceleration on the body without causing any linear acceleration.

This action is reversible; it applies an equal torque in the opposite direction.

## See Also

### Animating Properties of a Node’s Physics Body

- [applyForce(\_:duration:)](applyforce%28__duration_%29.md): Creates an action that applies a force to the center of gravity of a node’s physics body.
- [applyForce(\_:at:duration:)](applyforce%28__at_duration_%29.md): Creates an action that applies a force to a specific point on a node’s physics body.
- [applyImpulse(\_:duration:)](applyimpulse%28__duration_%29.md): Creates an action that applies an impulse to the center of gravity of a physics body.
- [applyAngularImpulse(\_:duration:)](applyangularimpulse%28__duration_%29.md): Creates an action that applies an angular impulse to a node’s physics body.
- [applyImpulse(\_:at:duration:)](applyimpulse%28__at_duration_%29.md): Creates an action that applies an impulse to a specific point of a node’s physics body.
- [applyImpulse(\_:duration:)](applyimpulse%28__duration_%29.md): Creates an action that applies an impulse to the center of gravity of a physics body.
- [changeCharge(to:duration:)](changecharge%28to_duration_%29.md): Creates an action that changes the charge of a node’s physics body to a new value.
- [changeCharge(by:duration:)](changecharge%28by_duration_%29.md): Creates an action that changes the charge of a node’s physics body by a relative value.
- [changeMass(to:duration:)](changemass%28to_duration_%29.md): Creates an action that changes the mass of a node’s physics body to a new value.
- [changeMass(by:duration:)](changemass%28by_duration_%29.md): Creates an action that changes the mass of a node’s physics body by a relative value.
- [strength(to:duration:)](strength%28to_duration_%29.md): Creates an action that animates a change of a physics field’s strength.
- [strength(by:duration:)](strength%28by_duration_%29.md): Creates an action that animates a change of a physics field’s strength to a value relative to the existing value.
- [falloff(to:duration:)](falloff%28to_duration_%29.md): Creates an action that animates a change of a physics field’s falloff.
- [falloff(by:duration:)](falloff%28by_duration_%29.md): Creates an action that animates a change of a physics field’s falloff to a value relative to the existing value.

# applyTorque:duration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an action that applies a torque to a node’s physics body.

## Declaration

```objectivec
+ (SKAction *) applyTorque:(CGFloat) torque duration:(NSTimeInterval) duration;
```

## Parameters

- `torque`: The amount of torque, in Newton-meters.
- `duration`: The duration over which the torque is applied to the physics body.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the torque is applied continuously to the physics body for the duration of the action. This action generates an angular acceleration on the body without causing any linear acceleration.

This action is reversible; it applies an equal torque in the opposite direction.

## See Also

### Animating Properties of a Node’s Physics Body

- [applyForce:duration:](applyforce%28__duration_%29.md): Creates an action that applies a force to the center of gravity of a node’s physics body.
- [applyForce:atPoint:duration:](applyforce%28__at_duration_%29.md): Creates an action that applies a force to a specific point on a node’s physics body.
- [applyImpulse:duration:](applyimpulse%28__duration_%29.md): Creates an action that applies an impulse to the center of gravity of a physics body.
- [applyAngularImpulse:duration:](applyangularimpulse%28__duration_%29.md): Creates an action that applies an angular impulse to a node’s physics body.
- [applyImpulse:atPoint:duration:](applyimpulse%28__at_duration_%29.md): Creates an action that applies an impulse to a specific point of a node’s physics body.
- [applyImpulse:duration:](applyimpulse%28__duration_%29.md): Creates an action that applies an impulse to the center of gravity of a physics body.
- [changeChargeTo:duration:](changecharge%28to_duration_%29.md): Creates an action that changes the charge of a node’s physics body to a new value.
- [changeChargeBy:duration:](changecharge%28by_duration_%29.md): Creates an action that changes the charge of a node’s physics body by a relative value.
- [changeMassTo:duration:](changemass%28to_duration_%29.md): Creates an action that changes the mass of a node’s physics body to a new value.
- [changeMassBy:duration:](changemass%28by_duration_%29.md): Creates an action that changes the mass of a node’s physics body by a relative value.
- [strengthTo:duration:](strength%28to_duration_%29.md): Creates an action that animates a change of a physics field’s strength.
- [strengthBy:duration:](strength%28by_duration_%29.md): Creates an action that animates a change of a physics field’s strength to a value relative to the existing value.
- [falloffTo:duration:](falloff%28to_duration_%29.md): Creates an action that animates a change of a physics field’s falloff.
- [falloffBy:duration:](falloff%28by_duration_%29.md): Creates an action that animates a change of a physics field’s falloff to a value relative to the existing value.
