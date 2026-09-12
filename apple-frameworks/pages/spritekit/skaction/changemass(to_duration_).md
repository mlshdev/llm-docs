> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/changemass(to:duration:)](https://developer.apple.com/documentation/spritekit/skaction/changemass(to:duration:))

# changeMass(to:duration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an action that changes the mass of a node’s physics body to a new value.

## Declaration

```swift
class func changeMass(to v: Float, duration: TimeInterval) -> SKAction
```

## Parameters

- `v`: The new mass of the physics body.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the physics body’s [mass](../skphysicsbody/mass.md) property animates from its current value to its new value.

This action is not reversible.

## See Also

### Animating Properties of a Node’s Physics Body

- [applyForce(\_:duration:)](applyforce%28__duration_%29.md): Creates an action that applies a force to the center of gravity of a node’s physics body.
- [applyTorque(\_:duration:)](applytorque%28__duration_%29.md): Creates an action that applies a torque to a node’s physics body.
- [applyForce(\_:at:duration:)](applyforce%28__at_duration_%29.md): Creates an action that applies a force to a specific point on a node’s physics body.
- [applyImpulse(\_:duration:)](applyimpulse%28__duration_%29.md): Creates an action that applies an impulse to the center of gravity of a physics body.
- [applyAngularImpulse(\_:duration:)](applyangularimpulse%28__duration_%29.md): Creates an action that applies an angular impulse to a node’s physics body.
- [applyImpulse(\_:at:duration:)](applyimpulse%28__at_duration_%29.md): Creates an action that applies an impulse to a specific point of a node’s physics body.
- [applyImpulse(\_:duration:)](applyimpulse%28__duration_%29.md): Creates an action that applies an impulse to the center of gravity of a physics body.
- [changeCharge(to:duration:)](changecharge%28to_duration_%29.md): Creates an action that changes the charge of a node’s physics body to a new value.
- [changeCharge(by:duration:)](changecharge%28by_duration_%29.md): Creates an action that changes the charge of a node’s physics body by a relative value.
- [changeMass(by:duration:)](changemass%28by_duration_%29.md): Creates an action that changes the mass of a node’s physics body by a relative value.
- [strength(to:duration:)](strength%28to_duration_%29.md): Creates an action that animates a change of a physics field’s strength.
- [strength(by:duration:)](strength%28by_duration_%29.md): Creates an action that animates a change of a physics field’s strength to a value relative to the existing value.
- [falloff(to:duration:)](falloff%28to_duration_%29.md): Creates an action that animates a change of a physics field’s falloff.
- [falloff(by:duration:)](falloff%28by_duration_%29.md): Creates an action that animates a change of a physics field’s falloff to a value relative to the existing value.

# changeMassTo:duration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an action that changes the mass of a node’s physics body to a new value.

## Declaration

```objectivec
+ (SKAction *) changeMassTo:(float) v duration:(NSTimeInterval) duration;
```

## Parameters

- `v`: The new mass of the physics body.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the physics body’s [mass](../skphysicsbody/mass.md) property animates from its current value to its new value.

This action is not reversible.

## See Also

### Animating Properties of a Node’s Physics Body

- [applyForce:duration:](applyforce%28__duration_%29.md): Creates an action that applies a force to the center of gravity of a node’s physics body.
- [applyTorque:duration:](applytorque%28__duration_%29.md): Creates an action that applies a torque to a node’s physics body.
- [applyForce:atPoint:duration:](applyforce%28__at_duration_%29.md): Creates an action that applies a force to a specific point on a node’s physics body.
- [applyImpulse:duration:](applyimpulse%28__duration_%29.md): Creates an action that applies an impulse to the center of gravity of a physics body.
- [applyAngularImpulse:duration:](applyangularimpulse%28__duration_%29.md): Creates an action that applies an angular impulse to a node’s physics body.
- [applyImpulse:atPoint:duration:](applyimpulse%28__at_duration_%29.md): Creates an action that applies an impulse to a specific point of a node’s physics body.
- [applyImpulse:duration:](applyimpulse%28__duration_%29.md): Creates an action that applies an impulse to the center of gravity of a physics body.
- [changeChargeTo:duration:](changecharge%28to_duration_%29.md): Creates an action that changes the charge of a node’s physics body to a new value.
- [changeChargeBy:duration:](changecharge%28by_duration_%29.md): Creates an action that changes the charge of a node’s physics body by a relative value.
- [changeMassBy:duration:](changemass%28by_duration_%29.md): Creates an action that changes the mass of a node’s physics body by a relative value.
- [strengthTo:duration:](strength%28to_duration_%29.md): Creates an action that animates a change of a physics field’s strength.
- [strengthBy:duration:](strength%28by_duration_%29.md): Creates an action that animates a change of a physics field’s strength to a value relative to the existing value.
- [falloffTo:duration:](falloff%28to_duration_%29.md): Creates an action that animates a change of a physics field’s falloff.
- [falloffBy:duration:](falloff%28by_duration_%29.md): Creates an action that animates a change of a physics field’s falloff to a value relative to the existing value.
