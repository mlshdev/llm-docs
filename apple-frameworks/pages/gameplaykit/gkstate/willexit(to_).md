> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkstate/willexit(to:)](https://developer.apple.com/documentation/gameplaykit/gkstate/willexit(to:))

# willExit(to:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Performs custom actions when a state machine transitions out of this state.

## Declaration

```swift
func willExit(to nextState: GKState)
```

## Parameters

- `nextState`: The state the state machine will transition into to exit this state.

<a id="Discussion"></a>

## Discussion

Override this method when the actions you want to perform in response to a state change should be associated with state being exited, or when those actions depend on which state a state machine will enter as a result of the transition.

For example, in a state machine that manages animations for a 3D character, with Standing, Running, and Jumping states, entering the Jumping state might apply an animation to the character (with a smooth transition from the character’s current pose), and exiting the Jumping state could remove that animation (again with a smooth transition).

Or, in a game where each enemy character has Chase, Flee, Dead, and Respawn states, exiting the Flee state when the player attacks an enemy might increase the player’s score, but exiting the Flee state because a timer has expired might not.

## See Also

### Handling State Transitions and Updates

- [didEnter(from:)](didenter%28from_%29.md): Performs custom actions when a state machine transitions into this state.
- [update(deltaTime:)](update%28deltatime_%29.md): Performs custom actions when a state machine updates while in this state.

# willExitWithNextState: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Performs custom actions when a state machine transitions out of this state.

## Declaration

```objectivec
- (void) willExitWithNextState:(GKState *) nextState;
```

## Parameters

- `nextState`: The state the state machine will transition into to exit this state.

<a id="Discussion"></a>

## Discussion

Override this method when the actions you want to perform in response to a state change should be associated with state being exited, or when those actions depend on which state a state machine will enter as a result of the transition.

For example, in a state machine that manages animations for a 3D character, with Standing, Running, and Jumping states, entering the Jumping state might apply an animation to the character (with a smooth transition from the character’s current pose), and exiting the Jumping state could remove that animation (again with a smooth transition).

Or, in a game where each enemy character has Chase, Flee, Dead, and Respawn states, exiting the Flee state when the player attacks an enemy might increase the player’s score, but exiting the Flee state because a timer has expired might not.

## See Also

### Handling State Transitions and Updates

- [didEnterWithPreviousState:](didenter%28from_%29.md): Performs custom actions when a state machine transitions into this state.
- [updateWithDeltaTime:](update%28deltatime_%29.md): Performs custom actions when a state machine updates while in this state.
