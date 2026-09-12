> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkagent2d/rotation](https://developer.apple.com/documentation/gameplaykit/gkagent2d/rotation)

# rotation (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The rotation of the agent around the z-axis.

## Declaration

```swift
var rotation: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The agent updates its own position, rotation, and velocity according to its goals when you call its [update(deltaTime:)](update%28deltatime_%29.md) method.

However, you can still directly change the rotation of an agent. Do this when you want to move a static agent (that is, one with no goals) or override an agent’s behavior as a direct result of user input.

## See Also

### Managing an Agent’s Position and Orientation

- [position](position.md): The current position of the agent in 2D space.

# rotation (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The rotation of the agent around the z-axis.

## Declaration

```objectivec
@property (nonatomic) float rotation;
```

<a id="Discussion"></a>

## Discussion

The agent updates its own position, rotation, and velocity according to its goals when you call its [updateWithDeltaTime:](update%28deltatime_%29.md) method.

However, you can still directly change the rotation of an agent. Do this when you want to move a static agent (that is, one with no goals) or override an agent’s behavior as a direct result of user input.

## See Also

### Managing an Agent’s Position and Orientation

- [position](position.md): The current position of the agent in 2D space.
