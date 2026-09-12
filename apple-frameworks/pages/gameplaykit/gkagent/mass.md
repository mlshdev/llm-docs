> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkagent/mass](https://developer.apple.com/documentation/gameplaykit/gkagent/mass)

# mass (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The resistance of the agent to changes in speed or direction.

## Declaration

```swift
var mass: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The higher the value of this property, the slower the agent will be to respond to goals that change its speed or direction, and vice versa.

> **Note**

>  The simulation responsible for agent movement is based on realistic physical behaviors; however, this simulation is *not* connected to the physics subsystems in SpriteKit, SceneKit, or any other graphics engine. For example, setting the [mass](mass.md) property of an agent does not affect the collision behavior of any SpriteKit physics bodies.

## See Also

### Constraining an Agent’s Movement

- [maxAcceleration](maxacceleration.md): The upper limit to changes in the agent’s speed or direction.
- [maxSpeed](maxspeed.md): The agent’s maximum forward speed, in units per second.
- [radius](radius.md): The agent’s radius.

# mass (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The resistance of the agent to changes in speed or direction.

## Declaration

```objectivec
@property (nonatomic) float mass;
```

<a id="Discussion"></a>

## Discussion

The higher the value of this property, the slower the agent will be to respond to goals that change its speed or direction, and vice versa.

> **Note**

>  The simulation responsible for agent movement is based on realistic physical behaviors; however, this simulation is *not* connected to the physics subsystems in SpriteKit, SceneKit, or any other graphics engine. For example, setting the [mass](mass.md) property of an agent does not affect the collision behavior of any SpriteKit physics bodies.

## See Also

### Constraining an Agent’s Movement

- [maxAcceleration](maxacceleration.md): The upper limit to changes in the agent’s speed or direction.
- [maxSpeed](maxspeed.md): The agent’s maximum forward speed, in units per second.
- [radius](radius.md): The agent’s radius.
