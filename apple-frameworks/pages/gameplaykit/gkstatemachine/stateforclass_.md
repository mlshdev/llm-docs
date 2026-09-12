> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkstatemachine/stateforclass:](https://developer.apple.com/documentation/gameplaykit/gkstatemachine/stateforclass:)

# stateForClass:

**Interface language:** Objective-C

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the state object in the state machine corresponding to the specified class.

## Declaration

```objectivec
- (GKState *) stateForClass:(Class) stateClass;
```

## Parameters

- `stateClass`: A subclass of [GKState](../gkstate.md).

<a id="return-value"></a>

## Return Value

The instance of the specified class currently being used in the state machine.

<a id="Discussion"></a>

## Discussion

You build a state machine by creating a unique [GKState](../gkstate.md) subclass for each distinct state possible for the machine and then providing an instance of each class to one of the [GKStateMachine](../gkstatemachine.md) methods listed in Creating a State Machine. Call this method when you need to retrieve the state instance for a specific [GKState](../gkstate.md) subclass.

This method returns `nil` if the specified class is not a [GKState](../gkstate.md) subclass or does not have a corresponding instance in the state machine.

## See Also

### Working with States

- [currentState](currentstate.md): The state machine’s current state.
- [canEnterState:](canenterstate%28__%29.md): Returns a Boolean value indicating whether it is valid for the state machine to transition from its current state to a state of the specified class.
- [enterState:](enter%28__%29.md): Attempts to transition the state machine from its current state to a state of the specified class.
- [updateWithDeltaTime:](update%28deltatime_%29.md): Tells the current state object to perform per-frame updates.
