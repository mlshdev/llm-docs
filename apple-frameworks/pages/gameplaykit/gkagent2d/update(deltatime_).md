> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkagent2d/update(deltatime:)](https://developer.apple.com/documentation/gameplaykit/gkagent2d/update(deltatime:))

# update(deltaTime:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Causes the agent to evaluate its goals and update its position, rotation, and velocity accordingly.

## Declaration

```swift
func update(deltaTime seconds: TimeInterval)
```

<a id="Discussion"></a>

## Discussion

You call this method directly on an individual agent, or on all the agents in your game through a [GKComponentSystem](../gkcomponentsystem.md) object, whenever you want to run a step of the agent simulation. Typically, a game updates its agent simulation whenever it prepares to draw a new frame—for example, in the [update(\_:)](../../spritekit/skscene/update%28__%29.md) method of a SpriteKit [SKScene](../../spritekit/skscene.md) object.

## See Also

### Running the Agent Simulation

- [velocity](velocity.md): The current velocity of the agent in 2D space.

# updateWithDeltaTime: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Causes the agent to evaluate its goals and update its position, rotation, and velocity accordingly.

## Declaration

```objectivec
- (void) updateWithDeltaTime:(NSTimeInterval) seconds;
```

<a id="Discussion"></a>

## Discussion

You call this method directly on an individual agent, or on all the agents in your game through a [GKComponentSystem](../gkcomponentsystem.md) object, whenever you want to run a step of the agent simulation. Typically, a game updates its agent simulation whenever it prepares to draw a new frame—for example, in the [update:](../../spritekit/skscene/update%28__%29.md) method of a SpriteKit [SKScene](../../spritekit/skscene.md) object.

## See Also

### Running the Agent Simulation

- [velocity](velocity.md): The current velocity of the agent in 2D space.
