> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkagent/maxspeed](https://developer.apple.com/documentation/gameplaykit/gkagent/maxspeed)

# maxSpeed (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The agent’s maximum forward speed, in units per second.

## Declaration

```swift
var maxSpeed: Float { get set }
```

<a id="Discussion"></a>

## Discussion

When an agent evaluates the goals listed in its [behavior](behavior.md) property, the result is an acceleration vector that changes the velocity of the agent. If the magnitude of the new velocity is greater than this value, the velocity is reduced to match this value.

## See Also

### Related Documentation

- [speed](speed.md): The agent’s current forward speed, in units per second.

### Constraining an Agent’s Movement

- [mass](mass.md): The resistance of the agent to changes in speed or direction.
- [maxAcceleration](maxacceleration.md): The upper limit to changes in the agent’s speed or direction.
- [radius](radius.md): The agent’s radius.

# maxSpeed (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The agent’s maximum forward speed, in units per second.

## Declaration

```objectivec
@property (nonatomic) float maxSpeed;
```

<a id="Discussion"></a>

## Discussion

When an agent evaluates the goals listed in its [behavior](behavior.md) property, the result is an acceleration vector that changes the velocity of the agent. If the magnitude of the new velocity is greater than this value, the velocity is reduced to match this value.

## See Also

### Related Documentation

- [speed](speed.md): The agent’s current forward speed, in units per second.

### Constraining an Agent’s Movement

- [mass](mass.md): The resistance of the agent to changes in speed or direction.
- [maxAcceleration](maxacceleration.md): The upper limit to changes in the agent’s speed or direction.
- [radius](radius.md): The agent’s radius.
