> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkagent/radius](https://developer.apple.com/documentation/gameplaykit/gkagent/radius)

# radius (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The agent’s radius.

## Declaration

```swift
var radius: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Goals that involve an agent’s position relative to other agents make use of this property. For example, a goal created with the goalToAvoidAgents:timeBeforeCollisionToAvoid: method will attempt to move an agent such that its radius does not overlap with those of the other specified agents.

> **Note**

>  The units of radius are arbitrary; you choose how to map agent positions and sizes into your game scene. It often makes sense to use the same coordinate system as your game engine—for example, when using agents in a SpriteKit-based game, you’d typically express radius in screen points.

## See Also

### Constraining an Agent’s Movement

- [mass](mass.md): The resistance of the agent to changes in speed or direction.
- [maxAcceleration](maxacceleration.md): The upper limit to changes in the agent’s speed or direction.
- [maxSpeed](maxspeed.md): The agent’s maximum forward speed, in units per second.

# radius (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The agent’s radius.

## Declaration

```objectivec
@property (nonatomic) float radius;
```

<a id="Discussion"></a>

## Discussion

Goals that involve an agent’s position relative to other agents make use of this property. For example, a goal created with the goalToAvoidAgents:timeBeforeCollisionToAvoid: method will attempt to move an agent such that its radius does not overlap with those of the other specified agents.

> **Note**

>  The units of radius are arbitrary; you choose how to map agent positions and sizes into your game scene. It often makes sense to use the same coordinate system as your game engine—for example, when using agents in a SpriteKit-based game, you’d typically express radius in screen points.

## See Also

### Constraining an Agent’s Movement

- [mass](mass.md): The resistance of the agent to changes in speed or direction.
- [maxAcceleration](maxacceleration.md): The upper limit to changes in the agent’s speed or direction.
- [maxSpeed](maxspeed.md): The agent’s maximum forward speed, in units per second.
