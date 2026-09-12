> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkstatemachine/enter(_:)](https://developer.apple.com/documentation/gameplaykit/gkstatemachine/enter(_:))

# enter(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Attempts to transition the state machine from its current state to a state of the specified class.

## Declaration

```swift
func enter(_ stateClass: AnyClass) -> Bool
```

## Parameters

- `stateClass`: The class of state into which to attempt a transition.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the transition was successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You build a state machine by creating a unique [GKState](../gkstate.md) subclass for each distinct state possible for the machine. The [isValidNextState(\_:)](../gkstate/isvalidnextstate%28__%29.md) method of each state object determines which other states a state machine is allowed to transition into from that state. Calling this method first tests whether a transition from the current state to the specified state is valid; if not, this method returns [false](https://developer.apple.com/documentation/swift/false).

If a transition is allowed, the state machine sends the [willExit(to:)](../gkstate/willexit%28to_%29.md) message to its current state object. Then, the new state object replaces the value of the [currentState](currentstate.md) property. Finally, the state machine sends the  [didEnter(from:)](../gkstate/didenter%28from_%29.md) message to the new current state object, and this method returns [true](https://developer.apple.com/documentation/swift/true).

A newly created state machine’s [currentState](currentstate.md) property is `nil`—to choose and enter an initial state, use the [enter(\_:)](enter%28__%29.md) method. In this case, the [enter(\_:)](enter%28__%29.md) call always succeeds.

## See Also

### Working with States

- [currentState](currentstate.md): The state machine’s current state.
- [canEnterState(\_:)](canenterstate%28__%29.md): Returns a Boolean value indicating whether it is valid for the state machine to transition from its current state to a state of the specified class.
- [update(deltaTime:)](update%28deltatime_%29.md): Tells the current state object to perform per-frame updates.

# enterState: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Attempts to transition the state machine from its current state to a state of the specified class.

## Declaration

```objectivec
- (BOOL) enterState:(Class) stateClass;
```

## Parameters

- `stateClass`: The class of state into which to attempt a transition.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the transition was successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You build a state machine by creating a unique [GKState](../gkstate.md) subclass for each distinct state possible for the machine. The [isValidNextState:](../gkstate/isvalidnextstate%28__%29.md) method of each state object determines which other states a state machine is allowed to transition into from that state. Calling this method first tests whether a transition from the current state to the specified state is valid; if not, this method returns [false](https://developer.apple.com/documentation/swift/false).

If a transition is allowed, the state machine sends the [willExitWithNextState:](../gkstate/willexit%28to_%29.md) message to its current state object. Then, the new state object replaces the value of the [currentState](currentstate.md) property. Finally, the state machine sends the  [didEnterWithPreviousState:](../gkstate/didenter%28from_%29.md) message to the new current state object, and this method returns [true](https://developer.apple.com/documentation/swift/true).

A newly created state machine’s [currentState](currentstate.md) property is `nil`—to choose and enter an initial state, use the [enterState:](enter%28__%29.md) method. In this case, the [enterState:](enter%28__%29.md) call always succeeds.

## See Also

### Working with States

- [currentState](currentstate.md): The state machine’s current state.
- [canEnterState:](canenterstate%28__%29.md): Returns a Boolean value indicating whether it is valid for the state machine to transition from its current state to a state of the specified class.
- [stateForClass:](stateforclass_.md): Returns the state object in the state machine corresponding to the specified class.
- [updateWithDeltaTime:](update%28deltatime_%29.md): Tells the current state object to perform per-frame updates.
